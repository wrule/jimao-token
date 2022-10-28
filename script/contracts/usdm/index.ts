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
      '0x6ADB27b8A145E9ce199991801BDe26760475144E',
      abi.abi,
      _provider,
      _signer,
    );
  }

  public async airdrop(): Promise<ethers.providers.TransactionResponse>  {
    return await this.csigner.airdrop();
  }
}
