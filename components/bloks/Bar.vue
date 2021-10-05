<template>
  <div>
    <h2 class="text-md font-extrabold text-yellow-800 sm:text-4xl">
      <span class="block">Foo</span>
    </h2>
    <p class="text-yellow-600">
      {{ blok.description }}
    </p>
  </div>
</template>

<script>
export default {
  props: {
    blok: {
      type: Object,
      default: () => ({})
    }
  }
}
</script>

<style lang="postcss" scoped>

</style>
