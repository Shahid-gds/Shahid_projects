<template>
  <div class="applyForm p-5 md:p-24 relative" style="background-color:#0E1012">
    <div class="w-100 rounded-2xl overflow-hidden  p-5 ">
      <!-- <div class="overlay career-overlay"></div> -->
      <div class="flex justify-center">
        <form class="w-full max-w-lg text-black">
        <h1 class="text-center text-4xl mb-10 text-white">Apply Now</h1>
          <div class="flex flex-wrap -mx-3 mb-6 text-black">
            <div class="w-full md:w-1/2 px-3 mb-6 md:mb-0 text-black">
              <input class="appearance-none block w-full callnow text-black border rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:text-black" id="grid-first-name" type="text" placeholder="First Name"/>
            </div>
            <div class="w-full md:w-1/2 px-3">
              <input class=" appearance-none block w-full callnow text-black border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:border-gray-500 focus:text-black" id="grid-last-name" type="text" placeholder="Last Name"/>
            </div>
          </div>
          <div class="flex flex-wrap -mx-3 mb-6 text-black">
            <div class="w-full md:w-1/2 px-3 mb-6 md:mb-0 text-black">
              <input class="appearance-none block w-full callnow text-black border rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:text-black" id="grid-first-name" type="text" placeholder="Enter Phone"/>
            </div>
            <div class="w-full md:w-1/2 px-3 text-black">
              <input class="appearance-none block w-full callnow text-black border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:border-gray-500 focus:text-black" id="grid-last-name" type="text" placeholder="Enter Email"/>
            </div>
          </div>
          <div class="flex flex-wrap -mx-3 mb-6 ">
            <div class="w-full md:w-1/2 px-3 mb-6 md:mb-0 ">
              <input class="appearance-none block w-full callnow text-black border rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:text-black" id="grid-first-name" type="text" placeholder="Years of Experiance"/>
            </div>
            <div class="w-full md:w-1/2 px-3">
              <input class="appearance-none block w-full callnow text-black border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:border-gray-500 focus:text-black ..." id="grid-last-name" type="text" placeholder="Dispatch"/>
              <!-- <select class="appearance-none block w-full callnow text-black border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:border-gray-500 focus:text-black ..." name="pets" id="pet-select">
                <option value="">Dispatcher</option>
                <option value="dog">Dog</option>
                <option value="cat">Cat</option>
                <option value="hamster">Hamster</option>
                <option value="parrot">Parrot</option>
                <option value="spider">Spider</option>
                <option value="goldfish">Goldfish</option>
              </select> -->
            </div>
          </div>
          <div class="flex justify-center items-center">
          <a class="bgColor w-40 md:flex items-center justify-center text-white md:px-5 py-1 glassmorph-nav text-center">Submit</a>
          </div>
        </form>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "ApplyFormNow",
};
</script>

<style scoped>
.bgColor{
  background-color: #34487D;
}
.box {
  width: 50%;
  display: block;
  margin: auto;
}
input {
  color: black !important; /*The color of your choice here*/
}
.callnow {
  background: #fff;
  color: black;
  box-shadow: 0 8px 32px 0 rgba(0, 0, 0, 0.37);
  backdrop-filter: blur(3.5px);
  -webkit-backdrop-filter: blur(3.5px);
  border-radius: 5px;
  border: 1px solid rgba(255, 255, 255, 0.18);
}
.career-overlay {
  background: rgba(0, 0, 0, 0.4);
}
::-webkit-input-placeholder {
  /* Chrome/Opera/Safari */
  color: rgb(0, 0, 0);
}
.applyForm {
  width: 100%;
  min-height: 60vh;
  overflow: hidden;
  position: relative;
  /* Set a specific height */
  min-height: 500px;
  background-attachment: fixed;
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
}
@media screen and (max-width: 900px) {
  .box {
    width: 100% !important;
    display: block;
    margin: auto;
  }
}
</style>