import axios from "axios";

const $axios = axios.create({
  baseURL: 'https://registry.npmjs.org',
});
export { $axios };