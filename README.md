# Alert Component Vue
<p align="center">
  <a href="https://www.npmjs.com/package/z-vue-alert"><img src="https://img.shields.io/github/license/zorasantos/z-vue-alert" alt="License"></a>
  <a href="https://npmcharts.com/compare/z-vue-alert?minimal=true"><img src="https://img.shields.io/npm/dw/z-vue-alert" alt="Downloads"></a>
  <a href="https://www.npmjs.com/package/z-vue-alert"><img src="https://img.shields.io/npm/v/z-vue-alert?color=green" alt="Version"></a>
</p>

<p align="center">
  <img src="https://res.cloudinary.com/doampncx5/image/upload/v1595633531/alert.png"/>
</p>

## Installing

Using npm:

```bash
$ npm i z-vue-alert
```

## Example
```vue
<template>
  <div>
    <z-vue-alert type="info">
      <span>Eu sou um alerta de informação!</span>
    </z-vue-alert>
    <z-vue-alert type="warning">
      <span>Eu sou um alerta de perigo!</span>
    </z-vue-alert>
    ou
    <z-vue-alert type="error" text="Eu sou um alerta de erro!" />
    <z-vue-alert type="success" text="Eu sou um alerta de sucesso!" />
  </div>
</template>

<script>
import Alert from 'z-vue-alert'

export default {
  components: {
    'z-vue-alert': Alert,
  }
}
</script>
```
