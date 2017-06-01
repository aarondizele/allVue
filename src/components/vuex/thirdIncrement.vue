<template>
  <div class="row">
    <div class="col-12">
      <hr>
      <button type="button" class="btn btn-outline-info mr-2" style="cursor: pointer" @click="asyncIncrement({by: 10, duration: 500})">Async Increment</button>
      <button type="button" class="btn btn-outline-info" style="cursor: pointer" @click="asyncDecrement({by: 10, duration: 500})">Async Decrement</button>
    </div>
  </div>
</template>
<script>
  // import { mapMutations } from 'vuex';
  import { mapActions } from 'vuex';

  export default {
    methods: {
        ...mapActions([
          'asyncIncrement',
          'asyncDecrement'
        ])
    }
  }
</script>

<style>
</style>
