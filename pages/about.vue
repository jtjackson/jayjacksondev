<template>
  <div class="space-y-12">
    <!-- Hero Section -->
    <section class="text-center py-16 bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50 dark:from-gray-900 dark:via-blue-900 dark:to-indigo-900 rounded-2xl">
      <div class="mb-8">
        <h1 class="text-5xl font-bold mb-4 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
          About Me
        </h1>
        <p class="text-xl text-gray-600 dark:text-gray-300">
          Software Engineer, Accessibility Advocate, and Lifelong Learner
        </p>
      </div>
    </section>

    <!-- Main Content -->
    <div class="grid grid-cols-1 lg:grid-cols-3 gap-12">
      <!-- Profile Section -->
      <div class="lg:col-span-2 space-y-8">
        <div class="bg-white dark:bg-gray-800 p-8 rounded-xl shadow-lg">
          <div class="flex items-center mb-6">
            <Icon name="mdi:account-heart" class="w-8 h-8 text-blue-600 dark:text-blue-400 mr-3" />
            <h2 class="text-2xl font-bold text-gray-900 dark:text-white">My Story</h2>
          </div>
          <div class="space-y-6 text-gray-600 dark:text-gray-300">
            <p class="text-lg leading-relaxed">
              Howdy! Welcome to my corner of the Universe. My name is Jay Jackson.
            </p>
            
            <p class="text-lg leading-relaxed">
              A bit about me: I'm Deaf and have been in the tech industry for over 20 years. I cut my teeth as a QA Engineer, spending over a decade breaking things in wonderfully odd ways. It was a fun journey, but as I dug deeper into the codebase, I started getting the itch to fix things instead of just break them. That led me to make the leap into software engineering — and I've never looked back.
            </p>
            
            <p class="text-lg leading-relaxed">
              I suppose it all really started when I was a kid, sitting at my desk pretending to type away on a computer. We couldn't afford one for many years after our beloved Commodore was stolen. So imagine my joy when we finally got a PC running GeoWorks, which was some kind of knock off Windows. I'd spend hours tweaking the autoexec.bat just to free up enough RAM to run Wolfenstein 3D. I was a naturally curious kid, always wondering how the world works — which eventually led me to earn a degree in Physics.
            </p>
            
            <p class="text-lg leading-relaxed">
              That curiosity hasn't gone away. These days, I tinker with all sorts of tech, dive into new frameworks just for fun, and try to keep learning wherever I can. Outside of code, I enjoy reading, writing, spending time with my family, and watching sports. I love to geek out with people on subjects they are passionate about, whether it is art, cars, plants, politics, etc. The world is an fascinating place and full of amazing people with wonderful stories to tell. I guess I've always aimed to be my own version of a Renaissance man.
            </p>
            
            <p class="text-lg leading-relaxed">
              I'm also passionate about ASL and Deaf culture. Being Deaf, I've experienced the challenges of accessibility firsthand — especially at conferences and in the workplace. That's why I got involved with the <a href="https://contribute.cncf.io/accessibility/deaf-and-hard-of-hearing" target="_blank" class="text-blue-600 dark:text-blue-400 hover:text-blue-800 dark:hover:text-blue-300 underline">CNCF Deaf and Hard of Hearing Working Group</a>. I want to help open doors for others and make sure our voices are heard in the spaces that matter.
            </p>
            
            <p class="text-lg leading-relaxed">
              If you ever see me around, don't be shy — feel free to say hello!
            </p>
          </div>
        </div>

        <!-- Experience & Skills -->
        <div class="bg-white dark:bg-gray-800 p-8 rounded-xl shadow-lg">
          <div class="flex items-center mb-6">
            <Icon name="mdi:briefcase" class="w-8 h-8 text-green-600 dark:text-green-400 mr-3" />
            <h2 class="text-2xl font-bold text-gray-900 dark:text-white">Experience & Expertise</h2>
          </div>
          <div class="space-y-6">
            <div>
              <h3 class="text-lg font-semibold text-gray-900 dark:text-white mb-3">Core Technologies</h3>
              <div class="grid grid-cols-2 md:grid-cols-3 gap-3">
                <div class="flex items-center">
                  <Icon name="mdi:language-c" class="w-5 h-5 text-blue-600 mr-2" />
                  <span class="text-gray-700 dark:text-gray-300">C/C++</span>
                </div>
                <div class="flex items-center">
                  <Icon name="mdi:language-python" class="w-5 h-5 text-blue-500 mr-2" />
                  <span class="text-gray-700 dark:text-gray-300">Python</span>
                </div>
                <div class="flex items-center">
                  <Icon name="mdi:language-javascript" class="w-5 h-5 text-yellow-500 mr-2" />
                  <span class="text-gray-700 dark:text-gray-300">JavaScript</span>
                </div>
                <div class="flex items-center">
                  <Icon name="mdi:language-csharp" class="w-5 h-5 text-purple-600 mr-2" />
                  <span class="text-gray-700 dark:text-gray-300">C#</span>
                </div>
                <div class="flex items-center">
                  <Icon name="mdi:vuejs" class="w-5 h-5 text-green-500 mr-2" />
                  <span class="text-gray-700 dark:text-gray-300">Vue.js</span>
                </div>
                <div class="flex items-center">
                  <Icon name="mdi:language-ruby" class="w-5 h-5 text-red-500 mr-2" />
                  <span class="text-gray-700 dark:text-gray-300">Ruby on Rails</span>
                </div>
              </div>
            </div>
            
            <div>
              <h3 class="text-lg font-semibold text-gray-900 dark:text-white mb-3">Areas of Focus</h3>
              <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div class="flex items-start">
                  <Icon name="mdi:code" class="w-5 h-5 text-blue-500 mr-2 mt-1" />
                  <div>
                    <div class="font-medium text-gray-900 dark:text-white">Software Engineering</div>
                    <div class="text-sm text-gray-600 dark:text-gray-400">Full-stack development, system architecture, problem-solving</div>
                  </div>
                </div>
                <div class="flex items-start">
                  <Icon name="mdi:school" class="w-5 h-5 text-purple-500 mr-2 mt-1" />
                  <div>
                    <div class="font-medium text-gray-900 dark:text-white">Continuous Learning</div>
                    <div class="text-sm text-gray-600 dark:text-gray-400">Tinkering with new tech, exploring frameworks, staying curious</div>
                  </div>
                </div>
                <div class="flex items-start">
                  <Icon name="mdi:accessibility" class="w-5 h-5 text-green-500 mr-2 mt-1" />
                  <div>
                    <div class="font-medium text-gray-900 dark:text-white">Accessibility Advocacy</div>
                    <div class="text-sm text-gray-600 dark:text-gray-400">Breaking barriers, promoting inclusion in tech workspaces</div>
                  </div>
                </div>
                <div class="flex items-start">
                  <Icon name="mdi:cloud" class="w-5 h-5 text-orange-500 mr-2 mt-1" />
                  <div>
                    <div class="font-medium text-gray-900 dark:text-white">Cloud Native Technologies</div>
                    <div class="text-sm text-gray-600 dark:text-gray-400">Learning eBPF, Kubernetes, containerization, CNCF ecosystem</div>
                  </div>
                </div>
                <div class="flex items-start">
                  <Icon name="mdi:open-source-initiative" class="w-5 h-5 text-red-500 mr-2 mt-1" />
                  <div>
                    <div class="font-medium text-gray-900 dark:text-white">Open Source Advocate</div>
                    <div class="text-sm text-gray-600 dark:text-gray-400">Passionate about OSS culture, accessibility in tech, and giving back to the community</div>
                  </div>
                </div>
                <div class="flex items-start">
                  <Icon name="mdi:pen" class="w-5 h-5 text-indigo-500 mr-2 mt-1" />
                  <div>
                    <div class="font-medium text-gray-900 dark:text-white">Storytelling & Community</div>
                    <div class="text-sm text-gray-600 dark:text-gray-400">Writing, connecting with passionate people, sharing diverse stories</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <!-- Sidebar -->
      <div class="space-y-8">
        <!-- Personal Interests -->
        <div class="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-lg">
          <div class="flex items-center mb-4">
            <Icon name="mdi:heart" class="w-6 h-6 text-red-500 mr-2" />
            <h3 class="text-xl font-semibold text-gray-900 dark:text-white">Interests</h3>
          </div>
          <div class="space-y-3">
            <div class="flex items-center">
              <Icon name="mdi:book-open" class="w-5 h-5 text-blue-500 mr-2" />
              <span class="text-gray-700 dark:text-gray-300">Reading & Writing</span>
            </div>
            <div class="flex items-center">
              <Icon name="mdi:television" class="w-5 h-5 text-green-500 mr-2" />
              <span class="text-gray-700 dark:text-gray-300">Watching good sports</span>
            </div>
            <div class="flex items-center">
              <Icon name="mdi:gamepad-variant" class="w-5 h-5 text-orange-500 mr-2" />
              <span class="text-gray-700 dark:text-gray-300">Video games</span>
            </div>
            <div class="flex items-center">
              <Icon name="mdi:code-tags" class="w-5 h-5 text-purple-500 mr-2" />
              <span class="text-gray-700 dark:text-gray-300">Coding projects</span>
            </div>
            <div class="flex items-center">
              <Icon name="mdi:family-tree" class="w-5 h-5 text-red-500 mr-2" />
              <span class="text-gray-700 dark:text-gray-300">Family time</span>
            </div>
            <div class="flex items-center">
              <Icon name="mdi:flask" class="w-5 h-5 text-indigo-500 mr-2" />
              <span class="text-gray-700 dark:text-gray-300">Science exploration</span>
            </div>
          </div>
        </div>

        <!-- Community -->
        <div class="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-lg">
          <div class="flex items-center mb-4">
            <Icon name="mdi:account-group" class="w-6 h-6 text-blue-500 mr-2" />
            <h3 class="text-xl font-semibold text-gray-900 dark:text-white">Community</h3>
          </div>
          <div class="space-y-3">
            <div class="flex items-start">
              <Icon name="mdi:hand-heart" class="w-5 h-5 text-red-500 mr-2 mt-1" />
              <div>
                <div class="font-medium text-gray-900 dark:text-white">ASL Advocate</div>
                <div class="text-sm text-gray-600 dark:text-gray-400">Promoting ASL in tech</div>
              </div>
            </div>
            <div class="flex items-start">
              <Icon name="mdi:cloud" class="w-5 h-5 text-blue-500 mr-2 mt-1" />
              <div>
                <div class="font-medium text-gray-900 dark:text-white">CNCF Member</div>
                <div class="text-sm text-gray-600 dark:text-gray-400">Deaf & Hard of Hearing WG</div>
              </div>
            </div>
            <div class="flex items-start">
              <Icon name="mdi:open-source-initiative" class="w-5 h-5 text-green-500 mr-2 mt-1" />
              <div>
                <div class="font-medium text-gray-900 dark:text-white">Open Source</div>
                <div class="text-sm text-gray-600 dark:text-gray-400">Contributing to accessible tech</div>
              </div>
            </div>
          </div>
        </div>

        <!-- Contact CTA -->
        <div class="bg-gradient-to-r from-blue-50 to-purple-50 dark:from-gray-700 dark:to-gray-800 p-6 rounded-xl">
          <div class="text-center">
            <Icon name="mdi:email" class="w-8 h-8 text-blue-600 dark:text-blue-400 mx-auto mb-3" />
            <h3 class="text-lg font-semibold text-gray-900 dark:text-white mb-2">Let's Connect!</h3>
            <p class="text-sm text-gray-600 dark:text-gray-300 mb-4">
              I'm always looking for new opportunities to learn and grow. Have an interesting project or idea?
            </p>
            <div class="flex justify-center space-x-3">
              <a href="https://github.com/jtjackson" target="_blank" class="text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400">
                <Icon name="mdi:github" class="w-6 h-6" />
              </a>
              <a href="https://www.linkedin.com/in/james-t-jackson/" target="_blank" class="text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400">
                <Icon name="mdi:linkedin" class="w-6 h-6" />
              </a>
              <a href="https://bsky.app/profile/jjackson.bsky.social" target="_blank" class="text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400">
                <Icon name="ri:bluesky-fill" class="w-6 h-6" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
