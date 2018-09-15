<template>
  <div>
<div class="container">
<div class="card mt-5" v-any>
    <div class="card-header">
        <h1 class="text-center text-primary">Posts By Title</h1>
        <input type="text" class="form-control" v-model = "search" placeholder="Search query">
        <!-- <button class="btn btn-success btn-block">Search</button> -->
    </div>
    <div class="card-body">
  <div class="card">
    <div class="row">
      <div class="col-sm-3 col-md-4 bg-default" v-for="blog in filteredPosts">
          <h4 v-rainbow>{{blog.title | toUppercase}}</h4>
      </div>
    </div>
  </div>
    </div>
</div>
</div>
  </div>
</template>

<script>
import searchMixin from '../mixins/searchMixin'
export default {
  name: 'app',
  data () {
    return {
        blogs:[],
        search:""
    }
  },
  methods: {

  },
  created(){
        //     this.$http.get('https://newsapi.org/v2/top-headlines?' +
        //   'country=us&' +
        //   'apiKey=d7dc1591a77a41ffa6de004fe5ebdda8').then(function(data){
        //   console.log(data);
        //   this.blogs = data.body.articles;
      this.$http.get('https://jsonplaceholder.typicode.com/posts').then(function(data){
        //   console.log(data);
          this.blogs = data.body.slice(30,42);
      })
  },
  computed:{

  },
  //registering filters locally
  filters:{
      toUppercase(value){
          return value.toUpperCase()
      },
      snippet(value){
          return value.slice(0,100) + "..."
      }
  },
//   registering directives locally
  directives:{
      'rainbow':{
          bind(el, binding, vnode){
              el.style.color = "#" + Math.random().toString().slice(2,8);
          }
      },
      'any': {
          bind(el, binding, vnode) {
              el.style.backgroundColor = "#" + Math.random().toString().slice(2,8);
          }
      }
  },
    mixins:[
      searchMixin
  ]
}
</script>

<style>
</style>
