<template>
  <div id="">
    <div class="row">
      <div class="col-12">
        <h3 class="mt-3">User ID : {{$route.params.id}}</h3>

        <!-- <router-link tag="button" :to="'/user/'+$route.params.id+'/edit'" class="btn btn-outline-info">Edit</router-link> -->

        <!-- <router-link tag="button" :to="{ name: 'editUser', params: { id: $route.params.id }, query: { locale: 'en', q: 100 } }" class="btn btn-outline-info">Edit</router-link> -->

        <router-link tag="button" :to="link" class="btn btn-outline-info">Edit</router-link>
      </div>
    </div>
  </div>
</template>

<script>

export default {
  data () {
    return {
      link: {
        name: 'editUser',
        params: { id: this.$route.params.id },
        query: { locale: 'en', q: 100 }
      }
    }
  },
  beforeRouteEnter (to, from, next) {
    console.log('Inside beforeRouteEnter');
    if (true){
      next();
    } else {
      next(false);
    }
  }
}

</script>

<style>

</style>
