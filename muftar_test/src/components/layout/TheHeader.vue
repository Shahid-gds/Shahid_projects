<template>
  <header :class="{ 'scrolled-nav': scrollPosition }">
    <nav>
      <div class="branding">
        <router-link to="/"><img src="../../assets/images/logo.svg" alt=""></router-link>
      </div>
      <ul v-show="!mobile" class="navigation">
        <li> <router-link class="links" :to="{ name: '' }">Mission</router-link> </li>
        <li> <router-link class="links" :to="{ name: 'Solutions' }">Solutions</router-link> </li>
        <li> <router-link class="links" :to="{ name: 'Pricing' }">Pricing</router-link> </li>
        <li> <router-link class="links" :to="{ name: 'Knowledge' }">Knowledge Bar</router-link> </li>
      </ul>
      <ul v-show="!mobile" class="logo">
        <li>
          <router-link class="links" :to="{ name: '' }">Login</router-link>
        </li>
        <li class="button">
          <router-link class="links" :to="{ name: '' }">Join The Network</router-link>
        </li>
      </ul>

      <div class="icon" @click="toggleMobileNav" v-show="mobile">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">
          <!--! Font Awesome Pro 6.3.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2023 Fonticons, Inc. -->
          <path
            d="M0 96C0 78.3 14.3 64 32 64H416c17.7 0 32 14.3 32 32s-14.3 32-32 32H32C14.3 128 0 113.7 0 96zM0 256c0-17.7 14.3-32 32-32H416c17.7 0 32 14.3 32 32s-14.3 32-32 32H32c-17.7 0-32-14.3-32-32zM448 416c0 17.7-14.3 32-32 32H32c-17.7 0-32-14.3-32-32s14.3-32 32-32H416c17.7 0 32 14.3 32 32z" />
        </svg>
      </div>
      <transition name="mobile-nav">
        <ul v-show="mobileNav" class="dropdown-nav" :class="{ 'icon-active': mobileNav }">
          <button class="close-btn" @click="toggleMobileNav">X</button>
          <div mob-branding>
            <router-link to="/"><img src="../../assets/images/logo-White.svg" alt="" style="width: 150px; margin-left:1rem" @click="toggleMobileNav"></router-link>
          </div>
          <li @click="toggleMobileNav">
            <router-link class="links" :to="{ name: '' }">Mission</router-link>
          </li>
          <li @click="toggleMobileNav">
            <router-link class="links" :to="{ name: 'Solutions' }">Solutions</router-link>
          </li>
          <li @click="toggleMobileNav">
            <router-link class="links" :to="{ name: 'Pricing' }">Pricing</router-link>
          </li>
          <li>
            <router-link class="links" :to="{ name: 'Knowledge' }">Knowledge Bar</router-link>
          </li>
          <li>
            <router-link class="links" :to="{ name: '' }">Login</router-link>
          </li>
          <li class="mob-button">
            <router-link class="links" :to="{ name: '' }">Join The Network</router-link>
          </li>
        </ul>
      </transition>
    </nav>
  </header>
</template>

<script>
export default {
  name: "TheHeader",
  data() {
    return {
      scrollPosition: null,
      mobile: null,
      mobileNav: null,
      widowWidth: null,
    };
  },
  created() {
    window.addEventListener('resize', this.checkScreen);
    this.checkScreen();
  },
  methods: {
    toggleMobileNav() {
      this.mobileNav = !this.mobileNav
    },
    checkScreen() {
      this.widowWidth = window.innerWidth;
      if (this.widowWidth <= 1170) {
        this.mobile = true;
        return
      }
      this.mobile = false;
      this.mobileNav = false;
      return;
    }
  }
}
</script>

<style  scoped>
header {
  background: transparent;
  z-index: 999;
  width: 100%;
  position: absolute;
  transition: .5s ease all;
  color: #242021;
  margin-top: -8rem;
}

nav {
  position: relative;
  display: flex;
  flex-direction: row;
  padding: 12px 0;
  transition: 0.5s ease all;
  width: 95%;
  margin-left: 10rem;
}

.navigation {
  width: 100%;
  display: flex;
  align-items: center;
  flex: 1;
  justify-content: flex-start;
  margin-left: 5rem;
}

.logo {
  display: flex;
  margin-right: 10rem;
}

.icon {
  display: flex;
  position: absolute;
  top: 0;
  align-items: center;
  right: 24px;
  height: 100%;
}

svg {
  cursor: pointer;
  font-size: 22px;
  transition: .8s ease all;
  margin-right: 10rem;
  width: 20px;
  height: 20px;
  color: #666668;
}

.button a {
  padding: 0.5rem 2.5rem;
  background: #3c58a8;
  border-radius: 0.5rem;
  color: white;
}

.dropdown-nav {
  display: flex;
  flex-direction: column;
  position: fixed;
  width: 100%;
  max-width: 250px;
  height: 100%;
  background: #3c58a8;
  top: 0;
  right: 0;
  padding-top: 0rem;
}
.mobile-nav-enter-active,
.mobile-nav-leave-active{
  transition: 1s ease all;
}
.mobile-nav-enter-from,
.mobile-nav-leave-to{
  transform: translateX(250px);
}
.mobile-nav-enter-to{
  transform: translateX(0);
}
.close-btn {
  border: none;
  font-size: 22px;
  background: #3c58a8;
  margin-right: 13rem;
  margin-top: 1rem;
  font-weight: 600;
  color: white;
}

.icon-active {
  transition: .5s ease all;
}

li {
  margin-left: 30px;
  list-style: none;
  padding: 1rem;
  font-size: 18px;
}

.links {
  color: #242021;
  margin-top: -3rem;
  font-weight: 700;
}

.mob-button a{
  padding: 0.5rem 1.5rem;
  background: white;
  border-radius: 0.5rem;
  color: black;
  font-size: 15px;
  font-weight: 500;
}

@media (max-width: 1600px) {
  .branding {
    margin-left: -7.5rem;
  }

  .logo {
    display: flex;
    margin-right: 18rem;
  }
}

@media (max-width: 1450px) {
  .branding {
    margin-left: -7.5rem;
  }

  .logo {
    display: flex;
    margin-right: 10rem;
  }
}

@media (max-width: 1366px) {
  .branding {
    margin-left: -7.5rem;
  }

  .logo {
    display: flex;
    margin-right: 8rem;
  }
}

@media (max-width: 1280px) {
  .navigation {
    margin-left: 0rem;
  }

  .branding {
    margin-left: -7.5rem;
  }

  .logo {
    display: flex;
    margin-right: 7rem;
  }
}

@media (max-width: 990px) {
  .branding {
    margin-left: -2.5rem;
  }
  .links{
    color: white;
  }
}

@media (max-width: 770px) {
  .branding {
    margin-left: -7.5rem;
  }
}</style>