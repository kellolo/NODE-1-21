<template>
    <div>
        <div id="catalog">
            <Item 
                v-for="el of items" 
                :key="el.productId"
                :item="el"
                @add="addItem"
            />
        </div>
        <div class="featured-items__undertitle">
            <a href="#">Browse All Product <i class="fas fa-long-arrow-alt-right"></i></a>
        </div>
    </div>
</template>

<script>
import { get } from '@/core/requests';
import Item from './Item.vue';

import { mapState } from 'vuex';

export default {
    components: { Item },
    data() {
        return {
            items: [],
            // url: 'https://raw.githubusercontent.com/kellolo/static/master/JSON/catalog.json',
            url: '/api/catalog',
        }
    },
    async mounted() {
        try {
            this.items = await get(this.url);
        }
        catch(err) {
            console.log(err);
        }
    },
    methods: {
        addItem(item) {
            
            const find = this.basket.find(el => el.productId == item.productId);
            console.log(find);
            if (!find) {
                const newItem = Object.assign({ amount: 1 }, item);
                this.$store.dispatch('postToBasket', newItem);
            } else {
                this.$store.dispatch('changeAmount', { productId: find.productId, amount: find.amount + 1 });
                //async пока вслепую изменяем фронт
            }
        }
    },
    computed: {
        ...mapState(['basket']),
    }
}
</script>

<style>

</style>