<template>
  <div>
    <Header />
    <div class="topShowCart topShowProduct">
      <div class="containerWrap">
        <h1 class="showCartTextLeft">New Arrivals</h1>
        <nav class="showCartTextRight">Home/Men/<span>New Arrivals</span></nav>
      </div>
    </div>
    <div class="wrapperCheckout containerWrap row">
      <nav class="leftNavCheckout col-md-12" id="leftNavCheckout">
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
              01. SHIPPING ADDRESS
            </button>
          </div>
          <div
            id="collapseOne"
            class="leftNavBody collapse show"
            aria-labelledby="headingOne"
            data-parent="#leftNavCheckout"
          >
            <div class="shippingAddressWrap row">
              <form action="#" class="formCheckout col-md-6">
                <h3 class="shippingHead">Check as a guest or register</h3>
                <div class="shippingNote">
                  Register with us for future convenience
                </div>
                <div class="shippingRadios">
                  <input
                    type="radio"
                    name="registerRadio"
                    id="guestRadio"
                    checked
                  />
                  <label for="guestRadio" class="shippingHead">
                    Checkout as guest
                  </label>
                  <input
                    type="radio"
                    name="registerRadio"
                    id="registeredRadio"
                  />
                  <label for="registeredRadio" class="shippingHead">
                    Register
                  </label>
                </div>
                <h3 class="shippingHead">register and save time!</h3>
                <div class="shippingNote">
                  Register with us for future convenience
                </div>
                <div class="shippingRefs">
                  <div class="shippingNote">
                    <a href="#">
                      <i class="fas fa-angle-double-right"></i>Fast and easy
                      checkout
                    </a>
                  </div>
                  <div class="shippingNote">
                    <a href="#">
                      <i class="fas fa-angle-double-right"></i>Easy access to
                      your order history and status
                    </a>
                  </div>
                </div>
                <button>CONTINUE</button>
              </form>
              <form action="#" class="formCheckout col-md-6">
                <h3 class="shippingHead">Already registed?</h3>
                <div class="shippingNote">Please log in below</div>
                <div class="shippingInputs">
                  <label for="emailRegistered"
                    >Email address<span>*</span></label
                  >
                  <input
                    type="email"
                    name="emailRegistered"
                    id="emailRegistered"
                  />
                  <label for="passwordRegistered">Password<span>*</span></label>
                  <input
                    type="password"
                    name="passwordRegistered"
                    id="passwordRegistered"
                  />
                </div>
                <div class="shippingNote">* Required Fileds</div>
                <div class="registerButton">
                  <button>LOG IN</button>
                  <div>Forgot Password ?</div>
                </div>
              </form>
            </div>
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
              02. BILLING INFORMATION
            </button>
          </div>
          <div
            id="collapseTwo"
            class="leftNavBody collapse"
            aria-labelledby="headingTwo"
            data-parent="#leftNavCheckout"
          >
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. At,
            debitis sit. Rem debitis veritatis asperiores consequatur temporibus
            nihil culpa reiciendis atque illo provident soluta officia ratione
            delectus recusandae aspernatur ipsam nobis hic tempore quis, nulla
            quidem. Perspiciatis maiores asperiores minus molestias tempore
            temporibus architecto corporis. Magnam distinctio delectus rem
            molestias blanditiis ratione ab nostrum deleniti voluptatem maiores,
            omnis error modi voluptatibus assumenda corrupti impedit tenetur!
            Porro accusantium a provident voluptatem, necessitatibus dicta eos
            illum alias consequatur odit veniam laudantium itaque!
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
              03. SHIPPING INFORMATION
            </button>
          </div>
          <div
            id="collapseThree"
            class="leftNavBody collapse"
            aria-labelledby="headingThree"
            data-parent="#leftNavCheckout"
          >
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam alias
            ratione ullam amet voluptatum, nobis vel tenetur sequi, quas
            expedita commodi quasi magnam voluptates veniam fugiat explicabo
            veritatis! Quas beatae similique ratione iste magnam iure,
            repudiandae accusamus hic, est reiciendis commodi? Ut sequi aperiam
            libero? Eos labore laborum aspernatur perferendis sed quo odio quos
            voluptas dolore recusandae ex similique odit non vel molestias,
            earum voluptatem quis! Consectetur assumenda aliquid vitae enim
            optio ullam, reiciendis fugit animi sunt tenetur omnis dignissimos,
            inventore quaerat mollitia odit eos perspiciatis saepe earum libero
            suscipit accusantium laudantium facere accusamus quidem. Excepturi
            obcaecati est possimus aut.
          </div>
        </div>
        <div class="leftNavItem">
          <div class="leftNavHead" id="headingFour">
            <button
              type="button"
              data-toggle="collapse"
              data-target="#collapseFour"
              aria-expanded="false"
              aria-controls="collapseFour"
              class="leftNavButton"
            >
              04. SHIPPING METHOD
            </button>
          </div>
          <div
            id="collapseFour"
            class="leftNavBody collapse"
            aria-labelledby="headingFour"
            data-parent="#leftNavCheckout"
          >
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Reiciendis
            voluptatibus accusantium omnis, nihil dignissimos libero
            exercitationem voluptatum vero. Quo, dolor.
          </div>
        </div>
        <div class="leftNavItem">
          <div class="leftNavHead" id="headingFive">
            <button
              type="button"
              data-toggle="collapse"
              data-target="#collapseFive"
              aria-expanded="false"
              aria-controls="collapseFive"
              class="leftNavButton"
            >
              05. PAYMENT METHOD
            </button>
          </div>
          <div
            id="collapseFive"
            class="leftNavBody collapse"
            aria-labelledby="headingFive"
            data-parent="#leftNavCheckout"
          >
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Pariatur,
            tenetur. Accusantium, consectetur veniam. Cum, expedita.
          </div>
        </div>
        <div class="leftNavItem">
          <div class="leftNavHead" id="headingSix">
            <button
              type="button"
              data-toggle="collapse"
              data-target="#collapseSix"
              aria-expanded="false"
              aria-controls="collapseSix"
              class="leftNavButton"
            >
              06. ORDER REVIEW
            </button>
          </div>
          <div
            id="collapseSix"
            class="leftNavBody collapse"
            aria-labelledby="headingSix"
            data-parent="#leftNavCheckout"
          >
            <ul class="leftNavList">
              <li><a href="#">Accessories</a></li>
              <li><a href="#">Bags</a></li>
              <li><a href="#">Denim</a></li>
              <li><a href="#">Hoodies & Sweatshirts</a></li>
              <li><a href="#">Jackets & Coats</a></li>
              <li><a href="#">Pants</a></li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
    <Footer />
  </div>
</template>
<script>
// @ is an alias to /src
import Header from "@/components/Header.vue";
import Footer from "@/components/Footer.vue";

export default {
  name: "Checkout",
  components: { Header, Footer },
};
</script>
