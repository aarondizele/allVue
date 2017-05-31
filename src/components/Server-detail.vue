<template>
  <div class="col-6 alert alert-warning text-left" style="border: 1px solid #ddd;">
    <h3>You may view the User Details here</h3>
    <p>Many Details</p>
    <p>Age: {{ userAge }}</p>
    <button type="button" name="button" class="btn btn-outline-primary" @click="editAge">Edit Age</button>
  </div>
</template>

<script>
// import { eventBus } from './main';

export default {
  props: ['userAge'],
  data () {
    return {
    }
  },
  methods: {
    editAge () {
      this.userAge = 30;
      this.$emit('ageWasEdit', this.userAge);
      // eventBus.$emit('ageWasEdit', this.userAge);
      // eventBus.changeAge(this.userAge)
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
button{
  cursor: pointer;
}
</style>
