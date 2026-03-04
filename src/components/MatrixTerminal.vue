<template>
  <div class="terminal-container">
    <div class="terminal" :class="{ 'fade-out': showMatrixRain }">
      <div class="terminal-content">
        <div
          v-for="(line, index) in displayedLines"
          :key="index"
          :class="['terminal-line', { 'cursor-blink': isCursorPhase && index === 0 }]"
        >
          <span v-html="line"></span>
        </div>
      </div>
    </div>

    <canvas
      v-if="showMatrixRain"
      ref="matrixCanvas"
      class="matrix-rain"
    ></canvas>
  </div>
</template>

<script setup>
import { ref, onMounted, nextTick } from 'vue'

const displayedLines = ref([])
const showMatrixRain = ref(false)
const matrixCanvas = ref(null)
const isCursorPhase = ref(true)

const messages = [
  'Initializing connection',
  'Wake up, Neo...',
  'The Matrix has you.',
  'Follow the white rabbit.',
  'Knock, knock, Neo.'
]

const typeWriter = async (text, addDots = false) => {
  let currentText = ''
  displayedLines.value = ['']

  for (let i = 0; i < text.length; i++) {
    currentText += text[i]
    displayedLines.value[0] = currentText
    await new Promise(resolve => setTimeout(resolve, 50))
  }

  if (addDots) {
    for (let i = 0; i < 3; i++) {
      await new Promise(resolve => setTimeout(resolve, 500))
      displayedLines.value[0] = currentText + '.'.repeat(i + 1)
    }
  }
}

const startMatrixRain = () => {
  showMatrixRain.value = true

  nextTick(() => {
    const canvas = matrixCanvas.value
    if (!canvas) return

    const ctx = canvas.getContext('2d')
    canvas.width = window.innerWidth
    canvas.height = window.innerHeight

    const matrix = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ123456789@#$%^&*()*&^%+-/~{[|`]}'
    const fontSize = 16
    const columns = canvas.width / fontSize
    const drops = []

    for (let i = 0; i < columns; i++) {
      drops[i] = 1
    }

    let animationId

    const draw = () => {
      ctx.fillStyle = 'rgba(0, 0, 0, 0.08)'
      ctx.fillRect(0, 0, canvas.width, canvas.height)

      ctx.fillStyle = '#00ff41'
      ctx.font = fontSize + 'px monospace'

      for (let i = 0; i < drops.length; i++) {
        const text = matrix[Math.floor(Math.random() * matrix.length)]
        ctx.fillText(text, i * fontSize, drops[i] * fontSize)

        if (drops[i] * fontSize > canvas.height && Math.random() > 0.975) {
          drops[i] = 0
        }

        drops[i] += 0.5
      }

      animationId = requestAnimationFrame(draw)
    }

    draw()

    setTimeout(() => {
      canvas.classList.add('fade-out-rain')

      setTimeout(() => {
        cancelAnimationFrame(animationId)
        window.location.href = '/home'
      }, 2000)
    }, 6000)
  })
}

onMounted(async () => {
  // Check if user has visited before
  const hasVisited = localStorage.getItem('hasVisitedBefore')

  if (hasVisited) {
    window.location.href = '/home'
    return
  }

  localStorage.setItem('hasVisitedBefore', 'true')

  // Show blinking cursor for 5 seconds
  displayedLines.value = ['█']
  await new Promise(resolve => setTimeout(resolve, 5000))

  // Clear cursor and start sequence
  isCursorPhase.value = false
  displayedLines.value = []

  // Show each message one at a time
  for (let i = 0; i < messages.length; i++) {
    const isInitializing = i === 0
    await typeWriter(messages[i], isInitializing)
    await new Promise(resolve => setTimeout(resolve, 3000))

    if (i < messages.length - 1) {
      displayedLines.value = []
      await new Promise(resolve => setTimeout(resolve, 500))
    }
  }

  // Start Matrix rain transition
  await new Promise(resolve => setTimeout(resolve, 1500))
  displayedLines.value = []
  await new Promise(resolve => setTimeout(resolve, 500))
  startMatrixRain()
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
  max-width: 900px;
  background-color: #000;
  padding: 3rem;
  position: relative;
  transition: opacity 2s ease-out;
}

.terminal.fade-out {
  opacity: 0;
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

.cursor-blink {
  animation: blink-cursor 1s infinite;
}

@keyframes blink-cursor {
  0%, 49% { opacity: 1; }
  50%, 100% { opacity: 0; }
}

.matrix-rain {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 10;
  animation: fadeIn 1.5s ease-in;
  transition: opacity 1.5s ease-out;
}

.matrix-rain.fade-out-rain {
  opacity: 0;
}

@keyframes fadeIn {
  from { opacity: 0; }
  to { opacity: 1; }
}
</style>
