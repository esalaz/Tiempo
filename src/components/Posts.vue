<template>
  <div class="posts">
    <h1>Posts</h1>
    This file will list all the posts.

    <div v-for="posts in posts">
      <p>
        <span><b>{{ posts.title }}</b></span><br />
        <span>{{ posts.description }}</span>
      </p>
    </div>

  </div>
</template>

<script>

import TiempoService from '@/Services/TiempoService'
export default {
  name: 'posts',
  data () {
    return {
      posts: []
    }
  },
  mounted () {
    this.getPosts()
  },
  methods: {
    async getPosts () {
      const response = await TiempoService.fetchPosts()
      this.posts = response.data
    }
  }
}
</script>
