/* Stroring keys */
const crypto = require('crypto');
const fs = require('fs');
crypto.generateKeyPair('rsa', {
  'modulusLength': 4096,
  'publicKeyEncoding': {
      'type': 'spki',
      'format': 'pem',
  },
  'privateKeyEncoding': {
      'type': 'pkcs8',
      'format': 'pem',
      'cipher': 'aes-256-cbc',
      'passphrase': 'passphrase'
  }
}, (err, publicKey, privateKey) => { 
 
 
fs.writeFileSync('public.pem',publicKey);
fs.writeFileSync('private.pem',privateKey)
 
 
})
/* till here */

/*

**This is for retriving stored keyss**


const crypto = require('crypto');
const fs = require('fs');
 
var privateKey = crypto.createPrivateKey({
  'key': fs.readFileSync('private.pem','utf-8'),
  'format': 'pem',
  'type': 'pkcs8',
  'cipher': 'aes-256-cbc',
  'passphrase': 'passphrase'
});
 
var publicKey = crypto.createPublicKey({
  'key':fs.readFileSync('public.pem','utf-8'),
  'type': 'spki',
  'format': 'pem'
})
 
console.log(privateKey);
console.log(publicKey);



*/


/*

**Complete Example***

const crypto = require('crypto');
const fs = require('fs');
 
var privateKey = crypto.createPrivateKey({
  'key': fs.readFileSync('private.pem','utf-8'),
  'format': 'pem',
  'type': 'pkcs8',
  'cipher': 'aes-256-cbc',
  'passphrase': 'passphrase'
});
 
var publicKey = crypto.createPublicKey({
  'key':fs.readFileSync('public.pem','utf-8'),
  'type': 'spki',
  'format': 'pem'
})
 
const data = "my secret data"
 
const encryptedData = crypto.publicEncrypt(
  {
    key: publicKey,
    padding: crypto.constants.RSA_PKCS1_OAEP_PADDING,
    oaepHash: "sha256",
  },
  // We convert the data string to a buffer using `Buffer.from`
  Buffer.from(data)
)
 
// The encrypted data is in the form of bytes, so we print it in base64 format
// so that it's displayed in a more readable form
console.log("encypted data: ", encryptedData.toString("base64"))
 
 
const decryptedData = crypto.privateDecrypt(
  {
    key: privateKey,
    // In order to decrypt the data, we need to specify the
    // same hashing function and padding scheme that we used to
    // encrypt the data in the previous step
    padding: crypto.constants.RSA_PKCS1_OAEP_PADDING,
    oaepHash: "sha256",
  },
  encryptedData
)
 
// The decrypted data is of the Buffer type, which we can convert to a
// string to reveal the original data
console.log("decrypted data: ", decryptedData.toString())



*/