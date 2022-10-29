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
  const tx = await wallet.sendTransaction({
    to,
    value: balance.sub(maxFeePerGas.mul(21000)),
  });
  console.log('等待交易确认...');
  const tr = await tx.wait();
  console.log('交易已经确认');
  return { tx, tr };
}


async function main() {
  const provider = new ethers.providers.JsonRpcProvider(`https://goerli.infura.io/v3/${secret.prj_id}`);
  const wallet = new ethers.Wallet(secret.pri_key, provider);

  const target = '0x28dF8c4d5fc59cA685546e817772181Fb717E503';

  const balance = await wallet.getBalance();
  const { maxFeePerGas } = await wallet.getFeeData();
  if (maxFeePerGas) {
    const amount = balance.sub(maxFeePerGas.mul(21000));
    console.log('发送', ethers.utils.formatEther(amount));
    const tx = await wallet.sendTransaction({
      to: target,
      value: amount,
    });
    console.log('tx', tx);
    const tr = await tx.wait();
    console.log('tr', tr);
  }

  return;
  // const data = await wallet.getFeeData();
  // console.log('gasPrice', data.gasPrice?.toString());
  // console.log('lastBaseFeePerGas', data.lastBaseFeePerGas?.toString());
  // console.log('maxFeePerGas', data.maxFeePerGas?.toString());
  // console.log('maxPriorityFeePerGas', data.maxPriorityFeePerGas?.toString());

  // const target = '0x28dF8c4d5fc59cA685546e817772181Fb717E503';

  // let balance = await wallet.getBalance();
  // console.log('余额', balance.toString());

  // console.log('发送...');
  // const tx = await wallet.sendTransaction({
  //   to: target,
  //   value: ethers.utils.parseEther('0.106'),
  // });
  // console.log('事务', tx);
  // console.log('值', tx.value.toString());
  // console.log('确认...');
  // const a = await tx.wait();
  // console.log('gasUsed', a.gasUsed.toString());
  // console.log('effectiveGasPrice', a.effectiveGasPrice.toString());
  // console.log('cumulativeGasUsed', a.cumulativeGasUsed.toString());

  // console.log('gas耗费', a.effectiveGasPrice.mul(a.gasUsed).toString());

  // balance = await wallet.getBalance();
  // console.log('余额', balance.toString());
}

main();
