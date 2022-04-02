
<template>
    <div>
        <form class='form__group' >
             <TextBox llabel='Enter the student Register Number' :action='action' v-on:printDetails='student.id=$event;'></TextBox>
            <TextBox llabel='Enter the name' :action='action' v-on:printDetails='student.name=$event;'></TextBox>
            <TextBox llabel='Enter the email' :action='action' v-on:printDetails='student.email=$event;see();'></TextBox>
            
            <button @click='sendDetails'>Click to enter</button>
            
        </form>
    </div>
</template>

<script>
import TextBox from '../components/TextBox.vue';
import axios from 'axios'
export default {
        data() {
            return {
                action:'old',
                student: {
                    id:'',
                    name:'',
                    email:' '
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
               axios.post('http://localhost:8068/student/add',this.student).then((res)=>{
                   if(res.data.status==='success') {
                       alert("Student Successfully added")
                   }
                   else {alert('User Already exists');}
               })
            }
        }
}
</script>
