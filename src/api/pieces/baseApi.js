export default class BaseApi {
  constructor(apiClient) {
    if (!apiClient) throw new Error('[apiClient] required')
    this.apiClient = apiClient
  }
}
