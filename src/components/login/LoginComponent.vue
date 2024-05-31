<script>
import LoginForm from './LoginForm.vue'

export default {
  name: 'LoginComponent',
  components: {
    LoginForm
  },

  data() {
    return {
      
    }
  },

  methods: {

  }
}

</script>

<template>

  <main class="flex w-full h-screen">
    <div class="w-full flex justify-center items-center">
      <img src="../../assets/login-imagem.png" alt="login-image" class="w-[70%]">
    </div>
    
    <div class="w-full justify-center items-center">
      <LoginForm/>
    </div>
  </main>

</template>

<style>

</style>