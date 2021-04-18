<template>
  <div>
    <Header />
    <div class="topShowCart">
      <div class="containerWrap">
        <h1 class="showCartTextLeft">New Arrivals</h1>
        <nav class="showCartTextRight">Home/Men/<span>New Arrivals</span></nav>
      </div>
    </div>
    <div class="sliderSingle">
      <div class="sliderArrows">
        <div class="sliderArrow">
          <i class="fas fa-angle-left" aria-hidden="true"></i>
        </div>
        <div class="sliderArrow">
          <i class="fas fa-angle-right" aria-hidden="true"></i>
        </div>
      </div>
    </div>
    <div class="productInfoSingle containerWrap">
      <div class="productInfoSingleWrap">
        <div class="productCategorySingle">WOMEN&nbsp;COLLECTION</div>
        <div class="productNameSingle">Moschino Cheap And Chic</div>
        <div class="productTextSingle">
          Compellingly actualize fully researched processes before proactive
          outsourcing. Progressively syndicate collaborative architectures
          before cutting-edge services. Completely visualize parallel core
          competencies rather than exceptional portals.
        </div>
        <div class="productMaterialDesignerSingle">
          <div><span>MATERIAL:</span> COTTON</div>
          <div><span>DESIGNER:</span> BINBURHAN</div>
        </div>
        <div class="productPriceSingle">$561</div>
        <form action="#" class="formSingle">
          <label
            >CHOOSE COLOR<br />
            <span class="colorBlock" id="colorBlock"></span>
            <select name="productColor" id="productColor" class="selectSingle">
              <option value="black">Black</option>
              <option value="red">Red</option>
              <option value="blue">Blue</option>
              <option value="green">Green</option>
              <option value="pink">Pink</option>
            </select>
          </label>
          <label
            >CHOOSE SIZE<br />
            <select name="productSize" id="productSize" class="selectSingle">
              <option value="xxl">XXL</option>
              <option value="xl">XL</option>
              <option value="l">L</option>
              <option value="m">M</option>
              <option value="s">S</option>
              <option value="xs">XS</option>
            </select>
          </label>
          <label
            >QUANTITY<br />
            <input
              type="number"
              name="productQuantity"
              id="productQuantity"
              class="inputSingle"
              placeholder="2"
            />
          </label>
          <button class="buttonSingle">
            <img src="@/assets/img/cartPink.png" alt="cart" />
            Add to Cart
          </button>
        </form>
      </div>
    </div>
    <div class="containerWrap likeSingle">
      <h2 class="likeTitleSingle">you may like also</h2>
      <div class="likeProductsSingle">
        <Catalog />
      </div>
    </div>
    <Footer />
  </div>
</template>
<script>
// @ is an alias to /src
import Header from "@/components/Header.vue";
import Footer from "@/components/Footer.vue";
import Catalog from "@/components/Catalog.vue";

export default {
  name: "SinglePage",
  components: { Header, Footer, Catalog },
};
</script>
