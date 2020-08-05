import { store } from '../state'
import { setMissingAuth } from '../state/actions'

import axios from 'axios'
import { API_URI, TOKEN } from '../constants'

import { getItemAsync, removeItemAsync, setItemAsync } from '../helpers/storage'

class ApiClient {
  constructor() {
    ApiClient.singleton = this

    getItemAsync(TOKEN).then(res => {
      this.token = res || null
    })
    this.client = axios.create({
      baseURL: API_URI,
      withCredentials: true,
    })

    this.client.interceptors.response.use(
      response => {
        return response
      },
      function(error) {
        console.log('unauthorized, need to login in again')
        if (!error.response.request.responseURL.endsWith('login')) {
          store.dispatch(setMissingAuth())
        }
        return Promise.reject(error)
      },
    )
  }

  setToken(token) {
    this.token = token
    setItemAsync(TOKEN, token)
  }

  removeToken() {
    this.token = null
    removeItemAsync(TOKEN)
  }

  get({ url, params = {}, version, config }) {
    return this._request({ url, method: 'get', params, version, config })
  }

  post({ url, body, version, config }) {
    return this._request({ url, method: 'post', body, version, config })
  }

  patch({ url, body, version, config }) {
    return this._request({ url, method: 'patch', body, version, config })
  }

  put({ url, body, version, config }) {
    return this._request({ url, method: 'put', body, version, config })
  }

  delete({ url, body, version, config }) {
    return this._request({ url, method: 'delete', body, version, config })
  }

  _request({
    url,
    method,
    params,
    body,
    version = ApiClient.VERSION.V1,
    config,
  }) {
    let bodyParams = {}
    if (params) bodyParams = params
    if (body) bodyParams = body

    return this.client[method](`/${version}/${url}`, bodyParams, config)
      .then(response => {
        // console.log(url, method, params, body, response)
        return response
      })
      .then(({ data }) => data)
  }
}

ApiClient.VERSION = {
  V1: 'v1',
}

export default ApiClient
