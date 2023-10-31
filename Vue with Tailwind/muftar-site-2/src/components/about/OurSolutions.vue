<template>
  <div class="solutions-section"  style="background:#0E1012">
    <div class="flex flex-col w-11/12 mx-auto h-full relative z-10">
      <!-- grid -->
      <div class="relative z-10 service-grid-about">
        <div
          class="service-note md:p-8 rounded-xl relative"
          style="padding: 15px"

          v-for="(ser, idx) in services"
          :key="idx"
        >
          <img
            :src="ser.icon"
            class="w-12 h-10"
            style="dispaly: block; margin: auto"
            :key="idx"
          />
          <h3 class="text-white font-bold text-xl mb-10  mt-10 customeBorderAbout">
            {{ ser.title }}
          </h3>
          <div
            v-html="ser.description"
            class="service-text text-white"
          ></div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
// import Partners from "./Partners.vue";
export default {
  components: {
    // Partners,
  },
  data() {
    return {
      services: [
        {
          title: "COMPANY HISTORY",
          description:
            "Muftar Digital was created to accelerate the world’s supply chain by applying technology to an industry otherwise left behind on the technological front. We seek to build solutions that aim to automate and streamline efficiency within the trucking experience. We aim to improve the lives of everyone in the industry.",
          icon: require("@/assets/icons/about/aboutIcon1.png"),
        },
        {
          title: "OUR MISSION",
          description:
            "Our mission is to grow the trucking industry by eliminating the hurdles of day-to-day trucking issues - enabling the trucking industry to focus on growth.",
          icon: require("@/assets/icons/about/aboutIcon2.png"),
        },
        {
          title: "COMPANY VISION",
          description:
            "We aim to provide maximum value at a minimum cost for the trucking industry.",
          icon: require("@/assets/icons/about/aboutIcon3.png"),
        },
        {
          title: "EXPANSION",
          description:
            "Muftar digital is open to all sorts of trucking companies from large multinational firms to small businesses - every freight firm can optimize their transport with ease.",
          icon: require("@/assets/icons/about/aboutIcon4.png"),
        },
      ],
    };
  },
};
</script>
<style scroped>
.customeBorderAbout{
  position: relative;
}
.customeBorderAbout::after{
  content: "";
  position: absolute;
  background-image: linear-gradient(120deg, #5D8AC7, #0E1012) ;
  border-radius: 35px;
  width: 30%;
  height: 5px;
  bottom: 0;
  left: 0;
  margin-top: 5px;
}
.solutions-section {
  padding: 2rem 0;
  width: 100%;
  position: relative;
  /* Set a specific height */
  min-height: 50vh;
  display: flex;
  align-items:center;
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
}
.service-grid-about {
  margin: auto;
  display: flex;
  flex-direction: column;
  width: 50%;
  grid-template-columns: 1fr 1fr;
  grid-template-rows: 1fr ;
  grid-column-gap: 10px;
  grid-row-gap: 10px;
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
  .service-grid-about {
    display: block;
    width: 95% !important;
  }
  .service-note {
    margin: 10px;
  }
}
</style>
