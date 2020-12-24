const Factory = artifacts.require("WindfallFactory.sol");

module.exports = async function (deployer, _network, addresses) {
  await deployer.deploy(Factory, addresses[0]);
  const factory = await Factory.deployed(); 

  // mainnet
  // let usdcAddress = "0xA0b86991c6218b36c1d19D4a2e9Eb0cE3606eB48";
  // let daiAddress = "0x6B175474E89094C44Da98b954EedeAC495271d0F";
  // let wethAddress = "0xC02aaA39b223FE8D0A0e5C4F27eAD9083C756Cc2";

  // ropsten
  let usdcAddress = "0x70cdfb73f78c51bf8a77b36c911d1f8c305d48e6";
  let daiAddress = "0x31f42841c2db5173425b5223809cf3a38fede360";
  let wethAddress = "0xc778417E063141139Fce010982780140Aa0cD5Ab";

  let pairAddress = await factory.createPair( usdcAddress, daiAddress )
  console.log('-- usdc-dai : ', pairAddress);

  pairAddress = await factory.createPair( wethAddress, daiAddress )
  console.log('-- weth-dai : ', pairAddress);
};
