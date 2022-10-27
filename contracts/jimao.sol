// SPDX-License-Identifier: MIT
pragma solidity >=0.4.22 <0.9.0;

import "@openzeppelin/contracts/token/ERC20/ERC20.sol";
import "@openzeppelin/contracts/token/ERC20/IERC20.sol";

contract JIMAO is ERC20 {
  constructor()
  ERC20("zkSync Jimao coin", "JIMAO") {
    _mint(address(this), total_supply);
  }

  uint private constant total_supply =  1e18 * 1e18;
  uint private constant airdrop_amount = 1e18 * 100;
  IERC20 private constant USDC = IERC20(address(0x9a1e4249F4694387E168bfA187D8D2b15700731a));
  IERC20 private constant USDM = IERC20(address(0x6ADB27b8A145E9ce199991801BDe26760475144E));

  function airdrop()
  public {
    require(this.balanceOf(address(this)) >= airdrop_amount, "error");
    this.transfer(msg.sender, airdrop_amount);
  }

  function usdc_to_usdm(uint amount)
  public {
    require(USDC.allowance(msg.sender, address(this)) >= amount, "error");
    require(USDC.transferFrom(msg.sender, address(this), amount), "error");
    require(USDM.transfer(msg.sender, amount), "error");
  }

  function usdm_to_usdc(uint amount)
  public {
    require(USDM.allowance(msg.sender, address(this)) >= amount, "error");
    require(USDM.transferFrom(msg.sender, address(this), amount), "error");
    require(USDC.transfer(msg.sender, amount), "error");
  }
}
