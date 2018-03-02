var Ownable = artifacts.require("./zeppelin/ownership/Ownable.sol");
var ConsentGdpr = artifacts.require("./ConsentGdpr.sol");

module.exports = function(deployer) {
  deployer.link(Ownable, ConsentGdpr)
  deployer.deploy(ConsentGdpr);
};