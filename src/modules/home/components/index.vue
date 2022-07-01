<template>
  <div class="container-fluid">
    <div class="row">
      <div class="col-md-2 col-xl-2 border-end border-tertiary d-none d-sm-block">
        <div class="heading-menu border-bottom border-tertiary d-flex align-items-center justify-content-center">
          <span class="fw-bold">menuland</span>
        </div>
        <div class="border-bottom mb-2 border-tertiary d-flex align-items-center justify-content-center pb-2 pt-2">
          <span class="fw-bold fs-7">Infin group s.r.o</span>
        </div>
        <div class="list-group">
          <a v-for="(item, index) in menuList" :key="index" :class="`list-group-item border-0 d-flex align-items-center pt-3 pb-3 ${item.class}`">
            <span class="material-icons me-4 fs-6">
              {{ item.icon }}
            </span>
            <span class="fs-7">{{ item.label }}</span>
          </a>
          <a class="list-group-item border-0 d-flex align-items-center pt-3 pb-3 border-0 border-top mt-4">
            <span class="material-icons me-4 fs-6">
              add
            </span>
            <span class="fs-7">Add food</span>
          </a>
        </div>
      </div>
      <div class="col-md-10 col-xl-10">
        <navBar />
        <div class="row mb-4">
          <div class="col-12 col-md-3 col-xl-3 d-flex align-items-center">
            <span class="fs-3 fw-bold me-3">Orders</span>
            <input type="text" class="form-control" id="search" v-model="search" @input="seacrhData" placeholder="Search" style="height: 2rem">
          </div>
          <div class="col-12 col-md-9 col-xl-9 d-flex dflex align-items-center justify-content-end">
            <div class="dropdown">
              <button class="btn btn-secondary btn-sm dropdown-toggle me-2" type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">
                Filtrar por {{ field }}
              </button>
              <ul class="dropdown-menu" aria-labelledby="dropdownMenuButton1">
                <li><a class="dropdown-item" @click="field = 'location'">Location</a></li>
                <li><a class="dropdown-item" @click="field = 'description'">Description</a></li>
                <li><a class="dropdown-item" @click="field = 'state'">State</a></li>
                <li><a class="dropdown-item" @click="field = 'price'">Price</a></li>
              </ul>
            </div>
            <input class="me-2" type="date" @change="filter">
            <div class="dropdown me-2">
              <button class="btn btn-secondary btn-sm dropdown-toggle" type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">
                Ordenar por {{ sortField }}
              </button>
              <ul class="dropdown-menu" aria-labelledby="dropdownMenuButton1">
                <li><a class="dropdown-item" @click="sortField = 'location', sortData()">Location</a></li>
                <li><a class="dropdown-item" @click="sortField = 'description', sortData()">Description</a></li>
                <li><a class="dropdown-item" @click="sortField = 'state', sortData()">State</a></li>
                <li><a class="dropdown-item" @click="sortField = 'price', sortData()">Price</a></li>
              </ul>
            </div>
            <button type="button" class="btn btn-primary btn-sm" @click="$router.push('/orders/nuevo')">
              <span>Add</span>
            </button>
          </div>
        </div>
        <table class="table table-hover">
          <thead>
            <tr>
              <!-- <th scope="col">#</th> -->
              <th scope="col">Delivery place</th>
              <th scope="col">Date</th>
              <th scope="col">Price</th>
              <th scope="col">Status</th>
              <th scope="col">Actions</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="(order, index) in orders" :key="index">
              <!-- <th scope="row">{{ index + 1 }}</th> -->
              <td>{{ order.location }}</td>
              <td>{{ order.date }}</td>
              <td>${{ order.price }}</td>
              <td>{{ order.state }}</td>
              <td>
                <div class="dropdown">
                  <!-- <button class="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">
                    Dropdown button
                  </button> -->
                  <span class="material-icons pointer" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">
                    more_vert
                  </span>
                  <ul class="dropdown-menu" aria-labelledby="dropdownMenuButton1">
                    <li><a class="dropdown-item" @click="$router.push({ name: 'edit-order', params: { id: order.id } })">Editar</a></li>
                    <li><a class="dropdown-item" @click="confirmDelete(order)">Eliminar</a></li>
                  </ul>
                </div>
              </td>
            </tr>
          </tbody>
        </table>
        <nav aria-label="Page navigation example">
          <ul class="pagination justify-content-end">
            <li :class="`page-item ${pagination.currentPage === pagination.firstPage ? 'disabled' : ''}`">
              <a class="page-link" href="#" aria-label="Previous" @click="getOrders(-1)">
                <span aria-hidden="true">&laquo;</span>
              </a>
            </li>
            <li :class="`page-item ${pagination.currentPage === pagination.lastPage ? 'disabled' : ''}`">
              <a class="page-link" href="#" aria-label="Next" @click="getOrders(1)">
                <span aria-hidden="true">&raquo;</span>
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  </div>
</template>
<script>
import { DELETE, GET } from '@/boot/http'
import navBar from './navBar.vue'
// import eventBus from '@/boot/eventBus'

