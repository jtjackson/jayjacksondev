<template>
  <div class="space-y-12">
    <!-- Hero Section -->
    <section class="text-center py-16 bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50 dark:from-gray-900 dark:via-blue-900 dark:to-indigo-900 rounded-2xl">
      <h1 class="text-5xl font-bold mb-4 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
        Project Labs
      </h1>
      <p class="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
        Interactive demos, experiments, and open-source projects showcasing modern web technologies
      </p>
    </section>

    <!-- Filter/Category Tabs -->
    <div class="flex flex-wrap justify-center gap-4 mb-8">
      <button 
        v-for="category in categories" 
        :key="category"
        @click="selectedCategory = category"
        :class="[
          'px-6 py-3 rounded-full font-semibold transition-all duration-200',
          selectedCategory === category 
            ? 'bg-blue-600 text-white shadow-lg' 
            : 'bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700'
        ]"
      >
        {{ category }}
      </button>
    </div>

    <!-- Projects Grid -->
    <div class="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
      <div 
        v-for="project in filteredProjects" 
        :key="project.id"
        class="bg-white dark:bg-gray-800 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden group"
      >
        <!-- Project Image/Demo -->
        <div class="h-48 bg-gradient-to-br from-blue-100 to-purple-100 dark:from-blue-900 dark:to-purple-900 relative overflow-hidden">
          <div class="absolute inset-0 flex items-center justify-center">
            <Icon :name="project.icon" class="w-16 h-16 text-blue-600 dark:text-blue-400 group-hover:scale-110 transition-transform" />
          </div>
          <div class="absolute top-4 right-4">
            <span :class="[
              'px-3 py-1 rounded-full text-sm font-semibold',
              project.category === 'Web Apps' ? 'bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200' :
              project.category === 'Tools' ? 'bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200' :
              project.category === 'Experiments' ? 'bg-purple-100 text-purple-800 dark:bg-purple-900 dark:text-purple-200' :
              project.category === 'Open Source' ? 'bg-orange-100 text-orange-800 dark:bg-orange-900 dark:text-orange-200' :
              'bg-gray-100 text-gray-800 dark:bg-gray-900 dark:text-gray-200'
            ]">
              {{ project.category }}
            </span>
          </div>
        </div>

        <!-- Project Content -->
        <div class="p-6">
          <h3 class="text-xl font-bold mb-3 text-gray-900 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
            {{ project.title }}
          </h3>
          <p class="text-gray-600 dark:text-gray-300 mb-4">
            {{ project.description }}
          </p>
          
          <!-- Tech Stack -->
          <div class="flex flex-wrap gap-2 mb-4">
            <span 
              v-for="tech in project.technologies" 
              :key="tech"
              class="px-2 py-1 bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 text-sm rounded"
            >
              {{ tech }}
            </span>
          </div>

          <!-- Project Links -->
          <div class="flex space-x-4">
            <a 
              v-if="project.demo" 
              :href="project.demo" 
              target="_blank" 
              class="flex items-center text-blue-600 dark:text-blue-400 hover:text-blue-800 dark:hover:text-blue-300 font-semibold"
            >
              <Icon name="mdi:play-circle" class="w-4 h-4 mr-1" />
              Demo
            </a>
            <a 
              v-if="project.github" 
              :href="project.github" 
              target="_blank" 
              class="flex items-center text-gray-600 dark:text-gray-400 hover:text-gray-800 dark:hover:text-gray-300 font-semibold"
            >
              <Icon name="mdi:github" class="w-4 h-4 mr-1" />
              Code
            </a>
            <span 
              v-if="project.status === 'coming-soon'" 
              class="flex items-center text-gray-500 dark:text-gray-500 font-semibold"
            >
              <Icon name="mdi:clock" class="w-4 h-4 mr-1" />
              Coming Soon
            </span>
          </div>
        </div>
      </div>
    </div>

    <!-- Coming Soon Section -->
    <section class="text-center py-16 bg-gray-50 dark:bg-gray-800 rounded-2xl">
      <Icon name="mdi:rocket-launch" class="w-16 h-16 text-blue-600 dark:text-blue-400 mx-auto mb-6" />
      <h2 class="text-3xl font-bold mb-4 text-gray-900 dark:text-white">More Projects Coming Soon</h2>
      <p class="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto mb-8">
        I'm constantly working on new projects and experiments. Check back regularly for updates, 
        or follow me on social media to stay in the loop.
      </p>
      <div class="flex justify-center space-x-4">
        <a href="https://github.com/jtjackson" target="_blank" class="bg-gray-900 dark:bg-gray-700 text-white px-6 py-3 rounded-lg font-semibold hover:bg-gray-800 dark:hover:bg-gray-600 transition-colors">
          Follow on GitHub
        </a>
        <NuxtLink to="/blog" class="border border-blue-600 text-blue-600 dark:text-blue-400 hover:bg-blue-50 dark:hover:bg-blue-900 px-6 py-3 rounded-lg font-semibold transition-colors">
          Read My Blog
        </NuxtLink>
      </div>
    </section>
  </div>
