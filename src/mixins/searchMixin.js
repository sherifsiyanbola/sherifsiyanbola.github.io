export default {
    computed: {
              //search filter
      filteredPosts: function(){
        return this.blogs.filter((blog)=>{
            return blog.title.match(this.search)
        });
    }
    }
}