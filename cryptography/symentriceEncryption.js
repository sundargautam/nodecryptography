const crypto = require('crypto');
const algorithm = 'aes-192-cbc';
const password = 'Password used to generate key'; //here you can use your own secret key

// Use the async `crypto.scrypt()` instead.
//generating key
const key = crypto.scryptSync(password, 'salt', 24); //synchronous
// Use `crypto.randomBytes` to generate a random iv instead of the static iv
// shown here.
/*



*/

const iv = Buffer.alloc(16, 0); // Initialization vector.

const cipher = crypto.createCipheriv(algorithm, key, iv);

let encrypted = cipher.update('some clear text data', 'utf8', 'hex');
encrypted += cipher.final('hex');
console.log(encrypted);

const decipher = crypto.createDecipheriv(algorithm, key, iv);
let decrypted = decipher.update(encrypted, 'hex', 'utf8');
decrypted += decipher.final('utf8');
console.log(decrypted);


//Use can use async method for generating keys too
//Remove /* */ to use asynchrono
/*


const crypto = require('crypto');
const algorithm = 'aes-192-cbc';
const password = 'Password used to generate key';
const key = crypto.scrypt(password, 'salt', 24,(err,derivedKey)=>{
  const iv = Buffer.alloc(16, 0); 

  //you can store iv as json and later use it :

  const decipher = crypto.createDecipheriv(algorithm, derivedKey, iv);
  const encrypted =
  'e5f79c5915c02171eec6b212d5520d44480993d7d622a7c4c2da32f6efda0ffa';
let decrypted = decipher.update(encrypted, 'hex', 'utf8');
decrypted += decipher.final('utf8');
console.log(decrypted);
});


*/