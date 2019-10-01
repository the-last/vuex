import Vue from 'vue'
import Vuex from 'vuex';
import VueRouter from 'vue-router';
import { sync } from 'vuex-router-sync';
import App from './App.vue';
import store from './store';
import router  from './router';
// import Profile from './extend';

require('./mock/mock');
import axios from 'axios';

axios.defaults.baseURL = 'http://mockjs.com/api'
Vue.prototype.$http = axios;
Vue.config.silent = true; // 取消vue组件内所有日志和警告,不包括vuex

Vue.prototype.$log = function (...val) {
    console.log('%c vuex-test App  : -- ','color:#f00;font-size:16px;', ...val);
}

// 自定义选项中，合并策略的问题,  在组件继承的范围内。
Vue.config.optionMergeStrategies.car = function (parentValue,  childValue) {
	
	console.log('mixins 可能是写在子组件 - car', 'parentValue -- ', parentValue, 'childValue -- ', childValue);
	console.log('\n\n');
	console.log('------------------------------')
    return  childValue ?  childValue : parentValue
}

// 阻止在启动时，生成生产提示
Vue.config.productionTip = false

// 获取组件中具体的报错信息
Vue.config.errorHandler = function (err, vm, info) {
	// handle error
	// `info` 是 Vue 特定的错误信息，比如错误所在的生命周期钩子
	// 只在 2.2.0+ 可用
	console.log(err,  'err\n' );
	console.log(vm,   'vm\n' );
	console.log(info, 'info\n' );
}

// 自定义按键点击event
Vue.config.keyCodes = {
	v: 86,
	f1: 112,
	"media-play-pause": 16,
	up: [38, 87]
}


let child1 = Vue.extend({
    template: `
        <p>子组件child1</p>
    `
});

let child2 = Vue.extend({
    template: `
        <p>子组件child2</p>
    `
});


// Vue.extend 会自动调用
Vue.component('my-like', {
    components: {
        'child-com1': child1,
        'child-com2': child2
    },
    template: `
        <div>
            <child-com1></child-com1>
            <child-com2></child-com2>
        </div>
    `
});
Vue.component('button-counter', {
    data: function () {
      return {
        count: 0
      }
    },
    template: '<button v-on:click="count++">You clicked me {{ count }} times.</button>'
})



Vue.use(VueRouter);
Vue.use(Vuex);
sync(store, router);

new Vue({
	store,
    router,
	render: h => h(App)
}).$mount('#app');

