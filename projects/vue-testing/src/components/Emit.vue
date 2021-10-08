<template>
  <button id="button" @click="handleClick"></button>
</template>

<script>
export default {
  data() {
    return {
      count: 0
    }
  },
  methods: {
    handleClick() {
      this.count++
      const value =
        this.count >= 3
          ? { count: this.count, even: this.count % 2 === 0 }
          : this.count
      this.$emit('increment', value)
    }
  }
}
</script>
