<template>
  <div class="row mt-2">
    <hr>
    <div class="col-12">
      <p>Incrementation : {{ counter }}</p>
    </div>
  </div>
</template>
<script>
  export default {
    computed: {
      counter () {
        return this.$store.getters.doubleCounter;
      }
    }
  }
</script>

<style>
</style>
