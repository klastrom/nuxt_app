<template>
  <div>
    <my-header />
    <section>
      <h1>セクション1</h1>
      <p>texttexttexttexttexttexttexttexttexttexttexttext</p>
    </section>
    <my-login />
  </div>
</template>

<script>
import MyLogin from "../components/MyLogin";
import MyHeader from "../components/MyHeader";

export default {
  components: {
    MyHeader,
    MyLogin,
  },
};
</script>

<style scoped>
body {
  background: #eee;
}
</style>
