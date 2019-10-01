import _ from 'lodash';

// 通过插件的参数对象得到空间名称
// 然后返回 Vuex 插件函数
function createPlugin (options = {}) {
    return function (store) {
      // 把空间名字添加到插件模块的类型（type）中
      const namespace = options.namespace || ''
      store.dispatch(namespace + 'pluginAction')
    }
}

const myPlugin = store => {
    // store.subscribe((mutation, state) => {
    store.subscribe(() => {
        // 每次 mutation 之后调用
        // console.log(mutation, state);
        /** 
         * *state* 只是包含 3类值
         * 一级根store的 state
         * 一级根store的 module 
         * registerModule 注册成功的模块
         * 
         * 
         * mutation 可以自己区分在哪个module内的mutation ！！！
         * 点击对应的commit，mutation的值不同，包含当前Payload载荷，和对应的commit触发的mutation ！！！
         * 
         * 
         * 插件唯一传参 Store ，因为有了 store 所以在这里可以触发commit  或 dispatch actions。。。
         * 
         * 
         * 
         * 所以，这里可以用mutation 二次修改 state 的值，实现插件功能。
         * createWebSocketPlugin 参考这个插件的写法
         * 
         * */ 
    });
}

function createWebSocketPlugin (socket) {
    return store => {
        // 监听 websocket 的回传，成功后触发 commit
        socket.on('data', data => {
            store.commit('receiveData', data)
        })

        //  监听store ，检查store内commit事件的类型，如果是更新数据或
        //  或是 提交数据，触发插件事件。
        store.subscribe(mutation => {
            if (mutation.type === 'UPDATE_DATA') {
            socket.emit('update', mutation.payload)
            }
        })
    }
}

const myPluginWithSnapshot = store => {
    let prevState = _.cloneDeep(store.state)
    store.subscribe((mutation, state) => {
        let nextState = _.cloneDeep(state)
        // 比较 prevState 和 nextState...
        if (JSON.stringify(prevState) === JSON.stringify(nextState) ) {
            prevState = nextState;
        }
      
    });
}

export {
    myPlugin,
    createPlugin,
    createWebSocketPlugin,
    myPluginWithSnapshot,
}