
import { ethers } from 'ethers';

type ContractConstructorParameters = ConstructorParameters<typeof ethers.Contract>;

export
class Contract {
  public constructor(
    private readonly _addressOrName: ContractConstructorParameters[0],
    private readonly _contractInterface: ContractConstructorParameters[1],
    private readonly _provider: ethers.providers.Provider,
    private readonly _signer: ethers.Signer,
  ) { }

  public get addressOrName() {
    return this._addressOrName;
  }

  public get contractInterface() {
    return this._contractInterface;
  }

  public get provider() {
    return new ethers.Contract(this.addressOrName, this.contractInterface, this._provider);
  }

  public get signer() {
    return new ethers.Contract(this.addressOrName, this.contractInterface, this._signer);
  }
}
