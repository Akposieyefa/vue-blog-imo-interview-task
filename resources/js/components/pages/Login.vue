<template>
  <div class="col-md-5">
    <br /><br />
    <form action="" @submit="onSubmit">
      <h4 class="text-center font-weight-bold">Login</h4>
      <div class="form-group">
        <input
          type="email"
          placeholder="Enter Email"
          v-model="email"
          class="form-control"
        />
      </div>
      <div class="form-group">
        <input
          type="password"
          placeholder="Enter Password"
          v-model="password"
          class="form-control"
        />
      </div>

      <div class="form-group">
        <button
          :disabled="!isValid"
          class="btn btn-primary"
          @click.prevent="onSubmit()"
        >
          LogIn
        </button>
      </div>
    </form>
  </div>
</template>
<script>
import AuthService from "../../service/AuthService";
const authService = new AuthService();
export default {
  name: "Login",
  data() {
    return {
      email: "",
      password: "",
    };
  },
  methods: {
    onSubmit() {
      const user = {
        email: this.email,
        password: this.password,
      };

      authService
        .loginUser(user)
        .then((res) => {
          this.email = "";
          this.password = "";
        })
        .catch((err) => console.error(err));
    },
  },
  computed: {
    isValid() {
      return this.email !== "" && this.password !== "";
    },
  },
};
</script>