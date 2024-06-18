<template>
  <div class="container my-20 mx-5 md:mx-auto">
    <div class="flex flex-col my-20 text-center space-y-2">
      <span class="text-2xl">
        The open source project example using the technology stack: Vue3, REST API + Pinia store
      </span>
      <a
          target="_blank"
          href="https://github.com/roma-marshall/vue3-api-pinia"
          class="text-base text-blue-700 hover:text-blue-500">
        https://github.com/roma-marshall/vue3-api-pinia
      </a>
    </div>
    <div class="grid md:grid-cols-3 gap-10">
      <div v-for="item in json">
        <div class="flex flex-col justify-center space-y-2">
          <div class="text-center cursor-pointer w-fit h-fit space-y-2 mx-auto">
            <img
                class="rounded-xl shadow-lg saturate-50 hover:saturate-100 hover:scale-105 transition-all duration-500"
                :src="item.thumbnail"
                :alt="item.slug"
            >
            <span class="text-gray-300 text-xs">{{ item.slug }}</span>
          </div>

          <div class="text-gray-700 text-sm text-center">
            {{ item.title }}
          </div>

          <div class="text-gray-300 text-xs text-center">
            {{ item.publishedAt }}
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import { piniaStore } from './store/pinia'

// define pinia store
const store = piniaStore()
const json = ref({})

const fetchData = async() => {
  // fetch data from endpoint
  const response = await fetch('https://jsonplaceholder.org/posts', {
    method: 'GET',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json',
    }
  })

  // write in pinia store
  store.data = await response.json()
  json.value = await store.data
}

onMounted(() => fetchData())
</script>
