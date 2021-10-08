<template>
  <div id="app">
    <CSlots>
      <template #main="data">
        <div>{{ data.msg }}</div>
      </template>
    </CSlots>
  </div>
</template>

<script>
import CSlots from '@/components/Slots'
export default {
  components: {
    CSlots
  },
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
