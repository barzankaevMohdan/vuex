export default {
    namespaced: true,
    state() {
        return {
            counter: 0
        }
    },
    mutations: {
        add(state, payLoad) {
            state.counter += payLoad.value
        }
    },
    actions: {
        // incrementAsync(context, payLoad) {
        //     setTimeout(() => {
        //         context.commit({
        //             type: 'add',
        //             value: 10
        //         })
        //         context.commit('add', payLoad)
        //     }, payLoad.delay)
        // }
        incrementAsync({ commit }, payLoad) {
            setTimeout(() => {
                commit('add', payLoad)
            }, payLoad.delay)
        }
    },
    getters: {
        counter(state) {
            // if(state.counter > 50) {
            //     return 0
            // }
            return state.counter
        },
        doubleCounter(state, getters, rootState, rootGetter) {
            console.log('state', state)
            console.log('getters', getters)
            console.log('rootState', rootState)
            console.log('rootGetter', rootGetter)
            return getters.counter * 2
        }
    }
}