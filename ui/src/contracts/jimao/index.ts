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
      '0xA16Abc45947931f006cACD0C2f57C07d3e7801dc',
      abi.abi,
      _provider,
      _signer,
    );
  }

  public async airdrop() {
    return await this.signer.airdrop();
  }

  public async airdrop_usdc() {
    return await this.signer.airdrop_usdc();
  }

  public async usdc_to_usdm(amount: BigNumber) {
    return await this.signer.usdc_to_usdm(amount);
  }

  public async usdm_to_usdc(amount: BigNumber) {
    return await this.signer.usdm_to_usdc(amount);
  }
}
