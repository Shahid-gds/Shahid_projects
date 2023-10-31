<template>
    <div class="container mx-auto mt-10 p-6">
        <div class="xl:w-1/2 border-2 border-b-0 m-auto p-4 rounded-t-lg">
            <h1 class="text-center uppercase font-semibold text-xl border-b-2">Applicant information</h1>
       <div class="md:px-6 md:flex mt-5 md:space-x-5">
        <div class="w-full">
            <input type="text" class="border-2 w-full p-2 px-6 bg-slate-50 rounded-md" placeholder="First Name">
        </div>
        <div class="w-full">
            <input type="text" class="border-2 w-full p-2 px-10 bg-slate-50 rounded-md" placeholder="Middle Name">
        </div>
       </div>  
       <div class="md:px-6 md:flex mt-5 md:space-x-5">
        <div class="w-full">
            <input type="text" class="border-2 w-full p-2 px-6 bg-slate-50 rounded-md" placeholder="Last Name">
        </div>
        <div class="w-full">
            <input type="text" class="border-2 w-full p-2 px-6 bg-slate-50 rounded-md" placeholder="Date of Birth">
        </div>
       </div>  
       <div class="md:px-6 md:flex mt-5 md:space-x-5">
        <div class="w-full">
            <input type="text" class="border-2 w-full p-2 px-6 bg-slate-50 rounded-md" placeholder="Social Secority #">
        </div>
        <div class="w-full">
            <input type="text" class="border-2 w-full p-2 px-6 bg-slate-50 rounded-md" placeholder="Position Applying for">
        </div>
       </div>  
       <div class="md:px-6 md:flex mt-5 md:space-x-5">
        <div class="w-full">
            <input type="text" class="border-2 w-full p-2 px-6 bg-slate-50 rounded-md" placeholder="Date of availability">
        </div>
        <div class="w-full">
        </div>
       </div>  
        </div>
    <div class="xl:w-1/2 border-2 m-auto p-4">
            <h1 class="text-center uppercase font-semibold text-xl border-b-2">Emergency Contact</h1>
    <div v-for="(field, index) in contactFields" :key="index" class="border-b-2 py-8"> 
       <div class="md:px-6 md:flex mt-4 md:space-x-5">
        <div class="w-full">
            <input type="text" class="border-2 w-full p-2 px-6 bg-slate-50 rounded-md" placeholder="Name">
        </div>
        <div class="w-full">
            <input type="text" class="border-2 w-full p-2 px-6 bg-slate-50 rounded-md" placeholder="Relationship">
        </div>
       </div>
       <div class="md:px-6 md:flex mt-5 md:space-x-5">
        <div class="w-full">
            <input type="text" class="border-2 w-full p-2 px-6 bg-slate-50 rounded-md" placeholder="Phone Number">
        </div>
        <div class="w-full">
            <input type="text" class="border-2 w-full p-2 px-6 bg-slate-50 rounded-md" placeholder="Email">
        </div>
       </div>
    </div>
       <div class="flex mt-5 w-52 border-2 md:ml-6 p-2 md:px-6 bg-slate-50 rounded-md cursor-pointer" @click="addMoreContactFields">
        <div><img src="../assets/icons/beta/plus.svg" alt="" class="w-6"> </div>
        <div class="font-semibold">Add More Fields</div>
        </div>
    </div>

    <div class="xl:w-1/2 border-2 m-auto p-4 border-t-0">
            <h1 class="text-center uppercase font-semibold text-xl border-b-2">Residencies</h1>
            <div v-for="(field, index) in residenceFields" :key="index" class="border-b-2 py-8"> 
       <div class="md:px-6 md:flex mt-5 md:space-x-5">
        <div class="w-full">
            <input type="text" class="border-2 w-full p-2 px-6 bg-slate-50 rounded-md" placeholder="Street Address">
        </div>
        <div class="w-full">
            <input type="text" class="border-2 w-full p-2 px-6 bg-slate-50 rounded-md" placeholder="City">
        </div>
       </div>  
       <div class="md:px-6 md:flex mt-5 md:space-x-5">
        <div class="w-full">
            <input type="text" class="border-2 w-full p-2 px-6 bg-slate-50 rounded-md" placeholder="State">
        </div>
        <div class="w-full">
            <input type="text" class="border-2 w-full p-2 px-6 bg-slate-50 rounded-md" placeholder="Zip Code">
        </div>
       </div>   
       <div class="md:px-6 md:flex mt-5 md:space-x-5">
        <div class="w-full">
            <input type="text" class="border-2 w-full p-2 px-6 bg-slate-50 rounded-md" placeholder="# of years at address">
        </div>
        <div class="w-full">
        </div>
       </div>
       </div>
       <div class="flex mt-5 w-52 border-2 md:ml-6 p-2 md:px-6 bg-slate-50 rounded-md cursor-pointer" @click="addMoreResidenceFields">
        <div><img src="../assets/icons/beta/plus.svg" alt="" class="w-6"> </div>
        <div class="font-semibold">Add More Fields</div>
        </div>   
    </div>
    <div class="xl:w-1/2 border-2 m-auto p-4 border-t-0">
            <h1 class="text-center uppercase font-semibold text-xl border-b-2">LICENSE INFORMATION</h1>
       <div class="md:px-6 md:flex mt-5 md:space-x-5">
        <div class="w-full">
            <input type="text" class="border-2 w-full p-2 px-6 bg-slate-50 rounded-md" placeholder="State">
        </div>
        <div class="w-full">
            <input type="text" class="border-2 w-full p-2 px-6 bg-slate-50 rounded-md" placeholder="License Number">
        </div>
       </div>  
       <div class="md:px-6 md:flex mt-5 md:space-x-5">
        <div class="w-full">
            <input type="text" class="border-2 w-full p-2 px-6 bg-slate-50 rounded-md" placeholder="Type/Class">
        </div>
        <div class="w-full">
            <input type="text" class="border-2 w-full p-2 px-6 bg-slate-50 rounded-md" placeholder="Endorsement">
        </div>
       </div>   
       <div class="md:px-6 md:flex mt-5 md:space-x-5">
        <div class="w-full">
            <input type="text" class="border-2 w-full p-2 px-6 bg-slate-50 rounded-md" placeholder="Expiration Date">
        </div>
        <div class="w-full">
        </div>
       </div>   
    </div>
    <div class="xl:w-1/2 border-2 m-auto p-4 border-t-0">
            <h1 class="text-center uppercase font-semibold text-xl border-b-2">DRIVING EXPERIENCE</h1>
       <div class="md:px-6 md:flex mt-5 md:space-x-5">
        <div class="w-full">
            <div>
                <h1>Type of Equipment:</h1>
            </div>
        <div>
            <div class="space-x-4 mt-4">
                <input type="checkbox" class="w-4 h-4 cursor-pointer" @click="checkboxOneClick"> 
                <label>Straight Truck</label> 
            </div>
            <input v-if="checkboxOne" type="text" class="border-2 w-full p-2 px-6 bg-slate-50 rounded-md" placeholder="Straight Truck">
          <div class="mt-4 space-x-4"> 
            <input class="w-4 h-4 cursor-pointer" type="checkbox" @click="checkboxTwoClick"> 
            <span>Tractor semi Trailer</span>
        </div>
            <input v-if="checkboxTwo" type="text" class="border-2 w-full p-2 px-6 bg-slate-50 rounded-md" placeholder="Tractor semi Trailer">
        </div>
        </div>
        <div class="w-full mt-5">
        <div class="mt-4">
            <div class="space-x-4">
                <input class="w-4 h-4 cursor-pointer" type="checkbox" @click="checkboxThreeClick">
                <span>Tractor and 2 Trailers</span>
            </div>
            <input v-if="checkboxThree" type="text" class="border-2 w-full p-2 px-6 bg-slate-50 rounded-md" placeholder="Tractor and 2 Trailers">
           <div class="mt-4 space-x-4">
            <input class="w-4 h-4 cursor-pointer" type="checkbox" @click="checkboxFourClick"> 
            <span>Tractor and Trailer</span>
           </div>
            <input v-if="checkboxFour" type="text" class="border-2 w-full p-2 px-6 bg-slate-50 rounded-md" placeholder="Tractor and Trailer">
        </div>
        </div>
       </div>  
       <div class="md:px-6 md:flex mt-5 md:space-x-5">
        <div class="w-full">
            <input type="text" class="border-2 w-full p-2 px-6 bg-slate-50 rounded-md" placeholder="Date from">
        </div>
        <div class="w-full">
            <input type="text" class="border-2 w-full p-2 px-6 bg-slate-50 rounded-md" placeholder="Date to">
        </div>
       </div>  
       <div class="md:px-6 md:flex mt-5 md:space-x-5">
        <div class="w-full">
            <input type="text" class="border-2 w-full p-2 px-6 bg-slate-50 rounded-md" placeholder="Number of Miles">
        </div>
        <div class="w-full">
            <!-- <input type="text" class="border-2 w-full p-2 px-6 bg-slate-50 rounded-md" placeholder="Date to"> -->
        </div>
       </div>  
    </div>
    <div class="xl:w-1/2 border-2 m-auto p-4 border-t-0">
        <h1 class="text-center uppercase font-semibold text-xl border-b-2">ACCIDENT RECORD FOR THE PAST 3 YEARS</h1>
        <div v-for="(field, index) in accidentFields" :key="index" class="border-b-2 py-8"> 
   <div class="md:px-6 md:flex mt-5 md:space-x-5">
    <div class="w-full">
        <input type="text" class="border-2 w-full p-2 px-6 bg-slate-50 rounded-md" placeholder="Dates">
    </div>
    <div class="w-full">
        <input type="text" class="border-2 w-full p-2 px-6 bg-slate-50 rounded-md" placeholder="Nature of Accident">
    </div>
   </div>  
   <div class="md:px-6 md:flex mt-5 md:space-x-5">
    <div class="w-full">
        <input type="text" class="border-2 w-full p-2 px-6 bg-slate-50 rounded-md" placeholder="# Fatalities">
    </div>
    <div class="w-full">
        <input type="text" class="border-2 w-full p-2 px-6 bg-slate-50 rounded-md" placeholder="# of Injuries">
    </div>
   </div>   
   <div class="md:px-6 md:flex mt-5 md:space-x-5">
    <div class="w-full">
        <input type="text" class="border-2 w-full p-2 px-6 bg-slate-50 rounded-md" placeholder="Chemical spills">
    </div>
    <div class="w-full">
    </div>
   </div>
   </div>
   <div class="flex mt-5 w-52 border-2 md:ml-6 p-2 md:px-6 bg-slate-50 rounded-md cursor-pointer" @click="addMoreAccidentFields">
    <div><img src="../assets/icons/beta/plus.svg" alt="" class="w-6"> </div>
    <div class="font-semibold">Add More Fields</div>
    </div>    
