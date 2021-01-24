require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'inner drop tail solution mansion creek stick mad hover entire olympic sight'; 
let testAccounts = [
"0x9069a6380174e4bc413320f76f52eacf8b4380626491a71f6ad28b460fbf0af8",
"0xb5f83cd7557230a2a363ca48f6682336d5970dab133c1520cf82b8d8d36ce4d1",
"0xc8182b702f5fff8b1fa49a761d53ea2a4a094a34f73fdb30b6e83879835f1316",
"0xe56535531d8d00e12d7f75db8523bfaa352da911037ef92dd65c1fbfd28aa884",
"0x336d3c6b2754da5e65d4a43d2fc2863870b47826e8e93c856543ef35eedeb7c1",
"0x1a403974141cf5f55c97cd57fd6e264916357e3f518699bea827850d6a3577d6",
"0x57cd2396ca3998944311a35abe63bc3b25a0a1a1d8458b05c6320a260e26de86",
"0x3a0c320734950e70667032041bf6678ffeaa101ec602d59da3c436c4aced2b8f",
"0xcfd016720242b98e716f8dd07b7edd289cf92c8d9650cc98506471955ab66761",
"0x35dbf5b456b15ca70e49d5077c5868382db842efca33617675457b8e9d85007e"
]; 
let devUri = 'http://127.0.0.1:7545/';

module.exports = {
    testAccounts,
    mnemonic,
    networks: {
        development: {
            uri: devUri,
            provider: () => new HDWalletProvider(
                mnemonic,
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
