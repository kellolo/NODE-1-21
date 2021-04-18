<template>
  <div v-frag>
    <template v-if="type == 'catalog'">
      <div class="productItem" :key="item.productId">
        <div class="productShow">
          <div class="productAdd">
            <button name="add" @click="add(item)" class="addToCart">
              <img src="@/assets/img/kart_white.png" alt="addToCart" />
              Add to Cart
            </button>
          </div>
          <img class="productImg" :src="item.productImg" alt="productItem" />
        </div>
        <div class="productInfo">
          <router-link to="/singlePage" class="productName">
            {{ item.productName }}
          </router-link>
          <div class="productPrice">${{ item.productPrice }}</div>
        </div>
      </div>
    </template>

    <template v-if="type == 'dropBasket'">
      <div class="dropCart_product" :key="item.productId">
        <router-link to="/singlePage" class="dropCart_productLink">
          <img
            :src="item.productImg"
            alt="product"
            class="dropCart_productImg"
          />
        </router-link>
        <div class="dropCart_productInfo">
          <router-link to="/singlePage" class="dropCart_productName">
            {{ item.productName }}
          </router-link>
          <div class="dropCart_productPrice">
            <span class="dropCart_productCount">{{ item.amount }} </span> x
            {{ item.productPrice }}
            <span class="dropCart_productSum">
              = ${{ item.productPrice * item.amount }}</span
            >
          </div>
        </div>
        <a
          @click.prevent="$emit('del', item.productId)"
          href="#"
          name="remove"
          class="dropCart_productClose far fa-times-circle"
        ></a>
      </div>
    </template>

    <template v-if="type == 'basket'">
      <section class="productCart">
        <div class="productProperty detailCart0">
          <img :src="item.productImg" alt="product" class="productCart_img" />
          <div class="productText">
            <router-link to="/singlePage" class="productName">
              {{ item.productName }}
            </router-link>
            <div class="productSizeColor">
              Color: <span>Red</span><br />Size: <span>XLL</span>
            </div>
          </div>
        </div>
        <div class="detailsCartRight">
          <div class="detailCart1">${{ item.productPrice }}</div>
          <div class="detailCart2 detailFrame">{{ item.amount }}</div>
          <div class="detailCart3">FREE</div>
          <div class="detailCart4">${{ item.productPrice * item.amount }}</div>
          <div class="detailCart5">
            <i
              class="fas fa-times-circle"
              @click.prevent="$emit('del', item.productId)"
              name="remove"
            ></i>
          </div>
        </div>
      </section>
    </template>
  </div>
</template>

<script>
import frag from "vue-frag";
export default {
  directives: {
    frag,
  },
  props: {
    type: {
      default: "catalog",
    },
    item: { type: Object, default: () => ({}) },
  },
  methods: {
    add(item) {
      this.$emit("add", item);
    },
  },
};
</script>

<style>
</style>
