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
}

main();
