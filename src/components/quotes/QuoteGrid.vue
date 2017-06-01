<template>
  <div class="row">
    <app-quote v-for="(quote, i) in quotes" :key="quote" @click.native="deleteQuote(i)">{{ quote }}</app-quote>
  </div>
</template>

<script>

export default {
  props: ['quotes'],
  data () {
    return {
    }
  },
  methods: {
    deleteQuote (i) {
      this.$emit('quoteDeleted', i);
    }
  }
}
</script>


<style>

</style>
