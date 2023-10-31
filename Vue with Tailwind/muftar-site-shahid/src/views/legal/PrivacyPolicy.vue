<template>
    <section class="wrapper-alpha relative">
        <LandingNav/>
    </section>
    <section class="w-10/12 mx-auto" style="min-height:62vh">
        <div name="termly-embed" data-id="cf78a252-d139-4320-a2df-e2beb44ca242" data-type="iframe"></div>
    </section>
    <Footer />
</template>
<script>
import LandingNav from "@/components/landing/LandingNav.vue";
import Footer from "@/components/layout/sections/Footer.vue";
export default {
    name: 'PrivacyPolicy',
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
    