<template>
    <section class="wrapper-alpha relative">
        <LandingNav/>
    </section>
    <section class="flex flex-col items-center justify-center w-10/12 mx-auto" style="min-height:62vh">
        <h1 class="font-bold" style="font-size: 4rem;"> NOT FOUND</h1>
        <a href="/" class="underline text-xl mt-5" style="color: 2997e1;">Return Home</a>
    </section>
    <Footer />
</template>
<script>
import LandingNav from "@/components/landing/LandingNav.vue";
import Footer from "@/components/layout/sections/Footer.vue";
export default {
    name: 'ReturnPolicy',
    components: {
        LandingNav, 
        Footer
    },
};
</script>
<style scoped>
.wrapper-alpha{
    background-color: #3A59A7;
    width:100%;
    min-height: 5rem;
}
</style>
    