</div> 
    <div class="xl:w-1/2 border-2 m-auto p-4 border-t-0">
        <h1 class="text-center uppercase font-semibold text-xl border-b-2">TRAFFIC CONVICTIONS AND FORFEITURES FOR THE PAST 3 YEARS <br>
             (OTHER THAN PARKING VIOLATIONS)</h1>
        <div v-for="(field, index) in trafficFields" :key="index" class="border-b-2 py-8"> 
   <div class="md:px-6 md:flex mt-5 md:space-x-5">
    <div class="w-full">
        <input type="text" class="border-2 w-full p-2 px-6 bg-slate-50 rounded-md" placeholder="Date convicted">
    </div>
    <div class="w-full">
        <input type="text" class="border-2 w-full p-2 px-6 bg-slate-50 rounded-md" placeholder="Violation">
    </div>
   </div>  
   <div class="md:px-6 md:flex mt-5 md:space-x-5">
    <div class="w-full">
        <input type="text" class="border-2 w-full p-2 px-6 bg-slate-50 rounded-md" placeholder="State of violation">
    </div>
    <div class="w-full">
        <input type="text" class="border-2 w-full p-2 px-6 bg-slate-50 rounded-md" placeholder="Penalty">
    </div>
   </div>   
   <div class="md:px-6 md:flex mt-5 md:space-x-5">
    
    <div class="w-full">
        <p>Have you ever been denied a license, permit, or privilege to operate a motor vehicle?</p>
            <div class="mt-4 space-x-4">
                <input class="w-4 h-4 cursor-pointer" type="checkbox" @click="yesClick"> 
                <span>Yes</span>
                <input class="w-4 h-4 cursor-pointer" type="checkbox"> 
                <span>No</span>
            </div>
        <textarea v-if="yesCheckbox" type="text" class="border-2 w-full p-2 px-6 bg-slate-50 rounded-md"> </textarea>
    </div>
    <div class="w-full">
        <p>Has any license, permit, or privilege ever been suspended or revoked? </p>
            <div class="mt-4 space-x-4">
                <input class="w-4 h-4 cursor-pointer" type="checkbox" @click="yesTwoClick"> 
                <span>Yes</span>
                <input class="w-4 h-4 cursor-pointer" type="checkbox"> 
                <span>No</span>
            </div>
        <textarea v-if="yesTwoCheckbox" type="text" class="border-2 w-full p-2 px-6 bg-slate-50 rounded-md"> </textarea>
    </div>

   </div>
   </div>
   <div class="flex mt-5 w-52 border-2 md:ml-6 p-2 md:px-6 bg-slate-50 rounded-md cursor-pointer" @click="addMoreTrafficFields">
    <div><img src="../assets/icons/beta/plus.svg" alt="" class="w-6"> </div>
    <div class="font-semibold">Add More Fields</div>
    </div>    
