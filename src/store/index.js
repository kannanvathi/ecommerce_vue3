import { createStore } from "vuex";
import axios from "axios";
export default createStore({
    state: {
        productList: [],
        cartItems: [],
        cartCount: 0,
        cartTotal: 0,
    },
    mutations: {
        productList(state, payload){
            state.productList = payload.products
        },
        cartCount(state){
            state.cartCount++
        },
        cartTotal(state, id){
            const product = state.productList.find(product => product.id === id);
            state.cartTotal += product.price
        },
        cartItems(state, id){
            if(state.cartItems.find(item => item.id === id)){
                state.cartItems.forEach((item,index) => {
                    if(item.id === id){
                        state.cartItems[index].count += 1;
                    }
                })
            }
            else{
                const product = state.productList.find(product => product.id === id);
                product.count = 1;
                state.cartItems.push(product);
            }
        }
    },
    getters: {
        
    },
    actions: {
        getProducts(context){
            axios.get('https://dummyjson.com/products').then(res => {
                context.commit('productList', res.data)
            })
        },
        removeItem(context, id){
            context.state.cartItems = context.state.cartItems.filter(item => {
                if(item.id === id){
                    context.state.cartTotal = context.state.cartTotal - (item.price * item.count)
                    context.state.cartCount = context.state.cartCount - item.count; 
                }
                return item.id !== id
            });
            
            
        },
        deductItem(context, id){
            /*context.state.cartItems.forEach((item, index) => {
                if(item.id === id){
                    if(context.state.cartItems[index].count > 0){
                        context.state.cartItems[index].count = context.state.cartItems[index].count  - 1;
                        context.state.cartCount--;
                        context.state.cartTotal = context.state.cartTotal - (item.price * item.count)
                    }
                    else{
                        context.state.cartItems = context.state.cartItems.filter(item => item.id !== id);
                    }
                }
            })
        }*/  
        let itemPrice = 0;
        let itemCount = 0;
        
        context.state.cartItems.forEach((item,index) => {
            if(item.id === id){
                if(item.count > 1){
                    item.count -= 1;
                }
                itemPrice += item.price * item.count;
                itemCount += item.count;
            }
            else{
                itemPrice += item.price * item.count;
                itemCount += item.count
            }
        })
        context.state.cartCount = itemCount;
        context.state.cartTotal = itemPrice;
    }

    },
    modules: {

    }
})