<template>
       <div>

              <div
                     class="overflow-x-hidden overflow-y-auto fixed inset-0 z-50    outline-none focus:outline-none justify-center items-center flex">
                     <div class="relative w-auto my-6 mx-auto  max-h-[463px]  max-w-[764px] ">
                            <!--content-->
                            <div
                                   class=" rounded-[4px] shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
                                   <!--header-->
                                   <div
                                          class="flex px-[43px] py-[19px] items-start justify-between  border-b border-solid border-slate-200 rounded-t">
                                          <div
                                                 class="text-[18px] font-medium font-roboto leading-[21.09px] text-[#212121]">
                                                 Add a Payment Method

                                          </div>

                                   </div>



                                   <div class="px-[43px]">
                                          <div class="flex items-start my-[43px]  ">
                                                 <div
                                                        class="text-[20px] font-[400] font-roboto leading-[23.44px] text-[#212121]">
                                                        Bank Payment (ACH)

                                                 </div>

                                          </div>
                                          <!--body-->
                                          <div
                                                 class="relative   flex-auto space-y-[19px]  mb-[69px] leading-[16.41px] text-[13px] font-[400] font-roboto ">


                                                 <div>
                                                        Search for your bank or select an option below to pay this
                                                        invoice



                                                 </div>

                                                 <div
                                                        class="flex flex-row justify-between border border-gray-300 bg-gray-50 w-full h-[50px] rounded-[4px] search-container">
                                                        <div class="relative w-full">
                                                               <label for="search-staff">
                                                                      <div
                                                                             class="flex absolute inset-y-0 left-0 items-center pl-3 cursor-pointer">
                                                                             <svg xmlns="http://www.w3.org/2000/svg" class="h-[14.58px] w-[14.58px] " fill="none" viewBox="0 0 24 24"
                stroke="#757575" stroke-width="2">
                <path stroke-linecap="round" stroke-linejoin="round" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
              </svg>
                                                                      </div>
                                                               </label>

                                                               <input type="text" id="search-staff"
                                                                      class="bg-gray-50 search-input w-full font-roboto text-gray-900 rounded-[4px] focus:outline-none block pl-16 p-2.5 "
                                                                      placeholder="Type a bank name. For example, “US Bank” or “SunTrust”" />
                                                        </div>
                                                 </div>
<!-- banck list -->
                                                 <div class=" flex  space-x-[13px]">
                                                        <BankExample src="click-banck.png" message="ClickBank" />
                                                        <BankExample src="sage.png" message="Sage" />
                                                        <BankExample src="Citi.svg.png" message="Citi" />
                                                        <BankExample src="discover.png" message="Discover" />
                                                 </div>
                                                 <div class=" flex  space-x-[13px]">
                                                      
                                                        <BankExample src="wester.png" message="Western Union" />
                                                        <BankExample src="standard.png" message="Standard Chartered" />
 
                                                        <BankExample src="money-gram.png" message="MoneyGram" />
                                                        <BankExample src="cirrus.png" message="Cirrus" />
                                                 </div>
                                                 



                                                 <div
                                                        class=" flex items-center justify-center space-x-[10px] mx-[83px] pt-[50px]">
                                                        <button class=" text-center w-[200px] h-[50px]  border border-[#DEE0E4] font-medium  bg-white  font-roboto  text-[14px] text-[#757575] rounded-[4px] outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                                                               type="button" @click="toggleModal(1)">
                                                               Cancel
                                                        </button>
                                                        <button class=" text-center w-[200px] h-[50px]   font-medium bg-[#4489FE]  font-roboto  text-[14px] text-[#FFFFFF] rounded-[4px] outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                                                               type="button" @click="toggleModal(1)">
                                                               Save
                                                        </button>
                                                 </div>
                                          </div>
                                   </div>



                                   <!--footer-->

                            </div>
                     </div>
              </div>
              <div v-if="showModal" class="opacity-25 fixed inset-0 z-40 bg-black-dark"></div>
       </div>
</template>

<script>
import BankExample from './BankExample.vue';
export default {
       emits: ['addAction'],
       components: {
              BankExample
       },

       name: "Bank",
       data() {
              return {
                     showModal: true
              }
       },
       methods: {
              toggleModal: function (option) {

                     this.$emit('addAction', option)
              }
       }
}
</script>