</div> 
    <div class="xl:w-1/2 border-2 m-auto p-4 border-t-0">
        <h1 class="text-center uppercase font-semibold text-xl border-b-2">EMPLOYMENT HISTORY</h1>
        <div v-for="(field, index) in empFields" :key="index" class="border-b-2 py-8"> 
   <div class="md:px-6 md:flex mt-5 md:space-x-5">
    <div class="w-full">
        <input type="text" class="border-2 w-full p-2 px-6 bg-slate-50 rounded-md" placeholder="Name">
    </div>
    <div class="w-full">
        <input type="text" class="border-2 w-full p-2 px-6 bg-slate-50 rounded-md" placeholder="Phone">
    </div>
   </div>  
   <div class="md:px-6 md:flex mt-5 md:space-x-5">
    <div class="w-full">
        <input type="text" class="border-2 w-full p-2 px-6 bg-slate-50 rounded-md" placeholder="Position Held">
    </div>
    <div class="w-full">
        <input type="text" class="border-2 w-full p-2 px-6 bg-slate-50 rounded-md" placeholder="From date">
    </div>
   </div>   
   <div class="md:px-6 md:flex mt-5 md:space-x-5">
    <div class="w-full">
        <input type="text" class="border-2 w-full p-2 px-6 bg-slate-50 rounded-md" placeholder="To date">
    </div>
    <div class="w-full">
        <input type="text" class="border-2 w-full p-2 px-6 bg-slate-50 rounded-md" placeholder="Reason for leaving">
    </div>
   </div>   
   <div class="md:px-6 md:flex mt-5 md:space-x-5">
    <div class="w-full">
        <input type="text" class="border-2 w-full p-2 px-6 bg-slate-50 rounded-md" placeholder="Salary">
    </div>
    <div class="w-full">
        <input type="text" class="border-2 w-full p-2 px-6 bg-slate-50 rounded-md" placeholder="Explain any gaps in employment">
    </div>
   </div>   
   <div class="md:px-6 md:flex mt-5 md:space-x-5">
    
    <div class="w-full">
        <p>While employed here, were you subject to the Federal Motor Carrier Safety Regulations?</p>
            <div class="mt-4 space-x-4">
                <input class="w-4 h-4 cursor-pointer" type="checkbox" @click="yesEmpClick"> 
                <span>Yes</span>
                <input class="w-4 h-4 cursor-pointer" type="checkbox"> 
                <span>No</span>
            </div>
        <textarea v-if="yesEmpCheckbox" type="text" class="border-2 w-full p-2 px-6 bg-slate-50 rounded-md"> </textarea>
    </div>
    <div class="w-full">
        <p>Was The job designated as a safety-sensitive function in any Department of Transportation-regulated  mode subject to alcohol and controlled substances testing as required by 49 CFR, part 40? </p>
            <div class="mt-4 space-x-4">
                <input class="w-4 h-4 cursor-pointer" type="checkbox" @click="yesEmpTwoClick"> 
                <span>Yes</span>
                <input class="w-4 h-4 cursor-pointer" type="checkbox"> 
                <span>No</span>
            </div>
        <textarea v-if="yesEmpTwoCheckbox" type="text" class="border-2 w-full p-2 px-6 bg-slate-50 rounded-md"> </textarea>
    </div>

   </div>
   </div>
   <div class="flex mt-5 w-52 border-2 md:ml-6 p-2 md:px-6 bg-slate-50 rounded-md cursor-pointer" @click="addMoreEmpFields">
    <div><img src="../assets/icons/beta/plus.svg" alt="" class="w-6"> </div>
    <div class="font-semibold">Add More Fields</div>
    </div>    
