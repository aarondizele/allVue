<template>
  <div class="row">
    <div class="col-12">
      <h3 class="mt-3">Edit User ID : {{$route.params.id}}</h3>
      <p>Locale : {{$route.query.locale}}</p>
      <p>Analytics : {{$route.query.q}}</p>
    </div>
  </div>
</template>

<script>

export default {
  beforeRouteLeave (to, from, next) {
    if(confirm('Are you sure?')){
      next();
    }else{
      next(false);
    }
  }
}

</script>

<style scoped>
</style>
