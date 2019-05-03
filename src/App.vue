<template>
  <div class="container" id="app">
    <div id="nav">
      <router-link to="/">Home</router-link> |
      <router-link to="/about">About</router-link> |
      <router-link to="/test">Test</router-link>
    </div>
    <router-view/>

  </div>
</template>

<style lang="less">
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  text-align: center;
}
#nav {
  padding: 30px;
  a {
    font-weight: bold;
    color: #42b983;
    &.router-link-exact-active {
    color: #2c3e50;

  }
  }
}
</style>
