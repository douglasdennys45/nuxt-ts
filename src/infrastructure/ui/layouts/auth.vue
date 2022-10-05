<template>
  <div className="page-header">
    <div className="page-header-image background-image-authentication" />
    <div className="container">
      <div className="col-md-12 content-center">
        <div className="card-plain">
          <slot />
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
onMounted(() => {
  document.body.classList.add('theme-purple')
  document.body.classList.add('authentication')
  document.body.classList.add('sidebar-collapse')
})
</script>
