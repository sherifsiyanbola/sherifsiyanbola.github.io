import viewPosts from './components/viewPosts.vue'
import addPost from './components/addPost.vue'
import singlePost from './components/singlePost.vue'   

export default [
    {
        path:'/',
        component: viewPosts
    },
    {
        path: '/addpost',
        component: addPost
    },
    {
        path: '/post/:id',
        component:singlePost
    }
]