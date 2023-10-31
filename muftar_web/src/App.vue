<template>
  <div>
       <!-- <PriceCalculator /> -->
       <MuftarWidgetPage />
    <Footer />
  </div>
</template>

<script>

// import PriceCalculator from './views/pricing-calculator/PriceCalculator.vue'
import MuftarWidgetPage from './views/widget/MuftarWidgetPage.vue'
import Footer from './components/Layout/Footer.vue';

export default {
  components:{
    // PriceCalculator,
    Footer,
    MuftarWidgetPage
}
}
</script>