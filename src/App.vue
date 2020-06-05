<template>
  <div id="app">
    <div id="nav">
      <router-link to="/">Home</router-link>
      <router-link to="/login">{{$store.state.user ? 'Login': 'Log Out'}}</router-link>
    </div>
    <router-view />
  </div>
</template>

<style lang="scss">
body {
  margin: 0;
}

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: $inactive;
}

#nav {
  @include flex($justify: space-around);
  padding: 10px;
  background: linear-gradient($navbg, white);

  a {
    font-weight: bold;
    color: $inactive;
    text-decoration: none;
    transition: 0.3s ease;

    &:hover {
      color: $active;
      text-decoration: underline;
    }

    &.router-link-exact-active {
      color: $active;
      text-decoration: underline;
      font-size: 1.2rem;
    }
  }
}
</style>
