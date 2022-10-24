import { Contract } from '../';

type ContractConstructorParameters = ConstructorParameters<typeof Contract>;

export
class ERC20
extends Contract {
  public constructor(...parameters: ContractConstructorParameters) {
    super(...parameters);
  }

  public async name() {
    return await this.provider.name();
  }

  public async symbol() {
    return await this.provider.symbol();
  }
}
