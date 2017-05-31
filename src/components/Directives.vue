<template>
  <div class="container">
    <div class="row">
      <div class="col-xs-12 col-sm-8 offset-sm-2 col-md-6 offset-md-3">
        <h1>Built-in Directives</h1>
        <p v-text="'Some text'"></p>
        <p v-html="'<strong>Some strong text</strong>'"></p>
      </div>
      <hr>
      <div class="col-xs-12 col-sm-8 offset-sm-2 col-md-6 offset-md-3">
        <h1>{{msg | toUpper}}</h1>
        <!-- <h4 v-highlight="'yellow'"><strong>Some strong text</strong></h4> -->
        <h2 v-highlight:background.delayed="'deepSkyBlue'"><strong>Some strong text</strong></h2>
        <h2 v-local-highlight:background.delayed="'deepSkyBlue'"><strong>Some strong text for local directives</strong></h2>
      </div>
      <hr>
      <div class="col-xs-12 col-sm-8 offset-sm-2 col-md-6 offset-md-3 mt-4">
        <input type="text" class="form-control" placeholder="Search" v-model.trim='filterText'>
        <br>
        <p v-if="fruitFiltered.length > 0">Results : {{fruitFiltered.length}}</p>
        <ul class="unstyled">
          <li v-for="fruit in fruitFiltered">{{fruit}}</li>
        </ul>
        <div class="alert alert-warning text-center align-items-center" v-if="fruitFiltered.length == 0">
          Not found
        </div>
      </div>
    </div>
  </div>
</template>

<script>

  import { fruitsMixin } from './fruitsMixin'

  export default {
    mixins: [fruitsMixin],
    // data () {
    //   return {
    //     msg: 'Built-in Directives',
    //     fruits: ['Apple', 'Tomato', 'Sarlon', 'Strawberry', 'Kiwi'],
    //     filterText: '',
    //     notFoundSearch: false
    //   }
    // },
    // computed: {
    //     fruitFiltered () {
    //       let matcher;
    //         return this.fruits.filter((value) => {
    //         return matcher = value.toLowerCase().match(this.filterText.toLowerCase());
    //
    //       });
    //     }
    // },
    directives: {
      'local-highlight': {

        bind(el, binding, vnode){

          let delay = 0;

          if(binding.modifiers['delayed']){
            delay = 1000;
          }

          setTimeout(() => {

            if(binding.arg == 'background'){

              el.style.backgroundColor = binding.value;
              el.style.padding = 8 + 'px';
              el.style.color = 'white';
              el.style.borderRadius = 5 + 'px';

            }else if (binding.arg == 'color') {

              el.style.color = binding.value;

            }else{

              el.style.color = binding.value;

            }
          } ,delay);
        }
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
