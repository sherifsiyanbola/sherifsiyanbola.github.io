<template>
  <div>
      <h4 class="text-center text-info mt-5">{{blog.title}}</h4>
      <p class="text-center text-success">{{blog.content}}</p>
  </div>
</template>

<script>
export default {
  name: 'app',
  data () {
    return {
        id: this.$route.params.id,
        blog:{}
    }
  },
  created(){
      this.$http.get('https://vfire-324ee.firebaseio.com/posts/' + this.id + '.json').then(function(data){
          return data.json()
        //   this.blog = data.body;
      }).then(function(data){
          this.blog = data;
      });
  }
}
</script>

<style>

</style>
