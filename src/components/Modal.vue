<template>
  <div class="modal">
    <v-card height="400px" width="500px">
      <div v-if="hasFetched">
        <div class="modal_header">
          <v-card-title> {{ packageInfo.name || 'No name found' }}</v-card-title>
          <div class="package_info flex">
            <div class="icon_wrapper">
              <span class="icon">
                <v-icon small> mdi-bookmark-multiple </v-icon>
                {{ packageInfo["dist-tags"].latest }}
              </span>
              <span class="icon">
                <v-icon small> mdi-scale-balance </v-icon>
                {{ packageInfo.license }}
              </span>
              <span class="icon">
                <v-icon small> mdi-check-circle </v-icon>>
                {{ packageInfo["dist-tags"].latest }}
              </span>
            </div>
          </div>
        </div>
        <v-card-text> {{ packageInfo.description }}</v-card-text>
        <hr />
        <v-card-subtitle
          >Author's name: {{ packageInfo.author.name }}</v-card-subtitle
        >
        <v-card-subtitle
          >Author's email:
          {{ packageInfo.author.email || "no email" }}</v-card-subtitle
        >
        <hr />
        <v-card-text>
          <a :href="packageInfo.repository.url"> {{packageInfo.repository.url || 'No link to repository found'}}</a>
        </v-card-text>
      </div>
      <v-progress-circular
        v-else
        indeterminate
        color="primary"
      ></v-progress-circular>
    </v-card>
  </div>
</template>

<script>
import { mapActions } from "vuex";
export default {
  name: "Modal",
  props: {
    name: String,
  },
  data() {
    return {
      packageInfo: {},
      hasFetched: false,
    };
  },
  created() {
    this.fetchOnePackage(this.name).then((res) => {
      this.packageInfo = res.data;
      this.hasFetched = true;
    });
  },
  beforeDestroy() {
    this.reset();
  },
  methods: {
    ...mapActions("packages", {
      fetchOnePackage: "fetchOnePackage",
    }),
    reset() {
      this.packageInfo = {};
      this.hasFetched = false;
    },
  },
};
</script>
<style>
.modal {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: 3;
}
.v-progress-circular {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
}
.flex {
  display: flex;
  align-items: center;
  justify-content: space-between;
}
.icon_wrapper{
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 16px;
  gap: 5px;
}
.icon {
  display: flex;
  align-items: center;
  border: 0.5px solid gray;
  border-radius: 2px;
  padding: 2px;
}
</style>
