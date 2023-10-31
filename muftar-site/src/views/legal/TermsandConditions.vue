<template>
    <section class="wrapper-alpha relative">
        <LandingNav/>
    </section>
    <section class="w-10/12 mx-auto" style="min-height:62vh">
        <div name="termly-embed" data-id="ed14699d-7f2d-43f3-b9b5-697de12c966e" data-type="iframe"></div>
    </section>
    <Footer />
</template>
<script>
import LandingNav from "@/components/landing/LandingNav.vue";
import Footer from "@/components/layout/sections/Footer.vue";
export default {
    name: 'TermsandConditions',
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
    