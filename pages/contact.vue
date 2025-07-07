<template>
  <div class="space-y-12">
    <!-- Hero Section -->
    <section class="text-center py-16 bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50 dark:from-gray-900 dark:via-blue-900 dark:to-indigo-900 rounded-2xl">
      <div class="mb-8">
        <h1 class="text-5xl font-bold mb-4 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
          Let's Connect
        </h1>
        <p class="text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
          I'd love to hear from you! Whether it's about a project, collaboration, or just to say hello.
        </p>
      </div>
    </section>

    <div class="grid grid-cols-1 lg:grid-cols-2 gap-12">
      <!-- Contact Form -->
      <div class="bg-white dark:bg-gray-800 p-8 rounded-xl shadow-lg">
        <div class="flex items-center mb-6">
          <Icon name="mdi:email" class="w-8 h-8 text-blue-600 dark:text-blue-400 mr-3" />
          <h2 class="text-2xl font-bold text-gray-900 dark:text-white">Send a Message</h2>
        </div>
        
        <form @submit.prevent="submitForm" class="space-y-6">
          <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label for="name" class="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                Name *
              </label>
              <input
                id="name"
                v-model="form.name"
                type="text"
                required
                class="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-700 text-gray-900 dark:text-white focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors"
                placeholder="Your name"
              />
            </div>
            
            <div>
              <label for="email" class="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                Email *
              </label>
              <input
                id="email"
                v-model="form.email"
                type="email"
                required
                class="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-700 text-gray-900 dark:text-white focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors"
                placeholder="your@email.com"
              />
            </div>
          </div>
          
          <div>
            <label for="subject" class="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
              Subject *
            </label>
            <input
              id="subject"
              v-model="form.subject"
              type="text"
              required
              class="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-700 text-gray-900 dark:text-white focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors"
              placeholder="What's this about?"
            />
          </div>
          
          <div>
            <label for="message" class="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
              Message *
            </label>
            <textarea
              id="message"
              v-model="form.message"
              rows="6"
              required
              class="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-700 text-gray-900 dark:text-white focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors resize-y"
              placeholder="Your message here..."
            ></textarea>
          </div>
          
          <button
            type="submit"
            :disabled="isSubmitting"
            class="w-full bg-blue-600 hover:bg-blue-700 disabled:bg-blue-400 text-white font-semibold py-3 px-6 rounded-lg transition-colors duration-200 flex items-center justify-center"
          >
            <Icon v-if="isSubmitting" name="mdi:loading" class="w-5 h-5 mr-2 animate-spin" />
            <Icon v-else name="mdi:send" class="w-5 h-5 mr-2" />
            {{ isSubmitting ? 'Sending...' : 'Send Message' }}
          </button>
        </form>
        
        <!-- Success/Error Messages -->
        <div v-if="submitMessage" class="mt-4 p-4 rounded-lg" :class="submitSuccess ? 'bg-green-50 dark:bg-green-900/20 text-green-800 dark:text-green-200' : 'bg-red-50 dark:bg-red-900/20 text-red-800 dark:text-red-200'">
          <div class="flex items-center">
            <Icon :name="submitSuccess ? 'mdi:check-circle' : 'mdi:alert-circle'" class="w-5 h-5 mr-2" />
            {{ submitMessage }}
          </div>
        </div>
      </div>

      <!-- Contact Information -->
      <div class="space-y-8">
        <!-- Social Links -->
        <div class="bg-white dark:bg-gray-800 p-8 rounded-xl shadow-lg">
          <div class="flex items-center mb-6">
            <Icon name="mdi:account-group" class="w-8 h-8 text-green-600 dark:text-green-400 mr-3" />
            <h2 class="text-2xl font-bold text-gray-900 dark:text-white">Connect Online</h2>
          </div>
          
          <div class="space-y-4">
            <a
              href="https://github.com/jtjackson"
              target="_blank"
              class="flex items-center p-4 bg-gray-50 dark:bg-gray-700 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-600 transition-colors group"
            >
              <Icon name="mdi:github" class="w-8 h-8 text-gray-700 dark:text-gray-300 mr-4 group-hover:text-black dark:group-hover:text-white" />
              <div>
                <div class="font-semibold text-gray-900 dark:text-white">GitHub</div>
                <div class="text-sm text-gray-600 dark:text-gray-400">Check out my repositories and contributions</div>
              </div>
            </a>
            
            <a
              href="https://www.linkedin.com/in/james-t-jackson/"
              target="_blank"
              class="flex items-center p-4 bg-gray-50 dark:bg-gray-700 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-600 transition-colors group"
            >
              <Icon name="mdi:linkedin" class="w-8 h-8 text-blue-600 dark:text-blue-400 mr-4 group-hover:text-blue-700 dark:group-hover:text-blue-300" />
              <div>
                <div class="font-semibold text-gray-900 dark:text-white">LinkedIn</div>
                <div class="text-sm text-gray-600 dark:text-gray-400">Professional networking and updates</div>
              </div>
            </a>
            
            <a
              href="https://bsky.app/profile/jjackson.bsky.social"
              target="_blank"
              class="flex items-center p-4 bg-gray-50 dark:bg-gray-700 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-600 transition-colors group"
            >
              <Icon name="ri:bluesky-fill" class="w-8 h-8 text-blue-500 dark:text-blue-400 mr-4 group-hover:text-blue-600 dark:group-hover:text-blue-300" />
              <div>
                <div class="font-semibold text-gray-900 dark:text-white">Bluesky</div>
                <div class="text-sm text-gray-600 dark:text-gray-400">Thoughts and quick updates</div>
              </div>
            </a>
          </div>
        </div>

        <!-- Availability -->
        <div class="bg-white dark:bg-gray-800 p-8 rounded-xl shadow-lg">
          <div class="flex items-center mb-6">
            <Icon name="mdi:clock" class="w-8 h-8 text-purple-600 dark:text-purple-400 mr-3" />
            <h2 class="text-2xl font-bold text-gray-900 dark:text-white">Availability</h2>
          </div>
          
          <div class="space-y-4">
            <div class="flex items-center">
              <Icon name="mdi:check-circle" class="w-5 h-5 text-green-500 mr-3" />
              <span class="text-gray-700 dark:text-gray-300">Open to new opportunities</span>
            </div>
            <div class="flex items-center">
              <Icon name="mdi:check-circle" class="w-5 h-5 text-green-500 mr-3" />
              <span class="text-gray-700 dark:text-gray-300">Available for consulting</span>
            </div>
            <div class="flex items-center">
              <Icon name="mdi:check-circle" class="w-5 h-5 text-green-500 mr-3" />
              <span class="text-gray-700 dark:text-gray-300">Open source collaborations</span>
            </div>
            <div class="flex items-center">
              <Icon name="mdi:check-circle" class="w-5 h-5 text-green-500 mr-3" />
              <span class="text-gray-700 dark:text-gray-300">Speaking engagements</span>
            </div>
          </div>
        </div>

        <!-- Response Time -->
        <div class="bg-gradient-to-r from-blue-50 to-purple-50 dark:from-gray-700 dark:to-gray-800 p-6 rounded-xl">
          <div class="flex items-center mb-4">
            <Icon name="mdi:timer" class="w-6 h-6 text-blue-600 dark:text-blue-400 mr-2" />
            <h3 class="text-lg font-semibold text-gray-900 dark:text-white">Response Time</h3>
          </div>
          <p class="text-gray-600 dark:text-gray-300">
            I typically respond to messages within 24-48 hours. For urgent matters, 
            please mention it in your subject line.
          </p>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
const form = ref({
  name: '',
  email: '',
  subject: '',
  message: ''
})

const isSubmitting = ref(false)
const submitMessage = ref('')
const submitSuccess = ref(false)

const submitForm = async () => {
  isSubmitting.value = true
  submitMessage.value = ''
  
  try {
    // Simulate form submission - replace with actual API call
    await new Promise(resolve => setTimeout(resolve, 1000))
    
    // For now, just show a success message
    submitSuccess.value = true
    submitMessage.value = 'Thank you for your message! I\'ll get back to you soon.'
    
    // Reset form
    form.value = {
      name: '',
      email: '',
      subject: '',
      message: ''
    }
    
  } catch (error) {
    submitSuccess.value = false
    submitMessage.value = 'There was an error sending your message. Please try again or contact me directly via social media.'
  } finally {
    isSubmitting.value = false
  }
}
</script>