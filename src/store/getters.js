
const getters = {
    doneTodos: (state, getter) => (alias='-默认值', id) => {
        return state.todos && state.todos.length > 0 && state.todos.filter(todo => todo.id === id)[0].text + getter.getFillName + alias;
    },
    getFillName: (state) => {
        return state.name + '---------'
    }
}

export default getters;