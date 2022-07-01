<template>
  <div class="container">
    <div class="pt-4 fs-4 pb-4">{{ $route.params.id ? 'Edit Order' : 'New Order' }}</div>
    <form class="row g-3 needs-validation" novalidate @submit="$route.params.id ? updateOrder($event) : saveOrder($event)">
      <div class="row">
        <div class="col-sm-12 col-md-4 col-xl-4">
          <input type="number" class="form-control" placeholder="Order id" v-model="order.id" required>
        </div>
        <div class="col-sm-12 col-md-4 col-xl-4">
          <input type="text" class="form-control" placeholder="Date" v-model="order.date" disabled>
        </div>
        <div class="col-sm-12 col-md-4 col-xl-4">
          <input type="text" class="form-control" placeholder="Description" v-model="order.description" required>
        </div>
      </div>
      <div class="row mt-4">
        <div class="col-sm-12 col-md-4 col-xl-4">
          <input type="number" class="form-control" placeholder="price" v-model="order.price" required>
        </div>
        <div class="col-sm-12 col-md-4 col-xl-4">
          <input type="text" class="form-control" placeholder="Location" v-model="order.location" required>
        </div>
        <div class="col-sm-12 col-md-4 col-xl-4">
          <div class="dropdown">
            <a class="btn btn-secondary dropdown-toggle" href="#" role="button" id="dropdownMenuLink" data-bs-toggle="dropdown" aria-expanded="false">
              {{ order.state || 'Select estate' }}
            </a>

            <ul class="dropdown-menu" aria-labelledby="dropdownMenuLink">
              <li><a class="dropdown-item" @click="order.state = 'new'">New</a></li>
              <li><a class="dropdown-item" @click="order.state = 'process'">Process</a></li>
              <li><a class="dropdown-item" @click="order.state = 'delivery'">Delivery</a></li>
              <li><a class="dropdown-item" @click="order.state = 'finish'">Finish</a></li>
            </ul>
          </div>
        </div>
      </div>
      <div class="row justify-content-end mt-4">
        <div class="col-3">
          <div class="d-grid gap-2">
            <button v-if="$route.params.id" type="submit" class="btn btn-primary">Actualizar</button>
            <button v-else type="submit" class="btn btn-primary">Guardar</button>
          </div>
        </div>
      </div>
    </form>
  </div>
</template>
<script>
import { GET, POST, PUT } from '@/boot/http'
import { getCurrentDate } from '@/utils/date'

const defaultOrder = () => ({
  "id": null,
  "date": getCurrentDate(),
  "description": "",
  "price": "",
  "location": "",
  "state": "new"
})

export default {
  name: 'FormOrder',
  mounted () {
    if (this.$route.params.id) {
      this.getOrder(this.$route.params.id)
    }
  },
  data: () => ({
    order: defaultOrder()
  }),
  methods: {
    getOrder (id) {
      GET({
        url: `/orders/${id}`
      }).then(response => {
        this.order = response.data
      }).catch(error => {
        alert(error.message)
      })
    },
    updateOrder (event) {
      event.preventDefault()
      event.stopPropagation()
      if (this.validateForm()) {
        PUT({
          url: `/orders/${this.order.id}`,
          data: this.order
        }).then(() => {
          // this.order = response.data
          alert('Actualización satisfactoria')
          this.$router.push('/home/inicio')
        }).catch(error => {
          alert(error.message)
        })
      }
    },
    saveOrder (event) {
      event.preventDefault()
      event.stopPropagation()
      if (this.validateForm()) {
        POST({
          url: `/orders/`,
          data: this.order
        }).then(response => {
          console.log(response.data);
          alert('La orden se ha creado satisfactoriamente')
          this.$router.push('/home/inicio')
        }).catch(error => {
          alert(error.message)
        })
      }
    },
    validateForm () {
      let value = true
      var forms = document.querySelectorAll('.needs-validation')
      Array.prototype.slice.call(forms)
        .forEach(function (form) {
          if (!form.checkValidity()) {
            value = false
          }
          form.classList.add('was-validated')
        })
      return value
    }
  }
}
</script>