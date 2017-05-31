<template>
  <div class="col-6 alert alert-info text-left" style="border: 1px solid #ddd;">
    <h3>You may view the User Details here</h3>
    <p>Many Details</p>
    <p>User Name: {{ nameReverse() }}</p>
    <p>User Age: {{ userAge }}</p>
    <button type="button" class="btn btn-outline-primary" name="button" @click="resetName">Reset name</button>
    <button type="button" class="btn btn-outline-primary" name="button" @click="resetFn()">Reset name</button>
  </div>
</template>

<script>
// import { eventBus } from './main';

export default {
//   props: ['myName'],
  props: {
      myName: {
          type: String,
          default: 'Aaron'
      },
      resetFn: Function,
      userAge: Number
       // Object, Array, String
  },
  data () {
    return {
      msg: 'Server part'
    }
  },
  methods: {
      nameReverse () {
          return this.myName.split('').reverse().join('');
      },
      resetName () {
        this.myName = 'Max';
        this.$emit('listName', this.myName); // communicate from child to parent
      }
  },
  // created() {
  //     eventBus.$on('ageWasEdited', (age) => {
  //         this.userAge = age;
  //     });
  // }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
button{
  cursor: pointer;
}
</style>
