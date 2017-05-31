<template>
  <div class="container">

    <p v-once>{{ title }}</p> <!-- don't change even if title is modified -->
    <p>{{ sayHello() }}</p>
    <p v-html="finishedLink"></p>
    <p @mousemove="updateCoordinates">Coordinates : {{x}} / {{y}} <span @mousemove.stop='' class="ml-4 text-info">Don't touch me</span></p>
    <button @click="counter++" class="btn btn-outline-info m-3">Increment</button>
    <button @click="counter--" class="btn btn-outline-info m-3">Decrement</button>
    <p>{{counter * 2 > 20 ? 'Greater than 20' : 'Less than 20'}} ({{counter * 2}})</p>

    <input type="text" v-model="color" class="form-control mb-3">
    <input type="text" v-model="width" class="form-control mb-3">
    <div class="demo rounded" @click="attachRed = !attachRed" :class="{red: attachRed}"></div>
    <div class="demo rounded" @click="attachRed = !attachRed" :class="divClasses"></div>
    <div class="demo rounded" :class="color"></div>
    <div class="demo rounded" :class="{red: attachRed}"></div>
    <div class="demo rounded" :style="[myStyle, {height: width + 'px'}]"></div>
    <div class="demo rounded" :style="{'background-color': color}"></div>



  <div class="row mt-5 mb-5">
    <h1>{{cusTitle}}</h1>
    <div class="col-12">
      <button @click="show" class="btn btn-outline-success mt-3">Show Paragraph</button>
      <p v-if="showParagraph" class="alert alert-success mt-3">This is not always visible</p>
    </div>
  </div>



  </div>
</template>

<script>

export default {
  data () {
    return {
      msg: 'Welcome to Your Vue.js App',
      title: 'Hello world!',
      finishedLink: '<a href="www.google.com">Google</a>',
      x: 0,
      y: 0,
      counter: 0,
      attachRed: true,
      color: 'red',
      width: 100,
      cusTitle: 'The VueJS Instance',
      showParagraph: false
    }
  },
  methods: {
    sayHello () {
      return this.title = 'Hello!';
    },
    updateCoordinates (event) {
      this.x = event.clientX;
      this.y = event.clientY;
    },
    show(){
      this.showParagraph = !this.showParagraph;
      this.updateCusTitle('The VueJS Instance (Updated)')
    },
    updateCusTitle(title){
      this.cusTitle = title;
    }
  },
  watch: {
    title: function (value) {
      alert('Title change, new value: '+ value);
    }
  },
  computed: {
    divClasses () {
    	return {
      	red: this.attachRed,
        blue: !this.attachRed
      };
    },
    myStyle () {
      return {
        backgroundColor: this.color,
        width: this.width + 'px'
      }
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  display: inline-block;
  margin: 0 10px;
}

a {
  color: #42b983;
}

div.demo{
  height: 100px;
  width: 100px;
  margin: 10px;
  cursor: pointer;
  background-color: #444;
  transition: background .1s;
}
.red{
  background-color: #e74c3c;
}
.green{
  background-color: #2ecc71;
}
</style>
