import requireContextGetModules from '../utils/requireContextGetModules'

export default requireContextGetModules(require.context('./modules', false, /\.js$/), 'ARRAY')
