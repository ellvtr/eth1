// https://medium.com/@k3no/ethereum-tokens-smart-contracts-3346b62d2a0
// FILE: compileDeploy.js
const cl = console.log;

console.log('Setting up...');
const fs = require ('fs');
const solc = require ('solc');
const Web3 = require ('web3');

const web3 = new Web3(new Web3.providers.HttpProvider("http://localhost:8545"));
console.log('Reading Contract...');
// const input = fs.readFileSync('Foo.sol');
const input = fs.readFileSync('HelloWorldContract.sol');

console.log('Compiling Contract...');
const output = solc.compile(input.toString(), 1);
cl('output', output);

const bytecode = output.contracts[':HelloWorldContract'].bytecode;
const abi = output.contracts[':HelloWorldContract'].interface;
cl('bytecode, abi',bytecode, abi);
//Contract Object
const helloWorldContract = web3.eth.contract(JSON.parse(abi));
cl('helloWorldContract',helloWorldContract);

// console.log('unlocking Coinbase account');
// const password = "yourPassword";
// try {
//   web3.personal.unlockAccount(web3.eth.coinbase, password);
// } catch(e) {
//   console.log(e);
//   return;
// }

console.log("Deploying the contract");
const helloWorldContractInstance = helloWorldContract.new({
    data: '0x' + bytecode,
    // from: web3,
    // from: web3.eth.coinbase,
    // from: '0xb0141b0d3f20e493a12dd8c88b4b9f2f244e1afb',
    from: web3.eth.accounts[0],
    gas: 1000000
}, (err, res) => {
    if (err) {
        console.log(err);
        return;
    }
    console.log(res.transactionHash);
    // If we have an address property, the contract was deployed
    if (res.address) {
        console.log('Contract address: ' + res.address);
    }
});
