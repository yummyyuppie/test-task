<template>
  <div>
    <v-container class="flex justify-center">
      <v-text-field
        v-model="search"
        label="Name of a package"
        @input="debounceInput($event)"
      />
    </v-container>
    <v-container class="pa-1" fluid>
      <v-row no-gutters>
        <v-col
          class="item"
          v-for="(card, index) in packages"
          cols="12"
          sm="6"
          md="4"
          :key="index"
        >
          <PackageCard :card="card" @packageSelected="openModal" />
        </v-col>
      </v-row>
    </v-container>
    <div class="text-center">
      <v-pagination
        v-model="currentPage"
        :length="pagination.totalPage"
        :total-visible="7"
        prev-icon="mdi-menu-left"
        next-icon="mdi-menu-right"
      ></v-pagination>
    </div>
    <Modal v-if="modal.show" :name="modal.name" v-click-outside="clearModalInfo"/>
    <div class="backdrop" v-show="modal.show"></div>
  </div>
</template>

<script>
import _ from "lodash";
import { mapGetters } from "vuex";
import PackageCard from "@/components/PackageCard";
import Modal from "@/components/Modal";
export default {
  name: "Main",
  components: { PackageCard, Modal },
  watch: {
    currentPage: {
      handler(value) {
        this.$store.commit("packages/SET_PAGE", value);
        this.$store.dispatch("packages/fetchPackages", this.search);
      },
    },
    search: {
      handler() {
        this.$store.commit("packages/SET_PAGE", 1);
        this.currentPage = 1;
      },
    },
  },
  data: () => ({
    search: "",
    currentPage: 1,
    modal: {
      show: false,
      name: "",
    },
  }),
  methods: {
    debounceInput: _.debounce(function (e) {
      this.$store.dispatch("packages/fetchPackages", e);
    }, 300),
    openModal(packageName = "") {
      this.modal = { show: true, name: packageName };
    },
    clearModalInfo() {
      this.modal = { show: false, name: "" };
    },
  },
  computed: {
    ...mapGetters("packages", ["packages", "pagination"]),
  },
};
</script>

<style scoped>
.backdrop{
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: 2;
  background: rgba(0,0,0, 0.2);
}
</style>
