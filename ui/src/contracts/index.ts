
import { ethers } from 'ethers';

type ContractConstructorParameters = ConstructorParameters<typeof ethers.Contract>;

export
class Contract {
  public constructor(
    protected readonly addressOrName: ContractConstructorParameters[0],
    protected readonly contractInterface: ContractConstructorParameters[1],
    protected readonly _provider: ethers.providers.Provider,
    protected readonly _signer: ethers.Signer,
  ) { }

  protected get provider() {
    return new ethers.Contract(this.addressOrName, this.contractInterface, this._provider);
  }

  protected get signer() {
    return new ethers.Contract(this.addressOrName, this.contractInterface, this._signer);
  }
}
