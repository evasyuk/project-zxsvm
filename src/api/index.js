import ApiClient from './apiClient'
import Auth from './pieces/authApi'
import Users from './pieces/usersApi'

const apiClient = new ApiClient()

export default {
  auth: new Auth(apiClient),
  client: apiClient,
  users: new Users(apiClient),
}
