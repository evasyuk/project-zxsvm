import BaseApiClient from './baseApi'
import ApiClient from '../apiClient'

export default class UsersApi extends BaseApiClient {
  login(data) {
    return this.apiClient
      .post({ url: 'session/login', body: data, version: ApiClient.VERSION.V1 })
      .then((response) => response.data)
  }

  getMyUser() {
    return this.apiClient
      .get({ url: 'user/me', version: ApiClient.VERSION.V1 })
      .then((response) => response.data)
  }

  deleteMyUser() {
    return this.apiClient
      .delete({ url: 'user/me', version: ApiClient.VERSION.V1 })
      .then((response) => response.data)
  }

  // prettier-ignore
  changePassword(data) {
    return this.apiClient
      .post({ url: 'user/password/change', body: data, version: ApiClient.VERSION.V1 })
      .then((response) => response.data)
  }
}
