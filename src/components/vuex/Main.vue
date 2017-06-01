<template>
  <div class="container mt-4">
    <app-second-increment></app-second-increment>
    <app-sincrement></app-sincrement>
    <app-fincrement></app-fincrement>
    <app-third-increment></app-third-increment>

    <input type="text" class="form-control mt-2 mb-2" v-model="value">
    <p>Value: {{value}}</p>
  </div>
</template>
<script>
  export default {
    computed: {
      value: {
        get () {
          return this.$store.getters.value;
        },
        set (event) {
          return this.$store.dispatch('value', event);
        }
      }
    }
  }
</script>

<style>
</style>
