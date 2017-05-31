<template>
  <div id="app" class="container-fluid">

    <router-view name="header-top"></router-view>
    <router-view></router-view>
    <router-view name="header-bottom"></router-view>
    <!-- <app-hello></app-hello> -->

    <!-- <app-form></app-form> -->

    <!-- <app-transition></app-transition> -->

    <!-- <app-directive></app-directive> -->
    <!--  <app-list></app-list> -->

    <!-- <img src="./assets/logo.png">
    <hr>

    <button @click="changeName" style="myStyle" class="btn btn-outline-primary mb-4">Change name</button>

    <div class="row">

      <app-server :myName="userName"
                  :userAge="age"
                  @listName="userName = $event"
                  :resetFn="resetName">
      </app-server>

      <app-server-detail :userAge="age" @ageWasEdit="age = $event"></app-server-detail> <!-- get new value for age by calling age = $event

    </div> -->

    <!-- <app-server v-for="server in 5" :key="server"></app-server> -->

    <!-- <app-quote-main></app-quote-main> -->
  </div>
</template>

<script>

export default {
  name: 'app',
  data: function() {
    return {
      userName: 'Max',
      age: 27
    }
  },
  methods: {
    changeName () {
      return this.userName = 'Anna';
    },
    resetName () {
      return this.userName = 'Elie'
    }
  }
}

</script>

<style>
#app {
  font-family: 'Roboto', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  /*color: #2c3e50;*/
}
.container{
  font-family: 'Roboto', Helvetica, Arial, sans-serif;
  color: #444;
  margin: 0;
}
button{
  cursor: pointer;
}
</style>
