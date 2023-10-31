<template>
  <div class="navbar">
    <div class="landing-menu top-header body">
        <div class="flex cursor-pointer logo-holder">
          <div class="branding flex gap-5">
            <img src="@/assets/logo.svg" />
            <div class="relative">
              <h2 class="text-white text-xl">MUFTAR</h2>
              <span class="absolute" style="left: 5rem; top: -6px"
                >&trade;</span
              >
            </div>
          </div>
          <div class="branding">
            <img
              @click="toggleMobileNav"
              v-if="mobile"
              class="fas fa-bars"
              :class="{ 'icon-active': mobileNav }"
              src="@/assets/Iconawesome-al.svg"
            />
          </div>
      </div>
      <div>
        <ul v-if="mobileNav" class="dropdown-nav">
          <img
            @click="toggleMobileNav"
            class="close-btn cursor-pointer"
            src="@/assets/icons/navbar/cross.svg"
            alt=""
            :class="{ 'icon-active': mobileNav }"
          />
          <li class="cursor-pointer">
            <div class="flex justify-center flex-col gap-10 text-center">
              <router-link to="/">
                <p>Home</p>
              </router-link>
              <button @click="toggleModal('contact')">Contact Us</button>
            </div>
          </li>
        </ul>
        <div class="flex gap-10">
          <div
            class="flex justify-center items-center gap-24"
            style="gap: 100px"
            v-show="!mobile"
          >
              
            <div class="dropdown inline-block relative">
              <div class="flex gap-2 cursor-pointer">
                <p>SOLUTION</p>
                <img src="@/assets/icons/alpha-landing/down-arrow.svg" alt="">
              </div>
              <ul class="dropdown-menu absolute hidden text-gray-700 pt-1 w-40 bg-white">
                <li class=""><a class="text-black bg-white hover:bg-gray-400 py-2 px-4 block whitespace-no-wrap" href="#">Driver Mobile</a></li>
                <li class=""><a class="text-black bg-white hover:bg-gray-400 py-2 px-4 block whitespace-no-wrap" href="#">Carrrier Portal</a></li>
                <li class=""><a class="text-black bg-white hover:bg-gray-400 py-2 px-4 block whitespace-no-wrap" href="#">Broker Portal</a></li>
                <li class=""><a class="text-black bg-white hover:bg-gray-400 py-2 px-4 block whitespace-no-wrap" href="#">Client Portal</a></li>
                
              </ul>
            </div>
            <!-- <button @click="toggleModal('contact')">Contact Us</button> -->
            <div class="dropdown inline-block relative">
              <div class="flex gap-2 cursor-pointer">
                <p>COMPANY</p>
                <img src="@/assets/icons/alpha-landing/down-arrow.svg" alt="">
              </div>
              <ul class="dropdown-menu absolute hidden text-gray-700 pt-1 w-40 bg-white">
                <li class=""><a class="text-black bg-white hover:bg-gray-400 py-2 px-4 block whitespace-no-wrap" href="#">Our Story</a></li>
                <li class=""><a class="text-black bg-white hover:bg-gray-400 py-2 px-4 block whitespace-no-wrap" href="#">Affiliate Network</a></li>
                <li class=""><a class="text-black bg-white hover:bg-gray-400 py-2 px-4 block whitespace-no-wrap" href="#">Careers</a></li>
                <li class=""><a class="text-black bg-white hover:bg-gray-400 py-2 px-4 block whitespace-no-wrap" href="#">White Papers</a></li>
                <li class=""><a class="text-black bg-white hover:bg-gray-400 py-2 px-4 block whitespace-no-wrap" href="#">Brand Guidelines</a></li>
                
              </ul>
            </div>
          </div>
          <a
            class="
              md:flex
              items-center
              justify-center
              hidden
              bg-white
              text-theme-color-blue
              theme-btn
            " style="font-size: 16px;"
            @click="toggleModal('waitlist')"
            >Join The Waitlist!</a
          >
        </div>
      </div>
    </div>
    <!-- career Modal -->
    <ContactModal @hideModal="hideModal" v-if="showModal" />
    <WaitlistModal @hideModal="hideModal" v-if="showWaitlistModal" />
  </div>
