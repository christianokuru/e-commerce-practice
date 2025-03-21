<script setup>
import { useCartStore } from '@/stores/cart'
import { computed } from 'vue'

// Initialize the cart store
const cartStore = useCartStore()

// Compute total cart items
const totalItems = computed(() =>
  cartStore.cart.reduce((sum, item) => sum + item.quantity, 0)
)

// Define navigation links
const navLinks = [
  { name: 'Home', path: '/' },
  { name: 'About', path: '/about' },
  { name: 'Contact', path: '/contact' }
]
</script>

<template>
  <nav class="bg-white shadow p-4 flex justify-between items-center">
    <nuxt-link to="/" class="text-xl font-bold">my shop</nuxt-link>

    <ul class="flex space-x-6">
      <li v-for="link in navLinks" :key="link.path">
        <nuxt-link :to="link.path" class="text-gray-700 hover:text-blue-500">
          {{ link.name }}
        </nuxt-link>
      </li>
    </ul>

    <nuxt-link to="/cart" class="relative flex items-center">
      🛒
      <span
        v-if="totalItems"
        class="absolute -top-2 -right-2 bg-red-500 text-white text-xs w-5 h-5 flex items-center justify-center rounded-full"
      >
        {{ totalItems }}
      </span>
    </nuxt-link>
  </nav>
</template>
