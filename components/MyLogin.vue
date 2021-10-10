<template>
  <div class="content">
    <section>
      <h1>ログイン状態</h1>
      <p>{{islogin}}</p>
      <button v-on:click="login()">ログイン</button>
      <button v-on:click="logout()">ログアウト</button>
    </section>
  </div>
</template>

<script>
export default {
  computed: {
    islogin(){
      return this.$store.state.islogin;
    }
  },
  methods: {
    login: function(){
      this.$store.commit("login")
    },
    logout: function(){
      this.$store.commit("logout")
    }
  }
}
</script>

<style scoped>

</style>