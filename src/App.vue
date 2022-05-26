<template>
  <div>
    <Main />
    <Footer />
  </div>
</template>

<script>
import Main from "./views/Main";
import Footer from "@/components/Footer";

export default {
  name: "App",

  components: {
    Footer,
    Main,
  },

  data: () => ({
    //
  }),
};
</script>
<style>
a{
  text-decoration: none;
  color: inherit;
}
</style>