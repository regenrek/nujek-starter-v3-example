<template>
  <div class="bg-yellow-200 border-b border-yellow-400 pb-8">
    <div class="max-w-2xl mx-auto text-center py-10 px-4 sm:py-6 sm:px-6 lg:px-8">
      <h2 class="text-3xl font-extrabold text-white sm:text-4xl">
        <span class="block">{{ blok.description }} </span>
      </h2>
    </div>
    <div class="mx-auto rounded-lg bg-yellow-100 text-yellow-800 max-w-md p-12">
      <slot name="bars" :category="blok.category" />
    </div>
  </div>
</template>

<script>
export default {
  name: 'Foo',
  props: {
    blok: {
      type: Object,
      default: () => ({})
    }
  }
}
</script>
