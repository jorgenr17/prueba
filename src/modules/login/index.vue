<template>
  <div class="bg-secondary">
    <div class="container">
      <navBar />
      <cardLogin />
    </div>
  </div>
</template>

<script>
import navBar from './components/navBar.vue'
import cardLogin from './components/card.vue'

export default {
  name: 'LoginComponent',
  components: { navBar, cardLogin },
  data: () => ({})
}
</script>