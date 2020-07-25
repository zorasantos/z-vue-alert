<template>
  <div id="app">
    <z-vue-alert type="info">
      <span>Eu sou um alerta de informação!</span>
    </z-vue-alert> <br />
    <z-vue-alert type="error">
      <span>Eu sou um alerta de erro!</span>
    </z-vue-alert><br />
    <z-vue-alert type="warning" text="Eu sou um alerta de perigo!"/><br />
    <z-vue-alert type="success" text="Eu sou um alerta de sucesso!" />
  </div>
</template>

<script>

export default {
  name: 'App'
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
