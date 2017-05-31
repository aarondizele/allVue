<template>
  <div class="container">
    <div class="row">
      <div class="col-xs-12 col-sm-8 offset-sm-2 col-md-6 offset-md-3">

        <h1>{{msg}}</h1>
        <hr>

        <button type="button" class="btn btn-info" @click="show = !show"> Show alert</button>
        <transition name="fade" mode="out-in">
          <div class="alert alert-info mt-3" v-if="show">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
          </div>
      </transition>
      </div>
    </div>
  </div>
</template>

<script>
export default{
    data() {
      return {
        msg: 'Animations',
        show: false
      }
    }
}
</script>

<style scoped>
.container{
  color: #6e6e6e;
}
.fade-enter{
  opacity: 0;
}
.fade-enter-active{
  transition: opacity .1s;
}
.fade-leave-active{
  transition: opacity .1s;
  opacity: 0;
}
</style>
