import OAuth2API from './lib/OAuth2API';
import OAuth2Token from './lib/OAuth2Token';
import OAuth2SessionStore from './lib/OAuth2SessionStore';

function _onValidToken(callback) {
  OAuth2SessionStore.addValidTokenListener(callback);
}

function _onNoValidToken(callback) {
  OAuth2SessionStore.addNoValidTokenListener(callback);
}

module.exports = {
  OAuth2API: OAuth2API,
  OAuth2Token: OAuth2Token,
  onValidToken: _onValidToken,
  onNoValidToken: _onNoValidToken,
  initializeConfig: (client_id, client_secret, token_uri) => {
    OAuth2API.init(client_id, client_secret, token_uri);
  },
  initializeSession: (token) => {
    OAuth2SessionStore.initFromStorage(token);
  }
};