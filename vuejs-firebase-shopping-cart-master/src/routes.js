import Store from './components/Store.vue';
import ShoppingCart from './components/ShoppingCart.vue';
import ProductDetails from './components/ProductDetails.vue';
import Login from './components/auth/Login.vue';
import Register from './components/auth/Register.vue';
import Test from './components/test.vue';
import Productmanagement from './components/product_management/productmanage.vue';
import ProductHome from './components/ProductHome.vue';
import Admin from './components/Admin.vue';
import Adduser from './components/Adduser.vue';
import Seller from './components/Seller.vue';
import Addseller from './components/Addseller.vue';
import OrderManage from './components/orderManage.vue';
import Payment from './components/Payment.vue';
import Orderbuyer from './components/Orderbuyer.vue';
import Orderseller from './components/Orderseller.vue';
import Orderdetail from './components/Orderdetail.vue';

export const routes = [
	{path: '/home', component: ProductHome, name: 'mainpage'},
	{path: '/order-manage', component: OrderManage, name: 'orderManage'},
	{path: '/admin', component: Admin, name: 'admin'},
	{path: '/adduser', component: Adduser, name: 'adduser'},
	{path: '/addseller', component: Addseller, name: 'addseller'},
	{path: '/seller',component: Seller, name: 'seller'},
	{path: '/product', component: Store, name: 'product'},
	{path: '/product/:id', component: ProductDetails, name: 'product'},
	{path: '/cart', component: ShoppingCart, name: 'shoppingcart'},
	{path: '/login', component: Login, name: 'login', onlyGuest: true },
	{path: '/register', component: Register, name: 'register', onlyGuest: true},
	{path: '/product/manage', component: Productmanagement, name: 'productmanagement'},
	{path: '*', redirect: '/' },
	{path: '/test', component: Test, name: 'test'},
	{path: '/payment', component: Payment, name: 'Payment'},
	{path: '/orderbuyer', component: Orderbuyer, name: 'Orderbuyer'},
	{path: '/orderseller', component: Orderseller, name: 'Orderseller'},
	{path: '/orderdetail', component: Orderdetail, name: 'Orderdetail'}
	
];