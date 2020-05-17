<template>
  <v-app id="app">
    <v-content>
      <p>{{ message }}</p>
      <v-btn color="primary">
        Vuetify button
      </v-btn>
    </v-content>

  </v-app>
</template>

<script>
import {mapGetters} from 'vuex'
export default {
  data: function () {
    return {
      message: "Hello Vue!"
    }
  },
  computed: {
    ...mapGetters(["cart/items"]),
  }
}
</script>

<style scoped>
p {
  font-size: 2em;
  text-align: center;
}
</style>
