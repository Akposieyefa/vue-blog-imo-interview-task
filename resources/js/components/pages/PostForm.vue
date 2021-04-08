<template>
  <div class="col-md-6 offset-md-3">
    <form action="" @submit="onSubmit">
      <h4 class="text-center font-weight-bold">Create Post</h4>
      <div class="form-group">
        <input
          type="text"
          placeholder="Post title"
          v-model="title"
          class="form-control"
        />
      </div>
      <div class="form-group">
        <input
          type="text"
          placeholder="Post status"
          v-model="status"
          class="form-control"
        />
      </div>
      <div class="form-group">
        <textarea
          v-model="content"
          placeholder="Post content"
          class="form-control"
        >
        </textarea>
      </div>
      <div class="form-group">
        <button
          :disabled="!isValid"
          class="btn btn-block btn-primary"
          @click.prevent="onSubmit()"
        >
          {{ slug ? "Update" : "Create" }}
        </button>
      </div>
    </form>
  </div>
</template>
<script>
import PostService from "../../service/PostService";
const postService = new PostService();
export default {
  name: "PostForm",
  props: {
    editingPost: Object,
  },
  data() {
    return {
      title: "",
      content: "",
      status: "",
      slug: null,
    };
  },
  methods: {
    onSubmit() {
      const post = {
        title: this.title,
        status: this.status,
        content: this.content,
        slug: this.slug,
      };

      postService
        .writePost(post)
        .then((res) => {
          this.content = "";
          this.title = "";
          this.status = "";
          this.$emit("postCreated", res.data.data);
        })
        .catch((err) => console.error(err));
    },
  },
  computed: {
    isValid() {
      return this.title !== "" && this.content !== "" && this.status !== "";
    },
  },
  watch: {
    editingPost(post) {
      (this.title = post.title),
        (this.status = post.status),
        (this.content = post.content),
        (this.slug = post.slug);
    },
  },
};
</script>

<style scoped>
.helper-text {
  color: red;
}
</style>