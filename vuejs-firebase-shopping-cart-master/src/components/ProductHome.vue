<template>
  <div class="container" :class="{loadingItem: isProductLoading}">
    <div id="carouselExampleControls" class="carousel slide" data-ride="carousel" style="margin-top: 3%;">
  <div class="carousel-inner">
    <div class="carousel-item active" style="height: 350px">
      <img src="../../public/image/1.jpg" class="d-block w-100 slide-show" alt="...">
    </div>
    <div class="carousel-item">
      <img src="../../public/image/2.jpg" class="d-block w-100 slide-show" alt="...">
    </div>
    <div class="carousel-item"> 
      <img src="../../public/image/3.jpg" class="d-block w-100 slide-show" alt="...">
    </div>
  </div>
  <a class="carousel-control-prev" href="#carouselExampleControls" role="button" data-slide="prev">
    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
    <span class="sr-only">Previous</span>
  </a>
  <a class="carousel-control-next" href="#carouselExampleControls" role="button" data-slide="next">
    <span class="carousel-control-next-icon" aria-hidden="true"></span>
    <span class="sr-only">Next</span>
  </a>
</div>

    <div class="card" style="margin-top: -2%;">
      <div class="card-header">
        Categories
      </div>
      <div class="card-body">
        <div class="card-group">
          <!-- <a href="/product"> -->
          <div class="card border-none">
              <img src="../../public/image/laptop.png" class="card-img-top img-size" alt="...">
              <div class="card-body">
                <h5 class="card-title" style="text-align:center;"><a href="/product">Electronics</a></h5>
              </div>
          </div>
          <!-- </a> -->
          <!-- <a href="#"> -->
          <div class="card border-none">
            <img src="../../public/image/house.png" style="background-size: cover; background-repeat: no-repeat;" class="card-img-top img-size" alt="...">
            <div class="card-body">
              <h5 class="card-title" style="text-align:center;"><a href="#">Home & Auto</a></h5>
            </div>
          </div>
          <!-- </a>
          <a href="#"> -->
          <div class="card border-none">
            <img src="../../public/image/shirt.png" style="background-size: cover; background-repeat: no-repeat;" class="card-img-top img-size" alt="...">
            <div class="card-body">
              <h5 class="card-title" style="text-align:center;"><a href="#">Fashions</a></h5>
            </div>
          </div>
          <!-- </a>
          <a href="#"> -->
          <div class="card border-none">
            <img src="../../public/image/food.png" style="background-size: cover; background-repeat: no-repeat;" class="card-img-top img-size" alt="...">
            <div class="card-body">
              <h5 class="card-title" style="text-align:center;"><a href="#">Food & Beverage</a></h5>

            </div>
          </div>
          <!-- </a> -->
          <!-- <a href="#"> -->
          <div class="card border-none">
            <img src="../../public/image/cosmetics.png" class="card-img-top img-size" alt="...">
            <div class="card-body">
              <h5 class="card-title" style="text-align:center;"><a href="#">Health & Beauty</a></h5>
            </div>
          </div>
          <!-- </a> -->
          <!-- <a href="#"> -->
           <div class="card border-none">
            <img src="../../public/image/football.png" class="card-img-top img-size" alt="...">
            <div class="card-body">
              <h5 class="card-title" style="text-align:center;"><a href="#">Sports</a></h5>
            </div>
          </div>
          <!-- </a> -->
      </div>
    </div>
    </div>
    <div class="card" style="margin-top: 2%;">
      <div class="card-header">
        Recommended Product
      </div>
      <div class="row text-center" v-if="isProductLoading">
        <grid-loader :loading="isProductLoading" :color="loaderColor" :size="loaderSize"></grid-loader>
      </div>

  <div class="row" v-if="!isProductLoading">
    <app-product-item v-for="prod in products" :item="prod" :key="prod.id" :displayList="displayList"></app-product-item>
  </div>
    </div>
  </div>
  
</template>

<script>
import { mapGetters } from 'vuex'
import ProductItem from './product/ProductItem.vue';
import GridLoader from 'vue-spinner/src/GridLoader.vue';

export default {
  data() {
    return {
      loaderColor: "#5cb85c",
      loaderSize: "50px",
      displayList: false
    }
  },
  computed: {
    ...mapGetters(['products', 'isProductLoading']),
  },
  components: {
    appProductItem: ProductItem,
    GridLoader
  },
  methods: {
    changeDisplay(isList) {
      this.displayList = isList;
    }
  }
}
</script>

<style>
.loadingItem {
  align-items: center;
  justify-content: center;
  display: flex;
}

.action-panel {
  margin-bottom: 10px;
  margin-right: 5px;
}

.grid-cate {
  margin-right: 5px;
}

.img-size{
  height: 100px;
  width: 100px !important;
  margin: auto;
}

.slide-show {
  margin: 0px auto;
  text-align:center; 
  position: relative;
  background-position: bottom;
}
a {
    color: #3eaf7c;
    text-decoration: none;
    background-color: transparent;
}
.border-none {
  border: none !important;
}
</style>
