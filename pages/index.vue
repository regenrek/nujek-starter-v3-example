<template>
  <Blok :blok="story.content" />
</template>
<script>
import { story } from '~/__mocks__/story'

export default {
  components: {},
  data () {
    return {
      story
    }
  }
  //   async asyncData({ $storyapi, error, route }) {
  //     try {

  //         const fullSlug = (route.path === '/' || route.path === '') ? 'home' : route.path

  //         const currentPage = await $storyapi.getStory(
  //             fullSlug,
  //             {
  //                 resolve_links: 'url'
  //             }
  //         )

  //         return {
  //             story: currentPage.data.story
  //         }
  //     } catch (e) {
  //         console.error('Exception', e)
  //         error({
  //             statusCode: 404,
  //             message: e.message
  //         })
  //     }
  // }
}
</script>
