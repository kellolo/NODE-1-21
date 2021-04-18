<template>
    <div id="basket" >
        <Item
            :key='item.id'
            v-for="item of items"
            type="basket"
            :item="item"
            @del="remove"
        />       
    </div>
</template>

<script>
import Item from './Item.vue';
import { get, post, put, deleteReq } from '@/core/requests';
import { mapGetters } from 'vuex';

export default {
    components: { Item },
    data() {
        return {
            url: '/api/basket'
            // url: 'https://raw.githubusercontent.com/kellolo/static/master/JSON/basket.json'
        }
    },
    async mounted() {
        try {
            this.$store.dispatch('loadBasket', this.url);
        }
        catch(err) {
            console.log(err);
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
        console.log(err);
      }
    },
    },
    computed: {
        ...mapGetters({ items: 'basket_getter' })
    }
}
</script>

<style>

</style>