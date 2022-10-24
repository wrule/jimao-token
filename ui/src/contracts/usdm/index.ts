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
      '0xC9120aE102660b1Ec392Db9C4D293dADC89a47C1',
      abi.abi,
      _provider,
      _signer,
    );
  }

  public async airdrop() {
    return await this.signer.airdrop();
  }
}
