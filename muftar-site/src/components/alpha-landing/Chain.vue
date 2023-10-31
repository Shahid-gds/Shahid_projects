<template>
    <div class="flex z-50 rigid-service-bg-img " style="margin-top:3rem">
        <div
          class="solution-bg v-center no-rigid-margin"
          style="width: 80%; margin: auto; margin-top: 0 !important;"
        >
          <div class="flex flex-col justify-center items-center">
              <h1 class="text-white font-bold text-4xl theme-banner-heading">
              Bringing The Chain Together
          </h1>
            <h2 class="text-white">Join The Future Of Transportation Today</h2>
          </div>
          <div class="pt-5 pb-5 flex flex-col items-center justify-center">
              <p class="text-white mt-10">
                  Join our waitlist and be the first to get informed of our Beta Service and Affiliate Network's initial release.
              </p>
            <div class="inr_btn flex-row">
                          <a href="#" class="text-theme-color-white theme-btn">Join The Waitlist!</a>
                      </div>
          </div>
        </div>
      </div>
  </template>
  
  <script>
  export default {
  }
  </script>
  <style scoped>
  
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
  <style scoped src="@/assets/main.css">

</style>  