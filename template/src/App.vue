<template>
  <div id="app">
    <div>页面APP</div>
    <div>\{{ common }}</div>
    <button @click="addCommon">common++</button>
    <hr><br>
    <div id="nav">
      <router-link to="/"><i class="iconfont icon-right"></i>a</router-link> |
      <router-link to="/b"><i class="iconfont icon-right"></i>b</router-link> |
      <router-link to="/b/x"><i class="iconfont icon-right"></i>b-x</router-link>
    </div>
    <hr><br>
    <router-view/>
  </div>
</template>

<script>
import { mapState, mapActions } from 'vuex'

export default {
  computed: {
    ...mapState([
      'common'
    ])
  },
  created () {
    console.log(
      this.$const, '\n',
      this.$utils, '\n',
      this.$api, '\n',
      this.$ajax
    )
    const params = {
      limit: 5
    }
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
