import Vue from 'vue';

export const actionGetMockDataPersonList = ({commit}) => {
    return new Promise((resolve) => {
        Vue.prototype.$http.get("/posts").then(res => {
            commit({
                type: 'changeMock',
                mockPromise: res.data.posts
            });
            resolve(res.data.posts);
        });
    });
}

export const actionIncrement = ({commit}) => {
    return new Promise((resolve) => {
        setTimeout(() => {
            commit({
                type: 'increment',
                count: 12
            });
            resolve();
        });
    });
}

export const actionB = ({ dispatch, commit }) => {
    return dispatch('actionIncrement').then(() => {
        commit({
            type: 'changeName',
            account: '1000'
        })
    })
}


// dispatch async/await
export async function actionData ({ commit })  {
    commit('increment', await new Promise((resolve) => {
        setTimeout(() => {
            commit('increment');
            resolve()
        }, 5000);
    }));
}

export async function actionS ({ dispatch, commit }) {
    await dispatch('actionData');
    commit('changeName');
}