const checker = require('./cryptography/checker/check')
const basicHash = require('./cryptography/basichash');
const hmacHash = require('./cryptography/hmachash')

checker.checkHmacHash(new hmacHash('sundar').generateHash()).then((data)=>{

console.log(data);
}).catch((e)=>console.log(e))


/*

checking hash
 */
checker.checkBasicHash(new basicHash('sundar').generateHash()).then((data)=>console.log(data)).catch((e)=>{

    console.log("err");
})

//till here