<template>
  <div
    class="full-section"
    :style="{
      'background-image':
        'url(' + require('@/assets/backgrounds/quote.png') + ')',
    }"
  >
    <div class="overlay"></div>
    <div class="overlay"></div>
    <div class="req-quote-group flex flex-col md:flex-row relative z-10">
      <!-- LEFT COL -->
      <div
        class="
          md:w-1/2
          h-full
          flex flex-col
          justify-center
          items-center
          relative
          z-10
          p-3
        "
      >
        <div class="my-32">
          <p class="text-white text-sm text-white">
            Flexible, Organized & Accelerated Solutions
          </p>

          <h2 class="text-white text-3xl font-bold my-10">
            No Rigid Services, Just Solutions!
          </h2>

          <button class="glassmorph text-white w-52 py-3">Our Services</button>
        </div>
      </div>

      <!-- RIGHT COL -->
      <div
        class="w-10/12 md:w-1/2 h-full flex items-center justify-center mx-auto"
      >
        <!-- form -->
        <form
          class="
            quote-form
            glassmorph
            p-10
            min-w-96
            rounded-xl
            shadow-lg
            w-9/12
          "
        >
          <div class="flex mb-6">
            <h1
              class="text-center text-2xl mr-6 text-white font-bold font-sans"
            >
              Request A Quote
            </h1>
            <img src="@/assets/icons/home/mail.svg" class="w-8" />
          </div>
          <div class="my-2">
            <input
              class="
                text-white
                placeholder:text-gray-50
                w-full
                bg-gray-300
                px-4
                py-2
                rounded-lg
                focus:outline-none
              "
              type="text"
              name="name"
              v-model="contact.username"
              placeholder="Enter Name"
            />
          </div>
          <div class="my-2">
            <input
              class="
                text-white
                placeholder:text-gray-50
                w-full
                bg-gray-300
                px-4
                py-2
                rounded-lg
                focus:outline-none
              "
              type="text"
              name="email"
              v-model="contact.email"
              placeholder="Enter Email"
            />
          </div>
          <div class="my-2">
            <input
              class="
                text-white
                placeholder:text-gray-50
                w-full
                bg-gray-300
                px-4
                py-2
                rounded-lg
                focus:outline-none
              "
              type="text"
              name="subject"
              v-model="contact.subject"
              placeholder="Enter Subject"
            />
          </div>
          <div class="my-2">
            <textarea
              class="
                text-white
                placeholder:text-gray-50
                w-full
                bg-gray-300
                px-4
                py-2
                resize-none
                rounded-lg
                focus:outline-none
              "
              type="text"
              name="text"
              v-model="contact.message"
              placeholder="Message"
            >
            </textarea>
          </div>
          <button
            @click.prevent="sendContactForm()"
            class="
              glassmorph
              w-52
              mt-6
              rounded-lg
              px-4
              py-2
              text-lg text-white
              tracking-wide
              font-semibold font-sans
            "
          >
            Sumbit
          </button>
        </form>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  components: {},
  data() {
    return {
      contact: {
        name: "",
        email: "",
        subject: "",
        message: "",
      },
    };
  },
  methods: {
    sendContactForm() {
      console.log(this.contact);
    },
  },
};
</script>
<style scroped>
.full-section {
  width: 100%;
  min-height: 60vh;
  padding-bottom: 5rem;
  overflow: hidden;
  position: relative;
  /* background-attachment: fixed; */
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
}
.req-quote-group {
  width: 100%;
  height: 100%;
}
.quote-form {
  width: 50rem;
}
@media screen and (max-width: 900px) {
  .full-section {
    min-height: 80vh;
  }
  form.quote-form.glassmorph.p-10.min-w-96.rounded-xl.shadow-lg.w-9\/12 {
    width: 100%;
  }
}
</style>
