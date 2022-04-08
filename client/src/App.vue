<template>
<div>
  <nav>
    <router-link to="/home">Home</router-link> |
    <router-link to="/about">About</router-link>
  </nav>
  <div class="page_block">
    <router-link class="page_nav" to="/addstudent">Add Student</router-link> |
    <router-link  class="page_nav" to="/getlist">Get Student List</router-link> |
    <router-link class="page_nav" to="/addcourse">Add Course</router-link> |
    <router-link class="page_nav" to="/addmarks">Add Marks</router-link> |
    <router-link class="page_nav" to="/viewstudent">View Student</router-link> |
  </div>
  <hr size="5" color="purple" width="100%"> 
  <router-view/>
</div>
</template>

<script>
import axios from 'axios';
axios.defaults.withCredentials=true;
export default {
  methods:{
      
  }
}
</script>



<style>

.page_block {
  margin: 10px;
  font-size:25px;
}

.page_nav {
  margin: 10px;
}


body {
  margin:0;
}

hr {
  margin-bottom:20px;
}


#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

nav {
  padding: 30px;
}

nav a {
  font-weight: bold;
  color: #2c3e50;
}

nav a.router-link-exact-active {
  color: #42b983;
}
</style>
