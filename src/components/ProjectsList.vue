<script setup lang="ts">
import { ref, computed } from 'vue';

interface Project {
  id: number;
  title: string;
  description: string;
  category: string;
  technologies: string[];
  demo?: string;
  github?: string;
  status: 'live' | 'coming-soon';
}

const selectedCategory = ref('All');

const categories = ['All', 'Web Apps', 'Tools', 'Experiments', 'Open Source'];

const projects: Project[] = [
  {
    id: 1,
    title: 'Personal Website',
    description: 'A modern, accessible personal website built with Astro, featuring dark mode, responsive design, and optimized performance.',
    category: 'Web Apps',
    technologies: ['Astro', 'Vue.js', 'Tailwind CSS', 'TypeScript'],
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
    status: 'coming-soon'
  },
  {
    id: 3,
    title: 'eBPF Learning Lab',
    description: 'Hands-on experiments and examples for learning eBPF (extended Berkeley Packet Filter) technology for observability and performance.',
    category: 'Experiments',
    technologies: ['eBPF', 'C', 'Linux', 'Observability'],
    status: 'coming-soon'
  },
  {
    id: 4,
    title: 'ASL Tech Dictionary',
    description: 'A collaborative platform for creating ASL (American Sign Language) translations of technical terms and concepts in software engineering.',
    category: 'Tools',
    technologies: ['Vue.js', 'Python', 'Video Processing', 'ASL'],
    status: 'coming-soon'
  },
  {
    id: 5,
    title: 'Linux QA Automation Suite',
    description: 'Automated testing framework for Linux applications, drawing from 10+ years of QA experience with Motif/X11 applications.',
    category: 'Tools',
    technologies: ['Python', 'C++', 'Linux', 'X11', 'Automation'],
    status: 'coming-soon'
  },
  {
    id: 6,
    title: 'Physics Simulation Playground',
    description: 'Interactive physics simulations demonstrating mathematical concepts, combining my physics background with programming skills.',
    category: 'Experiments',
    technologies: ['JavaScript', 'WebGL', 'Physics', 'Mathematics'],
    status: 'coming-soon'
  },
  {
    id: 7,
    title: 'Accessibility Conference Helper',
    description: 'Tools and resources to help make tech conferences more accessible, inspired by work with CNCF DHHWG.',
    category: 'Tools',
    technologies: ['Vue.js', 'Real-time Captions', 'ASL', 'CNCF'],
    status: 'coming-soon'
  },
  {
    id: 8,
    title: 'Story Archive Platform',
    description: 'A platform for collecting and sharing stories from underrepresented voices in technology, emphasizing accessibility and inclusion.',
    category: 'Web Apps',
    technologies: ['Rails', 'JavaScript', 'Accessibility', 'Storytelling'],
    status: 'coming-soon'
  }
];

const filteredProjects = computed(() => {
  if (selectedCategory.value === 'All') {
    return projects;
  }
  return projects.filter(project => project.category === selectedCategory.value);
});
</script>

<template>
  <div class="space-y-12">
    <!-- Filter -->
    <section role="tablist" aria-label="Filter projects by category" class="flex flex-wrap gap-3">
      <button
        v-for="category in categories"
        :key="category"
        role="tab"
        :aria-selected="selectedCategory === category"
        aria-controls="projects-panel"
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
    </section>

    <!-- Projects List -->
    <section id="projects-panel" role="tabpanel" class="space-y-12">
      <article
        v-for="project in filteredProjects"
        :key="project.id"
        class="space-y-3 pb-8 border-b border-gray-200 dark:border-green-500/20 last:border-b-0"
      >
        <div class="flex items-center gap-3 text-sm">
          <span class="text-blue-600 dark:text-green-400 font-medium">{{ project.category }}</span>
          <span v-if="project.status === 'live'" class="text-gray-500 dark:text-gray-400">• Live</span>
          <span v-if="project.status === 'coming-soon'" class="text-gray-500 dark:text-gray-400">• Coming Soon</span>
        </div>

        <h2 class="text-2xl font-bold text-gray-900 dark:text-white">
          {{ project.title }}
        </h2>

        <p class="text-lg text-gray-700 dark:text-gray-300 leading-relaxed">
          {{ project.description }}
        </p>

        <div class="flex flex-wrap gap-2">
          <span
            v-for="tech in project.technologies"
            :key="tech"
            class="text-sm text-gray-600 dark:text-gray-400"
          >
            {{ tech }}
          </span>
        </div>

        <div class="flex gap-6">
          <a
            v-if="project.demo"
            :href="project.demo"
            target="_blank"
            rel="noopener noreferrer"
            :aria-label="`View demo for ${project.title} (opens in new tab)`"
            class="inline-flex items-center text-blue-600 dark:text-green-400 hover:text-blue-700 dark:hover:text-green-300 font-semibold transition-colors"
          >
            View Demo →
          </a>
          <a
            v-if="project.github"
            :href="project.github"
            target="_blank"
            rel="noopener noreferrer"
            :aria-label="`View code for ${project.title} on GitHub (opens in new tab)`"
            class="inline-flex items-center text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-green-400 font-semibold transition-colors"
          >
            View Code →
          </a>
        </div>
      </article>

      <div v-if="filteredProjects.length === 0" class="text-center py-12 text-gray-500 dark:text-gray-400">
        No projects found in this category.
      </div>
    </section>
  </div>
</template>
