<template>
  <v-app>
    <v-main>
      <TypeForm/>
    </v-main>
  </v-app>
</template>

<script>
import TypeForm from './components/TypeForm.vue';

export default {
  name: 'App',

  components: {

    TypeForm
},

  data: () => ({
    //
  }),
}
</script>
