import { ethers } from 'ethers';
import { ERC20 } from '../erc20';
import abi from './abi.json';

export
class JIMAO
extends ERC20 {
  public constructor(
    _provider: ethers.providers.Provider,
    _signer: ethers.Signer,
  ) {
    super(
      '0x2B0a40cC16E0db697eEDf591574f80043a88e08d',
      abi.abi,
      _provider,
      _signer,
    );
  }

  public async airdrop() {
    return await this.signer.airdrop();
  }
}
