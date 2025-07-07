<template>
  <div class="space-y-12">
    <!-- Hero Section -->
    <section class="text-center py-16 bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50 dark:from-gray-900 dark:via-blue-900 dark:to-indigo-900 rounded-2xl">
      <h1 class="text-5xl font-bold mb-4 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
        Blog
      </h1>
      <p class="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
        Thoughts, insights, and deep dives into web development, accessibility, and emerging technologies
      </p>
    </section>

    <!-- Categories and Search -->
    <div class="flex flex-col md:flex-row gap-4 items-center justify-between">
      <div class="flex flex-wrap gap-3">
        <button 
          v-for="category in categories" 
          :key="category"
          @click="selectedCategory = category"
          :class="[
            'px-4 py-2 rounded-full font-medium transition-all duration-200',
            selectedCategory === category 
              ? 'bg-blue-600 text-white shadow-lg' 
              : 'bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700'
          ]"
        >
          {{ category }}
        </button>
      </div>
      <div class="relative">
        <Icon name="mdi:magnify" class="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
        <input 
          v-model="searchQuery"
          type="text" 
          placeholder="Search posts..." 
          class="pl-10 pr-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-800 text-gray-900 dark:text-white focus:ring-2 focus:ring-blue-500 focus:border-transparent"
        />
      </div>
    </div>

    <!-- Blog Posts Grid -->
    <div class="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
      <article 
        v-for="post in filteredPosts" 
        :key="post.id"
        class="bg-white dark:bg-gray-800 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden group"
      >
        <!-- Featured Image -->
        <div class="h-48 bg-gradient-to-br from-blue-100 to-purple-100 dark:from-blue-900 dark:to-purple-900 relative overflow-hidden">
          <div class="absolute inset-0 flex items-center justify-center">
            <Icon :name="post.icon" class="w-16 h-16 text-blue-600 dark:text-blue-400 group-hover:scale-110 transition-transform" />
          </div>
          <div class="absolute top-4 left-4">
            <span :class="[
              'px-3 py-1 rounded-full text-sm font-semibold',
              post.category === 'Web Development' ? 'bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200' :
              post.category === 'Accessibility' ? 'bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200' :
              post.category === 'Career' ? 'bg-purple-100 text-purple-800 dark:bg-purple-900 dark:text-purple-200' :
              post.category === 'Tools' ? 'bg-orange-100 text-orange-800 dark:bg-orange-900 dark:text-orange-200' :
              'bg-gray-100 text-gray-800 dark:bg-gray-900 dark:text-gray-200'
            ]">
              {{ post.category }}
            </span>
          </div>
          <div class="absolute top-4 right-4">
            <span class="bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-300 px-2 py-1 rounded text-sm">
              {{ post.readTime }} min read
            </span>
          </div>
        </div>

        <!-- Post Content -->
        <div class="p-6">
          <h2 class="text-xl font-bold mb-3 text-gray-900 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
            {{ post.title }}
          </h2>
          <p class="text-gray-600 dark:text-gray-300 mb-4 leading-relaxed">
            {{ post.excerpt }}
          </p>
          
          <!-- Meta Information -->
          <div class="flex items-center justify-between text-sm text-gray-500 dark:text-gray-400 mb-4">
            <time :datetime="post.date">{{ formatDate(post.date) }}</time>
            <div class="flex items-center space-x-4">
              <span class="flex items-center">
                <Icon name="mdi:eye" class="w-4 h-4 mr-1" />
                {{ post.views }}
              </span>
              <span class="flex items-center">
                <Icon name="mdi:heart" class="w-4 h-4 mr-1" />
                {{ post.likes }}
              </span>
            </div>
          </div>

          <!-- Tags -->
          <div class="flex flex-wrap gap-2 mb-4">
            <span 
              v-for="tag in post.tags.slice(0, 3)" 
              :key="tag"
              class="px-2 py-1 bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 text-xs rounded"
            >
              #{{ tag }}
            </span>
          </div>

          <!-- Read More Link -->
          <div class="flex justify-between items-center">
            <span 
              v-if="post.status === 'coming-soon'" 
              class="text-gray-500 dark:text-gray-500 font-semibold flex items-center"
            >
              <Icon name="mdi:clock" class="w-4 h-4 mr-1" />
              Coming Soon
            </span>
            <NuxtLink 
              v-else
              :to="`/blog/${post.slug}`" 
              class="text-blue-600 dark:text-blue-400 hover:text-blue-800 dark:hover:text-blue-300 font-semibold flex items-center"
            >
              Read More
              <Icon name="mdi:arrow-right" class="w-4 h-4 ml-1" />
            </NuxtLink>
          </div>
        </div>
      </article>
    </div>

    <!-- Newsletter Signup -->
    <section class="text-center py-16 bg-gradient-to-r from-blue-50 to-purple-50 dark:from-gray-800 dark:to-gray-900 rounded-2xl">
      <Icon name="mdi:email-newsletter" class="w-16 h-16 text-blue-600 dark:text-blue-400 mx-auto mb-6" />
      <h2 class="text-3xl font-bold mb-4 text-gray-900 dark:text-white">Stay Updated</h2>
      <p class="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto mb-8">
        Get notified when I publish new posts about web development, accessibility, and tech insights.
      </p>
      <div class="flex flex-col sm:flex-row gap-4 justify-center max-w-md mx-auto">
        <input 
          type="email" 
          placeholder="your@email.com" 
          class="flex-1 px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-800 text-gray-900 dark:text-white focus:ring-2 focus:ring-blue-500 focus:border-transparent"
        />
        <button class="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg font-semibold transition-colors">
          Subscribe
        </button>
      </div>
      <p class="text-sm text-gray-500 dark:text-gray-400 mt-4">
        No spam, unsubscribe anytime. I respect your privacy.
      </p>
    </section>
  </div>
