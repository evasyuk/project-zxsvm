/* eslint-disable no-underscore-dangle */
import axios from 'axios'
// import { setMissingAuth } from '../state/actions'

import { API_URL, TOKEN } from '../constants'

import { getItemAsync, removeItemAsync, setItemAsync } from '../helpers/storage'

class ApiClient {
  constructor() {
    ApiClient.singleton = this

    getItemAsync(TOKEN).then((res) => {
      this.token = res || null
    })
    this.client = axios.create({
      baseURL: API_URL,
      withCredentials: true,
    })

    this.client.interceptors.response.use(
      (response) => response,
      (error) => {
        if (
          error?.response?.request?.responseURL &&
          !error.response.request.responseURL.endsWith('login')
        ) {
          // store.dispatch(setMissingAuth())
          console.log('axios response error', 'login')
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
      .then(
        (response) =>
          // console.log(url, method, params, body, response)
          response,
      )
      .then(({ data }) => data)
  }
}

ApiClient.VERSION = {
  V1: 'v1',
}

export default ApiClient
