<template>
  <div class="container">
    <hr>
    <div class="col-xs-12 col-sm-8 offset-sm-2 col-md-6 offset-md-3 mt-4">
      <input type="text" class="form-control" placeholder="Search" v-model.trim='filterText'>
      <br>
      <p>Results : {{fruitFiltered.length}}</p>
      <ul class="unstyled">
        <li v-for="fruit in fruitFiltered">{{fruit}}</li>
      </ul>
    </div>
  </div>
</template>

<script>
import { fruitsMixin } from './fruitsMixin'

export default {
  mixins: [fruitsMixin],
    data () {
      return {
        text: 'Second Chance'
      }
    }
  }
</script>

<style>
  hr{
    border: 2px solid #ddd;
    width: 100%;
  }
</style>
