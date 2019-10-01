import Vue from 'vue';
import Vuex from 'vuex';
import logger from './logger';
import mutations from './mutations';
import * as actions from './actions'
import getters from './getters'
import modules from './modules/index'

import { myPlugin, myPluginWithSnapshot } from './plugins'


Vue.use(Vuex);

/**
 * 这里就是入口，初始化Store，唯一的全局的
 * 
 * @strict
 * @state
 * @mutations
 * @getters
 * @actions
 * @modules
 * @plugins
 * 
 */

const store = new Vuex.Store({
    strict: true,
    state: {
        count: 1,
        name: 'NewStation',
        todos: [
            { id: 1, text: 'todos -1', done: true },
            { id: 2, text: 'todos -2', done: false },
        ],
        mockData:[]
    },
    mutations,
    getters,
    actions,
    modules,
    plugins: process.env.NODE_ENV !== 'production'
             ? [myPlugin, myPluginWithSnapshot, logger]
             : [],
});




/**
 * 
 * 热重载！：意思是像webpack那样热替换
 */

if (module.hot) {

    module.hot.accept(['./mutations', './modules/index'], () => {
        // 热更新模块
        // 因为 babel6 的模块编译格式问题，需要加上 .default

        const newMutations = require('./mutations').default;
        const modules = require('./modules/index').default;

        // vuex store.hotUpdate
        store.hotUpdate({
            mutations: newMutations,
            modules: modules
        })
    })
}


export default store;