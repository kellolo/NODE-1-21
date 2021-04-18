<template>
  <div>
    <Header />
    <div class="topShow">
      <div class="containerWrap">
        <div class="topShowText">
          <div class="showTextTop">THE BRAND</div>
          <div class="showTextBottom">OF LUXERIOUS <span>FASHION</span></div>
        </div>
      </div>
    </div>

    <div class="containerWrap">
      <div class="offers">
        <div class="offersColumn firstColumn">
          <div class="offerItem firstItem">
            <div class="offerLabel">
              <div class="labelTextTop">HOT DEAL</div>
              <div class="labelTextBottom">FOR MEN</div>
            </div>
            <img src="../assets/img/offer1.jpg" class="offerImg" alt="offer" />
          </div>
          <div class="offerItem">
            <div class="offerLabel">
              <div class="labelTextTop">LUXIROUS & trendy</div>
              <div class="labelTextBottom">ACCESORIES</div>
            </div>
            <img src="../assets/img/offer2.jpg" class="offerImg" alt="offer" />
          </div>
        </div>
        <div class="offersColumn">
          <div class="offerItem firstItem">
            <div class="offerLabel">
              <div class="labelTextTop">30% offer</div>
              <div class="labelTextBottom">women</div>
            </div>
            <img src="../assets/img/offer3.jpg" class="offerImg" alt="offer" />
          </div>
          <div class="offerItem">
            <div class="offerLabel">
              <div class="labelTextTop">new arrivals</div>
              <div class="labelTextBottom">FOR kids</div>
            </div>
            <img src="../assets/img/offer4.jpg" class="offerImg" alt="offer" />
          </div>
        </div>
      </div>
    </div>

    <div class="containerWrap">
      <div class="featuredTop">
        <div class="featuredTitle">Fetured Items</div>
        <div class="featuredText">
          Shop for items based on what we featured in this week
        </div>
      </div>
      <div class="featuredItems">
        <Catalog />
      </div>
      <div class="featuredBottom">
        <button class="featuredButton">
          Browse All Product<i class="fa fa-arrow-right" aria-hidden="true"></i>
        </button>
      </div>
    </div>

    <div class="offerBottom containerWrap">
      <div class="offerBottomShow">
        <div class="bottomShowLabelTop">30% <span>OFFER</span></div>
        <div class="bottomShowLabelBottom">FOR WOMEN</div>
      </div>
      <div class="offerBottomText">
        <ul class="offerBottom__menu">
          <li class="menu__li">
            <div class="menuInfo">
              <div class="menu__title">Free Delivery</div>
              <div class="menu__text">
                Worldwide delivery on all. Authorit tively morph next-generation
                innov tion with extensive models.
              </div>
            </div>
          </li>
          <li class="menu__li">
            <div class="menuInfo">
              <div class="menu__title">Sales & discounts</div>
              <div class="menu__text">
                Worldwide delivery on all. Authorit tively morph next-generation
                innov tion with extensive models.
              </div>
            </div>
          </li>
          <li class="menu__li">
            <div class="menuInfo">
              <div class="menu__title">Quality assurance</div>
              <div class="menu__text">
                Worldwide delivery on all. Authorit tively morph next-generation
                innov tion with extensive models.
              </div>
            </div>
          </li>
        </ul>
      </div>
    </div>
    <Footer />
  </div>
</template>

<script>
// @ is an alias to /src
import Catalog from "@/components/Catalog.vue";
import Header from "@/components/Header.vue";
import Footer from "@/components/Footer.vue";

export default {
  name: "Home",
  components: { Catalog, Header, Footer },
  methods: {
    get(url) {
      return fetch(url).then((data) => data.json());
    },
  },
};
</script>
