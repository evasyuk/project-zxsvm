import BaseApiClient from './baseApi'
import ApiClient from '../apiClient'

export default class AuthApi extends BaseApiClient {
  login(data) {
    return this.apiClient
      .post({ url: 'session/login', body: data, version: ApiClient.VERSION.V1 })
      .then((response) => response.data)
  }

  // prettier-ignore
  register(data) {
    return this.apiClient
      .post({ url: 'session/register', body: data, version: ApiClient.VERSION.V1 })
      .then((response) => response.data)
  }
}
