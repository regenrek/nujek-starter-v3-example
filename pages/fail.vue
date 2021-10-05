<template>
  <Blok :blok="story.content" />
</template>
<script>
import { story } from '~/__mocks__/story_miss_ct'

export default {
  components: {},
  data () {
    return {
      story
    }
  },
  mounted () {
    console.log('mounted', story)
  }
}
</script>
