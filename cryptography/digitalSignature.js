//This example use same approach for generating public and private keys as like asymmentric encryption

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
 
// Create some sample data that we want to sign
const verifiableData = "this need to be verified"
 
// The signature method takes the data we want to sign, the
// hashing algorithm, and the padding scheme, and generates
// a signature in the form of bytes
const signature = crypto.sign("sha256", Buffer.from(verifiableData), {
  key: privateKey,
  padding: crypto.constants.RSA_PKCS1_PSS_PADDING,
})
 
console.log(signature.toString("base64"))
 
// To verify the data, we provide the same hashing algorithm and
// padding scheme we provided to generate the signature, along
// with the signature itself, the data that we want to
// verify against the signature, and the public key
const isVerified = crypto.verify(
  "sha256",
  Buffer.from(verifiableData),
  {
    key: publicKey,
    padding: crypto.constants.RSA_PKCS1_PSS_PADDING,
  },
  signature
)
 
// isVerified should be `true` if the signature is valid
console.log("signature verified: ", isVerified)
