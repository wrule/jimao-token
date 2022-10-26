// SPDX-License-Identifier: MIT
pragma solidity >=0.4.22 <0.9.0;

import "@openzeppelin/contracts/token/ERC20/ERC20.sol";

contract USDC is ERC20 {
  constructor()
  ERC20("USDC", "USDC") {
    _mint(address(this), total_supply);
  }

  uint private constant total_supply =  1e18 * 1e18;
  uint private constant airdrop_amount = 1e18 * 100;

  function airdrop()
  public {
    require(balanceOf(address(this)) >= airdrop_amount, "error");
    this.transfer(msg.sender, airdrop_amount);
  }
}
