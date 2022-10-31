<template>
       <div class=" relative space-y-[48px]  ">
              <div class="flex flex-row justify-between items-center project-header font-roboto">
                     <div class=" font-roboto  leading-[25.78px] font-[400] text-[22px]">Transaction History</div>


                     <div class="flex space-x-[18.5px]">
                            <div
                                   class="relative flex flex-row justify-between border border-gray-300 bg-gray-50 max-w-[285px] h-[44px] rounded-[4px] search-container">
                                   <label for="search-staff">
                                          <div class="flex absolute inset-y-0 left-0 items-center pl-3 cursor-pointer">
                                                 <svg xmlns="http://www.w3.org/2000/svg"
                                                        class="h-[14.58px] w-[14.58px] " fill="none" viewBox="0 0 24 24"
                                                        stroke="#757575" stroke-width="2">
                                                        <path stroke-linecap="round" stroke-linejoin="round"
                                                               d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                                                 </svg>
                                          </div>
                                   </label>

                                   <input type="text" id="search-staff"
                                          class="bg-white  search-input font-roboto text-gray-900 rounded-[4px] focus:outline-none block pl-16 p-2.5 "
                                          placeholder="Search" />
                            </div>

                            <div class="flex items-center space-x-[8.5px]">
                                   <div class="font-roboto text-[14px] leading-[16.41px] font-[400] text-[#757575]">
                                          Filter
                                   </div>

                                   <div class="cursor-pointer w-[15px] h-[15px]">
                                          <svg viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg">
                                                 <path d="M6 36h12v-4h-12v4zm0-24v4h36v-4h-36zm0 14h24v-4h-24v4z"
                                                        fill="#757575" />
                                                 <path d="M0 0h48v48h-48z" fill="none" />
                                          </svg>
                                   </div>
                            </div>
                            <div class="flex items-center space-x-[8.5px]">
                                   <span
                                          class="font-roboto text-[14px] leading-[16.41px] font-[400] text-[#757575]">Sort</span>

                                   <div class="cursor-pointer w-[15px] h-[15px] ">
                                          <svg viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg">
                                                 <path d="M6 36h12v-4h-12v4zm0-24v4h36v-4h-36zm0 14h24v-4h-24v4z"
                                                        fill="#757575" />
                                                 <path d="M0 0h48v48h-48z" fill="none" />
                                          </svg>
                                   </div>
                            </div>
                     </div>



              </div>

              <table class="w-full border-collapse   text-left  ">
                     <thead class=" border-b">
                            <tr
                                   class="border-none leading-[14.46px] text-[#212121] text-[12px] font-roboto font-medium">


                                   <th scope="col" class="pt-[40px] pb-[18.75px]  px-6   bg-white">
                                          Date
                                   </th>
                                   <th scope="col" class="pt-[40px] pb-[18.75px]  px-6  bg-white">
                                          Payments ID
                                   </th>
                                   <th scope="col" class="pt-[40px] pb-[18.75px]  px-6  bg-white">
                                          Project
                                   </th>
                                   <th scope="col" class="pt-[40px]  pb-[18.75px] px-6  bg-white">
                                          Amount
                                   </th>
                                   <th scope="col" class="pt-[40px] pb-[18.75px] px-6   bg-white">
                                          Status
                                   </th>


                            </tr>
                     </thead>

                     <tbody class="leading-[16.41px] text-[#212121] text-[14px] font-roboto font-[400]">
                            <tr v-for="(item, index) in items" class=" hover:bg-gray-50 h-[91.5px]" :key="index">



                                   <td class="py-0 px-6 font-roboto ">
                                          <div class="flex flex-col  text-[#757575] items-start">
                                                 <div>
                                                        08/24/2019 </div>

                                                 <div>
                                                        Due 3 days ago
                                                 </div>
                                          </div>
                                   </td>
                                   <td class=" py-0 px-6 font-roboto ">
                                          234453
                                   </td>
                                   <td class=" py-0 px-6 font-roboto">
                                          English Project Edition
                                   </td>

                                   <td class=" py-0 px-6 font-roboto">
                                          $3000.00
                                   </td>


                                   <td class=" py-0 px-6 font-roboto ">
                                         
                                                 <div class="flex items-center  text-blue-dark ">
                                                        <div class="h-2.5 w-2.5  rounded-full bg-blue-dark mr-2">
                                                        </div>
                                                        Payment Awaiting
                                                 </div>
                                          

                                   </td>

                            </tr>






                     </tbody>
              </table>


              <!-- Table  stepper -->
              <TableStepper :dataLength="70" />
              <!-- end stepeper -->
       </div>
</template>

<script>
import TableStepper from '../embrillons/TableStepper.vue';
export default {
       name: "StaffTransaction",
       components: {
              TableStepper
       },
       data() {
              return ({
                     name: "Serhii Movchan",
                     items: [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1]

              })
       }
};
</script>

<style scoped>
tr th,
tr td {
       border-top: none;
       border-left: none;
       border-right: none;
}

table th {

       position: sticky;
       top: 0 !important;
       margin-top: 0px !important;
       z-index: 0;
}
</style>
