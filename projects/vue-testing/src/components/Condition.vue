<template>
  <div>
    <a href="a.com" id="profile" v-if="auth">My Profile</a>
    <a href="b.com" id="login">Login</a>
    <ul id="drop-down" v-show="ddShow"></ul>
  </div>
</template>

<script>
export default {
  data() {
    return {
      auth: false,
      ddShow: false
    }
  }
}
</script>
