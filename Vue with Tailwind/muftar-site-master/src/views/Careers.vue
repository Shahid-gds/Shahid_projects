<template>
  <Hero />
  <ApplyNowForm />
  <Footer />
</template>

<script>
// @ is an alias to /src
import Hero from '@/components/careers/Hero.vue'
import ApplyNowForm from '@/components/careers/ApplyNowForm.vue'

export default {
  name: 'careers',
  components: {
    Hero,
    ApplyNowForm
  }
}
</script>
