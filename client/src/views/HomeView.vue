<template>
  <div >
    <h1>Welcome!!  What do you want to do??</h1>
    <button @click='addStudent'>Add a student</button>
    <button @click='getList'>Get the Students List</button>
    <button @click='addCourse'>Add a Course</button>
    <button @click='$router.push("addmarks");'>Add Marks</button>
  </div>
</template>

<script>
 
 import router from '../router/index'
export default {
  name: 'HomeView',
  components: {},
  methods: {
      addStudent() {
          console.log("Called");
          this.$router.push({name:'addStudent'});
          
      },
       getList() {
        console.log('Student List called');
          router.push({name:'getlist'});
       
      },
      addCourse() {
        this.$router.push({name:'addcourse'});
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