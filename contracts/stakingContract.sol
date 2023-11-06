// SPDX-License-Identifier: MIT
pragma solidity ^0.8.2;

contract stakingToken{

    mapping(address=> uint) public balanceOf;
    string public tokenName;
    string public tokenSymbol;
    uint public totalSupply;

    constructor(){
        tokenName = "bile";
        tokenSymbol = "B";
    }

    function mint (address _to, uint _amount) public {
        balanceOf[_to] += _amount;
        totalSupply += _amount;
    }

    function tranfer (address _to, uint _amount) public {
        balanceOf[_to] += _amount;
        totalSupply += _amount;
    }

}




