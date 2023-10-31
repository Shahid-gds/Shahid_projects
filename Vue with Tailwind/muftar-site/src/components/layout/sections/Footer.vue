<template>
  <!-- <div
    class="footer p-5">
    <div
      class=" flex w-10/12 mx-auto justify-between items-center py-20 customeBorderFooter">
        <img class="w-3/12 mx-auto" style="max-width: 10rem;" src="@/assets/logo-shadow.svg" />

      <div>
        <p class="md:text-base text-black text-xs">
          Sign Up For Industry Alerts, News And Insights From Muftar Digital.
        </p>
        <div class="flex mt-3 emailInput">
          <input
            class="email-input px-2 py-0 w-full rounded-lg text-black"
            placeholder="Your Email Address"
          />
          <button class="singUp w-40 px-4 py-3 rounded-lg">
            Sign Up!
          </button>
        </div>
      </div>
    </div>
    <div class="footer-contents mt-20 w-10/12 mx-auto">
      <div class="">
        <h3
          class=" text-black font-bold text-lg md:text-3xl customeBorderFooter pb-3">
          About Muftar Digital
        </h3>
        <p class="text-black mt-6 text-md md:text-md ">
          Muftar Digital started with an idea to assist the transport industry in their daily operations by providing access to their drivers' activity to ensure timely deliveries, booking a load, and paying vendors to make life easier for trucking firms and cutting their cost.
        </p>
      </div>

      <div class="">
        <h3
          class=" text-black font-bold text-lg md:text-3xl customeBorderFooter pb-3">
          Services
        </h3>
        <ul class="space-y-3 mt-6">
          <li
            class="text-black text-md cursor-pointer hover:text-indigo-400"
            v-for="(mu, idx) in footer_menu"
            :key="idx">
            <a :href="mu.href">{{ mu.name }}</a>
          </li>
        </ul>
      </div>
    </div>

    <div class="icons flex mt-4 items-center justify-end w-11/12">
      <a v-for="(mu, idx) in social_links"
      :key="idx" :href="mu.link" target="_blank">
        <img :src="mu.icon" class="w-10 mx-3" />
      </a>
    </div>
  </div> -->

  <div class="footer body">
    <!-- <div class="bg-cross">
      <div class="slanted2"></div>
      <div class="slanted"></div>
    </div> -->
    <!-- <div class="flex z-50 rigid-service-bg-img">
      <div
        class="solution-bg v-center no-rigid-margin"
        style="width: 80%; margin: auto"
      >
        <h1 class="text-white font-bold text-4xl theme-banner-heading">
          No Rigid Services, Just Solutions!
        </h1>
          <h2 class="text-white">Flexible, Organized &amp; Accelerated Solutions</h2>
        <p class="text-white mt-10">
          We are Muftar Corp. We are a professional logistics management
          company, offering specialized solutions for the entire transportation
          industry.
        </p>
        <div class="pt-5 pb-5 md:flex items-center justify-center">
          <div class="inr_btn flex-row">
                        <a href="#" class="bg-white text-theme-color-blue theme-btn">Read More</a>
                        <a href="#" class="text-theme-color-white theme-btn">Join The Waitlist!</a>
                    </div>
        </div>
      </div>
    </div> -->
    <div style="background-color: #f1f5ff; margin-top: 100px;">
      <div class=" grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-20 pl-20 pr-20 ml-5 md:ml-0 footer-padd p-8">
        <!-- <div class=" grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 pl-20 pr-20 ml-5 md:ml-0 footer-padd p-8"></div> -->
        <div class="flex flex-col">
          <div class="flex items-center">
            <img
              class=" mb-4"
              style="width: 20rem; margin: 1rem 0;"
              src="@/assets/logo2.svg"
              alt=""
            />
            <!-- <span class="text-3xl" style="font-weight:600; color: #3A59A7">MUFTAR</span> -->
          </div>
          
          <p style="color: #b2b2b2">
            Muftar started with an idea to assist the transport industry in their daily operations by providing access to their drivers' activity to ensure timely deliveries, booking a load, and paying vendors to make life easier for trucking firms and cutting their cost.
          </p>
        </div>
        <!-- <div class="flex flex-col ml-0 md:ml-12">
          <h2 class="text-2xl font-bold-600 mb-5" style="color: #3a59a7">
            Quick Links
          </h2>
          <div class="flex flex-col gap-2" style="color: #b2b2b2">
            <a href="" v-for="(ql, idx) in quik_links" :key="idx">{{ql.name}}</a>
          </div>
        </div>
        <div class="flex flex-col">
          <h2 class="text-2xl font-bold-600 mb-5" style="color: #3a59a7">
            Services
          </h2>
          <div class="flex flex-col gap-2" style="color: #b2b2b2">
            <a href="" v-for="(sl, idx) in services_links" :key="idx">{{sl.name}}</a>
            <a href="">Load Management Service</a>
            <a href="">Accounting</a>
            <a href="">Organization Records</a>
            <a href="">Document Scanner</a>
            <a href="">Drivers / Brokers / Careers</a>
          </div>
        </div> -->
        <div class="flex flex-col ml-0 md:ml-12">
          <h2 class="text-2xl font-bold-600 mb-5" style="color: #3a59a7">
            Quick Links
          </h2>
          <div class="flex flex-col gap-2" style="color: #b2b2b2">
            <p class="cursor-pointer" @click="toggleModal('contact')">Contact Us</p>
          </div>
        </div>
        <div class="flex flex-col ml-0 md:ml-12">
          <h2 class="text-2xl font-bold-600 mb-5" style="color: #3a59a7">
            Resources
          </h2>
          <div class="flex flex-col gap-2" style="color: #b2b2b2">
            <a :href="rl.href" v-for="(rl, idx) in resource_links" :key="idx">{{rl.name}}</a>
          </div>
        </div>
        <!-- <div class="flex flex-col">
          <h2 class="text-2xl font-bold-600 mb-5" style="color: #3a59a7">
            Services
          </h2>
          <div class="flex flex-col gap-2" style="color: #b2b2b2">
            <a href="" v-for="(sl, idx) in services_links" :key="idx">{{sl.name}}</a>
            <a href="">Load Management Service</a>
            <a href="">Accounting</a>
            <a href="">Organization Records</a>
            <a href="">Document Scanner</a>
            <a href="">Drivers / Brokers / Careers</a>
          </div>
        </div> -->
        <div class="flex flex-col">
          <div v-if="!processing">
              <h2 class="text-2xl font-bold-600 mb-5" style="color: #3a59a7">
                Stay up to date with us!
              </h2>
              <p style="color: #b2b2b2">
                Signup to stay up to date for us before we launch!
              </p>
              <p class="text-sm my-2" :class="{'text-red-400': feedback.status == 'error', 'text-green-600':feedback.status == 'success'}">{{feedback.text}}</p>
              
              <div class="relative" v-if="feedback.status != 'success'">
                  <input type="email" id="default-search" class="block p-4 pl-10 my-3 w-full text-sm text-gray-900 bg-white rounded-lg border border-gray-400 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" :class="{'border-red-400': feedback.status == 'error'}" placeholder="Sign Up For Newsletter" v-model="email">
                  <button v-if="email != ''" type="submit" class="text-white absolute right-2.5 bottom-2.5 bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800" @click.prevent="sendToNewsletter()">Sign up</button>
              </div>
          </div>
          <div v-else-if="processing">
            Please Wait...
          </div>

          <h2 class="text-xl mt-2 font-bold-600 mb-5" style="color: #3a59a7">
            Follow Us On
          </h2>
          <div class="flex gap-4">
            <a v-for="(sl, idx) in social_links" :key="idx" :href="sl.link">
              <img :src="sl.icon" />
            </a>
          </div>
        </div>
      </div>
    </div>
    <ContactModal @hideModal="hideModal" v-if="showModal" />
  </div>
