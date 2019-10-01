
import moduleA from './moduleA';
import moduleB from './moduleB';

const modules = {
    a: moduleA,
    b: moduleB,
    account: {
        namespaced: true,
        state: {
            logined: 1,
            userName: 'kiki'
        },
        mutations: {
            login (state) {
                state.logined = 58
            }
        },
        getters: {
            isAdmin(state) {
                return state && state.logined>20? 'admin': 'guest'
            }
        },
        actions: {
            logDispatch({commit}) {
                commit({type: 'login', logined: 9})
            }
        }
    }
}
export default modules;