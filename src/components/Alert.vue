<template>
  <div class="alert" :style="{ borderTop: `5px solid ${alerts[type].colorTop}`,  backgroundColor: alerts[type].color, color: '#FFF' }">
    <div class="alert-items">
      <span>{{ text }}</span>
      <slot></slot>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      alerts: {
        success: {
          color: '#4CAF50',
          colorTop: '#81C784'
        },
        warning: {
          color: '#FB8C00',
          colorTop: '#FFB74D'
        },
        error: {
          color: '#FF5252',
          colorTop: '#EF9A9A'
        },
        info: {
          color: '#2196F3',
          colorTop: '#64B5F6'

        }
      }
    }
  },
  props: ['type', 'text']
}
</script>

<style>
  .alert {
    display: flex;
    align-items: center;
    min-height: 50px;
    max-width: 800px;
    border-radius: 5px;
  }
  .alert-items {
    display: flex;
    align-items: center;
    margin-left: 10px;
  }
  .alert-items span {
    margin-left: 10px;
  }
</style>