</template>
<script>
import axios from 'axios';
import ContactModal from "@/components/landing/ContactModal.vue";
export default {
  components: {
   ContactModal
  },
  props: ["nonMobile"],
  data() {
    return {
      processing: false,
      showModal: false,
      feedback:{
        text:'',
        status: ''
      },
      footer_menu: [
        // { name: "Home", route: "Home", href: "/" },
        // { name: "Careers", route: "Careers", href: "/careers" },
        // { name: "About", route: "About", href: "/about" },
        // { name: "Services", route: "Services", href: "/services" },
      ],
      resource_links:[
        { name: "Privacy Policy", route: "PrivacyPolicy", href: "/privacy-policy" },
        { name: "Cookie Policy", route: "CookiePolicy", href: "/cookie-policy" },
        { name: "EULA", route: "EULA", href: "/eula" },
        { name: "Disclaimer", route: "Disclaimer", href: "/disclaimer" },
        { name: "Return Policy", route: "ReturnPolicy", href: "/returns" },
        { name: "Terms and Conditions", route: "TermsandConditions", href: "/terms" },
      ],
      email: '',
      // footer_menu2: [
      //   { name: "Privacy Policy", route: "Privacy", href: '/privacy-policy' },
      //   { name: "Terms and Conditions", route: "Terms", href: '/terms'},
      // ],
      social_links: [
        {
          link: "https://facebook.com/muftardigital",
          icon: require("@/assets/icons/footer/fb.svg"),
        },
        {
          link: "https://twitter.com/MuftarCorp",
          icon: require("@/assets/icons/footer/twitter.svg"),
        },
        {
          link: "https://instagram.com/muftardigital",
          icon: require("@/assets/icons/footer/insta.svg"),
        },
        {
          link: "https://www.linkedin.com/company/muftar-digital",
          icon: require("@/assets/icons/footer/linkdin.svg"),
        },
        // {
        //   link: "https://medium.com/muftar-digital",
        //   icon: require("@/assets/icons/social/5.svg"),
        // },
      ],
    };
  },
  methods:{
    hideModal() {
      this.showModal = false;
    },
    toggleModal() {
      this.showModal = !this.showModal;
    },
    sendToNewsletter(){
      this.processing = true
      if(!this.email){
        this.feedback.text = "You must enter a valid email!"
        this.feedback.status = "error"
        this.processing = false
      }else{
        if(this.email.includes('@') && this.email.includes('.')){
          axios.post('https://muftardigital.pythonanywhere.com/newsletter', {
            email: this.email.toLowerCase()
          }).then((res)=>{
              this.feedback.text=res.data.feedback
              this.feedback.status=res.data.status
              this.processing = false
              // alert(res.data.dull_list)
          }).catch((err) => {
            this.error = err
            this.processing = false
          })
        }else{
          this.feedback.text = "You must enter a valid email!"
          this.feedback.status = "error"
          this.processing = false
        }
      }
    }
  }
};
</script>
<style >
.singUp {
  background-color: #34487d;
  color: #ffffff;
  margin-left: 5px;
}
.joinlist2 {
  position: relative;
}
.joinlist2::after {
  content: "";
  position: absolute;
  background-image: linear-gradient(120deg, #5d8ac7, #fff, #5d8ac7);
  border-radius: 35px;
  width: 5px;
  height: 100%;
  bottom: 0;
  left: 0;
}
.customeBorderFooter {
  position: relative;
}
.customeBorderFooter::after {
  content: "";
  position: absolute;
  background-image: linear-gradient(120deg, #34487d, rgba(255, 255, 255, 0));
  border-radius: 35px;
  width: 100%;
  height: 5px;
  bottom: 0;
  left: 0;
  margin-top: 5px;
}
.footer {
  width: 100%;
  position: relative;
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  background: #f1f5ff;
  padding-bottom: 50px;
}
.footer-contents {
  display: grid;
  grid-template-columns: 3fr 2fr 2fr;
  grid-template-rows: 1fr;
  grid-column-gap: 20px;
  grid-row-gap: 20px;
  justify-items: stretch;
  align-items: stretch;
}
.email-input {
  background-color: #0e1012;
  outline: none;
  color: #0e1012 !important;
}
.email-input::placeholder {
  color: #e7e7e7;
}
@media screen and (max-width: 900px) {
  .icons {
    justify-content: center !important;
  }
  .copyRight {
    font-size: 12px !important;
    margin-top: 20px !important;
  }
  .emailInput {
    flex-direction: column !important;
  }
  .emailInput input {
    padding: 10px !important;
  }
  .emailInput button {
    width: 100% !important;
    margin-top: 10px !important;
  }
  .footer-contents {
    display: block;
  }
  .icons {
    margin-left: 0 !important;
  }
}
.slanted {
  background-color: #f1f5ff;
  width: 98%;
  left: 50%;
  transform: translateX(-50%) skew(77deg);
  text-align: justify;
  overflow-x: hidden;
  overflow-y: auto;
  height: calc(100% - 2rem);
  padding: 1rem;
  font-family: "Roboto Condensed Light";
  height: 49.5vh;
}
.slanted2 {
  background-color: #0e379f;
  width: 3%;
  left: 50%;
  transform: translateX(-50%) skew(77deg);
  text-align: justify;
  overflow-x: hidden;
  overflow-y: auto;
  height: calc(100% - 2rem);
  padding: 1rem;
  font-family: "Roboto Condensed Light";
  height: 47.5vh;
  position: absolute;
  margin-top: 6px;
}

/* no rigd css  */

.rigid-service-bg-img p {
  margin: 15px 0;
  width: 80%;
  margin-right: auto;
  margin-left: auto;
  color: #ddd;
}
.rigid-service-bg-img h1 {
  font-size: clamp(20px, 3.2vw, 55px);
  font-weight: 700;
  padding: 10px 17px;
}
.rigid-service-bg-img h2 {
  font-size: clamp(18px, 3.2vw, 25px);
  font-weight: 300;
  padding: 10px 17px;
}
.inr_btn {
    margin-top: clamp(10px, 3.2vw, 25px);
    justify-content: space-evenly;
    margin-left: auto;
    margin-right: auto;
    flex-wrap: wrap;
    gap: 10px;
    white-space: nowrap;
}
.theme-btn{
    padding: 7px 15px;
    border-radius: 40px;
    border: 1px solid #fff;
}
.readmore-btn .theme-btn {
    border: 1px solid #3a59a7;
    padding: 5px 17px;
}
.bg-white{
    background-color: #fff;
}
.text-theme-color-blue{
    color: #3a59a7;
}
.text-theme-color-white{
    color: #fff;
}
.btn-mardin-r{
      margin-right: 15px;
}
.rigid-service-bg-img .v-center {
    place-content: center;
    place-items: center;
    display: flex !important;
    align-items: center !important;
    justify-content: center !important;
    flex-wrap: wrap;
    height: auto !important;
    border-radius: 70px !important;
    padding: 70px 0 !important;
    background-size: cover !important;
    line-height: 1.5;
    overflow: hidden !important;
    text-align: center;
    z-index: 6;
}
.text-white{
  line-height: 1.5;
}
.bg-cross {
    position: relative;
    z-index: 2;
    overflow: hidden;
    background-color: #f1f5ff !important;
}
.no-rigid-margin {
    margin-top: calc(-30% - 50px) !important;
}
.font-bold-600{
  font-weight: 600;
}
input.shadow-sm {
    border-radius: 60px;
    outline: none;
}
.footer-padd {
   padding-left: clamp(20px, 6.2vw, 80px) !important;
    padding-right: clamp(20px, 6.2vw, 80px) !important;
}

.footer-padd p {
    font-size: clamp(13px, 3.2vw, 16px);
    line-height: 1.5;
}

.footer-padd a {
    font-size: clamp(13px, 3.2vw, 16px);
}
</style>
