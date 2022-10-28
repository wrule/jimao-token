import { BigNumber } from 'ethers';
import { Contract } from '../';

type ContractConstructorParameters = ConstructorParameters<typeof Contract>;

export
class ERC20
extends Contract {
  public constructor(...parameters: ContractConstructorParameters) {
    super(...parameters);
  }

  public async name() {
    return await this.cprovider.name();
  }

  public async symbol() {
    return await this.cprovider.symbol();
  }

  public async approve(address: string, amount: BigNumber) {
    return await this.csigner.approve(address, amount);
  }

  public async balanceOf(address: string): Promise<BigNumber> {
    return await this.cprovider.balanceOf(address);
  }

  public async decimals(): Promise<number> {
    return await this.cprovider.decimals();
  }
}
