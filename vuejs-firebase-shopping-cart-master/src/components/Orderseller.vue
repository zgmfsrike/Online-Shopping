<template>
<div class="container table-responsive">
  <table id="cart" class="table table-hover table-sm">
    <thead>
      <tr>
        <th style="width:10%">No.</th>
        <th style="width:20%" class="text-center">Order ID</th>
        <th style="width:40%" class="text-center">Customer name</th>
        <th style="width:15%" class="text-center">Date</th>
        <th style="width:15%" class="text-center">Detail</th>
      </tr>
    </thead>

    <transition-group name="list-shopping-cart" tag="tbody">
      <app-cart-item v-for="cartItem in cartItemList" :cartItem="cartItem" :key="cartItem.id"></app-cart-item>
    </transition-group>

    <!-- <tfoot>
      <tr class="d-table-row d-sm-none">
        <td class="text-center"><strong>Total ${{ cartValue }}</strong></td>
      </tr>
      <tr>
        <td>
          <button class="btn btn-warning" @click="saveShoppingCartLocal">
							<i class="fa fa-angle-left"></i> Save and Continue Shopping
						</button>
        </td>
        <td colspan="2" class="d-none d-sm-table-cell"></td>
        <td class="d-none d-sm-table-cell text-center"><strong>Total ${{ cartValue }}</strong></td>
        <td class="px-0">
          <button class="btn btn-success" @click="checkout">
							<span class="text-nowrap">Payment <i class="fa fa-angle-right d-inline"></i></span>
					</button>
        </td>
      </tr>
    </tfoot> -->
    <!-- <div><mdb-icon far icon="file-alt" /></div> -->
    <div class="pull-right"><b-button variant="outline-info">More detail</b-button></div>
  </table>
</div>
</template>

