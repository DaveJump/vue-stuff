<template>
  <div>
    <slot></slot>
    <header>
      <slot name="header"></slot>
    </header>
    <main>
      <slot :msg="message" name="main"></slot>
    </main>
    <footer>
      <slot name="footer"></slot>
    </footer>
  </div>
</template>

<script>
export default {
  data() {
    return {
      message: 'Message'
    }
  }
}
</script>
