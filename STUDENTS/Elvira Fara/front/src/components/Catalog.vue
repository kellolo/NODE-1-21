<template>
  <div id="catalog">
    <Item v-for="el of items" :key="el.productId" :item="el" @add="addItem" />
  </div>
</template>

<script>
import { get } from "@/core/requests";
import Item from "./Item.vue";
import { mapState } from "vuex";

export default {
  components: { Item },
  data() {
    return {
      items: [],
      // url: 'https://raw.githubusercontent.com/kellolo/static/master/JSON/catalog.json',
      url: "/api/catalog",
    };
  },
  async mounted() {
    try {
      this.items = await get(this.url);
    } catch (err) {
      console.log(err);
    }
  },
  methods: {
    async addItem(item) {
      try {
        const find = this.basket.find((el) => el.productId == item.productId);
        if (!find) {
          const newItem = Object.assign({ amount: 1 }, item);
          await this.$store.dispatch("postToBasket", newItem);
        } else {
          await this.$store.dispatch("changeAmount", {
            productId: find.productId,
            amount: find.amount + 1,
          });
          find.amount++;
        }
      } catch (err) {
        console.log("ADD FAILURE ==> " + err);
      }
    },
  },
  computed: {
    ...mapState(["basket"]),
  },
};
</script>

<style>
</style>