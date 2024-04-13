const HDWalletProvider = require('@truffle/hdwallet-provider');
const fs = require('fs');
const mnemonic = fs.readFileSync(".secret").toString().trim();

module.exports = {

                                      //TESTNETS

  networks: {
    development: {
      host: "127.0.0.1",     // Localhost (default: none)
      port: 8545,            // Standard BSC port (default: none)
      network_id: "*",       // Any network (default: none)
    },

     testnet: {
      provider: () => new HDWalletProvider(mnemonic, `https://data-seed-prebsc-1-s1.bnbchain.org:8545`),
      network_id: 97,
      confirmations: 2,
      timeoutBlocks: 200,
      skipDryRun: true
    },

    sepolia: {
      provider: () => new HDWalletProvider(mnemonic, "https://sepolia.infura.io/v3/606a1ed6b02144718fcf1d85b25e803f"),
      network_id: 11155111,
      confirmations: 2,
      timeoutBlocks: 200,
      skipDryRun: true
    },

    'base-sepolia': {
      provider: function () {
        return new HDWalletProvider(mnemonic, 'https://sepolia.base.org');
      },
      network_id: 84532,
      confirmations: 1,
      timeoutBlocks: 200,
      skipDryRun: true
    },

                                     //MAINNET NETWORKS

    bsc: {
      provider: () => new HDWalletProvider(mnemonic, `https://bsc-dataseed1.bnbchain.org`),
      network_id: 56,
      confirmations: 2,
      timeoutBlocks: 200,
      skipDryRun: true
    },

    'base-mainnet': {
      provider: function () {
        return new HDWalletProvider(mnemonic, 'https://mainnet.base.org');
      },
      network_id: 8453,
      confirmations: 1,
      timeoutBlocks: 200,
      skipDryRun: true
    },

    mainnet: {
      provider: () => new HDWalletProvider(mnemonic, "https://mainnet.infura.io/v3/606a1ed6b02144718fcf1d85b25e803f"),
      network_id: 1,
      confirmations:2,
      timeoutBlocks: 200,
      skipDryRun: true
    },
  },

  // Set default mocha options here, use special reporters etc.
  mocha: {
    // timeout: 100000
  },

  // Configure your compilers
  compilers: {
    solc: {
      version: "0.8.0", // A version or constraint - Ex. "^0.5.0"
    }
  }
}
