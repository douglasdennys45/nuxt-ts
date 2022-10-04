<template>
  <!-- Puxando o template default -->
  <NuxtLayout name="admin">
    <!-- setando um header -->
    <template #header> Some header template content. </template>
    <!-- corpo da pagina -->
    The rest of the page
  </NuxtLayout>
</template>

<script setup>
definePageMeta({
  layout: false,
});
</script>