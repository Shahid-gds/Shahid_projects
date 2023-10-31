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
                <input type="checkbox" class="w-4 h-4 cursor-pointer" v-model="checkboxOne" @click="hideOthers(1)"> 
                <label>Straight Truck</label>
              
            </div>
            <input v-if="checkboxOne" type="text" class="border-2 w-full p-2 px-6 bg-slate-50 rounded-md" placeholder="Straight Truck">
          <div class="mt-4 space-x-4"> 
            <input class="w-4 h-4 cursor-pointer" type="checkbox" v-model="checkboxTwo" @click="hideOthers(2)"> 
            <span>Tractor semi Trailer</span>
          
        </div>
            <input v-if="checkboxTwo" type="text" class="border-2 w-full p-2 px-6 bg-slate-50 rounded-md" placeholder="Tractor semi Trailer">
        </div>
        </div>
        <div class="w-full mt-5">
        <div class="mt-4">
            <div class="space-x-4">
                <input class="w-4 h-4 cursor-pointer" type="checkbox" v-model="checkboxThree" @click="hideOthers(3)">
                <span>Tractor and 2 Trailers</span>
              
            </div>
            <input v-if="checkboxThree" type="text" class="border-2 w-full p-2 px-6 bg-slate-50 rounded-md" placeholder="Tractor and 2 Trailers">
           <div class="mt-4 space-x-4">
            <input class="w-4 h-4 cursor-pointer" type="checkbox" v-model="checkboxFour" @click="hideOthers(4)"> 
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
                <input class="w-4 h-4 cursor-pointer" type="checkbox" v-model="yesCheckbox" @click="hideSecond(1)"> 
                <span>Yes</span>
                <input class="w-4 h-4 cursor-pointer" type="checkbox" v-model="noCheckbox" @click="hideSecond(2)"> 
                <span>No</span>
            </div>
        <textarea v-if="yesCheckbox" type="text" class="border-2 w-full p-2 px-6 bg-slate-50 rounded-md"> </textarea>
    </div>
    <div class="w-full">
        <p>Has any license, permit, or privilege ever been suspended or revoked? </p>
            <div class="mt-4 space-x-4">
                <input class="w-4 h-4 cursor-pointer" type="checkbox" v-model="yesCheckboxTwo" @click="hideSecondTwo(1)"> 
                <span>Yes</span>
                <input class="w-4 h-4 cursor-pointer" type="checkbox" v-model="noCheckboxTwo" @click="hideSecondTwo(2)"> 
                <span>No</span>
            </div>
        <textarea v-if="yesCheckboxTwo" type="text" class="border-2 w-full p-2 px-6 bg-slate-50 rounded-md"> </textarea>
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
                <input class="w-4 h-4 cursor-pointer" type="checkbox" v-model="yesEmpCheckbox" @click="hideOthersThird(1)"> 
                <span>Yes</span>
                <input class="w-4 h-4 cursor-pointer" type="checkbox" v-model="noEmpCheckbox" @click="hideOthersThird(2)"> 
                <span>No</span>
            </div>
        <textarea v-if="yesEmpCheckbox" type="text" class="border-2 w-full p-2 px-6 bg-slate-50 rounded-md"> </textarea>
    </div>
    <div class="w-full">
        <p>Was The job designated as a safety-sensitive function in any Department of Transportation-regulated  mode subject to alcohol and controlled substances testing as required by 49 CFR, part 40? </p>
            <div class="mt-4 space-x-4">
                <input class="w-4 h-4 cursor-pointer" type="checkbox" v-model="yesEmpCheckboxTwo" @click="hideOthersFourth(1)"> 
                <span>Yes</span>
                <input class="w-4 h-4 cursor-pointer" type="checkbox" v-model="noEmpCheckboxTwo" @click="hideOthersFourth(2)"> 
                <span>No</span>
            </div>
        <textarea v-if="yesEmpCheckboxTwo" type="text" class="border-2 w-full p-2 px-6 bg-slate-50 rounded-md"> </textarea>
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
            <input class="w-4 h-4 cursor-pointer" type="checkbox" v-model="yesGradCheckbox" @click="hideGradCheckbox(1)"> 
            <span>Yes</span>
            <input class="w-4 h-4 cursor-pointer" type="checkbox" v-model="noGradCheckbox" @click="hideGradCheckbox(2)"> 
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
import { ref,computed } from 'vue';

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
const checkboxTwo = ref(false)
const checkboxThree = ref(false)
const checkboxFour = ref(false)

function hideOthers(checkBoxNumber){
    if (checkBoxNumber === 1){
        checkboxTwo.value = false;
        checkboxThree.value = false;
        checkboxFour.value =false;
    }
    else if (checkBoxNumber === 2){
        checkboxOne.value = false;
        checkboxThree.value = false;
        checkboxFour.value = false
    }
    else if (checkBoxNumber === 3){
        checkboxOne.value = false;
        checkboxTwo.value = false;
        checkboxFour.value = false;
    }
    else if (checkBoxNumber === 4){
        checkboxOne.value = false;
        checkboxTwo.value = false;
        checkboxThree.value = false;
    }
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
const noCheckbox = ref(false)

function hideSecond(checkboxes){
    if (checkboxes === 1){
        noCheckbox.value = false
    }
    else if (checkboxes === 2){
        yesCheckbox.value = false
    }
}

const  yesCheckboxTwo = ref(false)
const noCheckboxTwo = ref(false)

function hideSecondTwo(checkboxesTwo){
    if(checkboxesTwo === 1){
        noCheckboxTwo.value = false
    }
    else if(checkboxesTwo === 2) {
        yesCheckboxTwo.value = false
    }
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
const noEmpCheckbox = ref(false)

function hideOthersThird(empCheckboxes){
    if(empCheckboxes === 1){
        noEmpCheckbox.value = false;
    }
    else if(empCheckboxes === 2){
        yesEmpCheckbox.value = false
    }
}

const yesEmpCheckboxTwo = ref(false)
const noEmpCheckboxTwo = ref(false)
function hideOthersFourth(empCheckboxesTwo){
    if(empCheckboxesTwo === 1){
        noEmpCheckboxTwo.value = false;
    }
    else if(empCheckboxesTwo === 2){
        yesEmpCheckboxTwo.value = false
    }
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
const noGradCheckbox = ref(false)

function hideGradCheckbox(gradCheckboxes){
    if(gradCheckboxes === 1){
        noGradCheckbox.value = false
    }
    else if(gradCheckboxes === 2){
        yesGradCheckbox.value = false
    }
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