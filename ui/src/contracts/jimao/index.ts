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
      '0xCed7C85dA8D1A924E362dd55E4F43B63C1F3c7F9',
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
