<template>
  <div>
    <my-header />
    <section>
      <h1>セクション2</h1>
      <p>さんぷるてきすと</p>
    </section>
    <my-login />
  </div>
</template>


<script>
import MyLogin from "../components/MyLogin";
import MyHeader from "../components/MyHeader";
export default {
  components: {
    MyLogin,
    MyHeader
  }
}

</script>
<style scoped>
h1 {
  background: #eee;
}
</style>