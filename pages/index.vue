<template>
    <div class="space-y-16">
        <!-- Hero Section -->
        <section class="text-center py-24 bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50 dark:from-gray-900 dark:via-blue-900 dark:to-indigo-900 rounded-2xl">
            <div class="mb-8">
                <h1 class="text-6xl font-bold mb-6 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                    Jay Jackson
                </h1>
                <p class="text-2xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto mb-4">
                    Tinkerer · Engineer · Continuous Learner
                </p>
                <p class="text-lg text-gray-500 dark:text-gray-400 max-w-3xl mx-auto mb-8">
                    Grew up wanting to be a physicist, fell in love with code instead. 22 years building things, breaking things, and tinkering with everything from C++ to eBPF. Leading the CNCF Sign Language Glossary Team and working as a full-stack contractor.
                </p>
            </div>
            <div class="flex justify-center space-x-6">
                <NuxtLink to="/projects" class="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-lg font-semibold transition-colors">
                    View My Work
                </NuxtLink>
                <NuxtLink to="/about" class="border border-blue-600 text-blue-600 dark:text-blue-400 dark:border-blue-400 hover:bg-blue-50 dark:hover:bg-blue-900 px-8 py-3 rounded-lg font-semibold transition-colors">
                    My Story
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
                            <span class="bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 px-3 py-1 rounded-full text-sm">C++</span>
                            <span class="bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 px-3 py-1 rounded-full text-sm">C#</span>
                            <span class="bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 px-3 py-1 rounded-full text-sm">Python</span>
                            <span class="bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 px-3 py-1 rounded-full text-sm">JavaScript</span>
                            <span class="bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 px-3 py-1 rounded-full text-sm">SQL</span>
                        </div>
                    </div>
                </div>

                <div class="bg-white dark:bg-gray-800 p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow">
                    <div class="text-center">
                        <div class="w-16 h-16 bg-green-100 dark:bg-green-900 rounded-full flex items-center justify-center mx-auto mb-4">
                            <Icon name="mdi:web" class="w-8 h-8 text-green-600 dark:text-green-400" />
                        </div>
                        <h3 class="text-xl font-semibold mb-3 text-gray-900 dark:text-white">Frameworks & Tools</h3>
                        <div class="flex flex-wrap justify-center gap-2">
                            <span class="bg-green-100 dark:bg-green-900 text-green-800 dark:text-green-200 px-3 py-1 rounded-full text-sm">ASP.NET</span>
                            <span class="bg-green-100 dark:bg-green-900 text-green-800 dark:text-green-200 px-3 py-1 rounded-full text-sm">Vue.js</span>
                            <span class="bg-green-100 dark:bg-green-900 text-green-800 dark:text-green-200 px-3 py-1 rounded-full text-sm">Qt</span>
                            <span class="bg-green-100 dark:bg-green-900 text-green-800 dark:text-green-200 px-3 py-1 rounded-full text-sm">Node.js</span>
                            <span class="bg-green-100 dark:bg-green-900 text-green-800 dark:text-green-200 px-3 py-1 rounded-full text-sm">Motif/Xt</span>
                        </div>
                    </div>
                </div>

                <div class="bg-white dark:bg-gray-800 p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow">
                    <div class="text-center">
                        <div class="w-16 h-16 bg-purple-100 dark:bg-purple-900 rounded-full flex items-center justify-center mx-auto mb-4">
                            <Icon name="mdi:cloud" class="w-8 h-8 text-purple-600 dark:text-purple-400" />
                        </div>
                        <h3 class="text-xl font-semibold mb-3 text-gray-900 dark:text-white">Infrastructure & Specialized</h3>
                        <div class="flex flex-wrap justify-center gap-2">
                            <span class="bg-purple-100 dark:bg-purple-900 text-purple-800 dark:text-purple-200 px-3 py-1 rounded-full text-sm">Kubernetes</span>
                            <span class="bg-purple-100 dark:bg-purple-900 text-purple-800 dark:text-purple-200 px-3 py-1 rounded-full text-sm">eBPF</span>
                            <span class="bg-purple-100 dark:bg-purple-900 text-purple-800 dark:text-purple-200 px-3 py-1 rounded-full text-sm">Docker</span>
                            <span class="bg-purple-100 dark:bg-purple-900 text-purple-800 dark:text-purple-200 px-3 py-1 rounded-full text-sm">Redis</span>
                            <span class="bg-purple-100 dark:bg-purple-900 text-purple-800 dark:text-purple-200 px-3 py-1 rounded-full text-sm">Asterisk</span>
                            <span class="bg-purple-100 dark:bg-purple-900 text-purple-800 dark:text-purple-200 px-3 py-1 rounded-full text-sm">Kamailio</span>
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
                    <h3 class="text-xl font-semibold mb-3 text-gray-900 dark:text-white">Full-Stack Development</h3>
                    <p class="text-gray-600 dark:text-gray-300">Building everything from real-time data visualization to telephony solutions and cloud native applications</p>
                </div>

                <div class="text-center">
                    <Icon name="mdi:account-group" class="w-12 h-12 text-green-600 dark:text-green-400 mx-auto mb-4" />
                    <h3 class="text-xl font-semibold mb-3 text-gray-900 dark:text-white">CNCF Sign Language Glossary Leader</h3>
                    <p class="text-gray-600 dark:text-gray-300">Leading the team creating and standardizing ASL signs for cloud native terms and technologies</p>
                </div>

                <div class="text-center">
                    <Icon name="mdi:tools" class="w-12 h-12 text-purple-600 dark:text-purple-400 mx-auto mb-4" />
                    <h3 class="text-xl font-semibold mb-3 text-gray-900 dark:text-white">Tinkerer & Continuous Learner</h3>
                    <p class="text-gray-600 dark:text-gray-300">From C++ and Linux to eBPF and Kubernetes—always exploring, learning, and building</p>
                </div>
            </div>
        </section>

        <!-- Journey Section -->
        <section class="py-16">
            <div class="text-center mb-12">
                <h2 class="text-4xl font-bold mb-4 text-gray-900 dark:text-white">22 Years of Building & Learning</h2>
                <p class="text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
                    From physics degree to full-stack engineer to cloud native explorer
                </p>
            </div>

            <div class="space-y-8 max-w-4xl mx-auto">
                <div class="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-lg border-l-4 border-blue-600">
                    <div class="flex items-center mb-3">
                        <Icon name="mdi:school" class="w-6 h-6 text-blue-600 dark:text-blue-400 mr-3" />
                        <h3 class="text-xl font-semibold text-gray-900 dark:text-white">The Beginning</h3>
                        <span class="ml-auto text-sm font-semibold text-gray-500 dark:text-gray-400">BS in Physics</span>
                    </div>
                    <p class="text-gray-600 dark:text-gray-300">
                        Grew up wanting to be a physicist, but fell in love with code. Tinkered with C++ and experimented with different Linux distros. Decided to go into tech instead.
                    </p>
                </div>

                <div class="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-lg border-l-4 border-green-600">
                    <div class="flex items-center mb-3">
                        <Icon name="mdi:routes" class="w-6 h-6 text-green-600 dark:text-green-400 mr-3" />
                        <h3 class="text-xl font-semibold text-gray-900 dark:text-white">The Winding Path</h3>
                        <span class="ml-auto text-sm font-semibold text-gray-500 dark:text-gray-400">15 Years</span>
                    </div>
                    <p class="text-gray-600 dark:text-gray-300">
                        Started as QA Engineer, got laid off, worked part-time at a community college AT Lab (where accessibility became personal), got hired back as QA, then became Software Engineer. Built COTS tools for drag/drop display builders for real-time data visualization and process control using Motif/Xt. Experimented with Qt and Python scripting. Created a WebGL prototype to render real-time data from the backend.
                    </p>
                </div>

                <div class="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-lg border-l-4 border-purple-600">
                    <div class="flex items-center mb-3">
                        <Icon name="mdi:lightning-bolt" class="w-6 h-6 text-purple-600 dark:text-purple-400 mr-3" />
                        <h3 class="text-xl font-semibold text-gray-900 dark:text-white">Full-Stack Years</h3>
                        <span class="ml-auto text-sm font-semibold text-gray-500 dark:text-gray-400">7 Years</span>
                    </div>
                    <p class="text-gray-600 dark:text-gray-300">
                        Picked up C# along the way. After another layoff, found my groove as a full-stack developer working with ASP.NET, Python, Asterisk, Kamailio, and Redis. Built telephony solutions for automotive dealerships and high-volume sales environments.
                    </p>
                </div>

                <div class="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-lg border-l-4 border-indigo-600">
                    <div class="flex items-center mb-3">
                        <Icon name="mdi:cloud-outline" class="w-6 h-6 text-indigo-600 dark:text-indigo-400 mr-3" />
                        <h3 class="text-xl font-semibold text-gray-900 dark:text-white">Cloud Native Era</h3>
                        <span class="ml-auto text-sm font-semibold text-indigo-600 dark:text-indigo-400">Current</span>
                    </div>
                    <p class="text-gray-600 dark:text-gray-300">
                        Found my way into the CNCF space through the Deaf & Hard of Hearing Working Group. Now leading the Sign Language Glossary Team, exploring Kubernetes and eBPF (following it closely!), and working to incorporate it in my day job. Contracting for a Deaf-owned dev firm with EdTech and interpreting backgrounds.
                    </p>
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
