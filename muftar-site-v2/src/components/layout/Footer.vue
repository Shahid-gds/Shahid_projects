<template>
  <div class="w-full p-3 bg-[#3A54B4] footer-section">
    <div class="container mx-auto lg:flex justify-between mt-24 lg:px-6 px-2">
      <div class="lg:w-1/5 logo-section">
        <div>
          <img src="@/assets/images/logo.svg" alt="">
        </div>
        <div class="mt-5 text-[white]">
          <p>
            Muftar is a comprehensive logistics software solution that digitizes and simplifies the entire logistics
            process, from inventory control to shipment tracking. Our platform revolutionizes the industry by eliminating
            paperwork, increasing efficiency, and connecting logistics operations globally.
          </p>
        </div>
      </div>
      <div class="space-y-3 xl:ml-20 quick-links">
        <h1 class="text-2xl text-white">Quick Links</h1>
        <ul class="flex sm:text-xl flex-col space-y-3 text-white">
          <li>
            <a href="/media" @click="scrollToTop">
              Media
            </a>
          </li>
          <li>
            <a href="/terms" @click="scrollToTop">
              Terms & Conditions
            </a>
          </li>
          <li>
            <a href="/privacy" @click="scrollToTop">
              Privacy Policy
            </a>
          </li>
          <li>
            <a href="/disclaimer" @click="scrollToTop" >
              Disclaimer
            </a>
          </li>
          <li>
            <a href="https://blogs.muftar.com" target="_blank">
              Blogs
            </a>
          </li>
        </ul>
      </div>
      <div class="space-y-4 xl:w-1/2 xl:px-24 stay-informed">
        <h1 class="text-2xl text-white">Stay Informed</h1>
        <p class="text-white">Sign Up For Industry Alerts, News And Insights From Muftar.</p>
        <div class="flex space-x-2 w-full">
          <div class="w-full">
            <input ref="emailInput" type="email" class="sm:p-5 p-2 w-full rounded-lg border-2 outline-none" placeholder="Enter Your Email Address"></div>
          <div class="bg-[white] 2xl:px-16 px-6 rounded-lg cursor-pointer" @click="subscribe" >
            <button class="sm:py-5 py-2">
              <svg xmlns="http://www.w3.org/2000/svg" width="22.999" height="23" viewBox="0 0 22.999 23">
              <path id="Newsletter_Send_Icon" data-name="Newsletter Send Icon" d="M22.982-18.469,20.107.178a1.438,1.438,0,0,1-.717,1.035,1.441,1.441,0,0,1-.7.184,1.426,1.426,0,0,1-.552-.111l-5.507-2.3L10.341,2.418a.892.892,0,0,1-.782.457.934.934,0,0,1-.934-.934V-2.38a1.436,1.436,0,0,1,.3-.882l9.76-12.55L5.494-3.94.885-5.862A1.443,1.443,0,0,1,0-7.138,1.4,1.4,0,0,1,.724-8.475l20.125-11.46a1.436,1.436,0,0,1,1.527.063A1.433,1.433,0,0,1,22.982-18.469Z" transform="translate(0 20.125)" fill="#3a54b4"/>
            </svg>
            </button>
        </div>
        </div>
        <div v-if="showMessage" class="text-green-500 mt-2">
          Thank you for subscribing!
        </div>
        <div class="">
          <div class="sm:mt-16">
            <p class="text-[white]">Follow Us On:</p>
          </div>
          <div class="flex space-x-10 mt-3">
            <!-- <div>
              <a href="https://x.com/muftarcorp">
              <img src="@/assets/icons/socials/x.svg" class="w-[1.5rem]">
              </a>
            </div> -->
            <div>
           <a href=" https://web.facebook.com/muftarcorp/?_rdc=1&_rdr">
            <svg xmlns="http://www.w3.org/2000/svg" width="9.641" height="18" viewBox="0 0 9.641 18">
              <path id="Facebook" d="M10.082,10.125l.5-3.258H7.456V4.753a1.629,1.629,0,0,1,1.837-1.76h1.421V.22A17.329,17.329,0,0,0,8.191,0C5.617,0,3.934,1.56,3.934,4.385V6.867H1.073v3.258H3.934V18H7.456V10.125Z" transform="translate(-1.073)" fill="#fff"/>
            </svg>
           </a>
            </div>
            <div>
              <a href="https://www.linkedin.com/company/muftar-digital/">
                <svg xmlns="http://www.w3.org/2000/svg" width="17.997" height="18" viewBox="0 0 17.997 18">
                  <path id="LinkedIn" d="M4.028,18H.3V5.981H4.028ZM2.161,4.342A2.174,2.174,0,1,1,4.322,2.161,2.179,2.179,0,0,1,2.161,4.342ZM17.993,18H14.27V12.148c0-1.394-.028-3.182-1.94-3.182-1.94,0-2.237,1.514-2.237,3.081V18H6.366V5.981H9.944V7.62H10a3.921,3.921,0,0,1,3.53-1.94C17.3,5.68,18,8.166,18,11.4V18Z" transform="translate(0 0.003)" fill="#fff"/>
                </svg> 
              </a>             
            </div>
            <div>
              <a href="https://www.instagram.com/muftarcorp/">
                <svg xmlns="http://www.w3.org/2000/svg" width="18.004" height="18" viewBox="0 0 18.004 18">
                  <path id="Instagram" d="M9,5.877a4.615,4.615,0,1,0,4.615,4.615A4.608,4.608,0,0,0,9,5.877Zm0,7.615a3,3,0,1,1,3-3,3.006,3.006,0,0,1-3,3Zm5.88-7.8A1.076,1.076,0,1,1,13.8,4.612,1.074,1.074,0,0,1,14.881,5.688Zm3.057,1.092a5.327,5.327,0,0,0-1.454-3.771,5.362,5.362,0,0,0-3.771-1.454c-1.486-.084-5.94-.084-7.426,0a5.354,5.354,0,0,0-3.771,1.45A5.344,5.344,0,0,0,.06,6.776c-.084,1.486-.084,5.94,0,7.426a5.327,5.327,0,0,0,1.454,3.771,5.369,5.369,0,0,0,3.771,1.454c1.486.084,5.94.084,7.426,0a5.327,5.327,0,0,0,3.771-1.454A5.362,5.362,0,0,0,17.937,14.2c.084-1.486.084-5.936,0-7.422ZM16.017,15.8a3.038,3.038,0,0,1-1.711,1.711c-1.185.47-4,.361-5.306.361s-4.125.1-5.306-.361A3.038,3.038,0,0,1,1.984,15.8c-.47-1.185-.361-4-.361-5.306s-.1-4.125.361-5.306A3.038,3.038,0,0,1,3.695,3.475c1.185-.47,4-.361,5.306-.361s4.125-.1,5.306.361a3.038,3.038,0,0,1,1.711,1.711c.47,1.185.361,4,.361,5.306S16.487,14.617,16.017,15.8Z" transform="translate(0.004 -1.492)" fill="#fff"/>
                </svg>  
              </a>            
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="text-white text-center sm:mt-16 copy-right">
      <p>Copyright © 2023 Muftar Corp. All Rights Reserved</p>
    </div>
  </div>
