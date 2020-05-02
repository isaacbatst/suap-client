const handleToken = require('./classes/tokenHandler');
const handleUrl = require('./classes/urlHandler');

const API = require('./api');

const URLS = require('./constants/urls');

module.exports = ({ clientID, redirectURI }) => {

  const responseType = 'token';
  const grantType = 'authorization-code';

  const token = handleToken(handleUrl.getUrlParams());

  const getToken = function () {
    return token;
  };

  const getDataJSON = function () {
    return dataJSON;
  };

  const getRedirectURI = function () {
    return redirectURI;
  };

  const isAuthenticated = function () {
    return token.isValid();
  };

  const getLoginURL = function () {
    const url = `${URLS.BASE}${URLS.AUTHORIZATION}`;
    const queryParams = `response_type=${responseType}&grant_type=${grantType}&client_id=${clientID}&redirect_uri=${redirectURI}`;

    return `${url}?${queryParams}`;
  };

  const getRegistrationURL = function () {
    const url = `${URLS.BASE}${URLS.REGISTER}`
    const queryParams = `redirect_uri=${redirectURI}`;

    return `${url}?${queryParams}`;
  };

  const getResources = function (scope) {
    return API.requestResources(token.getToken());
  };

  const login = function () {
    window.location = getLoginURL();
  };

  const logout = function () {
    return API.requestLogout({
      token: token.getToken(),
      client_id: clientID
    })
      .then(response => {
        token.revoke();
        window.location = redirectURI;

        return response;
      })
  };

  return {
    logout,
    getResources,
    login,
    getRegistrationURL,
    getLoginURL,
    getRedirectURI,
    isAuthenticated,
    getDataJSON,
    getToken,
  }
};