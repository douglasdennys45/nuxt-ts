<template>
  <NuxtLayout name="auth">
    <LoginForm @login="login" />
  </NuxtLayout>
</template>

<script setup>
import LoginForm from '~~/src/infrastructure/ui/components/form/login.vue'
import { mountLogin } from '@/factories/domain/usecases'

const service = mountLogin()

async function login () {
  try {
    const response = await service.perform()
    console.log('try', response)
  } catch (error) {
    console.log(error)
  }
}
</script>
