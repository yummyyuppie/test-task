import { $axios } from "@/http";
const getDefaultState = () => {
  return {
    packages: [],
    pagination: {
      page: 1,
      size: 10,
      totalPage: 0,
    },
  };
};
export const packages = {
  namespaced: true,
  state: getDefaultState(),
  getters: {
    packages(state) {
      return state.packages;
    },
    pagination(state) {
      return state.pagination;
    },
    hasNextPage(state) {
      const { page, totalPage } = state.pagination;
      return page <= totalPage;
    },
    offset(state) {
      const { page, size } = state.pagination;
      return (page - 1) * size;
    },
  },
  mutations: {
    SET_PACKAGES(state, payload) {
      state.packages = payload;
    },
    SET_TOTAL_PAGE(state, payload) {
      const { size } = state.pagination;
      state.pagination.totalPage = Math.ceil(payload / size);
    },
    SET_PAGE(state, payload) {
      state.pagination.page = payload;
    },
  },
  actions: {
    fetchPackages({ commit, getters, state }, filter = "") {
      $axios
        .get(
          `/-/v1/search?text=${filter}&size=${state.pagination.size}&from=${getters.offset}`
        )
        .then((res) => {
          commit("SET_PACKAGES", res.data.objects);
          commit("SET_TOTAL_PAGE", res.data.total);
        });
    },
    fetchOnePackage(context, name = "") {
      return $axios
        .get(`/${name}`)
        .then((res) => res)
        .catch(() => null);
    },
  },
};
