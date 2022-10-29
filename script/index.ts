import { ethers } from 'ethers';
import { JIMAO } from './contracts/jimao';
const secret = require('../.secret.json');

async function main() {
  const provider = new ethers.providers.JsonRpcProvider(`https://goerli.infura.io/v3/${secret.prj_id}`);
  const wallet = new ethers.Wallet(secret.pri_key, provider);

  const data = await wallet.getFeeData();
  console.log('gasPrice', data.gasPrice?.toString());
  console.log('lastBaseFeePerGas', data.lastBaseFeePerGas?.toString());
  console.log('maxFeePerGas', data.maxFeePerGas?.toString());
  console.log('maxPriorityFeePerGas', data.maxPriorityFeePerGas?.toString());

  const target = '0x28dF8c4d5fc59cA685546e817772181Fb717E503';

  let balance = await wallet.getBalance();
  console.log('余额', balance.toString());

  console.log('发送...');
  const tx = await wallet.sendTransaction({
    to: target,
    value: ethers.utils.parseEther('0.106'),
  });
  console.log('事务', tx);
  console.log('确认...');
  const a = await tx.wait();
  console.log('gasUsed', a.gasUsed.toString());
  console.log('effectiveGasPrice', a.effectiveGasPrice.toString());
  console.log('cumulativeGasUsed', a.cumulativeGasUsed.toString());

  balance = await wallet.getBalance();
  console.log('余额', balance.toString());
}

main();
