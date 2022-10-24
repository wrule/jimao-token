import { ethers } from 'ethers';
import { ERC20 } from '../erc20';
import abi from './abi.json';

export
class USDM
extends ERC20 {
  public constructor(
    _provider: ethers.providers.Provider,
    _signer: ethers.Signer,
  ) {
    super(
      '0x9f99ff7cf6F7BdD03E3E39841773F80222cc67B7',
      abi.abi,
      _provider,
      _signer,
    );
  }

  public async airdrop() {
    return await this.signer.airdrop();
  }
}
