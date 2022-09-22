<script setup>
import { RouterLink, RouterView } from "vue-router";

</script>

<template>
  <div class="container">
    <div class="row">
      <div class="col-lg-6 offset-lg-3">
        <nav class="text-center">
          <RouterLink to="/" class="me-2">Product</RouterLink>
          <RouterLink to="/cart" class="me-2">Cart</RouterLink>
          <span class="badge bg-primary me-2"> Price:  {{cartTotal}}</span>
          <span class="badge bg-danger me-2">Cart count: {{cartCount}}</span>
      </nav>
      </div>
    </div>
  </div>

  <RouterView />
</template>
<script>
import { mapState } from 'vuex'
export default {
  setup() {
    
  },
  computed: {
    ...mapState(['cartTotal', 'cartCount'])
  },
  created(){
      //this.$store.dispatch('getProducts');
  }
}
</script>
<style scoped>

</style>
