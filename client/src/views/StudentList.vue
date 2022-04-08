<template>
  <div>
    <h1></h1>
    <table id="student">
      <tr>
        <th>Register Number</th>
        <th>Student Name</th>
        <th>Email Address</th>
      </tr>
      <tr v-for="student in student_data" @click="remove(student.id)" :key="student.id">
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
           if(res.data.status==='redirect') {
                this.$router.replace('/login');
           }
           this.student_data=res.data.student;
      },
      methods: {
          async remove(id) {
            console.log("ID got:"+id);
            if(confirm("Do you want to delete Id:"+id)) {
              console.log("Delete Confirmed");
              const result=await axios.delete(`http://localhost:8068/student/delete/${id}`);
              console.log(result);
             
              if(result.data.status==='success') {
                alert("Succesfully Deleted");
                this.$router.go();
              }
              else {
                alert("Delete Failed");
              }
            }
            else {
              console.log("Delete Rejected");
            }
          }
      }


}
</script>

<style>

#student {
  font-family: Arial, Helvetica, sans-serif;
  border-collapse: collapse;
  width: 70%;
  margin-left: auto; 
  margin-right: auto;
}


#student td, #student th {
  border: 1px solid #ddd;
  padding: 8px;
  text-align:center;
  
}

th {
  text-align: center;
}

#student tr:nth-child(even){background-color: #ecc1f6;}

#student tr:hover {background-color: rgb(235, 127, 223);}

#student th {
  padding-top: 12px;
  padding-bottom: 12px;
  text-align: center;
  background-color: #ad80d8;
  color: white;
}



</style>