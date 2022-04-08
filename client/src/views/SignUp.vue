<template>
    <div>
        <h1>Sign Up</h1>
        <label>Name</label><br>
        <input type="text" placeholder="Name" v-model='user.name' required><br>
          <label>Email</label><br>
        <input type="text" placeholder="Email" v-model='user.email' required><br>
          <label>Id</label><br>
        <input type="text" placeholder="Id" v-model='user.id'><br>

         <label>Password</label><br>
        <input type="password" placeholder="Password" v-model='user.password'><br>
        
        <input type="radio"  style="width:1%" id="short" v-model='user.role' value='teacher'>   <label>Teacher</label><br>
        <input type="radio" style="width:1%"  id="short" v-model='user.role' value='student'>   <label>Student</label><br>

        <button @click='submit'>SignUp</button>


    </div>
</template>
<script>
import axios from 'axios';
export default {
    data() {
        return {
            user:{
                name:'',
                email:'',
                id:'',
                role:'',
                password:''
            }
        }
    },
    methods: {
        async submit() {
            console.log(this.user);
            try {
            const results=await axios.post('http://localhost:8068/signup',this.user);
            if(results.data.status==='success') {
                    alert("User Created");
                    this.$router.replace('/login');
            }
            else {throw "err";}
            }catch(err) {
                alert("SignUp Failed");
                this.$router.go();
            }
            
        }
    }

}
</script>

<style scoped>
  
</style>>


