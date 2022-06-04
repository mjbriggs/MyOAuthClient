const oauthOperations = require("./OAuthOperations.js");

var val = oauthOperations.initPkce();
console.log(val.code_verifier);
console.log(val.code_challenge);