<template>
  <div class="mt-5">
    <signature-pad :modelValue="signatureFile" @input="onInput" :width="500" :height="300" :customStyle="customStyle"
      :saveType="saveType" :saveOutput="saveOutput" ref="signaturePad">
    </signature-pad>

    <div class="mt-3">
      <a :href="src"  @click="saveSignature" class="bg-blue-400 text-white p-2 rounded">Save signature</a>
    </div>
  </div>
</template>

<script>
import { reactive, ref, toRefs } from "vue";
import SignaturePad from "vue3-signature-pad";
export default {
  name: "SignaturePad",
  components: {
    SignaturePad,
  },
  data() {
    return {
      download: '',
      src: ''
    }
  },
  setup() {
    const state = reactive({
      customStyle: { border: "black 3px solid" },
      saveType: "image/svg+xml",
      // saveType: "image/.png",
      saveOutput: "file",
    });
    const signatureDataURL = ref(null);
    const signatureFile = ref(null);
    const signaturePad = ref(null);

    const getSignaturePad = () => {
      if (!signaturePad.value) {
        throw new Error("No signature pad ref could be found");
      }
      return signaturePad.value;
    };

    const clearSignature = () => {
      getSignaturePad().clearSignature();
    };

    // const saveSignature = () => {
    //   getSignaturePad().saveSignature();
    //   const signature = getSignaturePad();
    //   console.log(signature.signatureData.src);

    //   this.download.push(signature.signatureData.src)
    //   return signature;
    // };
    const saveSignature = () => {
      const signature = getSignaturePad().saveSignature();
      if(!signature.isEmpty){
        console.log('signature',signature);
        var a = document.createElement("a"),
                url = URL.createObjectURL(signature.file);
        a.href = url;
        a.download = signature.file.name;
        document.body.appendChild(a);
        a.click();

      }
      return signature;
    };

    const onInput = (value) => {
      console.log("calling on input", { value: URL.createObjectURL(value) });
      if (!value) {
        signatureDataURL.value = null;
        signatureFile.value = null;
      } else if (value instanceof File) {
        signatureDataURL.value = null;
        signatureFile.value = value;
      } else {
        signatureDataURL.value = value;
        signatureFile.value = null;
      }
    };
    return {
      // state
      ...toRefs(state),
      signaturePad,
      signatureDataURL,
      signatureFile,
      // methods
      clearSignature,
      saveSignature,
      onInput,
    };
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
