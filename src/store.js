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
    },
    getters: {
        counter(state) {
            if(state.counter > 50) {
                return 0
            }
            return state.counter
        },
        doubleCounter(_, getters) {
            return getters.counter * 2
        }
    }
})