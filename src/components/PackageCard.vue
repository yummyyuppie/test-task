<template>
  <v-card @click="$emit('packageSelected', card.package.name)">
    <v-card-title>
      {{ card.package.name }}
    </v-card-title>
    <v-card-text>

    </v-card-text>
  </v-card>
</template>

<script>
export default {
  name: "PackageCard",
  props: {
    card: {
      type: Object,
      default: () => {},
    },
  },
};
</script>

<style scoped></style>