</template>

<script setup>
const selectedCategory = ref('All')

const categories = ['All', 'Web Apps', 'Tools', 'Experiments', 'Open Source']

const projects = [
  {
    id: 1,
    title: 'Personal Website',
    description: 'A modern, accessible personal website built with Nuxt 3, featuring dark mode, responsive design, and optimized performance.',
    category: 'Web Apps',
    technologies: ['Nuxt 3', 'Vue.js', 'Tailwind CSS', 'JavaScript'],
    icon: 'mdi:web',
    demo: 'https://jayjackson.dev',
    github: 'https://github.com/jtjackson/jayjacksondev',
    status: 'live'
  },
  {
    id: 2,
    title: 'CNCF Accessibility Tools',
    description: 'Contributing to accessibility improvements in cloud native technologies and CNCF projects, focusing on inclusive documentation and tooling.',
    category: 'Open Source',
    technologies: ['CNCF', 'Kubernetes', 'Documentation', 'Accessibility'],
    icon: 'mdi:accessibility',
    status: 'coming-soon'
  },
  {
    id: 3,
    title: 'eBPF Learning Lab',
    description: 'Hands-on experiments and examples for learning eBPF (extended Berkeley Packet Filter) technology for observability and performance.',
    category: 'Experiments',
    technologies: ['eBPF', 'C', 'Linux', 'Observability'],
    icon: 'mdi:network',
    status: 'coming-soon'
  },
  {
    id: 4,
    title: 'ASL Tech Dictionary',
    description: 'A collaborative platform for creating ASL (American Sign Language) translations of technical terms and concepts in software engineering.',
    category: 'Tools',
    technologies: ['Vue.js', 'Python', 'Video Processing', 'ASL'],
    icon: 'mdi:hand-back-left',
    status: 'coming-soon'
  },
  {
    id: 5,
    title: 'Linux QA Automation Suite',
    description: 'Automated testing framework for Linux applications, drawing from 10+ years of QA experience with Motif/X11 applications.',
    category: 'Tools',
    technologies: ['Python', 'C++', 'Linux', 'X11', 'Automation'],
    icon: 'mdi:bug',
    status: 'coming-soon'
  },
  {
    id: 6,
    title: 'Physics Simulation Playground',
    description: 'Interactive physics simulations demonstrating mathematical concepts, combining my physics background with programming skills.',
    category: 'Experiments',
    technologies: ['JavaScript', 'WebGL', 'Physics', 'Mathematics'],
    icon: 'mdi:atom',
    status: 'coming-soon'
  },
  {
    id: 7,
    title: 'Accessibility Conference Helper',
    description: 'Tools and resources to help make tech conferences more accessible, inspired by work with CNCF DHHWG.',
    category: 'Tools',
    technologies: ['Vue.js', 'Real-time Captions', 'ASL', 'CNCF'],
    icon: 'mdi:account-group',
    status: 'coming-soon'
  },
  {
    id: 8,
    title: 'Story Archive Platform',
    description: 'A platform for collecting and sharing stories from underrepresented voices in technology, emphasizing accessibility and inclusion.',
    category: 'Web Apps',
    technologies: ['Rails', 'JavaScript', 'Accessibility', 'Storytelling'],
    icon: 'mdi:book-open',
    status: 'coming-soon'
  }
]

const filteredProjects = computed(() => {
  if (selectedCategory.value === 'All') {
    return projects
  }
  return projects.filter(project => project.category === selectedCategory.value)
})
</script>
