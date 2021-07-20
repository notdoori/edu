<template>
  <div id="app">
    <div id="nav">
      <router-link to="/">Home!</router-link> |
      <router-link to="/about">About!</router-link>
    </div>
    <router-view/> <!-- router-link 의 to 에 해당하는 내용으로 replace -->
    <!-- 페이지는 변경 되지만, 페이지 리로딩 하지 않고 모두 index.html 에서 처리 => SPA -->
  </div>
</template>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}
</style>
