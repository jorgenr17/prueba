<template>
  <div>
    <div class="row">
      <div class="border-0 rounded-0 border-top border-black d-flex align-items-center pt-2 btn" style="width: auto">
        <span class="me-4">Sales@Razor.uk</span>
        <span class="material-icons fs-7">
          arrow_forward
        </span>
      </div>
    </div>
    <div class="row align-items-center justify-content-center">
      <div class="col-md-6 col-sm-8 col-xl-4">
        <div class="card shadow mt-4">
          <div class="card-body">
            <div class="container">
              <h5 class="card-title fw-bold text-center fs-3 mt-4">Agent Login</h5>
              <p class="card-text text-center fs-6 mb-4 mt-2">Hey, Enter your to get sign in to your account</p>
              <form class="row g-3 needs-validation" id="loginForm" novalidate @submit="login($event)">
                <div class="input-group mb-3">
                  <input
                    type="email"
                    class="form-control"
                    id="email"
                    v-model="usuario.email"
                    placeholder="Enter Email / Phone No"
                    style="border-right-color: white;"
                    required
                  >
                  <div class="input-group-text">
                    <input class="form-check-input mt-0" type="radio" value="" aria-label="Radio button for following text input">
                  </div>
                </div>
                <div class="input-group mb-3">
                  <input
                    :type="show ? 'text' : 'password'"
                    class="form-control"
                    id="passcode"
                    v-model="usuario.password"
                    placeholder="Passcode"
                    style="border-right-color: white;"
                    required
                  >
                  
                  <div class="input-group-text">
                    <div class="fs-7 pointer" @click="show = !show">Hide</div>
                  </div>
                </div>
                <p class="card-text fs-7 mb-4 fw-bold">Having trouble in sign in?</p>
                <div class="d-grid gap-2">
                  <button class="btn btn-primary fw-bold fs-7 padding-y" type="submit">Sign in</button>
                </div>
              </form>
              <p class="card-text fs-7 mb-4 mt-4 fw-bold text-center">&#8212; Or sign in with &#8212;</p>
              <div class="text-center d-flex justify-content-between">
                <div class="d-grid gap-2">
                  <button type="button" class="btn btn-outline-tertiary" style="color: #000000">
                    Google
                  </button>
                </div>
                <div class="d-grid gap-2">
                  <button type="button" class="btn btn-outline-tertiary" style="color: #000000">Apple</button>
                </div>
                <div class="d-grid gap-2">
                  <button type="button" class="btn btn-outline-tertiary" style="color: #000000">Facebook</button>
                </div>
              </div>
              <p class="card-text fs-7 mb-4 mt-4 text-center">Don't have an account? <strong>Request now</strong></p>
            </div>
          </div>
        </div>
      </div>
    </div>
    <p class="text-center fs-7 mt-3 mb-3">Copyright @wework 2022  |  Privacy Policy</p>
  </div>
</template>
<script>
import { POST } from '@/boot/http'

export default {
  name: 'CardLogin',
  data: () => ({
    usuario: {
      email: '',
      password: ''
    },
    show: false
  }),
  methods: {
    login (event) {
      event.preventDefault()
      event.stopPropagation()
      if (this.validateForm()) {
        let { email, password } = this.usuario
        POST({
          url: 'login',
          data: { email, password }
        }).then(response => {
          console.log(response);
          const accessToken = response.data.accessToken
          localStorage.setItem('accessToken', accessToken)
          this.$router.push('/home')
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

<style lang="scss" scoped>
  .shadow {
    -webkit-box-shadow: 1px 5px 15px 3px rgba(0,0,0,0.18); 
    box-shadow: 1px 5px 15px 3px rgba(0,0,0,0.18);
  }

  .padding-y {
    padding-top: .5rem;
    padding-bottom: .5rem;
  }

  .full-height {
    height: 100%;
  }

  .mail {
    width: 12%;
    border-top-color: #000;
    border-top-width: .1rem;
    border-top-style: solid;
  }
</style>