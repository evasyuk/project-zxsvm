import enhancer from './enhancer'
import authEnhancer from '../../components/controlled/authEnhancer'
import Login from './Login'

export default authEnhancer(enhancer(Login), true)
