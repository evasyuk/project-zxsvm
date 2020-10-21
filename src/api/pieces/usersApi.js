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

  // prettier-ignore
  uploadPhoto(data) {
    const config = {
      headers: {
        'content-type': 'multipart/form-data',
      },
    }
    return this.apiClient
      .post({ url: 'user/picture', body: data, config, version: ApiClient.VERSION.V1 })
      .then((response) => response.data)
  }

  deletePhoto() {
    return this.apiClient
      .delete({ url: 'user/picture', version: ApiClient.VERSION.V1 })
      .then((response) => response.data)
  }
}
