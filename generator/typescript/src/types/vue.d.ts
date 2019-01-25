import Vue from 'vue'

declare module 'vue/types/vue' {
  interface Vue {
    $axios: any
    $api: any
    $constants: any
    $utils: any
  }
}
