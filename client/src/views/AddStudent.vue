
<template>
    <div>
            <h2 v-show='success' style="color:green">Student Successfully Added</h2>
             <TextBox llabel='Register Number' :action='action' v-on:printDetails='student.id=$event;this.action="old"'></TextBox>
            <TextBox llabel='Name' :action='action' v-on:printDetails='student.name=$event;this.action="old"'></TextBox>
            <TextBox llabel='Email' :action='action' v-on:printDetails='student.email=$event;this.action="old";see();'></TextBox>
            
            <button @click='sendDetails'>Click to enter</button>
    </div>
</template>

<script>
import TextBox from '../components/TextBox.vue';
const validate = require('../validation');
import axios from 'axios'
export default {
        data() {
            return {
                action:'old',
                error_message:'',
                success:false,
                show_error:false,
                student: {
                    id:'',
                    name:'',
                    email:''
                }
            }
        },
        components:{
            TextBox
        },
        methods: {
            sendDetails() {
                this.action='new';
            },
            see() {

                console.log(this.student);
                if(!validate.validateRegNo(this.student.id,4)) {this.error_message='Invalid Register Number';alert(this.error_message);return;}
                if(!validate.validateName(this.student.name)) {this.error_message='Invalid Student Name';alert(this.error_message);return;}
                if(!validate.validateEmail(this.student.email)) {this.error_message='Invalid Email Address';alert(this.error_message);return;}
    
               axios.post('http://localhost:8068/student/add',this.student).then((res)=>{
                   if(res.data.status==='success') {
                       this.success=true;
                       setTimeout(()=>{
                           this.$router.go();
                       },2000);
                   }
                   else {alert('User Already exists');}
               })
            }
        }
}
</script>

<style>
input {
    font-size:20px;
  width: 40%;
  padding: 12px 20px;
  margin: 8px 0;
  box-sizing: border-box;
  border: 2px solid rgb(146, 16, 169);
  border-radius: 4px;
}
label {
  font-size:20px;
  font-weight:bold;
  width: 40%;
  padding: 12px 20px;
  margin: 8px 0;
  box-sizing: border-box;
}

</style>