const defaultPaginacion = () => ({ page: 0, limit: 5 })

export default {
  name: 'HomeComponent',
  components: { navBar },
  mounted () {
    this.getOrders(1)
  },
  data: () => ({
    menuList: [
      {
        label: 'Orders',
        icon: 'inventory',
        class: 'text-primary border-start border-primary border border-4'
      },
      {
        label: 'Companies',
        icon: 'business',
        class: ''
      },
      {
        label: 'Groups',
        icon: 'group',
        class: ''
      },
      {
        label: 'Users',
        icon: 'person',
        class: ''
      },
      {
        label: 'Credits',
        icon: 'motion_photos_on',
        class: ''
      },
      {
        label: 'Documents',
        icon: 'description',
        class: ''
      }
    ],
    orders: [],
    search: '',
    field: 'location',
    sortField: 'location',
    pagination: defaultPaginacion()
  }),
  methods: {
    sortData () {
      GET({
        url: `/orders?_sort=${this.sortField}&_order=asc`
      }).then(response => {
        // const filterOrders = this.filterOrders(response.data)
        this.orders = response.data
        this.pagination = defaultPaginacion()
      }).catch(error => {
        alert(error.message)
      })
    },
    seacrhData (event) {
      const text = event.srcElement.value
      if (text) {
        GET({
          url: `/orders?${this.field}=${text}`
        }).then(response => {
          const filterOrders = this.filterOrders(response.data)
          this.orders = filterOrders
          this.pagination = defaultPaginacion()
        }).catch(error => {
          alert(error.message)
        })
      }
    },
    filter (event) {
      const arrayDate = event.srcElement.value.split('-')
      const date = `${arrayDate[2]}/${arrayDate[1]}/${arrayDate[0]}`
      GET({
        url: `/orders?date_gte=${date}`
      }).then(response => {
        // console.log(response)
        const filterOrders = this.filterOrders(response.data)
        this.orders = filterOrders
        this.pagination = defaultPaginacion()
      }).catch(error => {
        alert(error.message)
      })
    },
    getOrders (value) {
      this.pagination.page += value
      // eventBus.$emit('modal', { value: 'block', message: null, title: 'Cargandordenes' })
      this.pagination.currentPage = `/orders?_page=${this.pagination.page}&_limit=${this.pagination.limit}`
      GET({
        url: this.pagination.currentPage
      }).then(response => {
        const filterOrders = this.filterOrders(response.data)
        this.orders = filterOrders
        const last = response.headers.link ? this.parseLinkHeader(response.headers.link).last : ''
        this.pagination.lastPage = last.substr(21, last.length)
        const first = response.headers.link ? this.parseLinkHeader(response.headers.link).first : ''
        this.pagination.firstPage = first.substr(21, first.length)
        // eventBus.$emit('modal', { value: false })
      }).catch(error => {
        alert(error.message)
      })
    },
    confirmDelete (order) {
      const response = confirm(`Está seguro que desea eliminar la orden con id ${order.id}?`)
      if (response) {
        this.deleteOrder(order.id)
      }
    },
    deleteOrder (id) {
      DELETE({
        url: `/orders/${id}`
      }).then(() => {
        this.pagination = defaultPaginacion()
        this.getOrders(1)
      }).catch(error => {
        alert(error.message)
      })
    },
    filterOrders (orders) {
      const news = orders.filter(o => o.state === 'new')
      const process = orders.filter(o => o.state === 'process')
      const delivery = orders.filter(o => o.state === 'delivery')
      const finish = orders.filter(o => o.state === 'finish')
      const deleted = orders.filter(o => o.state === 'delete')
      return [ ...news, ...process, ...delivery, ...finish, ...deleted ]
    },
    parseLinkHeader(linkHeader) {
      const linkHeadersArray = linkHeader.split(", ").map(header => header.split( "; "))
      const linkHeadersMap = linkHeadersArray.map(header => {
        const thisHeaderRel = header[1].replace(/"/g,"").replace("rel=", "")
        const thisHeaderUrl = header[0].slice(1, -1)
        return [thisHeaderRel, thisHeaderUrl]
      })
      return Object.fromEntries( linkHeadersMap )
    }
  }
}
</script>

<style lang="scss" scoped>
  .heading-menu {
    height: 5rem;
  }

  .menu {
    border: .1rem solid #000000 ;
  }
</style>