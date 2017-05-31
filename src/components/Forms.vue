<template>
  <div class="container">
    <div class="row mt-5 mb-5">

      <div class="col-md-8 offset-md-2 col-xs-12">

        <button type="button" class="btn btn-info rounded mb-3" @click="gotoHome">Go Home</button>

        <hr>
        <span>ID: {{id}}</span>
        <hr>
          <h2>File a Complaint</h2>
          <hr>
          <form>
            <div class="form-group">
              <label for="mail" class="col-2 col-form-label">Mail</label>
              <div class="col-12">
                <input class="form-control" type="email" id="mail" v-model="survey.email">
              </div>
            </div>
            <div class="form-group">
              <label for="password" class="col-2 col-form-label">Password</label>
              <div class="col-12">
                <input class="form-control" type="password" id="password" v-model="survey.password">
              </div>
            </div>
            <div class="form-group">
              <label for="age" class="col-2 col-form-label">Age</label>
              <div class="col-12">
                <input class="form-control" type="text" id="age" v-model="survey.age">
              </div>
            </div>
            <div class="form-group">
              <label for="message" class="col-2 col-form-label">Message</label>
              <div class="col-12">
                <textarea class="form-control" type="text" rows="4" id="mail" style="resize: none;" v-model="survey.message"></textarea>
              </div>
            </div>

            <!-- Checkbox -->
            <!-- We pass the same property of array on both checkbox == v-model='sendMail' -->
            <div class="form-group">
              <label class="custom-control custom-checkbox sendmail">
                <input type="checkbox" class="custom-control-input"
                id="sendmail"
                value="SendMail"
                v-model="survey.sendMail">
                <span class="custom-control-indicator"></span>
                <span class="custom-control-description">Send mail</span>
              </label>
              <label class="custom-control custom-checkbox sendInfomail">
                <input type="checkbox" class="custom-control-input"
                id="sendInfomail"
                value="SendInfoMail"
                v-model="survey.sendMail">
                <span class="custom-control-indicator"></span>
                <span class="custom-control-description">Send Infomail</span>
              </label>
            </div>

            <!-- radio -->
            <div class="custom-controls-stacked d-flex form-group">
              <label class="custom-control custom-radio">
                <input id="radioStacked1"
                name="radio-stacked"
                type="radio"
                class="custom-control-input"
                value="Male"
                v-model="survey.gender">
                <span class="custom-control-indicator"></span>
                <span class="custom-control-description">Male</span>
              </label>
              <label class="custom-control custom-radio">
                <input id="radioStacked2" name="radio-stacked"
                type="radio"
                class="custom-control-input"
                value="Female"
                v-model="survey.gender">
                <span class="custom-control-indicator"></span>
                <span class="custom-control-description">Female</span>
              </label>
            </div>

            <!-- Priority -->
            <div class="form-group">
              <label>Priority</label><br>
              <select class="custom-select w-100" v-model="survey.priority">
                <option v-for="selected in selectedPriority">{{ selected }}</option>
              </select>
            </div>

            <hr>
            <button class="btn btn-info" style="color: write;" @click.prevent="addSurvey">Submit</button>
            <hr>

        <!-- IF THE FORM IS SUBMITTED -->
          <div v-if="isNotSubmitted">
            <div class="alert alert-success">
              Your request was submitted!
            </div>
            <div class="card">
              <div class="card-header">
                Your Data
              </div>
              <div class="card-block">
                <p>Mail : {{ survey.email }}</p>
                <p>Password : {{ survey.password }}</p>
                <p>Message : {{ survey.message }}</p>
                <p><strong>Send mail ?</strong> : <ul><li v-for="item in survey.sendMail" class="unlisted">{{item}}</li></ul> </p>
                <p>Gender : {{ survey.gender }}</p>
                <p>Priority : {{ survey.priority }}</p>
              </div>
            </div>
          </div>

        </form>


        <div class="col-12 mt-3 mb-3">
          <input type="text" name="" value="" class="form-control" v-model="node"><br>
          <button type="button" @click.prevent="fetchData" class="btn btn-outline-info">Get Survey</button>
        </div>


        <div class="card  mt-3 mb-3" v-for="s in surveys" :key="s">
          <div class="card-block">
            <p>{{s.email}}</p>
            <p>{{s.message}}</p>
          </div>
        </div>


      </div>

    </div>
  </div>
</template>

<script>
  export default{
    data () {
      return {
        id: this.$route.params.id,
        selectedPriority: ['Low', 'Medium', 'High'],
        survey: {
          email: '',
          password: 234,
          age: 23,
          message: 'Forms goes work!',
          sendMail: [],
          gender: 'Female',
          priority: 'High', // by default
        },
        isNotSubmitted: false,
        surveys: [],
        resource: '',
        node: 'survey'
      }
    },
    watch: {
      '$route'(to, from){
        this.id = to.params.id;
      }
    },
    created () {
      const custActions = {
        saveAlt: {
          method: 'POST',
          url: 'survey2.json'
        },
        getAlt: {
          // method: 'GET'
          method: 'GET'
        }
      }
      // this.resource = this.$resource('survey.json');
      // this.resource = this.$resource('survey.json', {}, custActions);
      this.resource = this.$resource('{node}.json', {}, custActions);
    },
    methods: {
      addSurvey () {
        this.resource.saveAlt(this.survey)
        // this.resource.save({}, this.survey);
        // this.$http.post('survey.json', this.survey)
        //   .then( (response) => {
        //     this.isNotSubmitted = true;
        //   }, (error) => {
        //     console.log(error);
        //   })

          // this.survey.email = '';
          // this.survey.password = '' ;
          // this.survey.age = '';
          // this.survey.message = '';
          // this.survey.sendMail = [];
          // this.survey.gender = 'Female';
          // this.survey.priority = 'High'; // by default
      },
      fetchData () {
        // this.$http.get('survey.json')
        this.resource.getAlt({node: this.node})
        .then(response => {
          return response.json();
        })
        .then( data => {
          const dataArray = [];
          for (let key in data){
            dataArray.push(data[key]);
        }
        this.surveys = dataArray
      })
    },
    gotoHome () {
      // this.$router.push('/')
      this.$router.push({name: 'hello'})
    }
    }
  }
</script>

<style scoped>
.container{
  font-family: 'Roboto', Helvetica, sans-serif;
  color: #6e6e6e;
}
h2{
  font-weight: 600;
}
input[type=submit]{
  color: white;
  font-size: 16px;
}
input.btn{
  cursor: pointer;
}
</style>
