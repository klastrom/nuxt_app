<template>
  <div class="content">
    <my-header />
    <section>
      <h1>トップページ</h1>
      <p>texttexttexttexttexttexttext</p>
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

</style>