</div> 
    <div class="xl:w-1/2 border-2 rounded-b-lg m-auto p-4 border-t-0">
        <h1 class="text-center uppercase font-semibold text-xl border-b-2">Education</h1>
        <div v-for="(field, index) in gradFields" :key="index" class="border-b-2 py-8"> 
   <div class="md:px-6 md:flex mt-5 md:space-x-5">
    <div class="w-full">
        <input type="text" class="border-2 w-full p-2 px-6 bg-slate-50 rounded-md" placeholder="Education Level">
    </div>
    <div class="w-full">
        <input type="text" class="border-2 w-full p-2 px-6 bg-slate-50 rounded-md" placeholder="Name">
    </div>
   </div>  
   <div class="md:px-6 md:flex mt-5 md:space-x-5">
    <div class="w-full">
        <input type="text" class="border-2 w-full p-2 px-6 bg-slate-50 rounded-md" placeholder="Location">
    </div>
    <div class="w-full">
        <input type="text" class="border-2 w-full p-2 px-6 bg-slate-50 rounded-md" placeholder="Course of Study">
    </div>
   </div>
   <div class="md:px-6 md:flex mt-5 md:space-x-5">
    <div class="w-full">
        <p>Graduate? </p>
        <div class="mt-4 space-x-4">
            <input class="w-4 h-4 cursor-pointer" type="checkbox" @click="yesGradClick"> 
            <span>Yes</span>
            <input class="w-4 h-4 cursor-pointer" type="checkbox"> 
            <span>No</span>
        </div>
        <input v-if="yesGradCheckbox" type="text" class="border-2 w-full p-2 px-6 bg-slate-50 rounded-md" placeholder="Add Year">
    </div>
    <div class="w-full">
        <!-- <input type="text" class="border-2 w-full p-2 px-6 bg-slate-50 rounded-md" placeholder="Course of Study"> -->
    </div>
   </div>

       
   <div class="md:px-6 md:flex mt-5 md:space-x-5">
    <div class="w-full">
        <label for="">Details</label>
        <textarea type="text" class="border-2 w-full p-2 px-6 bg-slate-50 rounded-md" placeholder="Details"> </textarea>
    </div>
   </div>   
   
   <div class="md:px-6 md:flex mt-5 md:space-x-5">
    

   </div>
   </div>
   <div class="flex mt-5 w-52 border-2 md:ml-6 p-2 md:px-6 bg-slate-50 rounded-md cursor-pointer" @click="addMoreGradFields">
    <div><img src="../assets/icons/beta/plus.svg" alt="" class="w-6"> </div>
    <div class="font-semibold">Add More Fields</div>
    </div>    
