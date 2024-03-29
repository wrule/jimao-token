import { BigNumber, ethers } from 'ethers';
import { JIMAO } from './contracts/jimao';
const secret = require('../.secret.json');

async function send_eth_to_address(
  wallet: ethers.Wallet,
  to: string,
  amount?: ethers.BigNumber,
) {
  console.log('获取gas价格...');
  const [balance, { maxFeePerGas }] = await Promise.all([
    amount || wallet.getBalance(),
    wallet.getFeeData(),
  ]);
  if (!maxFeePerGas) throw '无法获取gas价格';
  console.log('发送交易...');
  const send_amount = balance.sub(maxFeePerGas.mul(21000));
  console.log({ from: wallet.address, to, value: ethers.utils.formatEther(send_amount).toString() });
  const tx = await wallet.sendTransaction({ to, value: send_amount });
  console.log('等待交易确认...');
  const tr = await tx.wait();
  console.log('交易已经确认');
  return { tx, tr };
}

async function wash_eth(
  wallet: ethers.Wallet,
  to: string,
  hop_count: number,
  amount?: ethers.BigNumber,
) {
  let current_wallet = wallet;
  let current_amount = amount;
  for (let i = 0; i < hop_count; ++i) {
    const random_wallet = ethers.Wallet.createRandom();
    console.log({
      hop_index: i + 1,
      address: random_wallet.address,
      private_key: random_wallet.privateKey,
    });
    const { tx } = await send_eth_to_address(current_wallet, random_wallet.address, current_amount);
    current_wallet = random_wallet.connect(current_wallet.provider);
    current_amount = tx.value;
  }
  return await send_eth_to_address(current_wallet, to, current_amount);
}

async function main() {
  const provider = new ethers.providers.JsonRpcProvider(`https://goerli.infura.io/v3/${secret.prj_id}`);
  const wallet = new ethers.Wallet(secret.pri_key, provider);
  const target = '0x28dF8c4d5fc59cA685546e817772181Fb717E503';
  await wash_eth(wallet, target, 5);
}

main();
