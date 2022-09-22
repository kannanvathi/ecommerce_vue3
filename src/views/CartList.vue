<template>
    <div class="container">
        <div class="row">
            <div class="col-lg-3 mb-2" v-for="item in cartItems" :key="item.id">
        
                <cart-item
                :product="item"
                @remove-item="removeItem"
                @deduct-item="deductItem"
                >
                </cart-item>
            </div>
        </div>
    </div>

</template>
<script>
import CartItem from './CartItem.vue'
import { mapState } from 'vuex'
export default {
    name: 'CartList',
    components: {
        CartItem
    },
    setup() {
        
    },
    computed: {
        ...mapState(['cartItems', 'cartTotal', 'cartCount'])
    },
    created() {

    },
    watch: {

    },
    methods: {
        removeItem(id){
            console.log(this.$store.actions);
            this.$store.dispatch('removeItem', id);
        },
        deductItem(id){
            this.$store.dispatch('deductItem', id);
        }
    }
}
</script>