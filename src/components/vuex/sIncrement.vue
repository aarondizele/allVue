<template>
  <div class="row mt-2">
    <div class="col-12">
      <p>Incrementation : {{ doubleCounter }}</p>
      <p>Number of clicks : {{ stringCounter }}</p>
    </div>
  </div>
</template>
<script>
  import { mapGetters } from 'vuex'

  export default {
    computed: {
      ...mapGetters([
        'doubleCounter',
        'stringCounter'
      ])
    }
  }
</script>

<style>
</style>

Vue.directive('highlight', {
  bind(el, binding, vnode) => {
    el.style.backgroundColor = binding.value;
  }
});
