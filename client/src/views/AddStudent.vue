
<template>
    <div>
        <form >
            <TextBox llabel='Enter the name' :action='action' v-on:printDetails='student.name=$event;'></TextBox>
            <TextBox llabel='Enter the password' :action='action' v-on:printDetails='student.email=$event;see();'></TextBox>
            
            <button @click='sendDetails'>Click to enter</button>
            
        </form>
    </div>
</template>

<script>
import TextBox from '../components/TextBox.vue';
export default {
        data() {
            return {
                action:'old',
                student: {
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
            }
        }
}
</script>
