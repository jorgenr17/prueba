<template>
  <!-- <button type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#staticBackdrop">
  Launch static backdrop modal
</button> -->

<!-- Modal -->
  <div class="modal" tabindex="-1" :style="`display: ${data.value}`">
    <div class="modal-dialog">
      <div class="modal-content">
        <div class="modal-header">
          <h5 class="modal-title" id="staticBackdropLabel">{{ data.title }}</h5>
          <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close" @click="close"></button>
        </div>
        <div class="modal-body" v-if="data.message">
          {{ data.message }}
        </div>
        <div class="modal-body">
          <div class="progress">
            <div class="progress-bar progress-bar-striped progress-bar-animated" role="progressbar" aria-valuenow="100" aria-valuemin="0" aria-valuemax="100" style="width: 75%"></div>
          </div>
        </div>
        <div class="modal-footer">
          <button type="button" class="btn btn-secondary" data-bs-dismiss="modal" @click="close">Cancelar</button>
          <button type="button" class="btn btn-primary" @click="close">Aceptar</button>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: 'ModalComponent',
  props: {
    data: { type: Object, default: () => ({ }) }
  },
  data: () => ({}),
  methods: {
    close () {}
  }
}
</script>