<template>
    <div>
    <div  v-if="processing" class="flex flex-col items-center justify-center">
        <img src="@/assets/media/apply/driver-application.gif" class="w-8/12 mx-auto" v-if="loading"/>
        <img src="@/assets/media/apply/driver-application-success.gif" class="w-8/12 mx-auto" v-else/>

        <h3 class="text-2xl text-gray-400 italic" v-if="loading" >Verifying your input. Please wait</h3>
        <h3 class="text-2xl text-gray-400 italic" v-else>Submitting your document! Please wait</h3>
        <!-- <p>Please wait</p> -->
    </div>
  <div class="container mx-auto mt-10 p-6"  v-else>
      <div class="xl:w-1/2 border-2 border-b-0 m-auto p-4 rounded-t-lg">
          <h1 class="text-center uppercase font-semibold text-xl border-b-2">Applicant information</h1>
     <div class="md:px-6 md:flex mt-5 md:space-x-5">
      <div class="w-full">
          <input type="text" class="border-2 w-full p-2 px-6 bg-slate-50 rounded-md"
           v-model="userdata.applicant_information.fname" placeholder="First Name">
      </div>
      <div class="w-full">
          <input type="text" class="border-2 w-full p-2 px-6 bg-slate-50 rounded-md" 
          v-model="userdata.applicant_information.midname" placeholder="Middle Name">
      </div>
     </div>  
     <div class="md:px-6 md:flex mt-5 md:space-x-5">
      <div class="w-full">
          <input type="text" class="border-2 w-full p-2 px-6 bg-slate-50 rounded-md" 
          v-model="userdata.applicant_information.lname" placeholder="Last Name">
      </div>
      <div class="w-full">
          <input type="text" class="border-2 w-full p-2 px-6 bg-slate-50 rounded-md" 
          v-model="userdata.applicant_information.dob" placeholder="Date of Birth">
      </div>
     </div>  
     <div class="md:px-6 md:flex mt-5 md:space-x-5">
      <div class="w-full">
          <input type="text" class="border-2 w-full p-2 px-6 bg-slate-50 rounded-md" 
          v-model="userdata.applicant_information.ssn"  placeholder="Social Security #">
      </div>
      <div class="w-full">
          <input type="text" class="border-2 w-full p-2 px-6 bg-slate-50 rounded-md" 
          v-model="userdata.applicant_information.position" placeholder="Position Applying for">
      </div>
     </div>  
     <div class="md:px-6 md:flex mt-5 md:space-x-5">
      <div class="w-full">
          <input type="text" class="border-2 w-full p-2 px-6 bg-slate-50 rounded-md" 
          v-model="userdata.applicant_information.date_available" placeholder="Date of Availability">
      </div>
      <div class="w-full">
      </div>
     </div>  
      </div>
  <div class="xl:w-1/2 border-2 m-auto p-4">
          <h1 class="text-center uppercase font-semibold text-xl border-b-2">Emergency Contact</h1>
  <div v-for="(item, index) in userdata.emergency_contacts" :key="index" class="border-b-2 py-8"> 
     <div class="md:px-6 md:flex mt-4 md:space-x-5">
      <div class="w-full">
          <input type="text" class="border-2 w-full p-2 px-6 bg-slate-50 rounded-md" 
          v-model="item.name" placeholder="Name">
      </div>
      <div class="w-full">
          <input type="text" class="border-2 w-full p-2 px-6 bg-slate-50 rounded-md" 
          v-model="item.relationship" placeholder="Relationship">
      </div>
     </div>
     <div class="md:px-6 md:flex mt-5 md:space-x-5">
      <div class="w-full">
          <input type="text" class="border-2 w-full p-2 px-6 bg-slate-50 rounded-md" 
          v-model="item.phone" placeholder="Phone Number">
      </div>
      <div class="w-full">
          <input type="text" class="border-2 w-full p-2 px-6 bg-slate-50 rounded-md" 
          v-model="item.email" placeholder="Email">
      </div>
     </div>
  </div>
     <div class="flex mt-5 w-52 border-2 md:ml-6 p-2 md:px-6 bg-slate-50 rounded-md cursor-pointer" @click="addMoreContactFields">
      <div><img src="@/assets/icons/beta/plus.svg" alt="" class="w-6"> </div>
      <div class="font-semibold">Add More Fields</div>
      </div>
  </div>

  <div class="xl:w-1/2 border-2 m-auto p-4 border-t-0">
          <h1 class="text-center uppercase font-semibold text-xl border-b-2">Residencies</h1>
          <div v-for="(item, index) in  userdata.addresses" :key="index" class="border-b-2 py-8"> 
     <div class="md:px-6 md:flex mt-5 md:space-x-5">
      <div class="w-full">
          <input type="text" class="border-2 w-full p-2 px-6 bg-slate-50 rounded-md" 
          v-model="item.line1" placeholder="Street Address">
      </div>
      <div class="w-full">
          <input type="text" class="border-2 w-full p-2 px-6 bg-slate-50 rounded-md" 
          v-model="item.city" placeholder="City">
      </div>
     </div>  
     <div class="md:px-6 md:flex mt-5 md:space-x-5">
      <div class="w-full">
          <input type="text" class="border-2 w-full p-2 px-6 bg-slate-50 rounded-md" 
          v-model="item.state" placeholder="State">
      </div>
      <div class="w-full">
          <input type="text" class="border-2 w-full p-2 px-6 bg-slate-50 rounded-md" 
          v-model="item.zip" placeholder="Zip Code">
      </div>
     </div>   
     <div class="md:px-6 md:flex mt-5 md:space-x-5">
      <div class="w-full">
          <input type="text" class="border-2 w-full p-2 px-6 bg-slate-50 rounded-md" 
          v-model="item.years_of_residency" placeholder="# of years at address">
      </div>
      <div class="w-full">
      </div>
     </div>
     </div>
     <div class="flex mt-5 w-52 border-2 md:ml-6 p-2 md:px-6 bg-slate-50 rounded-md cursor-pointer" @click="addAddress()">
      <div><img src="@/assets/icons/beta/plus.svg" alt="" class="w-6"> </div>
      <div class="font-semibold">Add More Fields</div>
      </div>   
  </div>
  <div class="xl:w-1/2 border-2 m-auto p-4 border-t-0">
          <h1 class="text-center uppercase font-semibold text-xl border-b-2">LICENSE INFORMATION</h1>
     <div class="md:px-6 md:flex mt-5 md:space-x-5">
      <div class="w-full">
          <input type="text" class="border-2 w-full p-2 px-6 bg-slate-50 rounded-md" 
          v-model="userdata.license.state" placeholder="State">
      </div>
      <div class="w-full">
          <input type="text" class="border-2 w-full p-2 px-6 bg-slate-50 rounded-md" 
          v-model="userdata.license.number" placeholder="License Number">
      </div>
     </div>  
     <div class="md:px-6 md:flex mt-5 md:space-x-5">
      <div class="w-full">
          <input type="text" class="border-2 w-full p-2 px-6 bg-slate-50 rounded-md" 
          v-model="userdata.license.class_type" placeholder="Type/Class">
      </div>
      <div class="w-full">
          <input type="text" class="border-2 w-full p-2 px-6 bg-slate-50 rounded-md" 
          v-model="userdata.license.endorsement" placeholder="Endorsement">
      </div>
     </div>   
     <div class="md:px-6 md:flex mt-5 md:space-x-5">
      <div class="w-full">
          <input type="text" class="border-2 w-full p-2 px-6 bg-slate-50 rounded-md" 
          v-model="userdata.license.expiration_date" placeholder="Expiration Date">
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
          <input v-if="checkboxOne" type="text" class="border-2 w-full p-2 px-6 bg-slate-50 rounded-md" 
          v-model="userdata.experience.description" placeholder="Straight Truck">
        <div class="mt-4 space-x-4"> 
          <input class="w-4 h-4 cursor-pointer" type="checkbox" @click="checkboxTwoClick"> 
          <span>Tractor semi Trailer</span>
        
      </div>
          <input v-if="checkboxTwo" type="text" class="border-2 w-full p-2 px-6 bg-slate-50 rounded-md" 
          v-model="userdata.experience.description" placeholder="Tractor semi Trailer">
      </div>
      </div>
      <div class="w-full mt-5">
      <div class="mt-4">
          <div class="space-x-4">
              <input class="w-4 h-4 cursor-pointer" type="checkbox" @click="checkboxThreeClick">
              <span>Tractor and 2 Trailers</span>
            
          </div>
          <input v-if="checkboxThree" type="text" class="border-2 w-full p-2 px-6 bg-slate-50 rounded-md" 
          v-model="userdata.experience.description" placeholder="Tractor and 2 Trailers">
         <div class="mt-4 space-x-4">
          <input class="w-4 h-4 cursor-pointer" type="checkbox" @click="checkboxFourClick"> 
          <span>Tractor and Trailer</span>
       
         </div>
          <input v-if="checkboxFour" type="text" class="border-2 w-full p-2 px-6 bg-slate-50 rounded-md" 
          v-model="userdata.experience.description" placeholder="Tractor and Trailer">
      </div>
      </div>
     </div>  
     <div class="md:px-6 md:flex mt-5 md:space-x-5">
      <div class="w-full">
          <input type="text" class="border-2 w-full p-2 px-6 bg-slate-50 rounded-md" 
          v-model="userdata.experience.start_date" placeholder="Date from">
      </div>
      <div class="w-full">
          <input type="text" class="border-2 w-full p-2 px-6 bg-slate-50 rounded-md" 
          v-model="userdata.experience.end_date" placeholder="Date to">
      </div>
     </div>  
     <div class="md:px-6 md:flex mt-5 md:space-x-5">
      <div class="w-full">
          <input type="text" class="border-2 w-full p-2 px-6 bg-slate-50 rounded-md" 
          v-model="userdata.experience.milage" placeholder="Number of Miles">
      </div>
      <div class="w-full">
          <!-- <input type="text" class="border-2 w-full p-2 px-6 bg-slate-50 rounded-md" placeholder="Date to"> -->
      </div>
     </div>  
  </div>
  <div class="xl:w-1/2 border-2 m-auto p-4 border-t-0">
      <h1 class="text-center uppercase font-semibold text-xl border-b-2">ACCIDENT RECORD FOR THE PAST 3 YEARS</h1>
      <div v-for="(item, index) in userdata.accidents" :key="index" class="border-b-2 py-8"> 
 <div class="md:px-6 md:flex mt-5 md:space-x-5">
  <div class="w-full">
      <input type="text" class="border-2 w-full p-2 px-6 bg-slate-50 rounded-md" 
      v-model="item.date"  placeholder="Dates">
  </div>
  <div class="w-full">
      <input type="text" class="border-2 w-full p-2 px-6 bg-slate-50 rounded-md" 
      v-model="item.description"  placeholder="Nature of Accident">
  </div>
 </div>  
 <div class="md:px-6 md:flex mt-5 md:space-x-5">
  <div class="w-full">
      <input type="text" class="border-2 w-full p-2 px-6 bg-slate-50 rounded-md" 
      v-model="item.fatalities"  placeholder="# Fatalities">
  </div>
  <div class="w-full">
      <input type="text" class="border-2 w-full p-2 px-6 bg-slate-50 rounded-md" 
      v-model="item.injuries" placeholder="# of Injuries">
  </div>
 </div>   
 <div class="md:px-6 md:flex mt-5 md:space-x-5">
  <div class="w-full">
      <input type="text" class="border-2 w-full p-2 px-6 bg-slate-50 rounded-md"
      v-model="item.chemical_spills"  placeholder="Chemical spills">
  </div>
  <div class="w-full">
  </div>
 </div>
 </div>
 <div class="flex mt-5 w-52 border-2 md:ml-6 p-2 md:px-6 bg-slate-50 rounded-md cursor-pointer" @click="addAccident()">
  <div><img src="@/assets/icons/beta/plus.svg" alt="" class="w-6"> </div>
  <div class="font-semibold">Add More Fields</div>
  </div>    
