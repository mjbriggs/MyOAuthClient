const oauthStructs = require('./OauthStructs.js');
const crypto = require('node:crypto');
var sha256 = crypto.createHash('sha256');

var sendAuthorizeRequest = function (authorizeRequest) { };
var parseAuthorizeResponse = function (authorizeResponse) { };
var sendTokenRequest = function (tokenRequest) { };
var parseTokenResponse = function (tokenResponse) { };

var initPkce = function () {
    let pkce = new oauthStructs.pkce();
    pkce.code_verifier = crypto.randomBytes(43).toString('base64url'); 

    sha256.update(pkce.code_verifier);
    pkce.code_challenge = sha256.digest('base64url');

    return pkce;
};
var parseOAuthError = function (oauth2ErrorResponse) { };

module.exports.sendAuthorizeRequest = sendAuthorizeRequest;
module.exports.parseAuthorizeResponse = parseAuthorizeResponse;
module.exports.sendTokenRequest = sendTokenRequest;
module.exports.parseTokenResponse = parseTokenResponse;
module.exports.initPkce = initPkce;
module.exports.parseOAuthError = parseOAuthError;