import Vuex from "vuex";

const createStore = () => {
  return new Vuex.Store({
    state: {
      articles: [],
    },
    mutations: {
      setArticles(state, payload) {
        state.articles = payload;
      },
    },
    actions: {
      async nuxtServerInit(store, { $axios }) {
        const { data } = await $axios.get("http://localhost:8000/articles");
        store.commit("setArticles", data);
      },
      setArticles(context, payload) {
        context.commit("setArticles", payload);
      },
    },
    getters: {
      getArticles(state) {
        return state.articles;
      },
    },
  });
};

export default createStore;
