pragma solidity >=0.5.0 <0.6.0;

contract HelloWeb3 {
     string greeting;

    function hello(string memory _greeting) public {
        greeting = _greeting;
    }

    function say() view public returns (string memory) {
        return greeting;
    }
}