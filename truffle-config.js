require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'grid arch outer sugar warrior ridge remind horse hunt beauty fresh special'; 
let testAccounts = [
"0xac836c03ce59916f5ee37ea46fe3b1f017b996d3bf77ebf1a56f4355bc0711e8",
"0x15d479d763a5498f5c6f0e9b502fcd6ef4c8b7d5ba47cbe142e1c4c96ddcf0d0",
"0xf64893a6679272328c5358b768f3a4bcf850dd4a1684f78305a295e40e9755d2",
"0x1fb4489fce87dcba68a24eae79ad0abae8655aa02982ce685ec6767bcb4992d2",
"0xd07a78058f36f78fe8ace28a7faf38e276bc10b72ca8e3a4e531a2bfc5f6c4e1",
"0x007d38767387780e2d60fd86a89720deef9a9577011f3937e78ac463ea7bc56d",
"0x355996974484ef643983e6e57c2f4f370962dd4c78bfd09304564f3a44abd96f",
"0xcdcca9cb0968eea4157876058020c7dc58fc8049f282cf12a969927b49d9bb6e",
"0xac2ade6b16bc3678ca8d6be8715c625eacb33899baae79be70090277669da88e",
"0xd3acd477b648c969f8be92f3298663bdc6d65d141771272f4ba89d97c59c0afd"
]; 
let devUri = 'http://127.0.0.1:7545/';

module.exports = {
    networks: {
        development: {
            uri: devUri,
            provider: () => new HDWalletProvider(
                testAccounts,
                devUri, // provider url
                0, // address index
                10, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            network_id: '*'
        }
    },
    compilers: {
        solc: {
            version: '^0.5.11'
        }
    }
};
