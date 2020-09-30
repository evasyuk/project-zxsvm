import enhancer from './enhancer'
import authEnhancer from '../../components/controlled/authEnhancer'
import Main from './Main'

export default authEnhancer(enhancer(Main), false)
