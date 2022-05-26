<template>
  <v-footer dark app bottom fixed padless>
    <v-card
      flat
      tile
      class="indigo lighten-1 white--text text-center"
      style="width: 100%"
    >
      <v-card-text>
        <v-btn v-for="icon in icons" :key="icon" class="mx-4 white--text" icon>
          <a :href="links[icon]" target="_blank">
            <v-icon size="24px">
              {{ icon }}
            </v-icon>
          </a>
        </v-btn>
      </v-card-text>

      <v-card-text class="white--text pt-0">
        Данный проект не является коммерческим и был создан в рамке прохождения
        собеседования
      </v-card-text>

      <v-divider></v-divider>

      <v-card-text class="white--text">
        {{ new Date().getFullYear() }} — <strong>Vuetify</strong>
      </v-card-text>
    </v-card>
  </v-footer>
</template>

<script>
export default {
  name: "Footer",
  data: () => ({
    icons: [
      "mdi-facebook",
      "mdi-twitter",
      "mdi-linkedin",
      "mdi-instagram",
      "mdi-github",
    ],
    links: {
      'mdi-facebook': "https://www.facebook.com/",
      'mdi-instagram': "https://www.instagram.com/?hl=en",
      'mdi-linkedin': "https://www.linkedin.com/",
      'mdi-twitter': "https://twitter.com/?lang=en",
      'mdi-github': "https://github.com/yummyyuppie/test-task",
    }
  }),
};
</script>