</div> 
  <div class="xl:w-1/2 border-2 m-auto p-4 border-t-0">
      <h1 class="text-center uppercase font-semibold text-xl border-b-2">TRAFFIC CONVICTIONS AND FORFEITURES FOR THE PAST 3 YEARS <br>
           (OTHER THAN PARKING VIOLATIONS)</h1>
      <div v-for="(item, index) in userdata.criminal.convictions" :key="index" class="border-b-2 py-8"> 
 <div class="md:px-6 md:flex mt-5 md:space-x-5">
  <div class="w-full">
      <input type="text" class="border-2 w-full p-2 px-6 bg-slate-50 rounded-md" 
      v-model="item.date" placeholder="Date convicted">
  </div>
  <div class="w-full">
      <input type="text" class="border-2 w-full p-2 px-6 bg-slate-50 rounded-md" 
      v-model="item.violation" placeholder="Violation">
  </div>
 </div>  
 <div class="md:px-6 md:flex mt-5 md:space-x-5">
  <div class="w-full">
      <input type="text" class="border-2 w-full p-2 px-6 bg-slate-50 rounded-md" 
      v-model="item.state" placeholder="State of violation">
  </div>
  <div class="w-full">
      <input type="text" class="border-2 w-full p-2 px-6 bg-slate-50 rounded-md" 
      v-model="item.penalty" placeholder="Penalty">
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
 <div class="flex mt-5 w-52 border-2 md:ml-6 p-2 md:px-6 bg-slate-50 rounded-md cursor-pointer" @click="addCriminalHistory()">
  <div><img src="@/assets/icons/beta/plus.svg" alt="" class="w-6"> </div>
  <div class="font-semibold">Add More Fields</div>
  </div>    