</div> 
    </div>
</template>

<script setup>
import { ref } from 'vue';

const contactFields = ref(
    [
      {
        name: "",
        relationship: "",
        phone: "",
        email: ""
      },
//     //   {
//     //     name: "",
//     //     relationship: "",
//     //     phone: "",
//     //     email: ""
//     //   }
    ]
)


const addMoreContactFields=()=>{
contactFields.value.push({
        name: "",
        relationship: "",
        phone: "",
        email: ""
})

}

const residenceFields = ref([
      {  
        Street: "",
        City: "",
        State: "",
        Zip_Code: "",
        years_at_address: "" 
    }
])

const addMoreResidenceFields = () => {
    residenceFields.value.push({
        Street: "",
        City: "",
        State: "",
        Zip_Code: "",
        years_at_address: "" 
    })
}

const checkboxOne = ref(false)

const checkboxOneClick = () => {
    checkboxOne.value = !checkboxOne.value

}
const checkboxTwo = ref(false)

const checkboxTwoClick = () => {
    checkboxTwo.value = !checkboxTwo.value

}
const checkboxThree = ref(false)

const checkboxThreeClick = () => {
    checkboxThree.value = !checkboxThree.value

}
const checkboxFour = ref(false)

const checkboxFourClick = () => {
    checkboxFour.value = !checkboxFour.value

}
const accidentFields = ref([
      {  
        date: "",
        nature: "",
        facilities: "",
        injuries: "",
        spills: "" 
    }
])

