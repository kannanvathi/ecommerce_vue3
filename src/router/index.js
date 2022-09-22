import { createRouter, createWebHistory } from "vue-router";

import ProductList from "../views/ProductList.vue";
import CartList from "../views/CartList.vue"

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "product-list",
      component: ProductList,
    },
    {
      path: "/cart",
      name: "cart-list",
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: CartList,
    },
  ],
});

export default router;
