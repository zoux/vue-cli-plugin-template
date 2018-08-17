<template>
  <div>
    <div>页面a</div>
    <hr><br>
    <div>\{{ a }}</div>
    <button @click="addA">a++</button>
  </div>
</template>

<script>
import { mapState, mapActions } from 'vuex'

export default {
  computed: {
    ...mapState('a', [
      'a'
    ])
  },
  methods: {
    ...mapActions('a', [
      'UPDATE_A'
    ]),
    addA () {
      this.UPDATE_A()
    }
  }
}
</script>