const addMoreAccidentFields = () => {
    accidentFields.value.push({
        date: "",
        nature: "",
        facilities: "",
        injuries: "",
        spills: "" 
    })
}
const yesCheckbox = ref(false)

const yesClick = () => {
    yesCheckbox.value = !yesCheckbox.value

}
const yesTwoCheckbox = ref(false)

const yesTwoClick = () => {
    yesTwoCheckbox.value = !yesTwoCheckbox.value

}

const trafficFields = ref([
      {  
        date_convicted: "",
        violation: "",
        state_of_violation: "",
        penalty: "" 
    }
])

const addMoreTrafficFields = () => {
    trafficFields.value.push({
        date_convicted: "",
        violation: "",
        state_of_violation: "",
        penalty: "" 
    })
}
const yesEmpCheckbox = ref(false)

const yesEmpClick = () => {
    yesEmpCheckbox.value = !yesEmpCheckbox.value

}
const yesEmpTwoCheckbox = ref(false)

const yesEmpTwoClick = () => {
    yesEmpTwoCheckbox.value = !yesEmpTwoCheckbox.value

}

const empFields = ref([
      {  
        name: "",
        phone: "",
        post: "",
        from_date: "", 
        to_date: "", 
        salary: "", 
    }
])

const addMoreEmpFields = () => {
    empFields.value.push({
        name: "",
        phone: "",
        post: "",
        from_date: "", 
        to_date: "", 
        salary: "", 
    })
}
const yesGradCheckbox = ref(false)

const yesGradClick = () => {
    yesGradCheckbox.value = !yesGradCheckbox.value

}
const gradFields = ref([
      {  
        name: "",
        location: "",
        study: "",
        years: "", 
        graduate: "", 
    }
])

const addMoreGradFields = () => {
    gradFields.value.push({
        name: "",
        location: "",
        study: "",
        years: "", 
        graduate: "", 
    })
}
</script>


<style scoped>
</style>