</div> 
  <div class="xl:w-1/2 border-2 m-auto p-4 border-t-0">
      <h1 class="text-center uppercase font-semibold text-xl border-b-2">EMPLOYMENT HISTORY</h1>
      <div v-for="(item, index) in userdata.prior_employment.history" :key="index" class="border-b-2 py-8"> 
 <div class="md:px-6 md:flex mt-5 md:space-x-5">
  <div class="w-full">
      <input type="text" class="border-2 w-full p-2 px-6 bg-slate-50 rounded-md" 
      v-model="item.employer" placeholder="Name">
  </div>
  <div class="w-full">
      <input type="text" class="border-2 w-full p-2 px-6 bg-slate-50 rounded-md" 
      v-model="item.phone" placeholder="Phone">
  </div>
 </div>  
 <div class="md:px-6 md:flex mt-5 md:space-x-5">
  <div class="w-full">
      <input type="text" class="border-2 w-full p-2 px-6 bg-slate-50 rounded-md" 
      v-model="item.position" placeholder="Position Held">
  </div>
  <div class="w-full">
      <input type="text" class="border-2 w-full p-2 px-6 bg-slate-50 rounded-md" 
      v-model="item.start_date" placeholder="From date">
  </div>
 </div>   
 <div class="md:px-6 md:flex mt-5 md:space-x-5">
  <div class="w-full">
      <input type="text" class="border-2 w-full p-2 px-6 bg-slate-50 rounded-md" 
      v-model="item.end_date" placeholder="To date">
  </div>
  <div class="w-full">
      <input type="text" class="border-2 w-full p-2 px-6 bg-slate-50 rounded-md" 
      v-model="item.departure_reason" placeholder="Reason for leaving">
  </div>
 </div>   
 <div class="md:px-6 md:flex mt-5 md:space-x-5">
  <div class="w-full">
      <input type="text" class="border-2 w-full p-2 px-6 bg-slate-50 rounded-md" 
      v-model="item.salary" placeholder="Salary">
  </div>
  <div class="w-full">
      <input type="text" class="border-2 w-full p-2 px-6 bg-slate-50 rounded-md" 
      v-model="item.hiatus_reason" placeholder="Explain any gaps in employment">
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
 <div class="flex mt-5 w-52 border-2 md:ml-6 p-2 md:px-6 bg-slate-50 rounded-md cursor-pointer" @click="addEmployment()">
  <div><img src="@/assets/icons/beta/plus.svg" alt="" class="w-6"> </div>
  <div class="font-semibold">Add More Fields</div>
  </div>    
