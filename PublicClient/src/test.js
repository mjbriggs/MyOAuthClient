const oauthOperations = require("./OAuthOperations.js");

const crypto = require('node:crypto');
var sha256 = crypto.createHash('sha256');

var val = oauthOperations.initPkce();
console.log(val.code_verifier);
console.log(val.code_verifier.toString().length);
console.log(val.code_challenge);





//BASE64URL-ENCODE(SHA256(ASCII(code_verifier))) == code_challenge