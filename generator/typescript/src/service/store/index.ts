import common from './common'
import requireContextGetModules from '@/service/utils/requireContextGetModules'

export default {
  ...common,
  modules: requireContextGetModules(require.context('./modules', false, /\.ts$/))
}
