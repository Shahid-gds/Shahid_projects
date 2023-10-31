<template>
  <Hero />
  <!-- <DirectionMatters /> -->
  <AppDownload />
  <!-- <Carrier /> -->
  <WhoWeAre />
  <OurSolutions />
  <JustSolution />
  <!-- <RequestQuote /> -->
  <!-- <Partners /> -->

</template>

<script>
// @ is an alias to /src
import Hero from "@/components/home/Hero.vue";
// import DirectionMatters from "@/components/home/DirectionMatters.vue";
import AppDownload from "@/components/home/AppDownload.vue";
// import Carrier from "@/components/home/Carrier.vue";
import OurSolutions from "@/components/home/OurSolutions.vue";
import JustSolution from "@/components/home/JustSolution.vue";
import WhoWeAre from "@/components/home/WhoWeAre.vue";
// import RequestQuote from "@/components/home/RequestQuote.vue";
// import Partners from "@/components/home/Partners.vue";

export default {
  name: "Home",
  components: {
    Hero,
    // DirectionMatters,
    AppDownload,
    // Carrier,
    OurSolutions,
    JustSolution,
    WhoWeAre
    // RequestQuote,
    // Partners,

},
};
</script>
