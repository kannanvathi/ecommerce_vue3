<template>
     <div class="card" :id="product.id">
                <div class="card-header text-center">
                    {{product.title}}
                </div>
                <img :src="product.thumbnail" class="card-img-top" :alt="product.thumbnail">
                <div class="card-body">
                    <ul>
                        <li><p>{{product.description}}</p></li>
                        <br>
                        <li>{{product.price}}</li>
                        <br>
                        <li>{{product.stock}}</li>
                    </ul>
                </div>
                <div class="card-footer d-flex align-item-center">
                    <button class="btn btn-primary me-2" @click="addCart(product.id)">Add Cart</button> <span class="badge bg-warning" v-if="product.count">Count: {{product.count}}</span>
                </div>
            </div>
</template>
<script>
export default {
    name: 'ProductItem',
    props: ['product'],

    computed: {
       
    },
    data(){
        return {
        }
    },
    mounted() {
        
    },
    setup() {
        
    },
    methods: {
        addCart(id){
            this.$emit('addCart', id);
        }
    }
}
</script>