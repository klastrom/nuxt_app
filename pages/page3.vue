<template>
  <div>
    <my-header />
    <section>
      <h1>セクション3</h1>
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
    MyLogin,
    MyHeader
  }
}

</script>

<style scoped>
section {
  background: #ff4500;
}

</style>