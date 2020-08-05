import ApiClient from './apiClient'
import Auth from './pieces/authApi'

const apiClient = new ApiClient()

export default {
    auth: new Auth(apiClient),
    client: apiClient,
}
