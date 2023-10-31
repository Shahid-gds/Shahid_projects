<template>
  <div class="navbar">
        <div class="top-header">
        <div class="flex">
          <a class="branding logo" href="/" >
              <img src="@/assets/logo.svg" />
          </a>  
        </div>
        <!-- <div class="flex justify-center items-center" style="gap:100px" v-show="!mobile" >
            <router-link to="/" class=" ml-44">
                <p>Home</p>
            </router-link>
            <button @click="toggleModal('contact')">Contact Us</button>
            <router-link to="/career">
                <p>Career</p>
            </router-link>
        </div> -->
        <!-- <div class="square" v-if="true"></div> -->
        <ul v-if="mobileNav" class="dropdown-nav" >
          <img
            @click="toggleMobileNav"
            class="close-btn cursor-pointer"
            src="@/assets/icons/navbar/cross.svg"
            alt=""
            :class="{ 'icon-active': mobileNav }"
            />
          <li class=" cursor-pointer">
          <div class="flex justify-center flex-col gap-10 text-center">
            <router-link to="/">
              <p>Home</p>
          </router-link>
          <button @click="toggleModal('contact')">Contact Us</button>
          <!-- <router-link to="/career">
              <p>Career</p>
          </router-link> -->
        </div>
          </li>
        </ul>
        <a class="p-2 md:px-4 bg-white text-theme-color-blue text-xs lg:text-lg font-bold rounded-full" href="/beta">Join Beta!</a>
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
<style scoped>
  .dropdown:hover .dropdown-menu {
  display: block;
}
.logo{
    width: 3rem;
  }
.navbar {
  width: 95%;
  margin: auto;
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
  background-color: #3957a5ef;
  top: 0;
  padding-right: 4rem;
  padding-top: 4rem;
  left: 0;
  /* overflow: scroll; */
  transition: 1s;
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
logo-holder {
  width: calc(36vw + 14px) !important;
}

.top-header {
  display: flex;
  align-items: center;
  justify-content: space-around;
  width: 96%;
  padding: .67rem 0;
  margin: 0 auto;
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
    justify-content: space-between;
    /* width: 96%; */
    margin: auto;
  }
  .top-header div:nth-child(3) {
    width: calc(30% + 50px);
  }
  .top-header .theme-btn {
    font-size: calc(2.5vw + 2px);
  }
  .top-header .logo-holder .branding:last-child {
    display: flex !important;
  }
  /* .top-header .logo-holder .branding:last-child img {
    width: 1.5rem;
  } */
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
  