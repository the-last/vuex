
// mutation 竟然可以是单独一个模块 ？？？？
const mutations = {
    increment(state, Payload) {
        state.count = Payload.count;
    },
    changeName(state) {
        state.name += 'NewPlace'
    },
    changeMock(state, Payload) {
        state.mockData = Payload.mockPromise
    }
}

export default mutations;
