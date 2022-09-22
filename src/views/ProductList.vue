<template>
<div class="container">
    <h1>Product List</h1>
    <div class="row">
        <div class="col-lg-3 mb-2" v-for="product in products" :key="product.id">
           <product-item
            :product="product"
            :item="item"
            @add-cart="addCart"
           ></product-item>
        </div>
    </div>
</div>
    
</template>
<script>
import ProductItem from './ProductItem.vue'
export default {
    name: 'ProductList',
    components: {
        ProductItem
    },
    setup() {
        
    },
    data() {
        return {
            //products: [],
            item: {}
        }
    },
    created(){
        this.$store.dispatch('getProducts');
    },
    computed: {
        products() {
            return this.$store.state.productList;
        },
        cartItems() {
            return this.$store.state.cartItems
        }
    },
    mounted() {
        /*this.$store.dispatch('getProducts').then(res => {
            console.log(res);
            this.products = this.$store.state.products
        }); */
    },
    methods: {
        addCart(id, item){
            const product = this.products.find(product => product.id === id);
            this.item = item;
            console.log(this.item)
            this.$store.commit('cartTotal', id);
            this.$store.commit('cartCount');
            this.$store.commit('cartItems', id);
        }
    }

}
</script>