<template>
  <div v-frag>
    <header class="headerMain">
      <div class="containerWrap">
        <router-link class="logo" to="/">BRAN<span>D</span></router-link>
        <form action="#" class="search">
          <div class="browse">
            Browse<i class="fa fa-caret-down" aria-hidden="true"></i>
          </div>
          <input type="text" placeholder="Search for Item..." />
          <button><i class="fa fa-search" aria-hidden="true"></i></button>
        </form>
        <Basket ref="bask" />
        <Account />
        <!-- <button class="accountButton">
          My Account<i class="fa fa-caret-down" aria-hidden="true"></i>
        </button> -->
      </div>
    </header>

    <nav class="navbar navbar-expand-lg navbar-light">
      <a class="navbar-brand" href="#"></a>
      <button
        class="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarNavAltMarkup"
        aria-controls="navbarNavAltMarkup"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse topNav" id="navbarNavAltMarkup">
        <div class="navbar-nav">
          <router-link to="/"
            >Home<span class="sr-only">(current)</span></router-link
          >
          <router-link to="/products">Man</router-link>
          <router-link to="/products">Women</router-link>
          <router-link to="/products">Kids</router-link>
          <router-link to="/products">Accoseriese</router-link>
          <router-link to="/products">Featured</router-link>
          <router-link to="/products">Hot Deals</router-link>
        </div>
      </div>
    </nav>
  </div>
</template>

<script>
// @ is an alias to /src
import frag from "vue-frag";
import Basket from "@/components/Basket.vue";
import Account from "@/components/Account.vue";

export default {
  name: "Header",
  directives: {
    frag,
  },
  components: { Basket, Account },
};
</script>
