<template>
  <div class="row mt-5 mb-5">
    <div class="col-sm-12">
      <h3><kbd>The Country App</kbd></h3>
      <div class="d-flex mt-4">
        <button type="button" class="btn btn-outline-info" @click.prevent="loadData">{{ stateLoading ? 'Hide Country' : 'Load Countries' }}</button>
      </div>
      <div class="d-flex mt-3">
        <button @click.prevent="filterBy('all')" class="btn btn-outline-success mr-3">All Countries</button>
        <button @click.prevent="filterBy('europe')" class="btn btn-outline-success mr-3">European Countries</button>
        <button @click.prevent="filterBy('pop')" class="btn btn-outline-success mr-3">Population > 1M</button>
        <!-- <button @click.prevent="sortBy('country')" class="btn btn-outline-success mr-3">Sort by Country</button> -->
        <!-- <button @click.prevent="sortBy('population')" class="btn btn-outline-success mr-3">Sort by Population</button> -->
        <!-- <button @click.prevent="filterBy('pop')" class="btn btn-outline-success mr-3">Population > 1M</button> -->
      </div>
      <div class="mt-3 myTable" v-if="isLoaded">
        <table class="table table-bordered">
          <thead>
            <tr>
              <th>#</th>
              <th><a href="" @click.prevent="sortBy('country')">Name</a></th>
              <th>Country Code</th>
              <th>Capitale</th>
              <th>Area (km2)</th>
              <th><a href=""    @click.prevent="sortBy('population')">Population</a></th>
              <th>Continent</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="(country, i) in countries" :key="country">
              <th scope="row">{{i+1}}</th>
              <td>{{country.countryName}}</td>
              <td>{{country.countryCode}}</td>
              <td>{{country.capital}}</td>
              <td>{{country.areaInSqKm | myNum }}</td>
              <td>{{country.population | myNum }}</td>
              <td>{{country.continentName}}</td>
            </tr>
            <!-- <tr>
              <th scope="row">2</th>
              <td>Jacob</td>
              <td>Thornton</td>
              <td>@fat</td>
            </tr>
            <tr>
              <th scope="row">3</th>
              <td>Larry</td>
              <td>the Bird</td>
              <td>@twitter</td>
            </tr> -->
          </tbody>
        </table>
      </div>
    </div>
  </div>
</template>

<script>

  import Vue from 'vue'

  export default {
    data () {
      return {
        isLoaded: false,
        countries: [],
        stateLoading: false,
        copyCountries: [],
      }
    },
    methods: {
      loadData () {
        this.isLoaded = !this.isLoaded;
        this.$http.get('http://api.geonames.org/countryInfoJSON?username=aldizele')
          .then(response => {
            return response.json();
          })
          .then( data => {
            this.copyCountries = data.geonames;
            this.countries = data.geonames;
          })
          .then(error => console.log(error));
          this.stateLoading = !this.stateLoading;
      },
      filterBy (value) {
          if ( value === 'all') {
            return this.copyCountries;
          }else if ( value === 'europe') {
            this.countries = this.countries.filter(country => {
              return country.continentName.toLowerCase().match('europe');
            })
          }else if (value === 'pop') {
            this.countries = this.countries.filter(country => {
              return parseInt(country.population) > 1000000;
            })
          };
      },
      sortBy (value) {
        if(value === 'country'){
          this.countries = this.countries.sort((c1, c2) => {
            c1 = c1.countryName
            c2 = c2.countryName

            if(c1 > c2){
              return 1;
            }else if(c1 === c2){
              return 0;
            }else{
              return -1;
            }
          });
        }
        if(value === 'population'){
          this.countries = this.countries.sort((c1, c2) => {
            c1 = c1.population
            c2 = c2.population
            return parseInt(c1) - parseInt(c2)
          });
        }
      },

      sortByPopulation(c1, c2){
        return parseInt(c1) - parseInt(c2)
      }
    }
  }

</script>

<style scoped>
body{
  color: #555;
  font-family: 'Roboto', Helvetica, sans-serif;
}
kbd{
  padding: 8px 18px;
}
button.btn{
  font-family: inherit;
  font-weight: 300;
}
</style>
