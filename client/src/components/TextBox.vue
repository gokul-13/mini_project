<template>
  <div>
      <label>{{llabel}}</label>
      <input :name="llabel"  type='text' :placeholder='llabel' v-model='name'>
  </div>
</template>

<script>
export default {
    data() {
      return {
          name:' '
      }
    },
    props:['llabel','action'],
    watch: {
      action: function(newvalue) {
        if(newvalue='new') {
          this.$emit('printDetails',this.name)
        }
      } 
    }
}
</script>

<style>

</style>