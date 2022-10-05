<template>
  <div>
    <div>Login</div>
    <input type="text" name="username" />
    <input type="password" name="password" />
    <button id="save" type="button" @click="$emit('login', {})">Login</button>
  </div>
</template>

<script setup lang="ts">
defineEmits(['login'])
</script>
