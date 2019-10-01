const storeModule = {
    state: {
        fruit: 1,
        slump: 'Shandi',
        vegetables: [
            { id: 1, kind: 'flag -1', done: true },
            { id: 2, kind: 'flag -2', done: false },
        ]
    },
    mutations: {
        increFruit(state) {
            state.fruit = 10;
        },
        changeFruit(state) {
            state.slump += ' molen'
        }
    },
    getters: {
        doneVegetables: (state, getter, rootState) => {
            return state.vegetables.filter(todo => todo.done)[0].kind + getter.getFillSlump + '99999999' + rootState.name;
        },
        getFillSlump: (state) => {
            return state.slump + '---------'
        }
    },
}


export default storeModule