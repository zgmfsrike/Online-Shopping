<template>
<div class="container table-responsive">
  <table id="cart" class="table table-hover table-sm">
    <thead>
      <tr>
        <th style="width:50%">Product</th>
        <th style="width:10%">Price</th>
        <th style="width:8%">Quantity</th>
        <th style="width:22%" class="text-center">Subtotal</th>
        <th style="width:10%"></th>
      </tr>
    </thead>

    <transition-group name="list-shopping-cart" tag="tbody">
      <app-cart-item v-for="cartItem in cartItemList" :cartItem="cartItem" :key="cartItem.id"></app-cart-item>
    </transition-group>

    <tr>
        <th style="width:100%">Address</th>
        <th style="width:0"></th>
        <th style="width:0"></th>
        <th style="width:0" class="text-center"></th>
        <th style="width:0"></th>
      </tr>
  
  <template>
  <div class="form-group">
    <label for="exampleFormControlTextarea1"></label>
    <textarea class="form-control" id="exampleFormControlTextarea1" rows="3" cols="10"></textarea> 
  </div>
</template>
<template>
  <div>
    <div class="mt-3">Transportation: <strong>{{ selected1 }}</strong></div>
    <b-form-select v-model="selected1" :options="options1" class="mb-3">
      <!-- This slot appears above the options from 'options' prop -->
      <template v-slot:first>
        <option :value="null" disabled>-- Please select transportation --</option>
      </template>
    </b-form-select>
  </div>
</template>

<template>
  <div>
    <div class="mt-2">Code: {{ text }}</div>
    <b-form-input v-model="text" placeholder="Enter your code"></b-form-input>
  </div>
</template>

<template>
  <div>
    <div class="mt-3">Payment method: <strong>{{ selected2 }}</strong></div>
    <b-form-select v-model="selected2" :options="options2" class="mb-3">
      <!-- This slot appears above the options from 'options' prop -->
      <template v-slot:first>
        <option :value="null" disabled>-- Please select payment --</option>
      </template>
      <!-- <option value="KTB">Option C</option> <option value="SCB">Option D</option> -->
    </b-form-select>
  </div>
</template>



    <tfoot>
      <tr class="d-table-row d-sm-none">
        <td class="text-center"><strong>Total ${{ cartValue }}</strong></td>
      </tr>
      <tr>
        <td>
          <button class="btn btn-warning" @click="cancle">
							<i class="fa fa-angle-left"></i> Cancle
						</button>
        </td>
        <td colspan="2" class="d-none d-sm-table-cell"></td>
        <td class="d-none d-sm-table-cell text-center"><strong>Total ${{ cartValue }}</strong></td>
        <td class="px-0">
          <button class="btn btn-success" @click="Paymentconfirm">
							<span class="text-nowrap">Payment confirm <i class="fa fa-angle-right d-inline"></i></span>
					</button>
        </td>
      </tr>
    </tfoot>
  </table>
</div>
</template>

<script>

import {
  mapActions,
  mapGetters
} from 'vuex';
import CartItem from './cart/CartItem.vue';
export default {
  data() {
      return {
        selected1: null,
        options1: [
          { value: 'Kerry', text: 'Kerry' },
          { value: 'EMS', text: 'Thailand Post - EMS' },
        ],
        text: '' ,
        selected2: null,
        options2: [
          { value: 'BBL', text: 'ธนาคารกรุงเทพ - BBL' },
          { value: 'KBANK', text: 'ธนาคารกสิกรไทย - KBANK' },
          { value: 'KTB', text: 'ธนาคารกรุงไทย - KTB' },
          { value: 'SCB', text: 'ธนาคารไทยพาณิชย์ - SCB' }
        ]
      }
    //},
    // data1() {
    //   return {
        
    //   }
    // },
    // data2() {
    //   return {
    //     selected2: null,
    //     options2: [
    //       { value: 'BBL', text: 'ธนาคารกรุงเทพ - BBL' },
    //       { value: 'KBANK', text: 'ธนาคารกสิกรไทย - KBANK' },
    //       { value: 'KTB', text: 'ธนาคารกรุงไทย - KTB' },
    //       { value: 'SCB', text: 'ธนาคารไทยพาณิชย์ - SCB' }
    //     ]
    //   }
    },
  computed: {
    ...mapGetters(['cartItemList', 'isLoggedIn', 'products', 'currentUser', 'cartValue'])
  },
  components: {
    appCartItem: CartItem
  },
  methods: {
    ...mapActions(['saveShoppingCart', 'addMessage', 'saveToTransaction', 'clearCart']),
    checkValidCart(itemList, prodList) {
      let isValid = true;
      let message = "";

      itemList.map(item => {
        for (let prodIdx = 0; prodIdx < prodList.length; prodIdx++) {
          if (prodList[prodIdx].id == item.id) {
            if (prodList[prodIdx].quantity < item.quantity) {
              message = `Only ${prodList[prodIdx].quantity} ${item.title} available in stock`;
              isValid = false;
              return;
            }
            break;
          }
        }
      });
      return {
        isValid,
        message
      }
    },
    cancle() {
      if (this.isLoggedIn) {
        let {
          isValid,
          message
        } = this.checkValidCart(this.cartItemList, this.products);

        if (isValid) {
          this.saveShoppingCart({
            cartItemList: this.cartItemList,
            uid: this.currentUser.uid
          }).then(() => {
            this.addMessage({
              messageClass: 'success',
              message: 'Your shopping cart is saved successfully'
            });
            this.$router.push('/cart');
          });
        } else {
          this.addMessage({
            messageClass: 'danger',
            message: message
          });
        }
      } else {
        this.addMessage({
          messageClass: 'warning',
          message: 'Please login to save your cart'
        });
      }
    },
    Paymentconfirm() {
      if (this.isLoggedIn) {
        // if (!this.cartItemList || this.cartItemList.length == 0) {
        //   this.addMessage({
        //     messageClass: 'warning',
        //     message: 'Your cart is empty!'
        //   });
        //   return;
        // }
        let {
          isValid,
          message
        } = this.checkValidCart(this.cartItemList, this.products);

        if (isValid) {
          this.saveToTransaction({
            cartItemList: this.cartItemList,
            uid: this.currentUser.uid
          }).then(() => {
            this.addMessage({
              messageClass: 'success',
              message: 'Your order has been successfully processed!'
            });
            this.saveShoppingCart({
              cartItemList: [],
              uid: this.currentUser.uid
            });
            this.clearCart();
            this.$router.push('/');
          });
        } else {
          this.addMessage({
            messageClass: 'danger',
            message: message
          });
        }
      } else {
        this.addMessage({
          messageClass: 'warning',
          message: 'Please login to checkout'
        });
      }
    }
  }
}
</script>

<style lang="scss" scoped>
.list-shopping-cart-leave-active {
  transition: all 0.4s;
}

.list-shopping-cart-leave-to {
  opacity: 0;
  transform: translateX(50px);
}

.table-sm {
  font-size: 0.875rem;
  /deep/ h4 {
    font-size: 1.25rem;
  }
}
</style>
