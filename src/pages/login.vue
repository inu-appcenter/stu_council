<template>
  <div id="login">
    <form @submit="approve_login(id, password)">
      <input type="text" v-model="id" placeholder="your id">
      <input type="password" v-model="password" placeholder="your password">
      <input type="submit" value="로그인">
    </form>
  </div>
</template>

<script>
export default {
  name: "login",

  created(){

  },

  data: () => ({
    id: '',
    password: '',
  }),

  methods: {
      approve_login(id, password) {

      },
  },

  computed: {

  },
}
</script>
