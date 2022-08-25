<template>
  <div class="dark">
    <nav class="bg-gray-200 border-gray-200 px-1 sm:px-4 py-2.5 rounded">
      <div class="px-6 w-full grid justify-end">
        <div>
          <button type="button" class="border-0 py-3 text-xl bg-transparent text-gray-600 hover:text-gray-700"
            @click="$router.push('/auth/signout')">
            <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1"></path>
            </svg>
          </button>
        </div>
      </div>
    </nav>
    <div class="container py-4 px-4">
      <Form :theses="theses" />
    </div>
  </div>
</template>

<script>
</script>

<style>
body {
  height: 100%;
  background-color: #111827;
}
</style>