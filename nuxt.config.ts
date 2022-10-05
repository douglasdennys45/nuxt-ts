export default defineNuxtConfig({
  ssr: false,
  srcDir: 'src/infrastructure/ui/',
  css: [
    '@/assets/css/bootstrap/bootstrap.min.css',
    '@/assets/css/custom/main.css',
    '@/assets/css/custom/authentication.css',
    '@/assets/css/custom/color_skins.css'
  ]
})
