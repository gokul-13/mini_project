<template>
    <label class='form__label'>Registration No</label><br>
   <input type='text' placeholder="Registration Number" v-model='reg_no' required><br>
   <button @click='submit'>Get Marks</button>
   <div v-show='show'>
       <h1>Student Name: {{data_rec.name}}</h1>
   <table id='student'>
       <tr>
           <th> Course Id</th>
           <th> Course Name</th>
           <th> Marks Scored</th>
       </tr>
       <tr v-for='record in data_rec.value' :key="record.name">
           <td v-for='(field) in record' :key='field.name'>
              {{field}}
           </td>
       </tr>

   </table>
   </div>
</template>

<script>
const validate=require('../validation');
import axios from 'axios';
export default {
        data() {
            return {
                reg_no:'',
                data_rec:[],
                show:false
            }
        },
        methods:{
            async submit() {
                console.log(this.reg_no);
                if(!validate.validateRegNo(this.reg_no,4)) {alert("Invalid Register Number");return;}
                const res=await axios.get(`http://localhost:8068/student/view/${this.reg_no}`);
                console.log(res.data);
                if(res.data.status==='failure') {
                    alert("Student Not Found");
                }
                else if(res.data.status==='no_records_found') {
                    alert("No record exists");

                }
                else {
                        this.data_rec=res.data;
                        this.show=true;
                }
            }
        },
         async created() {
           const res= await axios.get('http://localhost:8068/check')
            console.log(res.data);
           if(res.data.status==='redirect') {
                this.$router.replace('/login');
           }
      },
}
</script>

<style>

</style>