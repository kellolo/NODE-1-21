<template>
  <div>
    <Header />
    <div class="topShowCart">
      <div class="containerWrap">
        <h1 class="showCartTextLeft">New Arrivals</h1>
        <nav class="showCartTextRight">Home/Men/<span>New Arrivals</span></nav>
      </div>
    </div>

    <div class="detailsCart containerWrap">
      <div class="detailsCartHead">
        <div class="detailsCart0">Product Details</div>
        <div class="detailsCartRight">
          <div class="detailCart1">unite Price</div>
          <div class="detailCart2">Quantity</div>
          <div class="detailCart3">shipping</div>
          <div class="detailCart4">Subtotal</div>
          <div class="detailCart5">ACTION</div>
        </div>
      </div>
      <Item
        v-for="item of items"
        type="basket"
        :item="item"
        @del="remove"
        :key="item.productId"
      />
    </div>

    <div class="containerWrap buttonsCart">
      <button>CLEAR SHOPPING CART</button>
      <button>CONTINUE SHOPPING</button>
    </div>

    <div class="totalCartWrap containerWrap">
      <div class="addressCart">
        <h2 class="totalCartTitle">Shipping Adress</h2>
        <form action="#" class="cartForm">
          <select name="countrySelect" id="countrySel">
            <option value="Bangladesh">Bangladesh</option>
            <option value="Russia">Russia</option>
            <option value="India">India</option>
          </select>
          <input required type="text" placeholder="State" />
          <input required type="number" placeholder="Postcode / Zip" />
          <button>get a quote</button>
        </form>
      </div>

      <div class="couponCart">
        <h2 class="totalCartTitle">coupon discount</h2>
        <div>Enter your coupon code if you have one</div>
        <form action="#" class="cartForm">
          <input type="text" placeholder="Code" id="couponCode" />
          <button>Apply coupon</button>
        </form>
      </div>
      <div class="totalCart">
        <div>Sub total &nbsp;&nbsp;&nbsp;&nbsp;&nbsp; ${{ totalPrice }}</div>
        <h2 class="totalCartTitle">
          GRAND TOTAL <span class="ss">${{ totalPrice }}</span>
        </h2>
        <hr />
        <router-link to="/checkout">proceed to checkout</router-link>
      </div>
    </div>
    <Footer />
  </div>
</template>
<script>
// @ is an alias to /src
import Header from "@/components/Header.vue";
import Footer from "@/components/Footer.vue";
import Item from "@/components/Item.vue";
import { mapGetters } from "vuex";

export default {
  name: "ShoppingCart",
  components: { Header, Footer, Item },
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
