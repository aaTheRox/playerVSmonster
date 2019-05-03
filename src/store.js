import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
    state: {
        isGameRunning: false,
        playerName: '',
        error: ''
    },
    mutations: {
        START_GAME: (state) => {
            console.log('game started')
            state.isGameRunning = true;
        },
        UPDATE_PNAME(state, name) {
            state.playerName = name;
            console.log('Player name saved')
            console.log(state.playerName)
        },
        UPDATE_ERRORS(state, error) {
            state.error = error;
        }
    },
    actions: {
        startGame: (context) => {
            context.commit('START_GAME')
            console.log('from actions')
        }
    }
});