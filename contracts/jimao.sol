// SPDX-License-Identifier: MIT
pragma solidity >=0.4.22 <0.9.0;

import "@openzeppelin/contracts/token/ERC20/ERC20.sol";
import "@openzeppelin/contracts/token/ERC20/IERC20.sol";

contract JIMAO is ERC20 {
  constructor()
  ERC20("zkSync Jimao coin", "JIMAO") {
    _mint(address(this), 1e18 * 1e18);
  }

  IERC20 private constant USDC = IERC20(address(0xaE0c2a01e400324Cc946074a1Aef5E5eC1Fa9671));
  IERC20 private constant USDM = IERC20(address(0xC9120aE102660b1Ec392Db9C4D293dADC89a47C1));

  function airdrop()
  public {
    this.transfer(msg.sender, 1e18 * 100);
  }

  function airdrop_usdc()
  public {
    USDC.transfer(msg.sender, 1e18 * 50);
  }

  function usdc_to_usdm(uint amount)
  public {
    require(USDC.allowance(msg.sender, address(this)) >= amount, "error");
    require(USDC.transferFrom(msg.sender, address(this), amount), "error");
    USDM.transfer(msg.sender, amount);
  }

  function usdm_to_usdc(uint amount)
  public {
    require(USDM.allowance(msg.sender, address(this)) >= amount, "error");
    require(USDM.transferFrom(msg.sender, address(this), amount), "error");
    USDC.transfer(msg.sender, amount);
  }
}
