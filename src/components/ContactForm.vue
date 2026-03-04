<script setup lang="ts">
import { ref } from 'vue';

const form = ref({
  name: '',
  email: '',
  subject: '',
  message: ''
});

const isSubmitting = ref(false);
const submitMessage = ref('');
const submitSuccess = ref(false);

const submitForm = async () => {
  isSubmitting.value = true;
  submitMessage.value = '';

  try {
    // Simulate form submission - replace with actual API call
    await new Promise(resolve => setTimeout(resolve, 1000));

    // For now, just show a success message
    submitSuccess.value = true;
    submitMessage.value = "Thank you for your message! I'll get back to you soon.";

    // Reset form
    form.value = {
      name: '',
      email: '',
      subject: '',
      message: ''
    };

  } catch (error) {
    submitSuccess.value = false;
    submitMessage.value = 'There was an error sending your message. Please try again or contact me directly via social media.';
  } finally {
    isSubmitting.value = false;
  }
};
</script>

<template>
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
          autocomplete="name"
          class="w-full px-4 py-3 bg-transparent border-b border-gray-300 dark:border-green-500/30 text-gray-900 dark:text-white placeholder-gray-400 dark:placeholder-gray-500 focus:outline-none focus:border-blue-600 dark:focus:border-green-500 transition-colors"
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
          autocomplete="email"
          class="w-full px-4 py-3 bg-transparent border-b border-gray-300 dark:border-green-500/30 text-gray-900 dark:text-white placeholder-gray-400 dark:placeholder-gray-500 focus:outline-none focus:border-blue-600 dark:focus:border-green-500 transition-colors"
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
        class="w-full px-4 py-3 bg-transparent border-b border-gray-300 dark:border-green-500/30 text-gray-900 dark:text-white placeholder-gray-400 dark:placeholder-gray-500 focus:outline-none focus:border-blue-600 dark:focus:border-green-500 transition-colors"
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
        class="w-full px-4 py-3 bg-transparent border-b border-gray-300 dark:border-green-500/30 text-gray-900 dark:text-white placeholder-gray-400 dark:placeholder-gray-500 focus:outline-none focus:border-blue-600 dark:focus:border-green-500 transition-colors resize-y"
        placeholder="Your message here..."
      ></textarea>
    </div>

    <button
      type="submit"
      :disabled="isSubmitting"
      class="px-8 py-3 bg-blue-600 hover:bg-blue-700 dark:bg-green-500 dark:hover:bg-green-600 disabled:bg-blue-400 dark:disabled:bg-green-400/50 text-white dark:text-black font-semibold rounded-lg transition-colors"
    >
      {{ isSubmitting ? 'Sending...' : 'Send Message' }}
    </button>

    <!-- Success/Error Messages -->
    <div
      v-if="submitMessage"
      role="status"
      aria-live="polite"
      :class="submitSuccess ? 'text-green-600 dark:text-green-400' : 'text-red-600 dark:text-red-400'"
    >
      {{ submitMessage }}
    </div>
  </form>
</template>
