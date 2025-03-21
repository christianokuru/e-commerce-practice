<script setup>
import { useCartStore } from '@/stores/cart'

const cartStore = useCartStore()
</script>

<template>
  <div class="p-6">
    <h1 class="text-2xl font-bold mb-4">Your Cart</h1>

    <div v-if="cartStore.cart.length > 0">
      <div v-for="item in cartStore.cart" :key="item.id" class="p-4 border rounded mb-2">
        <h2 class="text-lg font-semibold">{{ item.name }}</h2>
        <p class="text-gray-600">${{ item.price }} x {{ item.quantity }}</p>
        <button
          @click="cartStore.removeFromCart(item.id)"
          class="mt-2 bg-red-500 text-white px-4 py-2 rounded"
        >
          Remove
        </button>
      </div>
    </div>

    <p v-else class="text-gray-500">Your cart is empty.</p>

    <button
      v-if="cartStore.cart.length > 0"
      @click="cartStore.clearCart"
      class="mt-4 bg-gray-800 text-white px-6 py-2 rounded"
    >
      Clear Cart
    </button>
  </div>
</template>
