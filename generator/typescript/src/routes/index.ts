import requireContextGetModules from '@/service/utils/requireContextGetModules'

export default requireContextGetModules(require.context('./modules', false, /\.ts$/), 'ARRAY')
