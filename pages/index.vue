<template>
    <div class="space-y-16">
        <!-- Hero Section -->
        <section class="text-center py-24 bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50 dark:from-gray-900 dark:via-blue-900 dark:to-indigo-900 rounded-2xl">
            <div class="mb-8">
                <h1 class="text-6xl font-bold mb-6 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                    Jay Jackson
                </h1>
                <p class="text-2xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto mb-8">
                    Software Engineer. Tinkerer. Continuous Learner.
                </p>
            </div>
            <div class="flex justify-center space-x-6">
                <NuxtLink to="/projects" class="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-lg font-semibold transition-colors">
                    Projects
                </NuxtLink>
                <NuxtLink to="/blog" class="border border-blue-600 text-blue-600 dark:text-blue-400 dark:border-blue-400 hover:bg-blue-50 dark:hover:bg-blue-900 px-8 py-3 rounded-lg font-semibold transition-colors">
                    Blog
                </NuxtLink>
                <NuxtLink to="/about" class="border border-blue-600 text-blue-600 dark:text-blue-400 dark:border-blue-400 hover:bg-blue-50 dark:hover:bg-blue-900 px-8 py-3 rounded-lg font-semibold transition-colors">
                    About
                </NuxtLink>
            </div>
        </section>

        <!-- Currently Section -->
        <section class="py-16">
            <div class="text-center mb-12">
                <h2 class="text-4xl font-bold mb-4 text-gray-900 dark:text-white">Currently</h2>
            </div>

            <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
                <div class="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow">
                    <Icon name="mdi:account-group" class="w-10 h-10 text-blue-600 dark:text-blue-400 mb-3" />
                    <h3 class="text-lg font-semibold mb-2 text-gray-900 dark:text-white">Leading CNCF Sign Language Glossary</h3>
                    <p class="text-gray-600 dark:text-gray-300 text-sm">Creating ASL signs for cloud native terms</p>
                </div>

                <div class="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow">
                    <Icon name="mdi:cloud-outline" class="w-10 h-10 text-green-600 dark:text-green-400 mb-3" />
                    <h3 class="text-lg font-semibold mb-2 text-gray-900 dark:text-white">Exploring eBPF & Kubernetes</h3>
                    <p class="text-gray-600 dark:text-gray-300 text-sm">Following closely and working to incorporate into projects</p>
                </div>

                <div class="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow">
                    <Icon name="mdi:code" class="w-10 h-10 text-purple-600 dark:text-purple-400 mb-3" />
                    <h3 class="text-lg font-semibold mb-2 text-gray-900 dark:text-white">Full-Stack Contracting</h3>
                    <p class="text-gray-600 dark:text-gray-300 text-sm">Working with Deaf-owned dev firm on EdTech projects</p>
                </div>
            </div>
        </section>

        <!-- Featured Content -->
        <section class="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div class="bg-white dark:bg-gray-800 p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow">
                <div class="flex items-center mb-6">
                    <Icon name="mdi:newspaper-variant" class="w-8 h-8 text-blue-600 dark:text-blue-400 mr-3" />
                    <h2 class="text-2xl font-bold text-gray-900 dark:text-white">Latest Blog Posts</h2>
                </div>
                <div class="space-y-4">
                    <p class="text-gray-600 dark:text-gray-300">Coming soon... Stay tuned for insights on software engineering, accessibility, and tech innovation.</p>
                    <NuxtLink to="/blog" class="inline-flex items-center text-blue-600 dark:text-blue-400 hover:text-blue-800 dark:hover:text-blue-300 font-semibold">
                        View All Posts
                        <Icon name="mdi:arrow-right" class="w-4 h-4 ml-1" />
                    </NuxtLink>
                </div>
            </div>

            <div class="bg-white dark:bg-gray-800 p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow">
                <div class="flex items-center mb-6">
                    <Icon name="mdi:flask" class="w-8 h-8 text-green-600 dark:text-green-400 mr-3" />
                    <h2 class="text-2xl font-bold text-gray-900 dark:text-white">Project Labs</h2>
                </div>
                <div class="space-y-4">
                    <p class="text-gray-600 dark:text-gray-300">Interactive demos and experiments showcasing modern software technologies.</p>
                    <NuxtLink to="/projects" class="inline-flex items-center text-green-600 dark:text-green-400 hover:text-green-800 dark:hover:text-green-300 font-semibold">
                        Explore Projects
                        <Icon name="mdi:arrow-right" class="w-4 h-4 ml-1" />
                    </NuxtLink>
                </div>
            </div>
        </section>
    </div>
</template>
