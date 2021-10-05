<template>
  <div>
    <h1>Hi from Landingpage</h1>
    <slot name="bloks" />
  </div>
</template>

<script>
export default {
  name: 'Landingpage',
  props: {
    blok: {
      type: Object,
      default: () => ({})
    }
  },
  data () {
    return {
      allgood: true
    }
  }
}
</script>
