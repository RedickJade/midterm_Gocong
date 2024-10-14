import { createRouter, createWebHistory } from 'vue-router';
import Home from '../components/views/Home.vue';
import Products from '../components/views/ProductForm.vue';
import Products from '../components/views/ProductList.vue';
import Products from '../components/views/ProductListEditForm.vue';

const routes = [
    {
        path: '/',
        name: 'Home',
        component: Home
    },

    {
        path: '/products',
        name: 'Products',
        component: Products
    }
];
const router = createRouter({
    history: createWebHistory(),
    routes
});

export default router;