const crypto = require('crypto');
const fs = require('fs')
const hmacHash = class HmacHash{

    
    constructor(message){
        this.message = message;
        this.secret = 'secret123' //need to made avilable from secure medium
    }

    generateHash(){
        return crypto.createHmac('sha256',this.secret).update(this.message).digest('hex');
    }

   saveGeneratedHash(){
        fs.writeFile(__dirname+'/storage/hmac.txt',this.generateHash(),(error)=>{

            if (error) {
                console.log("error while saving hmacHash");
            }
        })
    }




}

module.exports = hmacHash;
