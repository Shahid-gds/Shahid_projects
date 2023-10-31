<template>
    <section class="wrapper-alpha relative">
        <LandingNav/>
    </section>
    <section class="w-10/12 mx-auto" style="min-height:62vh">
        <div name="termly-embed" data-id="0033c993-c000-4b09-abeb-c89b62197fbb" data-type="iframe"></div>
    </section>
    <Footer />
</template>
<script>
import LandingNav from "@/components/landing/LandingNav.vue";
import Footer from "@/components/layout/sections/Footer.vue";
export default {
    name: 'CookiePolicy',
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
    