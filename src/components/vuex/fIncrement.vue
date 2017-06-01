<template>
  <div class="row">
    <div class="col-12">
      <button type="button" class="btn btn-info mr-2" style="cursor: pointer" @click="increment(10)">Increment</button>
      <button type="button" class="btn btn-info" style="cursor: pointer" @click="decrement(10)">Decrement</button>
    </div>
  </div>
</template>
<script>
  import { mapMutations } from 'vuex';

  export default {
    methods: {
        ...mapMutations([
          'increment',
          'decrement'
        ]),
        increment (by) {
          this.$store.dispatch('increment', by)
        },
        decrement (by) {
          this.$store.dispatch('decrement', by)
        },
    }
  }
</script>

<style>
</style>
