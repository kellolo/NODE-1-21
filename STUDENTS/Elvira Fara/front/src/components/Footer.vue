<template>
  <div v-frag>
    <div class="subscribe">
      <div class="containerWrap">
        <div class="feedbackWrapper">
          <img
            src="../assets/img/feedbackPhoto.png"
            alt="photo"
            class="feedbackPhoto"
          />
          <div class="feedbackInfo">
            <blockquote class="feedbackText">
              “Vestibulum quis porttitor dui! Quisque viverra nunc mi, a
              pulvinar purus condimentum a. Aliquam condimentum mattis neque sed
              pretium”
            </blockquote>
            <div class="feedbackName">Bin Burhan</div>
            <div class="feedbackCountry">Dhaka, Bd</div>
            <div class="feedbackRects">
              <div class="feedbackRect"></div>
              <div class="feedbackRect"></div>
              <div class="feedbackRect"></div>
            </div>
          </div>
        </div>
        <div class="subscribeMail">
          <div class="subscribeTitle1">Subscribe</div>
          <div class="subscribeTitle2">FOR OUR NEWLETTER AND PROMOTION</div>
          <form action="#" class="subscribeForm">
            <input type="email" placeholder="Enter Your Email" />
            <button>Subscribe</button>
          </form>
        </div>
      </div>
    </div>

    <footer class="footerMain">
      <div class="footerTop containerWrap">
        <div class="footerLogoText">
          <router-link to="/" class="logo">BRAN<span>D</span></router-link>
          <div class="footerText">
            Objectively transition extensive data rather than cross functional
            solutions. Monotonectally syndicate multidisciplinary materials
            before go forward benefits. Intrinsicly syndicate an expanded array
            of processes and cross-unit partnerships.<br /><br />Efficiently
            plagiarize 24/365 action items and focused infomediaries.<br />Distinctively
            seize superior initiatives for wireless technologies. Dynamically
            optimize.
          </div>
        </div>
        <section class="footerCompany">
          <h2 class="footerTitle">COMPANY</h2>
          <ul class="footerList">
            <li><router-link to="/">Home</router-link></li>
            <li><a href="#">Shop</a></li>
            <li><a href="#">About</a></li>
            <li><a href="#">How It Works</a></li>
            <li><a href="#">Contact</a></li>
          </ul>
        </section>
        <section class="footerInfo">
          <h2 class="footerTitle">INFORMATION</h2>
          <ul class="footerList">
            <li><a href="#">Tearms & Condition</a></li>
            <li><a href="#">Privacy Policy</a></li>
            <li><a href="#">How to Buy</a></li>
            <li><a href="#">How to Sell</a></li>
            <li><a href="#">Promotion</a></li>
          </ul>
        </section>
        <section class="footerCategory">
          <h2 class="footerTitle">SHOP CATEGORY</h2>
          <ul class="footerList">
            <li><a href="#">Men</a></li>
            <li><a href="#">Women</a></li>
            <li><a href="#">Child</a></li>
            <li><a href="#">Apparel</a></li>
            <li><a href="#">Brows All</a></li>
          </ul>
        </section>
      </div>
      <div class="footerBottom">
        <div class="containerWrap">
          <div class="footerCopyright">
            &copy;<span id="year">{{ year }}</span> Brand All Rights Reserved.
          </div>
          <nav class="footerSocial">
            <a href="#" class="footerSocialIcon"
              ><i class="fab fa-facebook-f"></i
            ></a>
            <a href="#" class="footerSocialIcon"
              ><i class="fab fa-twitter" aria-hidden="true"></i
            ></a>
            <a href="#" class="footerSocialIcon"
              ><i class="fab fa-linkedin-in" aria-hidden="true"></i
            ></a>
            <a href="#" class="footerSocialIcon"
              ><i class="fab fa-pinterest-p" aria-hidden="true"></i
            ></a>
            <a href="#" class="footerSocialIcon"
              ><i class="fab fa-google-plus-g" aria-hidden="true"></i
            ></a>
          </nav>
        </div>
      </div>
    </footer>
  </div>
</template>

<script>
// @ is an alias to /src
import frag from "vue-frag";

export default {
  name: "Footer",
  directives: {
    frag,
  },
  data() {
    return {
      year: new Date().getFullYear(),
    };
  },
};
</script>
