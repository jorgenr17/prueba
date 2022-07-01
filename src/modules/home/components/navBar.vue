<template>
  <nav class="navbar navbar-expand-lg navbar-light">
    <div class="container-fluid">      
      <div class="collapse navbar-collapse" id="navbarSupportedContent">
        <ul class="navbar-nav me-auto mb-2 mb-lg-0">
        </ul>
        <span class="badge rounded-pill bg-secondary">Robert machac</span>
        <span class="badge rounded-pill bg-secondary">Manazment skupiny</span>
        <span class="badge rounded-pill bg-secondary text-black me-2">Manazment firmy</span>
        <span class="material-icons me-2">
          notifications
        </span>
        <img
          class="avatar"
          src="https://plastichaco.com/wp-content/uploads/2016/06/john-doe-1.jpg"
          width="10rem" height="10rem" alt="avatar"
          @click="logout"
        >
      </div>
    </div>
  </nav>
</template>
<script>
export default {
  name: 'NavHome',
  data: () => ({}),
  methods: {
    logout () {
      localStorage.removeItem('accessToken')
      this.$router.push('/login')
    }
  }
}
</script>