<template>
  <div class="navbar absolute z-10 top-0">
    <nav >
      <div class="icon">
        <i
          @click="toggleMobileNav"
          v-if="mobile"
          class="fas fa-bars"
          :class="{ 'icon-active': mobileNav }"
        ></i>
      </div>
      <router-link class="flex cursor-pointer" :to="{name: 'Home'}">
        <div class="branding" >
          <img src="@/assets/logo.svg" /> 
          <span class="text-white text-2xl font-bold ml-2" >MUFTAR</span>
        </div>
      </router-link>

      <ul v-show="!mobile" class="navigation">
        <li v-for="(mu, idx) in menu" :key="idx" :class="{ 'active': mu.route == current_route.name }">
          <router-link class="link" :to="{ name: mu.route }">{{mu.name}}</router-link>
        </li>
      </ul>
      <a class=" md:flex items-center justify-center px-2 py-0 glassmorph-nav hidden text-center" href="/waitlist">Join The Waitlist!</a>
      <XyzTransitionGroup
          class="mobile-nav"
          appear
          xyz="right-4 narrow-100% ease-ease">
        <!-- <div class="square" v-if="true"></div> -->
        <ul v-if="mobileNav" class="dropdown-nav" >
          <img
            @click="toggleMobileNav"
            class="close-btn"
            src="@/assets/icons/navbar/cross.svg"
            alt=""
            :class="{ 'icon-active': mobileNav }"
            />
          <li v-for="(mu, idx) in menu" :key="idx"
            :class="{ 'activeMobile': mu.route == current_route.name }">
            <a class="link" :class="{ 'activeMobile': mu.route == current_route.name }" :to="{ name: mu.route }">{{mu.name}}</a>
          </li>
        </ul>
      </XyzTransitionGroup>

    </nav>
  </div>
</template>
<script>
export default {
  props: ["nonMobile"],
  data() {
    return {
      current_route: this.$route,
      menu:[
        {name: 'HOME', href:'/',route: 'Home'},
        {name: 'ABOUT US', href:'/',route: ''},
        {name: 'SERVICES', href:'/service',route: 'Services'},
        {name: 'PRODUCTS', href:'/service',route: 'Services'},
        {name: 'PRICING', href:'/',route: ''},
        {name: 'PRODUCT', href:'/',route: ''},
        {name: 'CONTACT US', href:'/contact',route: ''},
      ],
      scrolledNav: null,
      mobile: true,
      mobileNav: false,
      windowWidth: null,
    };
  },
  created() {
    window.addEventListener("resize", this.checkScreen);
    this.checkScreen();
  },
  mounted() {
    window.addEventListener("scroll", this.updateScroll);
  },
  methods: {
    toggleMobileNav() {
      this.mobileNav = !this.mobileNav
      console.log(this.mobileNav)
    },
    // updateScroll() {
    //   const scrollPosition = window.scrollY;
    //   if (scrollPosition > 50) {
    //     this.scrolledNav = true;
    //     return;
    //   }
    //   this.scrolledNav = false;
    // },
    checkScreen() {
      this.windowWidth = window.innerWidth;
      if (this.windowWidth <= 750) {
        this.mobile = true;
        return;
      }
      this.mobile = false;
      this.mobileNav = false;
      return;
    },
  },
};
</script>
<style  scoped>
.navbar{
  width: 95vw;
  z-index: 50;
}
.activeMobile{
  color: #5D8AC7;
}

.fa-bars:before {
    content: "\f0c9";
    color: #fff;
}
.active {
border-bottom: 3px solid #34487D;
}
.glassmorph-nav {
 background:white;
 border-radius: 20px;
 color: #34487D;
 text-transform: uppercase;
 font-weight: bolder;
 font-size: 16px;
}
nav {
  display: flex;
  padding: 30px 0;
  transition: 0.5s ease all;
  width: 75%;
  margin: 0 auto;
}
@media (min-width: 1140px) {
  .nav {
    max-width: 1140px;
  }
}
.li {
  text-transform: uppercase;
  padding: 16px;
  margin-left: 16px;
}
ul,
link {
  font-weight: 500;
  color: rgb(255, 255, 255);
  list-style: none;
  text-decoration: none;
}
.branding {
  display: flex;
  align-items: center;
  width: 4rem;
}
.branding  img {
  width: 46px;
  transition: 0.5s ease all;
}
.link {
  font-size: 14px;
  transition: 0.5s ease all;
  padding-bottom: 4px;
  border-bottom: 1px solid transparent;
  padding: 15px;
}
/* .link:hover {
  color: #5D8AC7;
  border-color: #5D8AC7;
} */
.icon {
  display: flex;
  position: absolute;
  top: 0;
  align-items: center;
  right: 24px;
  height: 100%;
}
i {
  cursor: pointer;
  font-size: 24px;
  transition: 0.8s ease all;
}
.icon-active {
  transform: rotate(180deg);
  color: #fff;
}
.navigation {
  display: flex;
  align-items: center;
  margin: auto;
  justify-content: flex-end;
}
.close-btn{
  width: 20px;
  position: absolute;
  top: 1rem; right: 4rem;
}
.dropdown-nav {
  display: flex;
  flex-direction: column;
  position: absolute;
  width: 100%;
  max-width: 250px;
  height: 100vh ;
  box-shadow: 0 4px 6px -1 rgba(0, 0, 0, 0.1),
    0 2px 4px -1px rgba(0, 0, 0, 0.06);
  backdrop-filter: blur(5px);
  top: 0;
  padding-right: 4rem;
  padding-top: 4rem;
  right: -4rem;
  overflow: scroll;
  border-left: 1px solid #000;
}
.dropdown-nav li {
  margin-left: 0;
  box-shadow: 0 4px 6px -1 rgba(0, 0, 0, 0.1),
    0 2px 4px -1px rgba(0, 0, 0, 0.06);
  align-items: center;
  display: flex;
  justify-content: center;
  margin: 1rem auto;
}

.dropdown-nav li .link {
  color: rgb(255, 255, 255);
}
</style>
