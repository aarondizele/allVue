<template>
  <div id="">
    <div class="row">
      <div class="col-4 mt-3">
        <ul class="list-group">
          <router-link tag="li"
          to="/user/1"
          active-class="active"
          class="list-group-item"
          style="cursor: pointer;">User 1</router-link>
          <router-link tag="li"
          to="/user/2"
          active-class="active"
          class="list-group-item"
          style="cursor: pointer;">User 2</router-link>
          <router-link tag="li"
          to="/user/3"
          active-class="active"
          class="list-group-item"
          style="cursor: pointer;">User 3</router-link>
        </ul>
      </div>
      <div class="col-6">
        <router-view></router-view>
      </div>
    </div>
  </div>
</template>

<script>

export default {

}

</script>

<style scoped>
</style>
