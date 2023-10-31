<template>
  <div class="w-11/12 mx-auto">
    <h3 class="text-xl mt-5 font-bold">Files</h3>
    <p class="text-sm italic text-gray-400">Upload rate confirmation here</p>
    <p v-if="is_file_not_pdf" class="text-red-400 italic lowercase text-sm">Please Select Only PDF</p>

    <!-- <div class="w-full h-2 bg-black relative">
      <div class="absolute bg-blue-400 h-2" :style="{ 'width': + progress + '%' }">

      </div>
    </div> -->
    <p class="text-yellow-600" v-if="progress">File upload progress: {{ progress }}%</p>
    <div class="flex items-center justify-between px-4 py-2 border-b border-gray-300"
      v-if="showFileList && dropzoneFile.size > 0 && !is_file_not_pdf">
      <a :href="dropzoneFile.link" class="text-blue-400 hover:underline" target="_blank">{{ dropzoneFile.name }}</a>
      <span class="text-gray-500 text-sm">{{ (dropzoneFile.size / 1024).toFixed(2) }} KB</span>
      <button @click="removeFile(dropzoneFile.name)" class="text-white px-4 py-2 rounded-md bg-red-600 ">Remove</button>
    </div>

    <p class="text-red-600">{{ feedback.text }}</p>
    <!-- <div v-if="processing">
      Please Wait...
    </div> -->
  </div>

  <!-- <div>
      <div v-for="(fi, idx) in files" :key="idx">
        {{ fi.name }} | {{ (fi.size/1024).toFixed(2) }} KB
      </div>
    </div>
     <ul class="mt-4">
        <li v-for="(file, index) in files.value" :key="index" class="flex items-center justify-between px-4 py-2 border-b border-gray-300">
          <span>{{ dropzoneFile.name }}</span>
          <button v-on:click="files.value.splice(index, 1)" class="text-red-600 underline">Remove</button>
        </li>
      </ul> -->

  <div @dragenter.prevent="toggleActive" @dragleave.prevent="toggleActive" @dragover.prevent @drop.prevent="handleDrop"
    v-if="!processing" :class="{ 'active-dropzone': activeDrop }"
    class="dropzone relative   bg-gray-100 sm:rounded-2xl mt-5 w-11/12 mx-auto">
    <div class="relative h-48 flex justify-center items-center px-6 py-4 rounded-md ">
      <span class="bg-blue-400 hover:bg-blue-500 p-4 shadow-xl  text-white relative  rounded-xl cursor-pointer ml-1">
        <div class="flex space-x-3">
          <Icon class="my-auto h-8 w-8" icon="ph:upload-simple-bold" />
          <p class="my-auto text-lg font-bold">
            Click or Drop the file
          </p>
        </div>

        <input id="dropzoneFile" type="file" accept=".pdf"
          class="w-full cursor-pointer absolute opacity-0 top-0 left-0 rounded-xl h-full" @change="selectedFile" />
      </span>

      <!-- </div> -->
      <!-- <input type="file" v-on:change="files.value = $event.target.files" class="hidden" /> -->
    </div>
  </div>
</template>
<script setup>
import { ref, defineEmits } from 'vue'
import { Icon } from '@iconify/vue'

import { getStorage, uploadBytes, getDownloadURL, deleteObject, uploadBytesResumable, ref as storageReference } from "firebase/storage";

const emit = defineEmits(['updateLoadInfo'])

const files = ref([])
const showFileList = ref(false)
const dropzoneFile = ref({ 'name': '', 'link': '' })
const activeDrop = ref(false)
const feedback = ({ 'text': '', 'status': '' })
const is_file_not_pdf = ref(false);
const processing = ref(false)
const progress = ref(null)




const handleDrop = (event) => {

  console.log(event)
  is_file_not_pdf.value = false;
  // event.preventDefault()
  dropzoneFile.value = event.dataTransfer.files[0]

  if (dropzoneFile.value.type === 'application/pdf') {
    processing.value = true
    uploadGallery(dropzoneFile.value)
  } else {
    is_file_not_pdf.value = true;
    console.log('Please Select PDF file')
  }
  // files.value = [...files.value, ...event.dataTransfer.files]
  toggleActive()
  activeDrop.value = false
}
const selectedFile = (event) => {
  is_file_not_pdf.value = false;
  // event.preventDefault()
  dropzoneFile.value = event.target.files[0]
  // dropzoneFile.value = document.querySelector('.dropzoneFile').files[0]
  if (dropzoneFile.value.type === 'application/pdf') {
    processing.value = true
    uploadGallery(dropzoneFile.value)
  } else {
    is_file_not_pdf.value = true;
    console.log('FILE IS NOT PDF');
  }

  // files.value = [...files.value, ...event.dataTransfer.files]
  // console.log(dropzoneFile.value)
  activeDrop.value = false
}
const removeFile = (file) => {
  const storage = getStorage();
  const fileRef = storageReference(storage, '/rapid/_temporary_rate_confs/' + file);
  // Delete the file
  deleteObject(fileRef).then(() => {
    // File deleted successfully
    console.log(file, ' Successfully Deleted...')
  }).catch((error) => {
    console.log(error);
    // Uh-oh, an error occurred!
  });
  console.log(file);
  dropzoneFile.value = ""
}

const toggleActive = () => {
  activeDrop.value = !activeDrop.value
}


// // Method to open the file dialog
// function openFileDialog() {
//   fileInput.value.click()
// }

// // Method to upload the selected file to Firebase Storage
// function uploadFile(event) {
//   const file = event.target.files[0]

//   // Create a storage reference
//   const storageRef = storage().ref()

//   // Create a reference to the file in Firebase Storage
//   const fileRef = storageRef.child(file.name)

//   // Upload the file to Firebase Storage
//   fileRef.put(file).then(() => {
//     console.log('File uploaded successfully')
//   }).catch((error) => {
//     console.error(error)
//   })

const uploadGallery = (file) => {
  processing.value = true
  console.log(file)
  if (file.size > 2000000) {
    feedback.value.text = 'Max file size is 2MB'
    processing.value = false
  } else {
    // console.log(event.target.files[0])
    // const file = event.dataTransfer.files[0]
    const storage = getStorage();
    const storageRef = storageReference(storage, '/rapid/_temporary_rate_confs/' + file.name)
    const uploadTask = uploadBytesResumable(storageRef, file);

    uploadTask.on('state_changed', (snapshot) => {
      // Get task progress.value, including the number of bytes uploaded and the total number of bytes to be uploaded
      progress.value = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
      console.log('Upload is ' + progress.value + '% done');
    },
      (error) => {
        processing.value = false
        // A full list of error codes is available at
        // https://firebase.google.com/docs/storage/web/handle-errors
        switch (error.code) {
          case 'storage/unauthorized':
            // User doesn't have permission to access the object
            break;
          case 'storage/canceled':
            // User canceled the upload
            break;

          // ...

          case 'storage/unknown':
            // Unknown error occurred, inspect error.serverResponse
            break;
        }
      },
      () => {
        // Upload completed successfully, now we can get the download URL
        getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
          dropzoneFile.value.link = downloadURL
          console.log('File available at', downloadURL);
          emit('updateLoadPDF', downloadURL)
          showFileList.value = true
          processing.value = false
          progress.value = null
        });
      }
    );
  }
}
</script>
<style scoped>
.active-dropzone {
  color: #fff;
  background-color: #ddd;
  border-color: #94c4ff;
}

.dropzone {
  transition: .5s;
}
</style>