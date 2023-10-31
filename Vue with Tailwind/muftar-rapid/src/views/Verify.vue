<template>
  <div id="Verify">
    <router-link
      class=" logo-brand flex mx-auto items-center justify-center text-white text-2xl py-3"
      :to="{ name: 'About' }">
      <img src="@/assets/logo-qr.svg" />
    </router-link>

    <div class="bol-paper">
      <div class="h-full flex flex-col justify-center items-center">
        <h1 class="text-3xl md:text-5xl text-center w-10/12 mb-24">
          Welcome to Muftar Digital's Rapid BOL
        </h1>

        <p class="w-10/12 text-center text-lg md:text-2xl text-gray-500">
          You been invited by
          <span class="font-bold text-black">{{ inviter.name }} ({{ inviter.email }})</span>
          from
          <span class="font-bold text-blue-700">{{ inviter.organization }} (Carrier)</span>
        </p>

        <form class="text-center">
          <!-- <div class="security-code flex justify-evenly my-24">
            <input v-for="(vc, idx) in verification_code" :key="idx"
            class="code-insert border-4 border-blue-300 rounded-xl flex items-center justify-center text-center" pattern="[0-9]{1}" v-model.number="vc.value" @change="report(vc.value)"
            name="code" type="number" maxlength="1"/>
          </div> -->

          <div class="flex p-5 justify-center">
            <input class=" code-insert border-4 border-blue-300 rounded-xl flex items-center justify-center text-center" v-model="vc1" type="text" id="1" maxlength="1" v-on:keyup="move(event, '', '1', '2')"/>
            <input class="   code-insert   border-4 border-blue-300   rounded-xl   flex   items-center   justify-center   text-center " v-model="vc2" type="text" id="2" maxlength="1" v-on:keyup="move(event, '', '2', '3', '4')" />
            <input class="   code-insert   border-4 border-blue-300   rounded-xl   flex   items-center   justify-center   text-center " v-model="vc3" type="text" id="3" maxlength="1" v-on:keyup="move(event, '', '3', '4')"/>
            <input class="   code-insert   border-4 border-blue-300   rounded-xl   flex   items-center   justify-center   text-center " v-model="vc4" type="text" id="4" maxlength="1"/>
          </div>
          <div
            style=" font-size: 23px; color: red; height: 25px; width: 100%; text-align: center; margin: 25px 0px;
            "
          >
            <p v-if="show_verification_code_error"> Verification Code is not correct
            </p>
            <p class="text-gray-500">Hint for testing: 1234</p>
          </div>
          <p
            class=" text-sm md:text-xl text-gray-500 text-center w-9/12 mx-auto mb-10">
            A code has been sent to your email of
            <span class="font-bold text-black">****@example.com</span>. You will
            need that code so that we can verify the transaction and for you to
            sign the load.
            <span class="font-bold text-blue-700" >{{ inviter.organization }} (Carrier)</span>
            needs you to sign as a
            <span class="font-bold text-blue-700">Reciever</span>
          </p>

          <button
            class="enter-btn bg-blue-400 text-white"
            @click.prevent="gotoQRData()">
            Enter
          </button>
        </form>

        <a href="/about" class="mt-10 text-blue-400">What's this? Learn More</a>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "Verify",
  components: {},
  data() {
    return {
      inviter: {
        name: "Ty Cooper",
        email: "test@email.com",
        organization: "Skyline Logistics",
      },
      verification_code: [
        { value: null, idx: 0 },
        { value: null, idx: 1 },
        { value: null, idx: 2 },
        { value: null, idx: 3 },
      ],
      vc1: "",
      vc2: "",
      vc3: "",
      vc4: "",
      show_verification_code_error: false,
    };
  },
  methods: {
    changeTab(val) {
      this.current_tab = val;
    },
    report() {
      console.log(this.verification_code);
    },
    gotoQRData() {
      let self = this;
      this.show_verification_code_error = false;
      let verification_code = `${this.vc1}${this.vc2}${this.vc3}${this.vc4}`;
      let token_value = "1234";
      if (verification_code !== token_value) {
        this.show_verification_code_error = true;
        setTimeout(() => {
          self.show_verification_code_error = false;
        }, 3000);
        return;
      }
      this.$router.push({
        name: "Home",
        params: { load_id: "7alN9FafRII68XZ13BjH" },
      });
    },
    move(e, p, c, n) {
      const length = document.getElementById(c).value.length;
      const maxlength = document.getElementById(c).getAttribute("maxlength");
      if (length == maxlength) {
        if (n !== "") {
          document.getElementById(n).focus();
        }
      }
      if (e === "Backspace") {
        document.getElementById(p).focus();
      }

      // console.log(e)
    },
  },
};
</script>
<style scoped>
#Verify {
  background-color: var(--primary);
  min-height: 100vh;
  /* max-width: 900px;
    margin: 0 auto ; */
}
.bol-paper {
  width: 96%;
  min-height: 80vh;
  padding: 2rem;
  padding-top: 1rem;
  margin: auto;
  background-color: #fff;
  border-radius: 15px 15px 0 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}
.code-insert {
  width: 4.5rem;
  height: 4.5rem;
  font-size: 2rem;
  margin: 0 0.5rem;
  font-weight: bold;
  color: #304276;
  /* outline: none; */
  font-family: Avenir;
}
input::-webkit-outer-spin-button,
input::-webkit-inner-spin-button {
  -webkit-appearance: none;
  margin: 0;
}
.enter-btn {
  font-size: 1.6rem;
  padding: 1rem 5rem;
  border-radius: 10px;
}
.logo-brand {
  text-decoration: none;
}
.logo-brand img {
  width: 35%;
  max-width: 320px;
}
.secret-dot {
  background-color: #ddd;
  border-radius: 100%;
  width: 50%;
  height: 50%;
}
@media only screen and (min-width: 900px) {
  .code-insert {
    width: 12rem;
    height: 12rem;
    margin: 0 1rem;
  }
  .enter-btn {
    font-size: 2.5rem;
    padding: 1rem 5rem;
    border-radius: 10px;
  }
}
</style>
