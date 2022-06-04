const oauthStructs = require('./OauthStructs.js');
const openid_client = require('openid-client');
const crypto = require('node:crypto');

var sendAuthorizeRequest = function (client, authorizeRequest) { 
    client.authorizationUrl({
        code_challenge: authorizeRequest.code_challenge,
    });
};
var parseAuthorizeResponse = function (client, authorizeResponse) { };
var sendTokenRequest = function (client, tokenRequest) { };
var parseTokenResponse = function (client, tokenResponse) { };

function mkCodeVerifier() {
    return openid_client.generators.codeVerifier();
};

function mkCodeChallenge(code_verifier) {
    return openid_client.generators.codeChallenge(code_verifier);
}

var initPkce = function () {
    let pkce = new oauthStructs.pkce();
    pkce.code_verifier = mkCodeVerifier();
    pkce.code_challenge = mkCodeChallenge(pkce.code_challenge);
    return pkce;
};
var parseOAuthError = function (oauth2ErrorResponse) { };

module.exports.sendAuthorizeRequest = sendAuthorizeRequest;
module.exports.parseAuthorizeResponse = parseAuthorizeResponse;
module.exports.sendTokenRequest = sendTokenRequest;
module.exports.parseTokenResponse = parseTokenResponse;
module.exports.initPkce = initPkce;
module.exports.parseOAuthError = parseOAuthError;