</div> 
  <div class="xl:w-1/2 border-2 rounded-b-lg m-auto p-4 border-t-0">
      <h1 class="text-center uppercase font-semibold text-xl border-b-2">Education</h1>
      <div v-for="(item, index) in userdata.education" :key="index" class="border-b-2 py-8"> 
 <div class="md:px-6 md:flex mt-5 md:space-x-5">
  <div class="w-full">
      <input type="text" class="border-2 w-full p-2 px-6 bg-slate-50 rounded-md" 
      v-model="item.level" placeholder="Education Level">
  </div>
  <div class="w-full">
      <input type="text" class="border-2 w-full p-2 px-6 bg-slate-50 rounded-md" 
      v-model="item.institution" placeholder="Name">
  </div>
 </div>  
 <div class="md:px-6 md:flex mt-5 md:space-x-5">
  <div class="w-full">
      <input type="text" class="border-2 w-full p-2 px-6 bg-slate-50 rounded-md" 
      v-model="item.location" placeholder="Location (Address)">
  </div>
  <div class="w-full">
      <input type="text" class="border-2 w-full p-2 px-6 bg-slate-50 rounded-md" 
      v-model="item.course_study" placeholder="Course of Study. Major">
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
      <input v-if="yesGradCheckbox" type="text" class="border-2 w-full p-2 px-6 bg-slate-50 rounded-md" 
      v-model="item.graduation_year" placeholder="Add Graduation/Exit Year">
  </div>
  <div class="w-full">
      <!-- <input type="text" class="border-2 w-full p-2 px-6 bg-slate-50 rounded-md" placeholder="Course of Study"> -->
  </div>
 </div>
 <div class="md:px-6 md:flex mt-5 md:space-x-5">
  <div class="w-full">
      <label for="">Details</label>
      <textarea type="text" class="border-2 w-full p-2 px-6 bg-slate-50 rounded-md" 
      v-model="item.details" placeholder="Details"> </textarea>
  </div>
 </div>   
 
 <div class="md:px-6 md:flex mt-5 md:space-x-5">
  

 </div>
 </div>
 <div class="flex mt-5 w-52 border-2 md:ml-6 p-2 md:px-6 bg-slate-50 rounded-md cursor-pointer" @click="addEducation()">
  <div><img src="@/assets/icons/beta/plus.svg" alt="" class="w-6"> </div>
  <div class="font-semibold">Add More Fields</div>
  </div>    
