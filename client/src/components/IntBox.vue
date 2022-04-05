<template>
  <label>{{llabel}}</label>
  <input type='number' :placeholder="llabel" v-model='value' @blur="$emit('getname',value)">
</template>

<script>
export default {
    props:['llabel'],
    data() {
      return {
        value:''
      }
    }

}
</script>

<style>

</style>