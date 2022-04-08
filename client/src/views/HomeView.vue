<template>
  <div >
     <button  @click="logout" >Logout</button>
    <h1>Welcome!!  What do you want to do??</h1>
    <button @click='addStudent'>Add a student</button>
    <button @click='getList'>Get the Students List</button>
    <button @click='addCourse'>Add a Course</button>
    <button @click='$router.push("addmarks");'>Add Marks</button>
    <button @click='$router.push("viewstudent");'>View Student</button>

    <div>
       <h2>Courses We Offer</h2>
       <table id="student">

         <tr>
           <th> Course Id</th>
           <th> Course Name</th>
       </tr>
       <tr v-for='record in courses' :key="record.name">
           <td v-for='(field) in record' :key='field.name'>
              {{field}}
           </td>
       </tr>




       </table>
       
    </div>
  </div>
</template>

<script>
 import axios from 'axios';
 axios.defaults.withCredentials = true;
 import router from '../router/index'
export default {
  data() {
    return {
      courses:[]
    }
  },
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
      },
      async logout() {
        const results=await axios.get('http://localhost:8068/logout');
        this.$router.push('/screen');
    }

  },
  created() {
      axios.get('http://localhost:8068/course/all').then((res)=>{
        if(res.data.status==='redirect') {
          this.$router.replace('login');
        }
        this.courses=res.data;
        console.log(res);
      })
  }
}
</script>

<style>

#student tr:hover {background-color: rgb(232, 195, 227);}

button {
 
  background-color: #af65eb; /* Green */
  border: none;
  color: white;
  margin:20px;
  padding: 15px 32px;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  font-size: 16px;

}

</style>