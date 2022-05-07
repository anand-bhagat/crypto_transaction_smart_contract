
require('@nomiclabs/hardhat-waffle');

module.exports = {
    solidity : '0.8.0',
    networks: {
        ropsten: {
            url: 'https://eth-ropsten.alchemyapi.io/v2/wWbhJ4hrX_Tjd5Sqed2tyzJd4xznP5iE',
            accounts: [
                '2080dc7d997aa61be1a36d5b196450f86401ac3cb05e12877150ab7314b59189'
            ]
        }
    }
}