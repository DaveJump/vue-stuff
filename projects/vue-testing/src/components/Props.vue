<template>
  <div>
    <input type="text" id="input" v-model="text">
    <div id="info" v-if="!!info.length">{{info}}</div>
  </div>
</template>

<script>
export default {
  props: {
    minlength: {
      type: [Number, String],
      default: 5,
    }
  },
  data() {
    return {
      text: ''
    }
  },
  computed: {
    info() {
      return this.text.length < this.minlength ? `Text must be at least ${this.minlength} characters` : ''
    }
  }
}
</script>
