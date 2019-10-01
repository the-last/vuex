

/**
 *   相当于 Vue 实例工厂
 * 注意： 其他的vuex vue-router 也需要同样的工厂模式导出实例
 * Vuex 
 * vue-router
 * 
 * 引入实例化的对象，放在Vue实例中。
 * */


import Vue from 'vue';
import App from '../src/App.vue';
import { createRouter } from './router';
import { createStore } from './store';
import { sync } from 'vuex-router-sync';



export function createApp (context) {
    const router = createRouter();
    const store  = createStore();
    sync(store, router);
    const app =  new Vue({
        data: {
            url: context.url
        },
        router,
        store,
        template: `<div>访问的 URL 是： {{ url }} {{ title }}</div>`,
        render: h => h(App)
    });

    return { app, router, store }
}
