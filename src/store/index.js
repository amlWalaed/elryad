import Vue from "vue";
import Vuex from "vuex";
import Json from "@/Api/questions.json"

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    questions: [],
    currentQue:0
  },
  getters: {
    getQuestion: (state) => state.questions,
    getCurrentQue: (state) => state.currentQue
  },
  mutations: {
    setQuestions:function(state ,payload){
      state.questions = payload
    },
    setQuestionStatus:function(state,payload){
      state.questions[payload.id] = payload.type
    },
    setCurrentQue:function(state,payload){
      state.currentQue = payload
    },
    setAnswer:function(state,payload){
      state.questions[state.currentQue].status=payload
    }
  },
  actions: {
    fetchQuestions: function ({commit}) {
      try {
          commit('setQuestions',Json)
      } catch {
        console.log(data.errors);
      }
    },
    fetchAnswer:function({commit} , payload) {
      commit('setAnswer',payload)
    }
  },
  modules: {},
});