</template>

<script setup>
const selectedCategory = ref('All')
const searchQuery = ref('')

const categories = ['All', 'Web Development', 'Accessibility', 'Career', 'Tools', 'Personal']

const posts = [
  {
    id: 1,
    title: 'Building Accessible Web Applications with Vue 3',
    excerpt: 'Learn how to create inclusive web experiences using Vue 3 composition API and modern accessibility best practices.',
    category: 'Accessibility',
    tags: ['vue', 'accessibility', 'a11y', 'web-development'],
    icon: 'mdi:accessibility',
    date: '2024-01-15',
    readTime: 8,
    views: 1250,
    likes: 42,
    slug: 'building-accessible-web-applications-vue3',
    status: 'coming-soon'
  },
  {
    id: 2,
    title: 'The Complete Guide to Modern CSS Grid',
    excerpt: 'Master CSS Grid with practical examples and real-world layouts. From basics to advanced techniques.',
    category: 'Web Development',
    tags: ['css', 'grid', 'layout', 'responsive'],
    icon: 'mdi:grid',
    date: '2024-01-10',
    readTime: 12,
    views: 2100,
    likes: 67,
    slug: 'complete-guide-modern-css-grid',
    status: 'coming-soon'
  },
  {
    id: 3,
    title: 'My Journey from Hearing to Deaf in Tech',
    excerpt: 'Personal story about navigating the tech industry as a deaf professional and advocating for accessibility.',
    category: 'Personal',
    tags: ['deaf', 'career', 'accessibility', 'advocacy'],
    icon: 'mdi:account-heart',
    date: '2024-01-05',
    readTime: 6,
    views: 980,
    likes: 89,
    slug: 'journey-hearing-to-deaf-tech',
    status: 'coming-soon'
  },
  {
    id: 4,
    title: 'TypeScript Best Practices for Large Applications',
    excerpt: 'Essential TypeScript patterns and configurations for building maintainable, scalable web applications.',
    category: 'Web Development',
    tags: ['typescript', 'best-practices', 'architecture'],
    icon: 'mdi:language-typescript',
    date: '2023-12-28',
    readTime: 10,
    views: 1800,
    likes: 55,
    slug: 'typescript-best-practices-large-applications',
    status: 'coming-soon'
  },
  {
    id: 5,
    title: 'Essential VS Code Extensions for Web Developers',
    excerpt: 'A curated list of must-have VS Code extensions that will boost your productivity and code quality.',
    category: 'Tools',
    tags: ['vscode', 'extensions', 'productivity', 'tools'],
    icon: 'mdi:microsoft-visual-studio-code',
    date: '2023-12-20',
    readTime: 5,
    views: 3200,
    likes: 124,
    slug: 'essential-vscode-extensions-web-developers',
    status: 'coming-soon'
  },
  {
    id: 6,
    title: 'Career Transition: From Corporate to Startup',
    excerpt: 'Lessons learned from transitioning from a large corporation to a fast-paced startup environment.',
    category: 'Career',
    tags: ['career', 'startup', 'transition', 'lessons'],
    icon: 'mdi:rocket-launch',
    date: '2023-12-15',
    readTime: 7,
    views: 1450,
    likes: 78,
    slug: 'career-transition-corporate-startup',
    status: 'coming-soon'
  }
]

const filteredPosts = computed(() => {
  let filtered = posts

  if (selectedCategory.value !== 'All') {
    filtered = filtered.filter(post => post.category === selectedCategory.value)
  }

  if (searchQuery.value) {
    const query = searchQuery.value.toLowerCase()
    filtered = filtered.filter(post => 
      post.title.toLowerCase().includes(query) ||
      post.excerpt.toLowerCase().includes(query) ||
      post.tags.some(tag => tag.toLowerCase().includes(query))
    )
  }

  return filtered
})

const formatDate = (dateString) => {
  return new Date(dateString).toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  })
}
</script>
