<script setup>
import { useCartStore } from '@/stores/cart'

const cartStore = useCartStore()

const products = [
  { id: 1, name: 'Laptop', price: 1000 },
  { id: 2, name: 'Phone', price: 500 },
  { id: 3, name: 'Headphones', price: 100 }
]

const addToCart = (product) => {
  cartStore.addToCart(product)
}
</script>

<template>
  <div class="p-6">
    <h1 class="text-2xl font-bold mb-4">Shop</h1>

    <div class="grid grid-cols-3 gap-6">
      <div v-for="product in products" :key="product.id" class="p-4 border rounded">
        <h2 class="text-lg font-semibold">{{ product.name }}</h2>
        <p class="text-gray-600">${{ product.price }}</p>
        <button
          @click="addToCart(product)"
          class="mt-2 bg-blue-500 text-white px-4 py-2 rounded"
        >
          Add to Cart
        </button>
      </div>
    </div>
  </div>
</template>
