import axios from 'axios'

import { AXIOS_DEFAULT_CONFIG } from '@/config'
import { requestSuccessFunc, requestFailFunc, responseSuccessFunc, responseFailFunc } from '@/config/interceptors'

// 注入默认配置
const axiosInstance = axios.create(AXIOS_DEFAULT_CONFIG)

axiosInstance.interceptors.request.use(requestSuccessFunc, requestFailFunc)
axiosInstance.interceptors.response.use(responseSuccessFunc, responseFailFunc)

export default axiosInstance
