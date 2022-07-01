<template>
  <nav class="navbar navbar-expand-lg navbar-light">
    <div class="container-fluid">
      <a class="navbar-brand fw-bold fs-4" href="#">Razor</a>
      <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarSupportedContent">
        <ul class="navbar-nav me-auto mb-2 mb-lg-0">
        </ul>
        <span class="material-icons me-2">
          language
        </span>
        <button type="button" class="me-4 btn fw-bold">Sign up</button>
        <button class="btn btn-primary fw-bold" type="submit">Request Demo</button>
      </div>
    </div>
  </nav>
</template>
<script>
export default {
  name: 'NavLogin',
  data: () => ({})
}
</script>