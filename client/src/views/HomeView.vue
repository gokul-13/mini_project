<template>
  <div >
    <h1>Welcome!!  What do you want to do??</h1>
    <button @click='addStudent'>Add a student</button>

  </div>
</template>

<script>
//const router=require('../router/index');
export default {
  name: 'HomeView',
  components: {},
  methods: {
      addStudent() {
          console.log("Called");
          this.$router.push({name:'addStudent'});
          
      }
  }
}
</script>

<style>

button {
 
  background-color: #4CAF50; /* Green */
  border: none;
  color: white;
  padding: 15px 32px;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  font-size: 16px;

}

</style>