</div> 
<button @click="sendApplication()" class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 text-xl mt-5  mx-auto w-1/2 px-4 rounded text-center">
    Submit Application
  </button>
  </div>

</div>
</template>

<script setup>
import axios from 'axios'
import { ref,computed } from 'vue';

const processing = ref(false)
const loading = ref(true)
const userdata = ref({
        "applicant_information":{
            "fname": "",
            "midname": "",
            "lname": "",
            "email":"",
            "dob":"",
            "ssn":"",
            "position": "",
            "date_available":""
        },
        "emergency_contacts":[
            {
                "name":"",
                "relationship":"",
                "phone":"",
                "email":""
            }
        ],
        "addresses":[
            {
                "line1":"",
                "line2":"",
                "city":"",
                "state":"",
                "country":"",
                "zip":"",
                "years_of_residency": 0
            }
        ],
        "license":{
            "state":"",
            "number":"",
            "class_type":"",
            "endorsement":"",
            "expiration_date": "",
            "license_docs": []
        },
        "experience": [
            {
                "equipment":"",
                "description":"",
                "start_date":"",
                "end_date":"",
                "milage":0
            }
        ],
        "accidents":[
            {
                "date":"",
                "description":"",
                "fatalities": 0,
                "injuries": 0,
                "chemical_spills": 0
            }
        ],
        "criminal":{
            "convictions":[
                {
                    "date":"",
                    "violation":"",
                    "state":"",
                    "penalty":""
                }
            ],
            "license_denial":"",
            "license_nullified":""
        },
        "prior_employment":{
            "history":[
                {
                    "employer":"",
                    "phone":"",
                    "position":"",
                    "start_date":"",
                    "end_date":"",
                    "departure_reason":"",
                    "salary":"",
                    "hiatus_reason":""
                }
            ],
            "fmcsaRegs": false,
            "cfr40": false
        },
        "education": [
            {
                "level":"",
                "institution":"",
                "location":"",
                "course_study":"",
                "years_attened":0,
                "graduation_year":"",
                "details": ""
            }
        ]
    })


