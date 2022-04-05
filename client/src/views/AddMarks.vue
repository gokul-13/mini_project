<template>
   <h2 v-show='success' style="color:green"> Marks Inserted Sucessfully</h2>
   <h2 v-show='failue' style="color:red"> {{error_message}}</h2>
    <label class='form__label'>Registration No</label><br>
   <input type='number' placeholder="Enter the student Registration Number" v-model='reg_no' @blur='getName' required><br>
    <label class='form__label' v-show="name_show">Student Name</label><br>
   <input type='name' placeholder="course_name" v-show='name_show' :value='name' disabled><br>
    <label class='form__label'>Course id</label><br>
   <input type='number' placeholder="Enter the Course No" v-model='c_no' @blur='getCourse' required><br>
    <label class='form__label' v-show="cname_show">Course Name</label><br>
   <input type='text'  v-show="cname_show" :value='cname' disabled><br>
    <label class='form__label'>Mark Scored</label><br>
   <input type='text' placeholder="Enter the Marks" v-model="mark"><br>
   <button @click='submitMarks' v-show="show_submit"> Submit</button>
   <button @click='updateMarks' v-show="show_update"> Update</button>
   
</template>

<script>
  import axios from 'axios';

export default {
  
    data() {
        return {
            name_show:false,
            cname_show:false,
            name:'',
            cname:'',
            reg_no:'',
            c_no:'',
            mark:'',
            success:false,
            failue:false,
            error_message:"",
            show_submit:true,
            show_update:false
        }
    },
    methods: {

        updateMarks() {
            axios.put(`http://localhost:8068/mark/update/${this.reg_no}/${this.c_no}/${this.mark}`).then((res)=>{
                if(res.data.status==='success') {
                    alert("Marks Updated Successfully");
                    setTimeout(()=>{this.$router.go()},2000);
                }
                else {
                    alert("Some error occured");
                }
        })
        },

        async getName() {
            axios.get(`http://localhost:8068/student/detail/${this.reg_no}`).then((res)=>{
                console.log(res.data);
                if(res.data.length==0) {alert("Invalid Register Number");this.reg_no='';this.name='';return;}
                this.name=res.data[0].name;
                this.name_show=true;
            }).catch((err)=>{
                console.log(err);
            })
        },
        async getCourse() {

            axios.get(`http://localhost:8068/course/detail/${this.c_no}`).then((res)=>{
                console.log(res.data);
                if(res.data.length==0) {alert("Invalid Course Number");this.c_no='';this.cname='';return;}
                this.cname=res.data[0].name;
                this.cname_show=true;
            }).catch((err)=>{
                console.log(err);
            })
        },
        async submitMarks() {
            if(this.mark<0 || this.mark>100) {alert("Marks Out of Range");return;}
            axios.post('http://localhost:8068/mark/add',{sid:this.reg_no,mark:this.mark,cid:this.c_no}).then((res)=>{
                console.log('Resda:'+res);
                if(res.data.status==='success') {
                    console.log(res);
                    this.success=true;
                    setTimeout(()=>{this.success=false;this.$router.go()},2000);
                }
                else {
                    this.error_message=res.data.message;
                    this.failue=true;
                    setTimeout(()=>{
                        this.failue=false;
                        this.show_submit=false;
                        this.show_update=true;
                    },2000)
                }
            })
        },
    }

}
</script>

<style>

</style>