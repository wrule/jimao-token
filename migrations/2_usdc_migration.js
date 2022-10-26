const USDC = artifacts.require('USDC');

module.exports = (deployer) => {
  deployer.deploy(USDC);
};
