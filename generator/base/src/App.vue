<template>
  <div id="app">
    <div>APP</div>
    <div>\{{ common }}</div>
    <button @click="addCommon">common++</button>
    <br><hr><br>
    <div id="nav">
      <router-link to="/"><i class="iconfont icon-right"></i>a</router-link> |
      <router-link to="/b"><i class="iconfont icon-right"></i>b</router-link> |
      <router-link to="/b/x"><i class="iconfont icon-right"></i>b-x</router-link>
    </div>
    <br><hr><br>
    <router-view/>
  </div>
</template>

<script>
import { mapState, mapActions } from 'vuex'
import { REGEXP_PHONE, REGEXP_PASSWORD } from './service/constants'
import { COPY, computeClass } from './service/utils'

export default {
  computed: {
    ...mapState([
      'common'
    ])
  },
  mounted () {
    /* eslint-disable */
    console.log(
      this.$constants, '\n',
      this.$utils, '\n',
      this.$api, '\n',
      this.$axios
    )
    console.log({ REGEXP_PHONE, REGEXP_PASSWORD })
    console.log({ COPY, computeClass })

    const params = { limit: 5 }
    this.$api.topics(params)
    this.$api.topics(params, { closeErrorIntercept: true })
  },
  methods: {
    ...mapActions([
      'UPDATE_COMMON'
    ]),
    addCommon () {
      this.UPDATE_COMMON()
    }
  }
}
</script>

<style lang="scss">
  @import "./assets/style/common";
  @import "./assets/iconfont/iconfont.css";
</style>
