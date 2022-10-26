const USDM = artifacts.require('USDM');

module.exports = (deployer) => {
  deployer.deploy(USDM);
};
