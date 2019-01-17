// export = Types
// declare namespace Types {
//   type Action = (params: any) => void
//
//   interface ListItem {
//     code: number
//     name: string
//   }
// }

/**
 * 两者效果一致
 */

export as namespace Types
export { Action } from './modules/vuex'
export { ListItem } from './modules/list'

