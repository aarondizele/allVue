<template>
  <div class="container">

    <app-header :quoteCount="quotes.length" :maxQuotes="maxQuotes"></app-header>

    <app-new-quote @quoteAdded="newQuote"></app-new-quote> <!-- @quoteAdded="newQuote($event)" -->

    <app-quote-grid :quotes="quotes" @quoteDeleted="deleteQuote"></app-quote-grid> <!-- Our parent -->

    <div class="col-xs-12 text-center">
      <div class="alert alert-info">
        Disclaimer : Click on a Quote to delete it!
      </div>
    </div>

  </div>
</template>

<script>


export default{
  data(){
    return {
      quotes: ['Just a Quote to see something'],
      maxQuotes: 10
    }
  },
  methods: {
    newQuote (quote) {
      if ( this.quotes.length >= this.maxQuotes) {
        return alert('Please, delete quote first...');
      }
      this.quotes.push(quote);
    },
    deleteQuote (quote) {
      this.quotes.splice(quote, 1);
    }
  }
}


</script>

<style>
  .container{
    font-family: 'Roboto', Helvetica, Arial, sans-serif;
  }
  div{
    margin-top: 20px;
  }
</style>
