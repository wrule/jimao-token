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
      '0xb8F168AbE0EfC31A756C9A1470544Dfd1d37C231',
      abi.abi,
      _provider,
      _signer,
    );
  }

  public async airdrop() {
    return await this.signer.airdrop();
  }

  public async usdc_to_usdm(amount: BigNumber) {
    return await this.signer.usdc_to_usdm(amount);
  }

  public async usdm_to_usdc(amount: BigNumber) {
    return await this.signer.usdm_to_usdc(amount);
  }
}
