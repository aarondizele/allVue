<template>
  <div class="row">
    <form>
      <div class="col-sm-8 offset-sm-2 col-xs-12 col-md-6 offset-md-3 text-center form-group">
        <label>Quote</label>
          <textarea class="form-control" rows="3" cols="500" v-model.trim="quote" placeholder="Write what on your mind"></textarea>
        </div>
      <div class="col-sm-8 offset-sm-2 col-xs-12 col-md-6 offset-md-3 form-group">
        <button type="submit" class="btn btn-outline-primary" @click.prevent="addQuote">Add Quote</button>
      </div>
    </form>
  </div>
</template>

<script>

export default {
  data () {
    return {
      quote: ''
    }
  },
  methods: {
    addQuote () {
      if(this.quote.trim().length > 0){
        this.$emit('quoteAdded', this.quote);
        this.quote = '';
      }
    }
  }
}
</script>


<style scoped>
  .row{
    font-family: 'Roboto', Helvetica, cursive;
  }
  textarea{
    resize: none;
    outline: none;
    font-family: 'Roboto', Helvetica, cursive;
    font-style: italic;
  }
  button{
    font-family: 'Roboto', Helvetica, cursive;
    font-size: 14px;
    cursor: pointer;
  }
</style>
