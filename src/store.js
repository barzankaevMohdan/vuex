import { createStore } from "vuex";

export default createStore({
    state() {
        return {
            counter: 1
        }
    },
    mutations: {
        add(state, payLoad) {
            state.counter += payLoad.value
        }
    }
})