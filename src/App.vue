<template>
  <div id="app">
    <header>
      <h1>Custom Tracker</h1>
    </header>
  </div>
</template>

<style lang="scss">
html {
  font-size: 62.5%;
}
body {
  font-family: "Gill Sans", "Gill Sans MT", Calibri, "Trebuchet MS", sans-serif;
  margin: 0;
  background: whitesmoke;
}
div#app {
  header {
    @include flex(column, flex-start, center);
    background: linear-gradient(#f5f5f5, #f1bdbd, #f5f5f5);
    width: 100%;

    h1 {
      font-size: 5rem;
    }
  }
}
</style>
