<template>
  <div>
    <h1></h1>
    <table>
      <tr>
        <th>Register Number</th>
        <th>Student Name</th>
        <th>Email Address</th>
      </tr>
      <tr v-for="student in student_data" :key="student.id">
         <td v-for="item in student" :key="item.id">
           {{item}}
         </td>
      </tr>
    </table>
  </div>
</template>

<script>
import axios from 'axios';
export default {
  props:['obj'],
      data() {
        return {
          student_data:{}
        }
      },
     async created() {
           const res= await axios.get('http://localhost:8068/student/')
          console.log(res.data);
           this.student_data=res.data.student;
      }


}
</script>

<style>

</style>