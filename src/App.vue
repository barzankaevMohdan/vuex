<template>
<the-navbar></the-navbar>
  <div class="container with-nav">
    <div class="card">
      <h1>Про Vuex</h1>
      <h2>Счетчик {{ $store.getters.counter }} ({{ $store.getters.doubleCounter }})</h2>
      <button class="btn" @click="add">Добавить</button>
    </div>
  </div>
</template>

<script>
import TheNavbar from './components/TheNavbar'
export default {
  methods: {
    add() {
      this.$store.commit({
          type: 'add',
          value: 1
        })
    }
  },
  components: {TheNavbar}
}
</script>
