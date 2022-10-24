
import { ethers } from 'ethers';

type ContractConstructorParameters = ConstructorParameters<typeof ethers.Contract>;

export
class Contract {
  public constructor(
    protected readonly addressOrName: ContractConstructorParameters[0],
    protected readonly contractInterface: ContractConstructorParameters[1],
    protected readonly provider: ethers.providers.Provider,
    protected readonly signer: ethers.Signer,
  ) { }
}
