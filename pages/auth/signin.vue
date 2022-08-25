<template>
  <div class="dark grid h-screen place-items-center">
    <div class=" block w-80 h-80 p-6 max-w-sm bg-white rounded-lg border border-gray-200 shadow-md
    dark:bg-gray-800 dark:border-gray-700 ">
      <h1 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Iniciar sesión</h1>
      <div class="mb-6">
        <label for="email" class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Correo</label>
        <input id="email" v-model="auth.email" type="email"
          class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          placeholder="tunombre@correo.com" required>
      </div>
      <div class="mb-6">
        <label for="password" class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Contraseña</label>
        <input id="password" v-model="auth.password" type="password"
          class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          required>
      </div>
      <div class="grid grid-cols-2 gap-4">
        <button
          class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
          @click="login">Ingresar</button>
        <button
          class="text-white bg-gray-500 hover:bg-gray-600 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-gray-500 dark:hover:bg-gray-600 dark:focus:ring-gray-600"
          @click="forgotPassword">Olvidé mi contraseña</button>
      </div>
      <div v-if="snackbar"
        class="p-4 mt-4 text-sm text-red-700 bg-red-100 rounded-lg dark:bg-red-200 dark:text-red-800">
        {{ snackbarText }}
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      snackbar: false,
      snackbarText: 'No hay mensaje de error',
      auth: {
        email: '',
        password: '',
      }
    }
  },
  methods: {
    login() {
      this.$fire.auth.signInWithEmailAndPassword(this.auth.email, this.auth.password)
        .catch((error) => {
          this.snackbar = true
          this.snackbarText = error.message
        }).then((user) => {
          //  we are signed in

          this.$nuxt.$router.push('/')
        })
    },

    forgotPassword() {
      this.$fire.auth.sendPasswordResetEmail(this.auth.email)
        .then(() => {
          this.snackbar = true
          this.snackbarText = `Link de reset de contraseña ha sido enviado a: ${this.auth.email} (revisa tu bandeja spam)`
        })
        .catch((error) => {
          this.snackbar = true
          this.snackbarText = error.message
        })
    }

  }
}
</script>

<style>
body {
  height: 100%;
  background-color: #111827;
}
</style>