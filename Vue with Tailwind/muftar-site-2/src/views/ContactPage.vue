<template>
  <Hero />
  <ContactForm />
  <!-- <MapSection /> -->
</template>

<script>
import Hero from "@/components/contact/Hero.vue";
import ContactForm from "@/components/contact/ContactForm.vue";
// import MapSection from "@/components/contact/MapSection.vue";

export default {
  components: {
    Hero,
     ContactForm,
    //  MapSection,
      },
  name: "Contact",
};
</script>

<style>
</style>
