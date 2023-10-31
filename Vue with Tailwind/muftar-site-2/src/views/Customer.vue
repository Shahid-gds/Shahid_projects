<template>
    <Hero />
    <customersInfo/>

</template>

<script>
import Hero from "@/components/customer/Hero.vue";
import customersInfo from "@/components/customer/customersInfo.vue";

export default {
name:'Customer',
components: {
    Hero,
    customersInfo,

}
}
</script>

<style>

</style>
