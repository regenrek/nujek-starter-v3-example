<template>
  <div class="bg-yellow-100">
    <div class="max-w-2xl mx-auto text-center py-16 px-4 sm:py-20 sm:px-6 lg:px-8">
      <h2 class="text-3xl font-extrabold text-white sm:text-4xl">
        <span class="block">Simple Button toggler.</span>
      </h2>
      <p class="mt-4 text-lg leading-6 text-indigo-200">
        Ac euismod vel sit maecenas id pellentesque.
      </p>
      <button class="mt-8 w-full inline-flex items-center justify-center px-5 py-3 border border-transparent text-base font-medium rounded-md sm:w-auto" :class="[ toggleBtn ? 'text-yellow-600 bg-yellow-200' : 'text-red-600 bg-red-200']" @click="onClick">
        Toggle Button
      </button>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      toggleBtn: false
    }
  },
  methods: {
    onClick () {
      this.toggleBtn = !this.toggleBtn
      console.log(this.toggleBtn)
    }
  }
}
</script>

<style lang="postcss" scoped>

</style>
