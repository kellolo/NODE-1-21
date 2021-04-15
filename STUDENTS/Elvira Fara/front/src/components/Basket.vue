<template>
  <div v-frag>
    <a
      href="#"
      class="cart"
      @click="showBasket = !showBasket"
      id="toggle-basket"
    >
      <img src="@/assets/img/cart.png" alt="cart" />
      <div id="cart-badge" class="cartBadge">{{ totalCount }}</div>
    </a>
    <div class="dropCart" v-show="showBasket">
      <div id="basket">
        <Item
          v-for="item of items"
          type="dropBasket"
          :item="item"
          @del="remove"
          :key="item.productId"
        />
      </div>
      <div class="dropCart_total">
        <span class="dropCart_totalPrice">TOTAL</span>
        <span class="dropCart_totalPrice">${{ totalPrice }}</span>
      </div>
      <router-link to="/checkout" class="dropCart_button">
        Checkout
      </router-link>
      <router-link to="/shoppingCart" class="dropCart_button">
        Go to Cart
      </router-link>
    </div>
  </div>
</template>

<script>
import Item from "./Item.vue";
import frag from "vue-frag";
import { mapGetters } from "vuex";

export default {
  directives: {
    frag,
  },
  components: { Item },
  data() {
    return {
      showBasket: false,
      url: "/api/basket",
      // url: 'https://raw.githubusercontent.com/kellolo/static/master/JSON/basket.json'
    };
  },
  async mounted() {
    try {
      this.$store.dispatch("loadBasket", this.url);
    } catch (err) {
      console.log("GET FAILURE ==> " + err);
    }
  },
  methods: {
    async remove(id) {
      try {
        let find = this.items.find((el) => el.productId == id);
        if (find.amount > 1) {
          await this.$store.dispatch("changeAmount", {
            productId: find.productId,
            amount: find.amount - 1,
          });
          find.amount--;
        } else {
          await this.$store.dispatch("deleteFromBasket", find);
        }
      } catch (err) {
        console.log("REMOVE FAILURE ==> " + err);
      }
    },
  },
  computed: {
    ...mapGetters({ items: "basket_getter" }),
    totalCount: function () {
      let totalCnt = 0;
      this.items.forEach((el) => (totalCnt += el.amount));
      return totalCnt;
    },
    totalPrice: function () {
      let totalPrc = 0;
      this.items.forEach((el) => (totalPrc += el.productPrice * el.amount));
      return totalPrc;
    },
  },
};
</script>
