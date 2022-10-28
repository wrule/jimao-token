import { ethers } from 'ethers';
import { JIMAO } from './contracts/jimao';
const secret = require('../.secret.json');

async function main() {
  const provider = new ethers.providers.JsonRpcProvider(`https://goerli.infura.io/v3/${secret.prj_id}`);
  const balance = await provider.getBalance('0x28dF8c4d5fc59cA685546e817772181Fb717E503');
  console.log(ethers.utils.formatEther(balance));
  const jimao = new JIMAO(provider, provider.getSigner());
  const b = await jimao.balanceOf('0x28dF8c4d5fc59cA685546e817772181Fb717E503');
  console.log(ethers.utils.formatEther(b));
}

main();
