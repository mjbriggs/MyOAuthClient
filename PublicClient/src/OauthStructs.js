function authorizeRequest() {
    this.response_type = "";
    this.client_id = "";
    this.redirect_uri = "";
    this.state = "";
    this.code_challenge = "";
};

function authorizeResponse() {
    this.code = "";
    this.state = "";
};

function tokenRequest() {
    this.grant_type = "";
    this.code = "";
    this.redirect_uri = "";
    this.client_id = "";
    this.code_verifier = "";
};

function tokenResponse() {
    this.access_token = "";
    this.token_type = "";
    this.expires_in = "";
};

function pkce() {
    this.code_challenge = "";
    this.code_verifier = "";
};

function oauth2ErrorResponse() {
    this.error = "";
    this.error_description = "";
    this.error_uri = "";
};

module.exports.authorizeRequest = authorizeRequest;
module.exports.authorizeResponse = authorizeResponse;
module.exports.tokenRequest = tokenRequest;
module.exports.tokenResponse = tokenResponse;
module.exports.pkce = pkce;
module.exports.oauth2ErrorResponse = oauth2ErrorResponse;