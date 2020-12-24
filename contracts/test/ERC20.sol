pragma solidity =0.5.16;

import '../WindfallERC20.sol';

contract ERC20 is WindfallERC20 {
    constructor(uint _totalSupply) public {
        _mint(msg.sender, _totalSupply);
    }
}
