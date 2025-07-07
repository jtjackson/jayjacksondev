<template>
  <div class="min-h-screen bg-gray-50 dark:bg-gray-900">
    <nav class="bg-gray dark:bg-gray-800 shadow-sm">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="flex justify-between h-16">
          <div class="flex items-center">
            <NuxtLink to="/" class="text-2xl font-bold text-gray-900 dark:text-white">Jay Jackson</NuxtLink>
            <div class="hidden md:flex items-center space-x-8 ml-10">
              <NuxtLink to="/blog" class="text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white">Blog</NuxtLink>
              <NuxtLink to="/projects" class="text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white">Projects</NuxtLink>
              <NuxtLink to="/about" class="text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white">About</NuxtLink>
              <NuxtLink to="/resume" class="text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white">Resume</NuxtLink>
              <NuxtLink to="/contact" class="text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white">Contact</NuxtLink>
            </div>
          </div>
          <div class="flex items-center space-x-4">
            <a href="https://github.com/jtjackson" target="_blank" class="text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white">
              <Icon name="mdi:github" class="w-6 h-6" />
            </a>
            <a href="https://www.linkedin.com/in/james-t-jackson/" target="_blank" class="text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white">
              <Icon name="mdi:linkedin" class="w-6 h-6" />
            </a>
            <a href="https://bsky.app/profile/jjackson.bsky.social" target="_blank" class="text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white">
              <Icon name="ri:bluesky-fill" class="w-6 h-6" />
            </a>
            <div class="w-px h-6 bg-gray-300 dark:bg-gray-600"></div>
            <button @click="toggleTheme" class="text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white">
              <Icon :name="colorMode.value === 'dark' ? 'ph:sun-bold' : 'ph:moon-bold'" class="w-6 h-6" />
            </button>
          </div>
        </div>
      </div>
    </nav>
    <main class="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8">
      <NuxtPage />
    </main>
  </div>
</template>

<script setup>
const colorMode = useColorMode()

const toggleTheme = () => {
  colorMode.preference = colorMode.value === 'dark' ? 'light' : 'dark'
}
</script>
