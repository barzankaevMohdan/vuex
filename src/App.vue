<template>
<the-navbar></the-navbar>
  <div class="container with-nav">
    <div class="card">
      <h1>{{ upperCaseTitle }}</h1>
      <h2>Счетчик {{ counter }} ({{ doubleCounter }})</h2>
      <button class="btn" @click="add">Добавить</button>
      <button class="btn danger" @click="incrementAsync({value: 10,delay: 200})">Добавить 10</button>
    </div>
  </div>
</template>

<script>
import {mapGetters, mapMutations, mapActions} from 'vuex'
import TheNavbar from './components/TheNavbar'
export default {
  computed: {
    ...mapGetters(['upperCaseTitle']),
    ...mapGetters('count', ['counter', 'doubleCounter'])
    // ...mapGetters({
    //   counter: 'count/counter',
    //   doubleCounter: 'count/doubleCounter'
    // })
  },
  methods: {
    ...mapMutations({
      increment: 'count/add'
    }),
    
    ...mapActions('count', ['incrementAsync']),

    add() {
      this.increment({value: 1})
    }
    // incrementAsync() {
    //   this.$store.dispatch('incrementAsync', {
    //     value: 10,
    //     delay: 200
    //   })
    // }
  },
  components: {TheNavbar}
}
</script>
