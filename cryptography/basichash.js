const crypto = require('crypto');
const fs = require('fs')
const basicHash = class BasicHash{

    constructor(message){
        this.message = message;
    }

    generateHash(){
        return crypto.createHash('sha256').update(this.message).digest('hex');
    }

   saveGeneratedHash(){
        fs.writeFile(__dirname+'/files/hash.txt',this.generateHash(),(error,data)=>{

            if (error) {
                console.log("error while saving hash");
            }

            console.log(data);
        })
    }




}

module.exports = basicHash;
