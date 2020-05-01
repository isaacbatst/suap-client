import handleCookies from '../cookiesHandler';

export default ({ token, duration: expirationTimeInSeconds, scope }) => {
  let startTimeInMilliseconds = new Date().getTime();
  let finishTime = new Date(startTimeInMilliseconds + expirationTimeInSeconds * 1000);

  const updateData = {
    setToken: newValue => token = newValue,
    setScope: newValue => scope = newValue,
    setFinishTime: newValue => finishTime = newValue  
  }
  
  const { isValid: areCookiesValid, revoke: revokeCookies } = handleCookies({ 
    data: { token, finishTime, scope },
    updateData
  });

  const getToken = function() {
    return token;
  };

  const getExpirationTime = function() {
    return finishTime;
  };

  const getScope = function() {
    return scope;
  };

  const isValid = function() {
    if (areCookiesValid() && token != null) {
      return true;
    }
    return false;
  };

  const revoke = function() {
    token = null;
    startTime = null;
    finishTime = null;

    revokeCookies();
  };

  return {
    getToken,
    getExpirationTime,
    getScope,
    isValid,
    revoke
  }

};