import axios from 'axios';

import * as URLS from '../constants/urls';

const api = axios.create({
  baseURL: URLS.BASE,
  timeout: 20000
})

export const requestResources = token => {
  return api.get(URLS.RESOURCES, {
    data: { 'scope': scope },
    headers: {
      "Authorization": `Bearer ${token}`,
      "Accept": "application/json"
    },
  })
}

export const requestLogout = data => {
  return api.post(URLS.LOGOUT, { data })
}