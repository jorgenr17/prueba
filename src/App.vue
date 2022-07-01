<template>
  <div id="app" class="full-height">
    <modal :data="dataModal" />
    <router-view></router-view>
  </div>
</template>

<script>
import modal from '@/components/modal.vue'
import eventBus from '@/boot/eventBus'

export default {
  name: 'App',
  mounted () {
    this.initEvents()
  },
  data: () => ({
    dataModal: {}
  }),
  methods: {
    initEvents () {
      eventBus.$on('modal', data => {
        console.log(data)
        this.dataModal = data
      })
    }
  },
  components: { modal }
}
</script>

<style>
html, body {
  height: 100%;
}

.full-height {
    height: 100%;
  }

input::-webkit-outer-spin-button,
  input::-webkit-inner-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }

  /* Firefox */
  input[type=number] {
    -moz-appearance: textfield;
  }
</style>
