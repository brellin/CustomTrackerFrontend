<template>
  <div class="login">
    <h1>{{registered?'Log In':'Register'}}</h1>
    <form @submit="handleSubmit">
      <div>
        <label>Username</label>
        <input type="text" name="username" @input="handleChange" />
      </div>
      <div>
        <label>Password</label>
        <input type="password" name="password" @input="handleChange" />
      </div>
      <button>Submit</button>
    </form>
    <p>
      {{ registered ? 'Don\'t have an account?': 'Already have an account?'}}
      <button
        @click="setRegistered()"
      >{{registered?'Make One':'Log In'}}</button>
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
    font-size: 1.2rem;
  }
}
button {
  background: $active;
  border: 1px solid $inactive;
  padding: 5px 15px;
  border-radius: 2.5px;
  cursor: pointer;
  transition: 0.3s ease;
  margin: 5px 0;

  &:hover {
    background: $inactive;
    border: 1px solid $active;
    color: $active;
  }

  &:focus {
    outline: none;
  }
}
</style>
