var windfallPair = require('./build/WindfallPair.json');
var solidity = require('@ethersproject/solidity');

var INIT_CODE_HASH = solidity.keccak256(['bytes'], [`${windfallPair.bytecode}`]);
console.log('-- INIT_CODE_HASH : ', INIT_CODE_HASH)