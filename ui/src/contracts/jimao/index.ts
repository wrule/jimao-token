import { ethers } from 'ethers';
import { ERC20 } from '../erc20';
import abi from './abi.json';

declare const ethereum: ethers.providers.ExternalProvider;
const provider = new ethers.providers.Web3Provider(ethereum);

export
class JIMAO
extends ERC20 {
  public constructor() {
    super(
      '0x9f99ff7cf6F7BdD03E3E39841773F80222cc67B7',
      abi.abi,
      provider,
    );
  }
}
