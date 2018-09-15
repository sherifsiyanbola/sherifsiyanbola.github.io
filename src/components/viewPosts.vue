<template>
  <div>
<div class="container">
<h2 class="text-info mt-5 text-center">Vuejs + Firebase Simple Blog System</h2>
<div class="card mt-5">
    <div class="card-header">
        <h1 class="text-center text-primary">All Posts</h1>
        <input type="text" class="form-control" v-model = "search" placeholder="Search query">
        <!-- <button class="btn btn-success btn-block">Search</button> -->
    </div>
    <div class="card-body">
  <div class="card">
    <div class="row">
      <div class="col-sm-3 col-md-4 bg-default" v-for="blog in filteredPosts">
          <router-link v-bind:to = "'/post/'+blog.id"><h5 v-rainbow>{{blog.title | toUppercase}}</h5></router-link>
          <i><p>{{blog.content | snippet}}</p></i>

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
      this.$http.get('https://vfire-324ee.firebaseio.com/posts.json').then(function(data){
          return data.json();
        //   this.blogs = data.body.slice(0,12);
      }).then(function(data){
          var postsArray = [];
          for (let key in data) {
            //   id is now a property
              data[key].id = key
              postsArray.push(data[key]);
          }
          this.blogs = postsArray;
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
