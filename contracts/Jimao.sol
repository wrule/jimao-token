// SPDX-License-Identifier: MIT
pragma solidity >=0.4.22 <0.9.0;

import "@openzeppelin/contracts/token/ERC20/ERC20.sol";

contract Jimao is ERC20 {
  constructor()
  ERC20("JimaoToken", "JIMAO") {
    _mint(msg.sender, 21000000 * (10^decimals()));
  }
}
