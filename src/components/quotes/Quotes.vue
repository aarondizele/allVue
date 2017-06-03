<template>
  <div class="col-sm-6 col-md-4 col-lg-3">
    <div class="card quote">
      <div class="card-block">
        <slot></slot>
      </div>
    </div>
  </div>
</template>

<script>

export default {
  props: ['quotes'],
  data () {
    return {
    }
  }
}
</script>


<style>
button{
  cursor: pointer;
}
.card{
  font-family: 'Arizonia', cursive;
  font-size: 30px;
  color: #333;
  width: 100%;
}
.quote{
  cursor: pointer;
}
.quote:hover{
  background-color: #ffe2e2;
}
</style>
