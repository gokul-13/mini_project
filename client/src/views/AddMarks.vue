<template>
   <IntBox llabel='Register Number'></IntBox>
   <TextBox llabel='Student Name' :action='action' v-show='name'></TextBox>
   <IntBox llabel='Course Id'></IntBox>
   <TextBox llabel='Course Name' :action='action' v-show='course'></TextBox>
   <IntBox llabel='Marks'></IntBox>
   <button> Click to Submit</button>
   
</template>

<script>
import IntBox from '../components/IntBox'
import TextBox from '../components/TextBox'
export default {
    components:{IntBox,TextBox},

    data() {
        return {
            name:false,
            course:false,
            action:'old'
        }
    }

}
</script>

<style>

</style>