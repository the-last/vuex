<template>
  <div id="app">
    <img alt="Vue logo" src="./assets/logo.png">
    
    <p>
      count from store and computing 同步计算斐波那契数  ... {{ flagFromStore }}
    </p>
    <p>
      {{ doneTodos('hi---',1) }}
    </p>
    <button-counter></button-counter>
    9999
    <router-view></router-view>
    
  </div>
</template>

<script>
import { mapGetters } from 'vuex';
import store from './store/index';

export default {
  car: 'LUHU',
  store,
  computed: {
    flagFromStore() {
      const { count } = this.$store.state;
      let temp = count || this.fib(count || 1);
      return temp;
    },
    ...mapGetters([
      'doneTodos',
    ]),
  },
  mounted(){
    this.$log('自定义日志格式');
  },
  methods: {
    fib (num) {
      if (num <= 1) return 1;
      return this.fib(num - 1) + this.fib(num - 2);
    }
  }
}
</script>

<style lang="less">
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
