import { ethers } from 'ethers';
import { JIMAO } from './contracts/jimao';
const secret = require('../.secret.json');

async function main() {
  const provider = new ethers.providers.JsonRpcProvider(`https://goerli.infura.io/v3/${secret.prj_id}`);
  const wallet = new ethers.Wallet(secret.pri_key, provider);
  const jimao = new JIMAO(wallet.provider, wallet);
  // const balance = await jimao.balanceOf('0x28dF8c4d5fc59cA685546e817772181Fb717E503');
  // console.log(ethers.utils.formatEther(balance));

  // console.log('发送交易');
  // const tx = await jimao.airdrop();
  // console.log('等待确认');
  // await tx.wait();
  // console.log('查询余额');
  // const balance = await jimao.balanceOf(wallet.address);
  // console.log(balance.toString());

  // while (true) {

  const data = await wallet.getFeeData();
  console.log('gasPrice', data.gasPrice?.toString());
  console.log('lastBaseFeePerGas', data.lastBaseFeePerGas?.toString());
  console.log('maxFeePerGas', data.maxFeePerGas?.toString());
  console.log('maxPriorityFeePerGas', data.maxPriorityFeePerGas?.toString());

  // return;

  const target = '0x28dF8c4d5fc59cA685546e817772181Fb717E503';

  let balance = await wallet.getBalance();
  console.log('余额', balance.toString());

  console.log('发送...');
  const tx = await wallet.sendTransaction({
    to: target,
    value: ethers.utils.parseEther('0.106'),
  });
  console.log('确认...');
  await tx.wait();
  console.log('完成', tx.hash);
  console.log(tx);
  console.log('value', tx.value.toString());
  console.log('gasLimit', tx.gasLimit.toString());
  console.log('maxFeePerGas', tx.maxFeePerGas?.toString());
  console.log('maxPriorityFeePerGas', tx.maxPriorityFeePerGas?.toString());

  balance = await wallet.getBalance();
  console.log('余额', balance.toString());


  // }

  // while (true) {
  //   const rwallet = ethers.Wallet.createRandom();
  //   console.log(rwallet.address, rwallet.privateKey);
  // }
}

main();
