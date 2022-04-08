<template>
    <div>
        <h1>Login</h1>
       
          <label>Id</label><br>
        <input type="text" placeholder="Id" v-model='user.id'><br>

         <label>Password</label><br>
        <input type="password" placeholder="Password" v-model='user.password'><br>
        
        <input type="radio"  style="width:1%" id="short" v-model='user.role' value='teacher'>   <label>Teacher</label><br>
        <input type="radio" style="width:1%"  id="short" v-model='user.role' value='student'>   <label>Student</label><br>

        <button @click='submit'>Login</button><br>
        <label>No account? SignUp then..</label><br>
        <button @click='$router.replace("/signup")'>SignUp</button><br>
    </div>
</template>
<script>
import axios from 'axios';
axios.defaults.withCredentials = true;
export default {
    data() {
        return {
            user:{
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
            const results=await axios.post('http://localhost:8068/login',this.user);
            console.log(results);
            if(results.data.status==='success') {
                if(results.data.role==='teacher') {
                    alert("Logged In");
                    this.$router.replace('/home');
                }
                else {
                    alert("Student Login");
                    this.$router.replace('/student/login');
                }
            }
            else {
              alert(results.data.message);
            }
            }catch(err) {
                alert("Login Failed Failed");
                this.$router.go();
            }
            
        }
    }

}
</script>

<style scoped>
  
</style>>


