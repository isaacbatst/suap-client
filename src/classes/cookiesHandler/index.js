import Cookies from 'js-cookie';
import COOKIES from '../../constants/cookies';

export default ({ data: { token, finishTime, scope }, updateData }) => {
  const { setToken, setFinishTime, setScope } = updateData;
  
  updateTokenCookie();
  updateTokenExpirationTimeCookie();
  updateScopeCookie();

  function updateTokenCookie(){
    if (!Cookies.get(COOKIES.SUAP_TOKEN_COOKIE)) {
      Cookies.set(COOKIES.SUAP_TOKEN_COOKIE, token, { expires: finishTime });
    } else {
      setToken(Cookies.get(COOKIES.SUAP_TOKEN_COOKIE));
    }
  }
  function updateTokenExpirationTimeCookie(){
    if (!Cookies.get(COOKIES.SUAP_TOKEN_EXPIRATION_TIME_COOKIE)) {
      Cookies.set(COOKIES.SUAP_TOKEN_EXPIRATION_TIME_COOKIE, finishTime, { expires: finishTime });
    } else {
      setFinishTime(Cookies.get(COOKIES.SUAP_TOKEN_EXPIRATION_TIME_COOKIE));
    }
  }
  function updateScopeCookie(){
    if (!Cookies.get(COOKIES.SUAP_SCOPE_COOKIE)) {
      Cookies.set(COOKIES.SUAP_SCOPE_COOKIE, scope, { expires: finishTime });
    } else {
      setScope(Cookies.get(COOKIES.SUAP_SCOPE_COOKIE));
    }
  }

  function revoke(){
    if (Cookies.get(COOKIES.SUAP_TOKEN_COOKIE)){
      Cookies.remove(COOKIES.SUAP_TOKEN_COOKIE);
    }

    if (Cookies.get(COOKIES.SUAP_TOKEN_EXPIRATION_TIME_COOKIE)){
      Cookies.remove(COOKIES.SUAP_TOKEN_EXPIRATION_TIME_COOKIE);
    }

    if (Cookies.get(COOKIES.SUAP_SCOPE_COOKIE)){
      Cookies.remove(COOKIES.SUAP_SCOPE_COOKIE);
    }
  }

  function isValid(){
    return Cookies.get(COOKIES.SUAP_TOKEN_COOKIE);
  }

  return {
    isValid,
    revoke
  }
}