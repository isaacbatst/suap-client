const extractToken = () => {
  var match = document.location.hash.match(/access_token=(\w+)/);
  if (match != null) {
    return !!match && match[1];
  }
  return null;
}

const extractScope = () => {
  var match = document.location.hash.match(/scope=(.*)/);
  if (match != null) {
    return match[1].split('+').join(' ');
  }
  return null;
},

const extractDuration = () => {
  var match = document.location.hash.match(/expires_in=(\d+)/);
  if (match != null) {
    return Number(!!match && match[1]);
  }
  return 0;
},

const getUrlParams = () => {
  return {
    token: extractToken(),
    duration: extractDuration(),
    scope: extractScope()
  }
}

module.exports = {
  getUrlParams
}