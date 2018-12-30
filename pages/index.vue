<template>
  <section class="container">
    <div>
      <h1 class="title">gangstercode</h1>
      <h2 class="subtitle">My bedazzling Nuxt.js project</h2>
      <button
        class="border border-grey-light p-2"
        @click="successMsg"
      >Click Me</button>
    </div>
  </section>
</template>

<script>
import VueNotifications from 'vue-notifications'
export default {
  components: {},
  data() {
    return {}
  },
  methods: {
    successMsg() {
      this.showSuccessMsg()
    }
  },
  notifications: {
    showSuccessMsg: {
      type: VueNotifications.types.success,
      title: 'Hello there',
      message: "That's the success!"
    }
  }
}
</script>

<style>
.title {
  font-family: 'Quicksand', 'Source Sans Pro', -apple-system, BlinkMacSystemFont,
    'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif;
  display: block;
  font-weight: 300;
  font-size: 100px;
  color: #35495e;
  letter-spacing: 1px;
}
</style>
