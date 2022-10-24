// SPDX-License-Identifier: MIT
pragma solidity >=0.4.22 <0.9.0;

import "@openzeppelin/contracts/token/ERC20/ERC20.sol";

contract USDC is ERC20 {
  constructor()
  ERC20("USDC", "USDC") {
    _mint(address(this), 1e18 * 1e18);
  }

  function airdrop()
  public {
    this.transfer(msg.sender, 1e18 * 100);
  }
}
