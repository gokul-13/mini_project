<template>
  <div>
      <nav>
        <router-link to="/screen">Home</router-link> |
        <router-link to="/about">About</router-link>
    </nav>
    <router-view/>
  </div>
</template>

<script>
export default {
    data() {
        return {
            show_login:true,
            show_signup:true
        }
    },
    methods: {
        makefalse() {
            this.show_login=false;
            this.show_signup=false;
        }
    },
    beforeMount() {

    }

}
</script>

<style>

</style>