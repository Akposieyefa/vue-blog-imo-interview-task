<template>
  <div>
    <br /><br />
    <PostForm @postCreated="addPost" :editingPost="editingPost" />
    <h4 class="text-center font-weight-bold">Posts</h4>
    <div class="row">
      <div v-for="post in posts" :key="post.id" class="col-sm-4 mb-3">
        <div class="card">
          <div class="card-header">{{ post.title }}</div>
          <div class="card-body">
            <p class="card-text text-justify">{{ post.content }}</p>
            <small>{{ post.created_at | formatDate }}</small>
          </div>
          <div class="card-footer">
            <button class="btn btn-sm btn-primary" @click="editPost(post)">
              Edit
            </button>
            <button
              class="btn btn-sm btn-danger"
              @click="deletePost(post.slug)"
            >
              Delete
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import PostService from "../../service/PostService";
import PostForm from "./PostForm.vue";
const postService = new PostService();
export default {
  name: "Posts",
  components: {
    PostForm,
  },
  data() {
    return {
      posts: [],
      editingPost: null,
    };
  },
  methods: {
    addPost(post) {
      if (this.posts.find((p) => p.slug === post.slug)) {
        const index = this.posts.findIndex((p) => p.slug === post.slug);
        this.posts.splice(index, 1, post);
      } else {
        this.posts.unshift(post);
      }
    },
    deletePost(slug) {
      postService.deletePost(slug).then(() => {
        this.posts = this.posts.filter((p) => p.slug !== slug);
      });
    },
    editPost(post) {
      this.editingPost = post;
    },
  },
  created() {
    postService
      .getAllPosts()
      .then((res) => {
        this.posts = res.data.data;
        console.log(this.posts);
      })
      .catch((err) => console.error(err));
  },
  filters: {
    formatDate(date) {
      date = new Date(date);
      const day = date.getDate();
      const month = date.getMonth() + 1;
      const year = date.getFullYear();
      return `${day}/${month}/${year}`;
    },
  },
};
</script>