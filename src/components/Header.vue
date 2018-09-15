<template>
  <div>
<ul class="nav nav-tabs">
  <li class="nav-item">
    <router-link to="/" exact class="nav-link">All Posts</router-link>
  </li>
  <li class="nav-item">
    <router-link to="/addpost" exact class="nav-link">Add New Post</router-link>
  </li>
</ul>
  </div>
</template>

<script>
export default {
  name: 'app',
  data () {
    return {
    }
  }
}
</script>

<style>
.router-link-active {
    background: black;
    color: white
}
</style>
