import enhancer from './enhancer'
import authEnhancer from '../../components/controlled/authEnhancer'
import SignUp from './SignUp'

export default authEnhancer(enhancer(SignUp), true)
