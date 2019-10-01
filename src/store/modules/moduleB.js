
const storeModule = {
    state: {
        bus: 1,
        bike: 'Shandi',
        loads: [
            { id: 1, flag: 'flag -1', done: true },
            { id: 2, flag: 'flag -2', done: false },
        ]
    },
    mutations: {
        increBus(state) {
            state.bus = 10;
        },
        changeBike(state) {
            state.bike += ' Jieanti'
        }
    },
    getters: {
        doneLoads: (state, getter) => {
            return state.loads.filter(todo => todo.done)[0].flag + getter.getFillBike;
        },
        getFillBike: (state) => {
            return state.bike + '---------'
        }
    },
}


export default storeModule