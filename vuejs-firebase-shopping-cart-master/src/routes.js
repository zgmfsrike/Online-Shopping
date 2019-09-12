import Store from './components/Store.vue';
import ShoppingCart from './components/ShoppingCart.vue';
import ProductDetails from './components/ProductDetails.vue';
import Login from './components/auth/Login.vue';
import Register from './components/auth/Register.vue';
<<<<<<< HEAD
import Productmanagement from './components/product_management/product_management.vue';
=======
import ProductHome from './components/ProductHome.vue';
>>>>>>> 272c41bf85c2d074b8570863c33a9cf2811d951c

export const routes = [
	{path: '/home', component: ProductHome, name: 'mainpage'},
	{path: '/product', component: Store, name: 'product'},
	{path: '/product/:id', component: ProductDetails, name: 'product'},
	{path: '/cart', component: ShoppingCart, name: 'shoppingcart'},
	{path: '/login', component: Login, name: 'login', onlyGuest: true },
	{path: '/register', component: Register, name: 'register', onlyGuest: true},
	{path: '/product/manage', component: Productmanagement, name: 'productmanagement'},
	{path: '*', redirect: '/' }
	
];