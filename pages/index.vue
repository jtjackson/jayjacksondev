<template>
    <div class="space-y-16">
        <!-- Hero Section -->
        <section class="text-center py-24 bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50 dark:from-gray-900 dark:via-blue-900 dark:to-indigo-900 rounded-2xl">
            <div class="mb-8">
                <h1 class="text-6xl font-bold mb-6 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                    Jay Jackson
                </h1>
                <p class="text-2xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto mb-8">
                    Father, Husband, Software Engineer & Accessibility Advocate
                </p>
            </div>
            <div class="flex justify-center space-x-6">
                <NuxtLink to="/projects" class="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-lg font-semibold transition-colors">
                    View My Work
                </NuxtLink>
                <NuxtLink to="/blog" class="border border-blue-600 text-blue-600 hover:bg-blue-50 dark:hover:bg-blue-900 px-8 py-3 rounded-lg font-semibold transition-colors">
                    Read My Blog
                </NuxtLink>
            </div>
        </section>

        <!-- Tech Skills Section -->
        <section class="py-16">
            <div class="text-center mb-12">
                <h2 class="text-4xl font-bold mb-4 text-gray-900 dark:text-white">Tech Stack</h2>
                <p class="text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
                    Technologies I work with to build modern, scalable applications
                </p>
            </div>
            
            <div class="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
                <div class="bg-white dark:bg-gray-800 p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow">
                    <div class="text-center">
                        <div class="w-16 h-16 bg-blue-100 dark:bg-blue-900 rounded-full flex items-center justify-center mx-auto mb-4">
                            <Icon name="mdi:code-tags" class="w-8 h-8 text-blue-600 dark:text-blue-400" />
                        </div>
                        <h3 class="text-xl font-semibold mb-3 text-gray-900 dark:text-white">Languages</h3>
                        <div class="flex flex-wrap justify-center gap-2">
                            <span class="bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 px-3 py-1 rounded-full text-sm">C#</span>
                            <span class="bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 px-3 py-1 rounded-full text-sm">JavaScript</span>
                            <span class="bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 px-3 py-1 rounded-full text-sm">Python</span>
                            <span class="bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 px-3 py-1 rounded-full text-sm">SQL</span>
                            <span class="bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 px-3 py-1 rounded-full text-sm">C++</span>
                        </div>
                    </div>
                </div>

                <div class="bg-white dark:bg-gray-800 p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow">
                    <div class="text-center">
                        <div class="w-16 h-16 bg-green-100 dark:bg-green-900 rounded-full flex items-center justify-center mx-auto mb-4">
                            <Icon name="mdi:web" class="w-8 h-8 text-green-600 dark:text-green-400" />
                        </div>
                        <h3 class="text-xl font-semibold mb-3 text-gray-900 dark:text-white">Frameworks & Runtime</h3>
                        <div class="flex flex-wrap justify-center gap-2">
                            <span class="bg-green-100 dark:bg-green-900 text-green-800 dark:text-green-200 px-3 py-1 rounded-full text-sm">Vue.js</span>
                            <span class="bg-green-100 dark:bg-green-900 text-green-800 dark:text-green-200 px-3 py-1 rounded-full text-sm">Angular</span>
                            <span class="bg-green-100 dark:bg-green-900 text-green-800 dark:text-green-200 px-3 py-1 rounded-full text-sm">Rails</span>
                            <span class="bg-green-100 dark:bg-green-900 text-green-800 dark:text-green-200 px-3 py-1 rounded-full text-sm">Node.js</span>
                        </div>
                    </div>
                </div>

                <div class="bg-white dark:bg-gray-800 p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow">
                    <div class="text-center">
                        <div class="w-16 h-16 bg-purple-100 dark:bg-purple-900 rounded-full flex items-center justify-center mx-auto mb-4">
                            <Icon name="mdi:cloud" class="w-8 h-8 text-purple-600 dark:text-purple-400" />
                        </div>
                        <h3 class="text-xl font-semibold mb-3 text-gray-900 dark:text-white">Cloud & Infrastructure</h3>
                        <div class="flex flex-wrap justify-center gap-2">
                            <span class="bg-purple-100 dark:bg-purple-900 text-purple-800 dark:text-purple-200 px-3 py-1 rounded-full text-sm">Azure</span>
                            <span class="bg-purple-100 dark:bg-purple-900 text-purple-800 dark:text-purple-200 px-3 py-1 rounded-full text-sm">AWS</span>
                            <span class="bg-purple-100 dark:bg-purple-900 text-purple-800 dark:text-purple-200 px-3 py-1 rounded-full text-sm">Docker</span>
                            <span class="bg-purple-100 dark:bg-purple-900 text-purple-800 dark:text-purple-200 px-3 py-1 rounded-full text-sm">PostgreSQL</span>
                            <span class="bg-purple-100 dark:bg-purple-900 text-purple-800 dark:text-purple-200 px-3 py-1 rounded-full text-sm">Redis</span>
                        </div>
                    </div>
                </div>
            </div>
        </section>

        <!-- What I Do Section -->
        <section class="py-16 bg-gray-50 dark:bg-gray-800 rounded-2xl">
            <div class="text-center mb-12">
                <h2 class="text-4xl font-bold mb-4 text-gray-900 dark:text-white">What I Do</h2>
                <p class="text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
                    Building software and breaking down barriers in tech
                </p>
            </div>
            
            <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                <div class="text-center">
                    <Icon name="mdi:code" class="w-12 h-12 text-blue-600 dark:text-blue-400 mx-auto mb-4" />
                    <h3 class="text-xl font-semibold mb-3 text-gray-900 dark:text-white">Software Engineering</h3>
                    <p class="text-gray-600 dark:text-gray-300">Building full-stack applications and solving complex technical challenges</p>
                </div>
                
                <div class="text-center">
                    <Icon name="mdi:accessibility" class="w-12 h-12 text-green-600 dark:text-green-400 mx-auto mb-4" />
                    <h3 class="text-xl font-semibold mb-3 text-gray-900 dark:text-white">Accessibility Advocacy</h3>
                    <p class="text-gray-600 dark:text-gray-300">Promoting inclusive technology and removing barriers for everyone in tech</p>
                </div>
                
                <div class="text-center">
                    <Icon name="mdi:school" class="w-12 h-12 text-purple-600 dark:text-purple-400 mx-auto mb-4" />
                    <h3 class="text-xl font-semibold mb-3 text-gray-900 dark:text-white">Continuous Learning</h3>
                    <p class="text-gray-600 dark:text-gray-300">Always exploring new technologies, frameworks, and staying curious about how things work</p>
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
