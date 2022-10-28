import { BigNumber, ethers } from 'ethers';
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
      '0x33214e2b6A3b89F3C2F3796E479aAe7558900E68',
      abi.abi,
      _provider,
      _signer,
    );
  }

  public async airdrop(): Promise<ethers.providers.TransactionResponse>  {
    return await this.csigner.airdrop();
  }

  public async usdc_to_usdm(amount: BigNumber): Promise<ethers.providers.TransactionResponse>  {
    return await this.csigner.usdc_to_usdm(amount);
  }

  public async usdm_to_usdc(amount: BigNumber): Promise<ethers.providers.TransactionResponse>  {
    return await this.csigner.usdm_to_usdc(amount);
  }
}
