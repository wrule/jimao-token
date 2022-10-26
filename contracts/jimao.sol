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
  IERC20 private constant USDC = IERC20(address(0x0B179A4C1E9AC77FD20731763491983eCD365E97));
  IERC20 private constant USDM = IERC20(address(0x666a45d0aAC23a1A486cFBa50F41384793C7588E));

  function airdrop()
  public {
    require(balanceOf(address(this)) >= airdrop_amount, "error");
    transfer(msg.sender, airdrop_amount);
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
