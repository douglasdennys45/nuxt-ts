<template>
  <NuxtLayout name="admin">
    <template #header> Some header template content. </template>
    The rest of the page
  </NuxtLayout>
</template>

<script setup>
definePageMeta({
  layout: false
})
</script>
