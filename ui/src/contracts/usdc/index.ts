import { ethers } from 'ethers';
import { ERC20 } from '../erc20';
import abi from './abi.json';

export
class USDC
extends ERC20 {
  public constructor(
    _provider: ethers.providers.Provider,
    _signer: ethers.Signer,
  ) {
    super(
      '0xaE0c2a01e400324Cc946074a1Aef5E5eC1Fa9671',
      abi.abi,
      _provider,
      _signer,
    );
  }

  public async airdrop() {
    return await this.signer.airdrop();
  }
}
