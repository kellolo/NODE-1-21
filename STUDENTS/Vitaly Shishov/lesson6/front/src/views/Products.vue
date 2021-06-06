<template>
  <div>
    <Header />
    <div class="topShowCart topShowProduct">
      <div class="containerWrap">
        <h1 class="showCartTextLeft">New Arrivals</h1>
        <nav class="showCartTextRight">Home/Men/<span>New Arrivals</span></nav>
      </div>
    </div>
    <div class="wrapperProduct containerWrap row">
      <nav class="leftNav col-md-3" id="leftNavProduct">
        <div class="leftNavItem">
          <div class="leftNavHead" id="headingOne">
            <button
              type="button"
              data-toggle="collapse"
              data-target="#collapseOne"
              aria-expanded="true"
              aria-controls="collapseOne"
              class="leftNavButton"
            >
              CATEGORY<i class="fa fa-caret-down" aria-hidden="true"></i>
            </button>
          </div>
          <div
            id="collapseOne"
            class="leftNavBody collapse show"
            aria-labelledby="headingOne"
            data-parent="#leftNavProduct"
          >
            <ul class="leftNavList">
              <li><a href="#">Accessories</a></li>
              <li><a href="#">Bags</a></li>
              <li><a href="#">Denim</a></li>
              <li><a href="#">Hoodies & Sweatshirts</a></li>
              <li><a href="#">Jackets & Coats</a></li>
              <li><a href="#">Pants</a></li>
              <li><a href="#">Polos</a></li>
              <li><a href="#">Shirts</a></li>
              <li><a href="#">Shoes</a></li>
              <li><a href="#">Shorts</a></li>
              <li><a href="#">Sweaters & Knits</a></li>
              <li><a href="#">T-Shirts</a></li>
              <li><a href="#">Tanks</a></li>
            </ul>
          </div>
        </div>
        <div class="leftNavItem">
          <div class="leftNavHead" id="headingTwo">
            <button
              type="button"
              data-toggle="collapse"
              data-target="#collapseTwo"
              aria-expanded="false"
              aria-controls="collapseTwo"
              class="leftNavButton"
            >
              BRAND<i class="fa fa-caret-down" aria-hidden="true"></i>
            </button>
          </div>
          <div
            id="collapseTwo"
            class="leftNavBody collapse"
            aria-labelledby="headingTwo"
            data-parent="#leftNavProduct"
          >
            <ul class="leftNavList">
              <li><a href="#">H&M</a></li>
              <li><a href="#">Mango</a></li>
              <li><a href="#">Moschino</a></li>
              <li><a href="#">Zara</a></li>
              <li><a href="#">Zarina</a></li>
            </ul>
          </div>
        </div>
        <div class="leftNavItem">
          <div class="leftNavHead" id="headingThree">
            <button
              type="button"
              data-toggle="collapse"
              data-target="#collapseThree"
              aria-expanded="false"
              aria-controls="collapseThree"
              class="leftNavButton"
            >
              DESIGNER<i class="fa fa-caret-down" aria-hidden="true"></i>
            </button>
          </div>
          <div
            id="collapseThree"
            class="leftNavBody collapse"
            aria-labelledby="headingThree"
            data-parent="#leftNavProduct"
          >
            <ul class="leftNavList">
              <li><a href="#">H&M</a></li>
              <li><a href="#">Mango</a></li>
              <li><a href="#">Moschino</a></li>
              <li><a href="#">Zara</a></li>
              <li><a href="#">Zarina</a></li>
            </ul>
          </div>
        </div>
      </nav>
      <div class="contentProduct col-md-9">
        <div class="propertiesProduct row">
          <div class="propertyProduct col-md-4">
            <h2 class="propertyTitle">Trending&nbsp;now</h2>
            <div class="propTrend">
              Bohemian
              <span>|</span>Floral <span>|</span>Lace Floral <span>|</span>Lace
              <span>|</span>Bohemian
            </div>
          </div>
          <div class="propertyProduct col-md-4">
            <h2 class="propertyTitle">Size</h2>
            <div class="propSize">
              <input type="checkbox" name="propSize" id="xxsSize" />
              <label for="xxsSize">XXS</label>
              <input type="checkbox" name="propSize" id="xsSize" />
              <label for="xsSize">XS</label>
              <input type="checkbox" name="propSize" id="sSize" />
              <label for="sSize">S</label>
              <input type="checkbox" name="propSize" id="mSize" />
              <label for="mSize">M</label>
              <input type="checkbox" name="propSize" id="lSize" />
              <label for="lSize">L</label>
              <input type="checkbox" name="propSize" id="xlSize" />
              <label for="xlSize">XL</label>
              <input type="checkbox" name="propSize" id="xxlSize" />
              <label for="xxlSize">XXL</label>
            </div>
          </div>
          <div class="propertyProduct col-md-4">
            <h2 class="propertyTitle">Price</h2>
            <div class="propPrice">
              <div class="sliderPrice">
                <div class="sliderGray"></div>
                <div class="sliderColor"></div>
                <div class="sliderCircle sliderMin"></div>
                <div class="sliderCircle sliderMax"></div>
              </div>
              <div class="rangePrice">
                <div>$52</div>
                <div>$400</div>
              </div>
            </div>
          </div>
        </div>
        <form action="#" class="sortFormProduct">
          <div class="sortGroupProduct">
            <label for="inputGroupSelect01">SortBy</label>
            <select id="inputGroupSelect01">
              <option value="name">Name</option>
              <option value="price">Price</option>
              <option value="new">New</option>
            </select>
          </div>
          <div class="sortGroupProduct">
            <label for="inputGroupSelect02">Show</label>
            <select id="inputGroupSelect02">
              <option value="9">09</option>
              <option value="12">12</option>
              <option value="18">18</option>
            </select>
          </div>
        </form>
        <div class="itemsProduct">
          <Catalog />
        </div>
        <div class="paginationProduct row">
          <div class="pagesProduct col-md-4">
            <a href="#"><i class="fas fa-chevron-left"></i></a>
            <a href="#">1</a>
            <a href="#">2</a>
            <a href="#">3</a>
            <a href="#">4</a>
            <a href="#">5</a>
            <span>
              <a href="#">6</a>
              ...
              <a href="#">20</a>
            </span>
            <a href="#"><i class="fas fa-chevron-right"></i></a>
          </div>
          <button class="col-md-3">View All</button>
        </div>
      </div>
    </div>
    <div class="qualityProduct">
      <div class="containerWrap">
        <div class="row">
          <section class="col-md-4">
            <img src="@/assets/img/offerBottom1.png" alt="quality" />
            <h3 class="qualityTitle">Free Delivery</h3>
            <div class="qualityText">
              Worldwide delivery on all. Authorit tively morph next-generation
              innov tion with extensive models.
            </div>
          </section>
          <section class="col-md-4">
            <img src="@/assets/img/offerBottom2.png" alt="quality" />
            <h3 class="qualityTitle">Sales & discounts</h3>
            <div class="qualityText">
              Worldwide delivery on all. Authorit tively morph next-generation
              innov tion with extensive models.
            </div>
          </section>
          <section class="col-md-4">
            <img src="@/assets/img/offerBottom3.png" alt="quality" />
            <h3 class="qualityTitle">Quality assurance</h3>
            <div class="qualityText">
              Worldwide delivery on all. Authorit tively morph next-generation
              innov tion with extensive models.
            </div>
          </section>
        </div>
      </div>
    </div>
    <Footer />
  </div>
</template>
<script>
// @ is an alias to /src
import Header from "@/components/Header.vue";
import Footer from "@/components/Footer.vue";
import Catalog from "../components/Catalog.vue";

export default {
  name: "Products",
  components: { Header, Footer, Catalog },
};
</script>
