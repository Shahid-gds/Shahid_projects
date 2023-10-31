<template>
  <div class="solutions-section solutionrMainv flex flex-col justify-center">
    <div class="flex flex-col w-11/12 mx-auto h-full relative z-10">
      <div
        class="h-full flex flex-col justify-center items-center relative z-10"
      >
        <div class="mobSolution py-12 pl-20 flex flex-col justify-center items-center">
          <h2 class="text-black text-3xl font-bold mt-10 customeBorderSafe">
            Safe & Reliable Solutions!
          </h2>
          <p class="text-black text-sm my-5">
            A Company Focused On Improving Your Future
          </p>
          <a class=" md:flex solutionMob items-center justify-center text-black md:px-5 py-1 ourServices  text-center" >Our Services</a>
        </div>
      </div>
      <div class="relative z-10 service-grid">
        <div class="service-note md:p-8 relative flex flex-col items-center rounded-xl boxesColor text-center"

          v-for="(ser, idx) in services"
          :key="idx"
          :style="{'background-color': ser.color, 'border-top-left-radius':ser.raduis, 'border-top-right-radius':ser.raduisLeft,'border-bottom-left-radius':ser.raduisBottom, 'border-bottom-right-radius':ser.raduisBottomLeft}"
        >
          <div class="flex justify-start items-start relative">
            <img :src="ser.icon" class="w-16 h-12 left-0 absolute bottom-20" :key="idx" />
            <h3 class="text-black font-bold text-xl mb-10 ml-3">{{ ser.title }}</h3>
          </div>
          <div v-html="ser.description" class="service-text text-black text-center"></div>
          <div v-html="ser.points" class="service-text text-black mt-20 "></div>
        </div>
      </div>
    </div>
    
  </div>
</template>
<script>
export default {
  components: {},
  data() {
    return {
      services: [
        {
          title: "Load Management Service",
          // raduis:'30px',
          // color: '#34487D',
          description:
            "With our user-friendly load management software, you get real-time location  updates, and a two-way messaging feature enabling you to stay  connected so you can schedule your next  load accordingly. - Save time and money.",
          icon: require("@/assets/icons/home/solution-1.svg"),
          points:
            '<p class="mt-3">  <span> &#10003; </span> Keep your load board organized</p> <p class="mt-3"> <span> &#10003; </span> Assign loads to drivers with ease</p> <p class="mt-3"> <span> &#10003; </span> Track schedules set by owner operators</p>',
        },
        {
          title: "Accounting",
          // raduisLeft:'30px',
          // color: '#34487D',
          description:
            "Get your profits and expense records in the same window - helping you make data-informed decisions - Easy transactions, better trucking.",
          icon: require("@/assets/icons/home/solution-2.svg"),
          points:
            '  <p class="mt-3"> <span> &#10003; </span> Monitor invoice age and payment status</p> <p class="mt-3"> <span> &#10003; </span> Automatically push load information to your factoring company</p>',
        },
        {
          title: "Organization Records",
          // color: '#34487D',
          // raduisBottom:'30px',
          description:
            "Sometimes you just want to come home and spend time with the family, but you cannot find a place to leave your truck. We provide local parking so you can focus on what matters to you.",
          icon: require("@/assets/icons/home/solution-3.svg"),
          points:
            ' <p class="mt-3">  <span> &#10003; </span> Keep track of all your dispatchers and drivers </p> <p class="mt-3"> <span> &#10003; </span> Setup with brokers / shippers with ease</p> <p class="mt-3">  <span> &#10003; </span> Keep driver documents in compliance  </p>',
        },
        {
          title: "Document Scanner",
          // raduisBottomLeft:'30px',
          // color: '#34487D',
          description:
            "Every e-commerce company needs a place to store their goods. We offer you with space to keep your products or goods in a secure place until you need to transfer them to another location. We offer storage space for any size business.",
          icon: require("@/assets/icons/home/solution-4.svg"),
          points:
            ' <p class="mt-3">  <span> &#10003; </span> Submit BoL’s in a timely manner with alerts </p> <p class="mt-3"> <span> &#10003; </span> Keep track of lumpers and detentions owed to you</p> <p class="mt-3">  <span> &#10003; </span> Scan your documents with ease  </p>',
        },
      ],
    };
  },
};
</script>
<style scroped>
.solutionrMain{
   background-image: url('../../assets/backgrounds/home/trustedBg.png');
  background-size: contain !important;
  background-repeat: no-repeat !important;
}
.boxesColor{
  background-image: linear-gradient(to bottom, #E4E4E4, #ffff);
}
/* .ourServices {
  border-radius: 15px;
  border: 2px solid #34487D;
} */
/* .customeBorderSafe{
  position: relative;
}
.customeBorderSafe::after{
  content: "";
  position: absolute;
  background-image: linear-gradient(120deg, rgba(255, 255, 255, 0), #34487D,rgba(255, 255, 255, 0)) ;
  border-radius: 35px;
  width: 100%;
  height: 5px;
  bottom: 0;
  left: 0;
  margin-top: 5px;
} */
.solutions-section {
  padding: 2rem 0;
  width: 100%;
  position: relative;
  min-height: 80vh;
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
}
.service-grid {
  width: 50%;
  margin: auto;
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-template-rows: 1fr 1fr;
  grid-row-gap: 20px;
  grid-column-gap: 20px;
  justify-items: stretch;
  align-items: stretch;
}
.service-text {
  font-size: 0.8rem;
}
.service-note {
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
}
@media screen and (max-width: 900px) {
  .service-grid {
    display: block;
    width: 100%;
  }
  .service-note {
    margin: 10px;
    padding: 15px;
    border-radius: 30px;
  }
  .mobSolution{
    display: block !important;
    padding: 0 !important;
  }
  .solutionMob{
    display: block;
  }
}
</style>
