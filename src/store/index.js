import Vue from "vue";
import Vuex from "vuex";
import { packages } from "@/store/packages";
Vue.use(Vuex);

export const store = new Vuex.Store({
  modules: {
    packages
  }
})
