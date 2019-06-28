<template>
  <p>Waiting for server response...</p>
</template>

<script>
export default {
  name: "logout",

  mounted() {
    this.$session.clear();
    this.$session.destroy();
    window.location.href = "/";
    this.$router.go(-1);
  }
};
</script>
