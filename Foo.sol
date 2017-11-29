// http://remix.ethereum.org/#version=soljson-v0.4.16+commit.d7661dd9.js

pragma solidity ^0.4.16;

contract Foo {
  bytes32 foo;
  
  function setFoo(bytes32 _foo){
      foo = _foo;
  }
  
  function getFoo() constant returns (bytes32) {
      return foo;
  }
  
}