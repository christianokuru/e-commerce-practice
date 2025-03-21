import { defineStore } from 'pinia'

export const useCartStore = defineStore('cart', {
  state: () => ({
    cart: []
  }),

  actions: {
    addToCart(product) {
      const existingItem = this.cart.find((item) => item.id === product.id)
      if (existingItem) {
        existingItem.quantity++
      } else {
        this.cart.push({ ...product, quantity: 1 })
      }
      this.saveCart()
    },

    removeFromCart(productId) {
      this.cart = this.cart.filter((item) => item.id !== productId)
      this.saveCart()
    },

    clearCart() {
      this.cart = []
      this.saveCart()
    },

    saveCart() {
      if (process.client) {
        localStorage.setItem('cart', JSON.stringify(this.cart))
      }
    },

    loadCart() {
      if (process.client) {
        const storedCart = localStorage.getItem('cart')
        if (storedCart) {
          this.cart = JSON.parse(storedCart)
        }
      }
    }
  }
})
