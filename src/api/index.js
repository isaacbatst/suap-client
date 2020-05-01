const axios = require('axios');

const URLS = require('../constants/urls');

const api = axios.create({
  baseURL: URLS.BASE,
  timeout: 20000
})

const requestResources = token => {
  return api.get(URLS.RESOURCES, {
    data: { 'scope': scope },
    headers: {
      "Authorization": `Bearer ${token}`,
      "Accept": "application/json"
    },
  })
}

const requestLogout = data => {
  return api.post(URLS.LOGOUT, { data })
}

module.exports = {
  requestLogout,
  requestResources
}