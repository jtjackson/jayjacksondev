<template>
  <div class="terminal-container">
    <div class="terminal">
      <div class="terminal-content">
        <div v-for="(line, index) in displayedLines" :key="index" class="terminal-line">
          <span v-html="line"></span>
        </div>

        <div v-if="showPrompt" class="terminal-line prompt-line">
          <span class="prompt">></span>
          <input
            ref="inputRef"
            v-model="userInput"
            @keydown.enter="handleEnter"
            class="terminal-input"
            :disabled="!acceptingInput"
            autofocus
          />
          <span v-if="acceptingInput" class="cursor">_</span>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted, nextTick } from 'vue'
import { useRouter } from 'vue-router'

const router = useRouter()
const displayedLines = ref([])
const showPrompt = ref(false)
const userInput = ref('')
const acceptingInput = ref(false)
const inputRef = ref(null)

const lines = [
  'Initializing connection...',
  '',
  'Wake up, Neo...',
  '',
  'The Matrix has you.',
  '',
  'Follow the white rabbit.'
]

const typeWriter = async (text, lineIndex) => {
  let currentText = ''
  for (let i = 0; i < text.length; i++) {
    currentText += text[i]
    displayedLines.value[lineIndex] = currentText
    await new Promise(resolve => setTimeout(resolve, 50))
  }
}

const handleEnter = async () => {
  if (!acceptingInput.value || !userInput.value.trim()) return

  acceptingInput.value = false
  const input = userInput.value
  userInput.value = ''

  // Show what user typed
  displayedLines.value.push(`<span class="user-input">> ${input}</span>`)

  await new Promise(resolve => setTimeout(resolve, 500))

  // Response
  displayedLines.value.push('')
  const responseIndex = displayedLines.value.length
  displayedLines.value.push('')
  await typeWriter('Knock, knock, Neo.', responseIndex)

  await new Promise(resolve => setTimeout(resolve, 1000))

  // Redirect to home
  router.push('/home')
}

onMounted(async () => {
  // Type out each line
  for (let i = 0; i < lines.length; i++) {
    const lineIndex = displayedLines.value.length
    displayedLines.value.push('')

    if (lines[i] === '') {
      await new Promise(resolve => setTimeout(resolve, 300))
    } else {
      await typeWriter(lines[i], lineIndex)
      await new Promise(resolve => setTimeout(resolve, 500))
    }
  }

  // Show prompt
  await new Promise(resolve => setTimeout(resolve, 1000))
  showPrompt.value = true

  await nextTick()
  acceptingInput.value = true

  // Focus input
  if (inputRef.value) {
    inputRef.value.focus()
  }
})
</script>

<style scoped>
.terminal-container {
  min-height: 100vh;
  background-color: #000;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 2rem;
  font-family: 'Courier New', Courier, monospace;
}

.terminal {
  width: 100%;
  max-width: 800px;
  background-color: #0d0d0d;
  border: 2px solid #00ff41;
  border-radius: 4px;
  padding: 2rem;
  box-shadow: 0 0 20px rgba(0, 255, 65, 0.3);
}

.terminal-content {
  color: #00ff41;
  font-size: 1.125rem;
  line-height: 1.8;
}

.terminal-line {
  margin-bottom: 0.5rem;
  min-height: 1.8rem;
}

.prompt-line {
  display: flex;
  align-items: center;
  gap: 0.5rem;
}

.prompt {
  color: #00ff41;
  font-weight: bold;
}

.terminal-input {
  flex: 1;
  background: transparent;
  border: none;
  outline: none;
  color: #00ff41;
  font-family: 'Courier New', Courier, monospace;
  font-size: 1.125rem;
  caret-color: transparent;
}

.terminal-input:disabled {
  opacity: 0.5;
}

.cursor {
  animation: blink 1s infinite;
  color: #00ff41;
}

@keyframes blink {
  0%, 50% { opacity: 1; }
  51%, 100% { opacity: 0; }
}

.user-input {
  color: #0ff;
}

/* Matrix rain effect in background */
.terminal-container::before {
  content: '';
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  opacity: 0.05;
  background-image:
    repeating-linear-gradient(
      0deg,
      transparent,
      transparent 2px,
      #00ff41 2px,
      #00ff41 4px
    );
  animation: rain 20s linear infinite;
  pointer-events: none;
  z-index: 0;
}

@keyframes rain {
  0% { transform: translateY(0); }
  100% { transform: translateY(100%); }
}

.terminal {
  position: relative;
  z-index: 1;
}
</style>
