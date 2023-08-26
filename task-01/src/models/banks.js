var fs = require('fs')

function banks() {}

banks.prototype.getLastBanks = function(callback) {
    fs.readFile('./data/bancos.json', 'utf8', (err, result) => {
        if (err) {
            return callback(err, [])
        }

        try {
            const obj = JSON.parse(result)
            const banks = obj.bancos.slice()

            callback(null, banks)
        } catch (jsonErr) {
            callback(jsonErr, [])
        }
    })
}

module.exports = function() {
    return banks;
}