<template>
    <div class="card">
        <div class="card-header text-center">
            {{product.title}}
        </div>
        <img :src="product.thumbnail" class="card-img-top" :alt="product.thumbnail">
        <div class="card-body">
            <ul>
                <li><p>{{product.description}}</p></li>
                <br>
                <li><p>{{product.price}}</p></li>
            </ul>
        </div>
        <div class="card-footer d-flex align-items-center">
            <button class="btn btn-danger me-2" @click="removeItem(product.id)">Remove</button>
            <div class="d-flex align-items-center justify-content-center"><button class="btn btn-warning me-2" @click="deductItem(product.id)">Minus</button><div class="badge bg-warning">{{product.count}}</div></div>
        </div>
    </div>
</template>
<script>
export default {
    name: 'CartItem',
    props: ['product'],
    setup() {
        
    },
    methods: {
        removeItem(id){
            this.$emit('removeItem', id);
        },
        deductItem(id){
            this.$emit('deductItem', id);
        }
    }
}
</script>