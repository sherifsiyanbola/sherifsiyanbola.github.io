<template>
  <div class="container">
      <div v-if="submitted">
    <div class="alert alert-success"><strong> Post Added successfully </strong></div>
</div>
  <!-- post preview -->
  <div class="card mt-4">
    <div class="card-header">
        <form v-if="!submitted">
  <label for="title">Title:</label>
  <input type="text" class="form-control" v-model.lazy="blog.title">
  <label for="content">Content:</label>
  <textarea class="form-control" rows="5" v-model.lazy="blog.content"></textarea>
  <p class="mt-1">Tags</p>
  <!-- checkbox -->
  <div class="form-check-inline">
  <label class="form-check-label">
    <input type="checkbox" class="form-check-input" value="technology" v-model="blog.tags">Technology
  </label>
    <label class="form-check-label">
    <input type="checkbox" class="form-check-input" value="nature" v-model="blog.tags">Nature
  </label>
    <label class="form-check-label">
    <input type="checkbox" class="form-check-input" value="religion" v-model="blog.tags">Religion
  </label>
    <label class="form-check-label">
    <input type="checkbox" class="form-check-input" value="business" v-model="blog.tags">Business
  </label>
</div>

<!-- author -->
<div class="form-group">
  <label for="sel1">Choose Author:</label>
  <select class="form-control" v-model="blog.author">
    <option v-for="author in authors">{{author}}</option>

  </select>
</div>
  <button v-on:click.prevent="post" class="btn btn-info btn-block mt-2">Submit</button>
</form>
    </div>
    <!-- post preview -->
    <div class="card-body" v-if="submitted">
    <h2 class="text-info mt-1 text-center">Post Preview</h2>  
    <div class="card bg-info">
  <div class="card-header"><p class="text-white">Title:</p>
  {{blog.title}}
  </div>
  <div class="card-body"><p class="text-white">Content:</p>
  {{blog.content}}

  <p class="text-white mt-1">Tags:</p>
  <ul>
      <li v-for="tag in blog.tags">{{tag}}</li>
  </ul>

<p class="text-white mt-1">Author:</p>
  {{blog.author}}
  </div> 
  <div class="card-footer"></div>
</div>
</div> 
<div class="card-footer">
      
</div>
</div>
</div>
</template>

<script>
export default {
  name: 'app',
  data () {
    return {
        blog:{
            title:"",
            content:"",
            tags:[],
            author:""
        },
        authors:['Sherif Siyanbola', 'Akeem Siyanbola', 'Shakirat Siyanbola', 'Zainab Siyanbola'],
        submitted: false
        
    }
  },
  methods: {
      post: function(){
          this.$http.post('https://vfire-324ee.firebaseio.com/posts.json', this.blog).then(function(data){
              console.log(data);
              this.submitted = true;
          });
      }
  }
}
</script>

<style>
</style>
