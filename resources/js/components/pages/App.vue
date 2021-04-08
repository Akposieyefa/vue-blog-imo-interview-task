<template>
    <div>
        <Navbar/>
        <div class="container">
          <router-view/>
        </div>
    </div>
</template>
<script>
import Navbar from '../elements/Nav.vue';
    export default {
      name: 'App',
      components: {
        Navbar
      }
    }
</script>
