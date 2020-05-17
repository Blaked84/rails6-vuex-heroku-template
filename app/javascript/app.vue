<template>
  <div id="app">
    <p>{{ message }}</p>
  </div>
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
