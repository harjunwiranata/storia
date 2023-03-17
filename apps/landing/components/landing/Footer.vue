<script setup lang="ts">
</script>

<template>
  <footer>
    <div
      class="container text-center md:text-left px-4 py-5 mx-auto flex flex-col sm:flex-row justify-between gap-2 sm:items-center">

      <div class="text-sm text-gray-600">
        <span class="font-medium text-gray-800">
          <NuxtLink to="/" class="font-semibold text-lg">
            {{ $t("app_name") }}
          </NuxtLink>
        </span>
        by
        <a href="https://github.com/harjunwiranata" class="font-medium hover:underline text-gray-800">
          harjunwiranata
        </a>. All rights reserved.

      </div>
      <div class="text-sm text-gray-600">
        Built with 
        <span class="font-medium text-gray-800">Nuxt Tailwind Kit</span>
        by
        <a href="https://github.com/gravitano" class="font-medium hover:underline text-gray-800">Warsono</a>

      </div>
    </div>
  </footer>
</template>