const addMoreContactFields=()=>{
    userdata.value.emergency_contacts.push({
      name: "",
      relationship: "",
      phone: "",
      email: ""
})

}

const addAddress = () => {
    userdata.value.addresses.push({
      line1: "",
      line2: "",
      city: "",
      state: "",
      country: "",
      zip: "",
      years_of_residency: 2
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


const addAccident = () => {
    userdata.value.accidents.push({  
      date: "",
      description: "",
      facilities: "",
      injuries: "",
      chemical_spills: "" 
  })
}
const yesCheckbox = ref(false)

const yesClick = () => {
  yesCheckbox.value = !yesCheckbox.value
  userdata.value.license_denial = !yesCheckbox.value
}
const yesTwoCheckbox = ref(false)

const yesTwoClick = () => {
  yesTwoCheckbox.value = !yesTwoCheckbox.value
  userdata.value.license_nullified = !yesCheckbox.value
}

const addCriminalHistory = () => {
  userdata.value.criminal.convictions.push({
        date: "",
        violation: "",
        state: "",
        penalty: "" 
  })
}
const yesEmpCheckbox = ref(false)

const yesEmpClick = () => {
  yesEmpCheckbox.value = !yesEmpCheckbox.value
  userdata.value.fmcsaRegs = !yesEmpCheckbox.value

}
const yesEmpTwoCheckbox = ref(false)

const yesEmpTwoClick = () => {
  yesEmpTwoCheckbox.value = !yesEmpTwoCheckbox.value
  userdata.value.cfr40 = !yesEmpCheckbox.value

}

const addEmployment= () => {
  userdata.value.prior_employment.history.push({
    employer: "",
    phone:"",
    position: "",
    start_date: "",
    end_date: "",
    departure_reason:"",
    salary: "",
    hiatus_reason: ""
  })
}
const yesGradCheckbox = ref(false)

const yesGradClick = () => {
  yesGradCheckbox.value = !yesGradCheckbox.value

}
const addEducation = () => {
  userdata.value.education.push({
    level: "",
    institution: "",
    location: "",
    course_study: "",
    years_attened: 0,
    graduation_year: "",
    details: ""
  })
}

const sendApplication = async () => {
    try {
        processing.value = true
        const payload = userdata.value
        const res = await axios.post('https://muftardigital.pythonanywhere.com/site/application/create', payload)

        setTimeout(() => {
            loading.value = false
            setTimeout(() => {
                processing.value = false
            }, 2000)
        }, 4500)
        
      console.log(res.data)
    } catch (error) {
      processing.value = false
      console.log(error)
      
    }
}

</script>


<style scoped>
</style>