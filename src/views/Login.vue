<template>
  <div class="login">
    <h1 v-if="registered">Log In</h1>
    <h1 v-else>Register</h1>
    <form v-on:submit="handleSubmit">
      <div>
        <label>Username</label>
        <input type="text" name="username" v-on:input="handleChange" />
      </div>
      <div>
        <label>Password</label>
        <input type="password" name="password" v-on:input="handleChange" />
      </div>
      <button>Submit</button>
    </form>
    <p v-if="registered">
      Don't have an account?
      <button v-on:click="setRegistered()">Make One</button>
    </p>
    <p v-else>
      Already have an account?
      <button v-on:click="setRegistered()">Log In</button>
    </p>
  </div>
</template>

<script>
export default {
  name: "Login",
  data() {
    return {
      input: {
        username: "",
        password: ""
      },
      registered: true
    };
  },
  methods: {
    handleSubmit(e) {
      e.preventDefault();
      this.axios
        .post(
          `https://localhost:5001/auth/${
            this.registered ? "login" : "register"
          }`,
          this.input
        )
        .then(res => {
          console.log(res.data);
          this.$store.dispatch("login", res.data);
        })
        .catch(({ response }) => console.error(response.data));
    },
    handleChange(e) {
      this.input = { ...this.input, [e.target.name]: e.target.value };
    },
    setRegistered() {
      this.registered = !this.registered;
    }
  }
};
</script>

<style lang="scss">
form {
  @include flex(column, center, center);

  div {
    @include flex(column);
    margin: 5px 0;

    input {
      padding: 5px 10px;
      font-size: 1.2rem;
      border-radius: 2.5px;
      border: 1px solid $inactive;
      transition: 0.3s ease;

      &:focus {
        background: $inactive;
        border: 1px solid $active;
        color: $active;
        outline: none;
      }
    }
  }

  button {
    background: $active;
    border: 1px solid $inactive;
    padding: 5px 15px;
    border-radius: 2.5px;
    cursor: pointer;
    transition: 0.3s ease;
    font-size: 1.2rem;
    margin: 5px 0;

    &:hover {
      background: $inactive;
      border: 1px solid $active;
      color: $active;
    }
  }
}
</style>
