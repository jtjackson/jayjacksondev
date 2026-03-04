<script setup lang="ts">
import { ref, computed } from 'vue';

interface Post {
  slug: string;
  title: string;
  description: string;
  pubDate: string;
  category: string;
  tags: string[];
  readTime?: number;
  draft?: boolean;
}

const props = defineProps<{
  posts: Post[];
}>();

const selectedCategory = ref('All');
const searchQuery = ref('');

const categories = ['All', 'Technical', 'Poetry', 'Personal', 'Career', 'Accessibility'];

const filteredPosts = computed(() => {
  let filtered = props.posts;

  if (selectedCategory.value !== 'All') {
    filtered = filtered.filter(post => post.category === selectedCategory.value);
  }

  if (searchQuery.value) {
    const query = searchQuery.value.toLowerCase();
    filtered = filtered.filter(post =>
      post.title.toLowerCase().includes(query) ||
      post.description.toLowerCase().includes(query) ||
      post.tags.some(tag => tag.toLowerCase().includes(query))
    );
  }

  return filtered;
});

const formatDate = (dateString: string) => {
  return new Date(dateString).toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  });
};
</script>

<template>
  <div class="space-y-12">
    <!-- Search and Filter -->
    <section class="flex flex-col sm:flex-row gap-4 items-start sm:items-center justify-between">
      <div role="tablist" aria-label="Filter posts by category" class="flex flex-wrap gap-3">
        <button
          v-for="category in categories"
          :key="category"
          role="tab"
          :aria-selected="selectedCategory === category"
          aria-controls="posts-panel"
          @click="selectedCategory = category"
          :class="[
            'px-4 py-2 rounded-lg font-medium transition-colors',
            selectedCategory === category
              ? 'text-blue-600 dark:text-green-400 underline'
              : 'text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white'
          ]"
        >
          {{ category }}
        </button>
      </div>
      <div class="flex-shrink-0">
        <label for="blog-search" class="sr-only">Search blog posts</label>
        <input
          id="blog-search"
          v-model="searchQuery"
          type="search"
          placeholder="Search posts..."
          class="px-4 py-2 bg-transparent border-b border-gray-300 dark:border-green-500/30 text-gray-900 dark:text-white placeholder-gray-400 dark:placeholder-gray-500 focus:outline-none focus:border-blue-600 dark:focus:border-green-500 transition-colors"
        />
      </div>
    </section>

    <!-- Blog Posts -->
    <section id="posts-panel" role="tabpanel" class="space-y-12">
      <article
        v-for="post in filteredPosts"
        :key="post.slug"
        class="space-y-3 pb-8 border-b border-gray-200 dark:border-green-500/20 last:border-b-0"
      >
        <div class="flex items-center gap-4 text-sm text-gray-500 dark:text-gray-400">
          <time :datetime="post.pubDate">{{ formatDate(post.pubDate) }}</time>
          <span v-if="post.readTime">•</span>
          <span v-if="post.readTime">{{ post.readTime }} min read</span>
          <span>•</span>
          <span class="text-blue-600 dark:text-green-400">{{ post.category }}</span>
        </div>

        <h2 class="text-2xl font-bold text-gray-900 dark:text-white hover:text-blue-600 dark:hover:text-green-400 transition-colors">
          <a :href="`/blog/${post.slug}`">
            {{ post.title }}
          </a>
        </h2>

        <p class="text-lg text-gray-700 dark:text-gray-300 leading-relaxed">
          {{ post.description }}
        </p>

        <div class="flex flex-wrap gap-2">
          <span
            v-for="tag in post.tags.slice(0, 4)"
            :key="tag"
            class="text-sm text-gray-600 dark:text-gray-400"
          >
            #{{ tag }}
          </span>
        </div>

        <a
          :href="`/blog/${post.slug}`"
          class="inline-flex items-center text-blue-600 dark:text-green-400 hover:text-blue-700 dark:hover:text-green-300 font-semibold transition-colors"
        >
          Read more →
        </a>
      </article>

      <div v-if="filteredPosts.length === 0" class="text-center py-12 text-gray-500 dark:text-gray-400">
        No posts found matching your criteria.
      </div>
    </section>
  </div>
</template>

<style scoped>
.sr-only {
  position: absolute;
  width: 1px;
  height: 1px;
  padding: 0;
  margin: -1px;
  overflow: hidden;
  clip: rect(0, 0, 0, 0);
  white-space: nowrap;
  border-width: 0;
}
</style>
