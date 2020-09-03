const fs = require('fs')
const util = require('util');
const readFile = util.promisify(fs.readFile);
const checker = class Checker{
   static async checkBasicHash(toBeChecked){

        var ok = await readFile('./cryptography/storage/hash.txt','utf-8')
        return ok === toBeChecked;

    }
    static async checkHmacHash(toBeChecked){

        var ok = await readFile('./cryptography/storage/hmac.txt','utf-8')
        return ok === toBeChecked;

    }


}

module.exports =checker;