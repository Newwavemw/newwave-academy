<script setup lang="ts">
import { onBeforeMount, ref } from 'vue'

const offlineReady = ref(false)
const onOfflineReady = () => {
  offlineReady.value = true
}
const close = async () => {
  offlineReady.value = false
}

onBeforeMount(async () => {
  const { registerSW } = await import('virtual:pwa-register')
  
  // Register the service worker
  const { waiting } = registerSW({
    immediate: true,
    onOfflineReady,
    onRegistered() {
      console.info('Service Worker registered')
    },
    onRegisterError(e) {
      console.error('Service Worker registration error!', e)
    },
  })

  // Listen for service worker updates
  if (waiting) {
    waiting.addEventListener('statechange', (event) => {
      if (event.target.state === 'activated') {
        // A new service worker has been activated, prompt the user to refresh
        if (confirm('A new version of the app is available. Do you want to refresh?')) {
          window.location.reload()
        }
      }
    })
  }
})
</script>

<template>
  <template v-if="offlineReady">
    <div
      class="pwa-toast"
      role="alertdialog"
      aria-labelledby="pwa-message"
    >
      <div id="pwa-message" class="mb-3">
        App ready to work offline
      </div>
      <button
        type="button"
        class="pwa-cancel"
        @click="close"
      >
        Close
      </button>
    </div>
  </template>
</template>

<style>
.pwa-toast {
  position: fixed;
  right: 0;
  bottom: 0;
  margin: 16px;
  padding: 12px;
  border: 1px solid #8885;
  border-radius: 4px;
  z-index: 100;
  text-align: left;
  background-color: #2e2e2e;
}

.pwa-toast #pwa-message {
  margin-bottom: 8px;
}

.pwa-toast button {
  border: 1px solid #8885;
  outline: none;
  margin-right: 5px;
  border-radius: 2px;
  padding: 3px 10px;
}
</style>
