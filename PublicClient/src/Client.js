const openid_client = require('openid-client');
const oauthOperations = require("./OAuthOperations.js");

function Client() {
    this._Client = new openid_client.Client({
        client_id: "0oa57ql8fwvxvYSfE5d7",
        redirect_uris: [
            'http://localhost:3000/login/callback'
        ],
        response_types: [
            'code'
        ],
    });

    this.client_id = this._Client.client_id;
    this.redirect_uris = this._Client.redirect_uris;
    this.response_types = Client.response_types;
    this.pkce = null;

    function initAuthzFlo() {
        this.pkce = oauthOperations.initPkce();
    }
};

function authorizationUrl(parameters) {
    return authorizationUrl(parameters);;
};

exports.module = Client;