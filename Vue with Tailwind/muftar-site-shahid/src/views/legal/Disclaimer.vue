<template>
    <section class="wrapper-alpha relative">
        <LandingNav/>
    </section>
    <section class="w-10/12 mx-auto" style="min-height:62vh">
        <div name="termly-embed" data-id="68dcaff9-fc1f-40f2-a0d6-42cb90f752b2" data-type="iframe"></div>
    </section>
    <Footer />
</template>
<script>
import LandingNav from "@/components/landing/LandingNav.vue";
import Footer from "@/components/layout/sections/Footer.vue";
export default {
    name: 'Disclaimer',
    components: {
        LandingNav, 
        Footer
    },
};
</script>
<style scoped>
.wrapper-alpha{
    background-color: #4460A6;
    width:100%;
}
</style>
    