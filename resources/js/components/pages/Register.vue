<template>
  <div class="row">
    <div class="col-md-6">
      <br /><br />
      <form action="" @submit="onSubmit">
        <h4 class="text-center font-weight-bold">Registration Form</h4>
        <div class="form-group">
          <input
            type="text"
            placeholder="Enter Name"
            v-model="name"
            class="form-control"
          />
        </div>
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
          <input
            type="password"
            placeholder="Enter Password Confirmation"
            v-model="password_confirmation"
            class="form-control"
          />
        </div>

        <div class="form-group">
          <button
            :disabled="!isValid"
            class="btn btn-primary"
            @click.prevent="onSubmit()"
          >
            Register
          </button>
        </div>
      </form>
    </div>
    <Login />
  </div>
</template>
<script>
import AuthService from "../../service/AuthService";
import Login from "./Login.vue";
const authService = new AuthService();
export default {
  name: "Register",
  components: {
    Login,
  },
  data() {
    return {
      name: "",
      email: "",
      password: "",
      password_confirmation: "",
    };
  },
  methods: {
    onSubmit() {
      const user = {
        name: this.name,
        email: this.email,
        password: this.password,
        password_confirmation: this.password_confirmation,
      };

      authService
        .registerUser(user)
        .then((res) => {
          this.name = "";
          this.email = "";
          this.password = "";
          this.password_confirmation = "";
        })
        .catch((err) => console.error(err));
    },
  },
  computed: {
    isValid() {
      return (
        this.name !== "" &&
        this.email !== "" &&
        this.password !== "" &&
        this.password_confirmation !== ""
      );
    },
  },
};
</script>