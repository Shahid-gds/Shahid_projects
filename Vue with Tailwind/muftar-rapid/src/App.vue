<template>
  <router-view/>
</template>

<style>
*{
  margin: 0;
  padding: 0;
}
#app {
  font-family: Avenir, 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
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
:root{
  --primary: #304276;
}
.bg-theme{
  background-color: var(--primary);
}
</style>
