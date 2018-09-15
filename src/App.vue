<template>
  <div class="container">
<app-header></app-header>
<router-view></router-view>
  </div>
</template>

<script>
import addPost from './components/addPost.vue'
import viewPosts from './components/viewPosts.vue'
import listPosts from './components/listPosts.vue'
import Header from './components/Header.vue'
import singlePost from './components/singlePost.vue'
export default {
  components:{
    'add-post': addPost,
    'view-posts': viewPosts,
    'list-posts': listPosts,
    'app-header': Header,
    'single-post': singlePost
  },
  name: 'app',
  data () {
    return {
    }
  }
}
</script>

<style>
</style>
