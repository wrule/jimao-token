
import { ethers } from 'ethers';

type ContractConstructorParameters = ConstructorParameters<typeof ethers.Contract>;

export
class ERC20 {
  public constructor(...parameters: ContractConstructorParameters) {
    this.contract = new ethers.Contract(...parameters);
  }

  private contract!: ethers.Contract;

  public async name() {
    return await this.contract.name();
  }

  public async symbol() {
    return await this.contract.symbol();
  }
}
