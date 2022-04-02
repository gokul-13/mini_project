<template>
  <div>
        <form class='form__group' >
             <TextBox llabel='Enter the Course id' :action='action' v-on:printDetails='course.cid=$event;'></TextBox>
            <TextBox llabel='Enter the  Course name' :action='action' v-on:printDetails='course.cname=$event;sendData()'></TextBox>
            
            <button @click='changeState'>Click to enter</button>
            
        </form>
    </div>
</template>

<script>
import TextBox from '../components/TextBox';
import axios from 'axios'
export default {
    data() {
        return {
            action:'old',
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
            const res=await axios.post('http://localhost:8068/course/add',this.course);
            console.log(res.data);
            if(res.data.status==='success') alert("Course Successfully added");
            else {
                alert("Add Failed");
            }
        }
    }
}
</script>

<style>

</style>