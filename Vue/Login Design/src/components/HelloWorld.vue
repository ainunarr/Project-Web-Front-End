<template>
  <div class="hello">
    <nav class="navbar navbar-light bg-light">
      <div class="container">
        <a class="navbar-brand" href="#">
          <img alt="Vue logo" src="../assets/logo.png" width="30" height="30">
        </a>
        <button type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#loginModal">
          Login
        </button>
      </div>
    </nav>

    <LoginComponent ref="loginComponent" />
  </div>
</template>

<script>
import LoginComponent from './LoginComponent.vue';

export default {
  name: 'HelloWorld',
  components: {
    LoginComponent
  },
  methods: {
    showLoginModal() {
      // Panggil method showModal pada komponen LoginComponent
      this.$refs.loginComponent.showModal();
    }
  }
}
</script>

<style scoped>
  .hello {
    padding: 20px;
  }
  h3 {
    margin: 40px 0 0;
  }
  ul {
    list-style-type: none;
    padding: 0;
  }
  li {
    display: inline-block;
    margin: 0 10px;
  }
  a {
    color: #42b983;
  }
</style>
