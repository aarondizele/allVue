<template>
  <div class="row">
    <div class="col-12">
      <nav class="navbar navbar-inverse bg-inverse navbar-toggleable-md navbar-light bg-faded">
        <button class="navbar-toggler navbar-toggler-right" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>
        <h3><a class="navbar-brand" href="#">MY APP</a></h3>
        <div class="collapse navbar-collapse" id="navbarNav">
          <ul class="navbar-nav">
              <router-link class="nav-link" to="/" tag="li" active-class="active">Home <span class="sr-only">(current)</span></router-link>
              <router-link class="nav-link" to="/apply-now/94" tag="li" active-class="active">ID 94</router-link>
              <router-link class="nav-link" to="/apply-now/90" tag="li" active-class="active">ID 90</router-link>
              <router-link class="nav-link" to="/user" tag="li" active-class="active">User</router-link>
              <!-- <router-link class="nav-link" to="/user" tag="li" active-class="active">User</router-link> -->
            <!-- <li class="nav-item">
              <a class="nav-link" href="#">Pricing</a>
            </li>
            <li class="nav-item">
              <a class="nav-link disabled" href="#">Disabled</a>
            </li> -->
          </ul>
        </div>
      </nav>
    </div>
  </div>
</template>

<script>

</script>

<style scoped>
.nav-link{
  cursor: pointer;
  font-family: 'Roboto', Helvetica, Arial, sans-serif;
}
</style>
