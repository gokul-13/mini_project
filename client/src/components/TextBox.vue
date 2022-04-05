<template>
  <div class='form__group'>
      <label class='form__label'>{{llabel}}</label><br>
      <input :name="llabel" :disabled='to_disable' class='form__filed' type='text' :placeholder='llabel' v-model='name'>
  </div>
</template>

<script>
import axios from 'axios';
export default {
    data() {
      return {
          name:'',          
          to_disable:false
      }
    },
    props:['llabel','action','text_sent'],
    watch: {
      action: function(newvalue) {
        if(newvalue==='new') {
          this.$emit('printDetails',this.name)
        }
      } 
    }
}
</script>

<style>

</style>