</template>
  <script>
import ContactModal from "./ContactModal.vue";
import WaitlistModal from "./WaitlistModal.vue";
export default {
  props: ["nonMobile"],
  components: {
    ContactModal,
    WaitlistModal,
  },
  data() {
    return {
      showModal: false,
      showWaitlistModal: false,
      current_route: this.$route,
      // menu:[
      //   {name: 'HOME', href:'/',route: 'Home'},
      //   {name: 'CONTACT US', href:'/',route: ''},
      //   {name: 'CAREER', href:'/service',route: 'Services'},
      // ],
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
    toggleModal(md) {
      if (md == "contact") {
        this.showModal = !this.showModal;
      } else if (md == "waitlist") {
        this.showWaitlistModal = !this.showWaitlistModal;
      }
    },
    hideModal() {
      this.showModal = false;
      this.showWaitlistModal = false;
    },
    toggleMobileNav() {
      this.mobileNav = !this.mobileNav;
      console.log(this.mobileNav);
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
  .dropdown:hover .dropdown-menu {
  display: block;
}
.navbar {
  width: 95vw;
  z-index: 50;
}
.activeMobile {
  color: #5d8ac7;
}

.fa-bars:before {
  content: "\f0c9";
  color: #fff;
}
.active {
  border-bottom: 3px solid #34487d;
}
.glassmorph-nav {
  background: white;
  border-radius: 20px;
  color: #34487d;
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
.branding img {
  width: 50px;
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
.close-btn {
  width: 20px;
  position: absolute;
  top: 1rem;
  right: 4rem;
}
.dropdown-nav {
  display: flex;
  flex-direction: column;
  position: fixed;
  width: 100%;
  max-width: 250px;
  height: 100vh;
  box-shadow: 0 4px 6px -1 rgba(0, 0, 0, 0.1),
    0 2px 4px -1px rgba(0, 0, 0, 0.06);
  /* -webkit-backdrop-filter: blur(5px); */
  background-color: #3957a5;
  top: 0;
  padding-right: 4rem;
  padding-top: 4rem;
  left: 0;
  /* overflow: scroll; */
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
.theme-btn {
  cursor: pointer;
}
logo-holder {
  width: calc(36vw + 14px) !important;
}

.top-header {
  display: flex;
  align-items: center;
  justify-content: space-around;
  width: 100%;
  padding: 20px 60px;
  position: absolute;
  z-index: 4;
  top: 0px;
  gap: 100px !important;
}
.top-header .theme-btn {
  text-align: center;
  font-size: calc(1.5vw - 0px);
  display: block;
  white-space: nowrap;
  font-weight: 500;
}
.top-header .flex {
  color: #ddd;
  transition: 0.5s;
}
.top-header .flex button {
  border: 0;
  outline: 0;
  transition: 0.5s;
}
.top-header .flex button:hover {
  background-color: transparent;
  color: #fff;
}
.top-header .flex a {
  transition: 0.5s;
}
.top-header .flex a:hover {
  color: #fff;
}
/* .top-header div:nth-child(1) {
    width: calc(20vw + 15px);
} */
/* .top-header div:nth-child(2) {
  width: 60%;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 100px !important;
}
.top-header div:nth-child(3) {
  width: 20%;
  gap: 100px;
} */

@media (max-width: 767px) {
  .top-header{
    justify-content: start;
  }
  .top-header div:nth-child(2) {
    gap: 100px !important;
    display: none;
  }
  .top-header div:nth-child(3) {
    width: calc(30% + 50px);
  }
  .top-header .theme-btn {
    font-size: calc(2.5vw + 2px);
  }
  .top-header .logo-holder .branding:last-child {
    display: block !important;
  }
  .top-header .logo-holder .branding:last-child img {
    width: 30px;
  }
  .top-header {
    padding: 15px 30px;
  }
}

.logo-holder {
  display: flex;
  flex-direction: row-reverse;
  align-items: center;
}

.logo-holder .branding:last-child {
  display: none !important;
}
</style>
  