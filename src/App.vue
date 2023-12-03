<template>
  <header>
    <div class="wrapper">
      <nav class="navbar navbar-expand-lg navbar-dark bg-secondary">
        <div class="container">
          <a class="navbar-brand" href="https://vuejs.org/" target="_blank" rel="noopener noreferrer">vuejs</a>
          <button class="navbar-toggler" type="button" data-bs-toggle="collapse"
                  data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false"
                  aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarSupportedContent">
            <ul class="navbar-nav me-auto mb-2 mb-lg-0">
              <li class="nav-item">
                <RouterLink class="nav-link" to="/">Home</RouterLink>
              </li>
              <li class="nav-item">
                <RouterLink class="nav-link" to="/about">About</RouterLink>
              </li>
            </ul>

            <ul class="navbar-nav ms-auto mb-2 mb-lg-0">
              <li class="nav-item dropdown">
                <a class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown"
                   aria-expanded="false">Course</a>
                <ul class="dropdown-menu" aria-labelledby="navbarDropdown">
                  <li><RouterLink class="dropdown-item" to="/Playground">Playground</RouterLink></li>
                  <li><RouterLink class="dropdown-item" to="/VSAE">VSAE</RouterLink></li>
                  <li><RouterLink class="dropdown-item" to="/ListRendering">ListRendering</RouterLink></li>
                  <li><RouterLink class="dropdown-item" to="/UserInput">UserInput</RouterLink></li>
                  <li><RouterLink class="dropdown-item" to="/UserEvents">UserEvents</RouterLink></li>
                  <li><RouterLink class="dropdown-item" to="/Methods">Methods</RouterLink></li>
                  <li><RouterLink class="dropdown-item" to="/Conditionals">Conditionals</RouterLink></li>
                  <li><RouterLink class="dropdown-item" to="/Attributbinding">Attribut binding</RouterLink></li>
                  <li><RouterLink class="dropdown-item" to="/dynamiquecssclasses">Dynamic CSS Classes</RouterLink></li>
                  <li><RouterLink class="dropdown-item" to="/ComputedProperties">Computed Properties</RouterLink></li>
                  <li><RouterLink class="dropdown-item" to="/Reactivity">Reactivity</RouterLink></li>
                </ul>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  </header>

  <RouterView />
</template>

<script setup>
import { RouterLink, RouterView } from 'vue-router'
</script>

<style scoped>
/* Add your scoped styles here */

/* Style for the dropdown menu */
.navbar-nav .dropdown-menu {
  background-color: #343a40;
}

.navbar-nav .dropdown-menu .dropdown-item {
  color: #ffffff;
}

.navbar-nav .dropdown-menu .dropdown-item:hover {
  background-color: #495057;
}
</style>

<script>
// Import Bootstrap JavaScript and Popper.js
import 'bootstrap/dist/js/bootstrap.bundle.min.js'
import 'bootstrap/dist/css/bootstrap.min.css'
</script>
