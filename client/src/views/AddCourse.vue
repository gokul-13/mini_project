<template>
  <div>
            <h2 v-show="success" style="color:green">Course Successfully Added</h2>
             <TextBox llabel='Course id' :action='action' v-on:printDetails='course.cid=$event;this.action="old"'></TextBox>
            <TextBox llabel='Course name' :action='action' v-on:printDetails='course.cname=$event;this.action="old";sendData()'></TextBox>
            
            <button @click='changeState'>Click to enter</button>
            
    </div>
</template>

<script>
import TextBox from '../components/TextBox';
import axios from 'axios';
const validate=require('../validation');
export default {
    data() {
        return {
            action:'old',
            error_message:'',
            success:false,
            course:{
                cid:'',
                cname:''
            }
        }
    },
    components:{
        TextBox
    },
    methods: {
        changeState() {
                this.action='new';
        },
        async sendData() {
            console.log('In send data');

            if(!validate.validateRegNo(this.course.cid,3)) {this.error_message='Invalid Course Id';alert(this.error_message);return;}
            if(!validate.validateName(this.course.cname)) {this.error_message='Invalid Course Name';alert(this.error_message);return;}
            const res=await axios.post('http://localhost:8068/course/add',this.course);
            console.log(res.data);
            if(res.data.status==='success') {this.success=true;setTimeout(()=>{this.$router.go()},2000)}
            else {
                alert("Add Failed");
            }
        }
    }
}
</script>

<style>

</style>