</template>
<script setup>
import { ref } from 'vue';

const email = ref('');
const showMessage = ref(false);
const emailInput = ref(null);

const subscribe = async () => {
  if (email.value.trim() === '') {
    emailInput.value.classList.add('error-border');
    return;
  }

  const endpoint = 'https://muftardigital.pythonanywhere.com/newsletter';

  try {
    const response = await fetch(endpoint, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ email: email.value }),
    });

    if (response.ok) {
      emailInput.value.classList.remove('error-border');
      email.value = '';
      showMessage.value = true;
    } else {
      console.error('Failed to subscribe to the newsletter');
    }
  } catch (error) {
    console.error('An error occurred:', error);
  }
};
const scrollToTop = () => {
  window.scrollTo({
    top: 0,
    behavior: 'smooth'
  });
};
</script>


<style scoped>
.footer-section {
  background-image: url('../../assets/images/footerBg.svg');
  height: auto;
  background-size: cover;
  background-position: center center;
  background-repeat: no-repeat;
}
.error-border {
  border: 2px solid red; 
}
@media (max-width: 1024px) {
  .quick-links{
    margin-top: 5rem;
  }
 
  .stay-informed{
    margin-top: 5rem;
  }
}
@media (max-width: 640px) {
  .copy-right {
    width: 90%;
    background: white;
    position: absolute;
    margin-top: 5rem;
    color: black;
    text-align: center; 
  }
  .copy-right p {
    margin-top: -3rem;
  }
  
}
</style>
