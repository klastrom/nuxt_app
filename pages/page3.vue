<template>
  <div>
    <section>
      <h1>セクション3</h1>
      <p>texttexttexttexttexttexttexttexttexttexttexttext</p>
    </section>
    <my-login />
  </div>
</template>

<script>
import MyLogin from "../components/MyLogin";

export default {
  components: {
    MyLogin
  }
}

</script>

<style scoped>
section {
  background: #ff4500;
}

</style>