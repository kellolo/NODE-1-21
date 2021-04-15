<template>
    <div id="basket" >
        <Item 
            v-for="item of items"
            v-bind:key="item.productId"
            type="basket"
            :item="item"
            @del="remove"
            @change="changeItemCount"
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
        remove(id) {
            let find = this.items.find(el => el.productId == id);
            this.$store.dispatch('deleteFromBasket', find);
        },
        changeItemCount(item) {
            this.$store.dispatch('changeAmount', item);
        }
    },
    computed: {
        ...mapGetters({ items: 'basket_getter' })
    }
}
</script>

<style>

</style>