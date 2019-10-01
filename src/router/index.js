
/***
 * 
 * 定制 全局组件引入方法
 */
import Vue from 'vue';
import Router from 'vue-router';

const apply = name => import(`../components/${name}.vue`);

Vue.use(Router);

export default new Router({
    routes: [
        {
            path: '/',
            redirect: '/hello'
        },
        {
            path: '/hello',
            name: 'hello',
            component: () => apply('HelloWorld')
        },
        {
            path: '/form',
            name: 'form',
            component: () => apply('Form')
        },
    ]
});


