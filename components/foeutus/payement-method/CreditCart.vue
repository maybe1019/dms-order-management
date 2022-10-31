<template>
       <div>

              <div
                     class="overflow-x-hidden overflow-y-auto fixed inset-0 z-50    outline-none focus:outline-none justify-center items-center flex">
                     <div class="relative w-auto my-6 mx-auto  max-h-[463px]  max-w-[486px] ">
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
                                                        Credit / Debit Cards

                                                 </div>

                                          </div>
                                          <!--body-->
                                          <div class="relative   flex-auto space-y-[19px]  mb-[69px]">

                                                 <div class="relative w-full">
                                                        <input type="text" id="holder-name" value="SERHII MOVCHAN"
                                                               class="block px-[21px]   w-full leading-[16.41px] text-[14px] font-[400] font-roboto  h-[50px]  text- text-gray-900 bg-transparent rounded-[4px] border border-[#DEE0E4] appearance-none  focus:outline-none focus:ring-0 focus:border-[#DEE0E4]"
                                                               placeholder=" " />
                                                        <label for="holder-name"
                                                               class="absolute text-[#757575]  leading-[16.41px] text-[14px] font-[400] font-roboto   duration-300 transform -translate-y-[18px] translate-x-[11px] scale-100 top-2 z-10 origin-[0] bg-white  pl-[6px] pr-[4px]   peer-focus:text-[#757575]  peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-2 peer-focus:scale-75 peer-focus:-translate-y-4 left-1">
                                                               Card Holder Name</label>
                                                 </div>
                                                 <div class="relative w-full">
                                                        <input type="number" id="card-number" value="4353343534353435"
                                                               class="block px-[21px]   w-full leading-[16.41px] text-[14px] font-[400] font-roboto  h-[50px]  text- text-gray-900 bg-transparent rounded-[4px] border border-[#DEE0E4] appearance-none  focus:outline-none focus:ring-0 focus:border-[#DEE0E4]"
                                                               placeholder=" " />
                                                        <label for="card-number"
                                                               class="absolute text-[#757575]  leading-[16.41px] text-[14px] font-[400] font-roboto   duration-300 transform -translate-y-[18px] translate-x-[11px] scale-100 top-2 z-10 origin-[0] bg-white  pl-[6px] pr-[4px]   peer-focus:text-[#757575]  peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-2 peer-focus:scale-75 peer-focus:-translate-y-4 left-1">
                                                               Card Holder Name</label>
                                                        <div
                                                               class="absolute  w-[14px]  bg-green-dark  h-[14px] rounded-full duration-300 transform -translate-y-4 translate-x-[390px]  top-2 z-10 origin-[0]   left-1">
                                                               <svg xmlns="http://www.w3.org/2000/svg"
                                                                      class="h-full w-full" fill="none"
                                                                      viewBox="0 0 24 24" stroke="white"
                                                                      stroke-width="2">
                                                                      <path stroke-linecap="round"
                                                                             stroke-linejoin="round"
                                                                             d="M5 13l4 4L19 7" />
                                                               </svg>
                                                        </div>
                                                        <div
                                                               class="absolute  w-[28px]    h-[20px]  duration-300 transform translate-y-4 translate-x-[360px]  top-1 z-10 origin-[0]   left-1">
                                                               <img src="mastercard.png" alt="" srcset="" width="full"
                                                                      height="full">
                                                        </div>
                                                 </div>

                                                 <div class=" flex space-x-[10px]">
                                                        <div class="relative w-full">
                                                               <input type="month" id="exp-date" min="2020-08"
                                                                      value="09-20"
                                                                      class="block px-[21px]   w-full leading-[16.41px] text-[14px] font-[400] font-roboto  h-[50px]  text- text-gray-900 bg-transparent rounded-[4px] border border-[#DEE0E4] appearance-none  focus:outline-none focus:ring-0 focus:border-[#DEE0E4]"
                                                                      placeholder=" " />
                                                               <label for="exp-date"
                                                                      class="absolute text-[#757575]  leading-[16.41px] text-[14px] font-[400] font-roboto   duration-300 transform -translate-y-[18px] translate-x-[11px] scale-100 top-2 z-10 origin-[0] bg-white  pl-[6px] pr-[4px]   peer-focus:text-[#757575]  peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-2 peer-focus:scale-75 peer-focus:-translate-y-4 left-1">
                                                                      Expiration Date</label>
                                                               <div
                                                                      class="absolute  w-[14px]  bg-green-dark  h-[14px] rounded-full duration-300 transform -translate-y-4 translate-x-[185px]  top-2 z-10 origin-[0]   left-1">
                                                                      <svg xmlns="http://www.w3.org/2000/svg"
                                                                             class="h-full w-full" fill="none"
                                                                             viewBox="0 0 24 24" stroke="white"
                                                                             stroke-width="2">
                                                                             <path stroke-linecap="round"
                                                                                    stroke-linejoin="round"
                                                                                    d="M5 13l4 4L19 7" />
                                                                      </svg>
                                                               </div>
                                                        </div>

                                                        <div class="relative w-full">
                                                               <input type="password" id="ccv" value="Second Name"
                                                                      class="block px-[21px]    w-full leading-[16.41px] text-[14px] font-[400] font-roboto  h-[50px]  text- text-gray-900 bg-transparent rounded-[4px] border border-[#DEE0E4] appearance-none  focus:outline-none focus:ring-0 focus:border-[#DEE0E4]"
                                                                      placeholder=" " />
                                                               <label for="ccv"
                                                                      class="absolute text-[#757575]  leading-[16.41px] text-[14px] font-[400] font-roboto   duration-300 transform -translate-y-[18px] translate-x-[11px] scale-100 top-2 z-10 origin-[0] bg-white  pl-[6px] pr-[4px]   peer-focus:text-[#757575]  peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-2 peer-focus:scale-75 peer-focus:-translate-y-4 left-1">
                                                                      CCV</label>
                                                               <div
                                                                      class="absolute  w-[14px]  bg-green-dark  h-[14px] rounded-full duration-300 transform -translate-y-4 translate-x-[185px]  top-2 z-10 origin-[0]   left-1">
                                                                      <svg xmlns="http://www.w3.org/2000/svg"
                                                                             class="h-full w-full" fill="none"
                                                                             viewBox="0 0 24 24" stroke="white"
                                                                             stroke-width="2">
                                                                             <path stroke-linecap="round"
                                                                                    stroke-linejoin="round"
                                                                                    d="M5 13l4 4L19 7" />
                                                                      </svg>
                                                               </div>
                                                        </div>
                                                 </div>



                                                 <div
                                                        class=" flex items-center justify-center space-x-[10px] mx-[83px]">
                                                        <button class=" text-center w-[200px] h-[50px]  border border-[#DEE0E4] font-medium  bg-white   font-roboto  text-[14px] text-[#757575] rounded-[4px] outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                                                               type="button" @click="toggleModal(1)">
                                                               Cancel
                                                        </button>
                                                        <button class=" text-center w-[200px] h-[50px]  font-medium bg-[#4489FE]   font-roboto  text-[14px] text-[#FFFFFF] rounded-[4px] outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                                                               type="button" @click="toggleModal(1)">
                                                               Save Card
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
export default {
       emits: ['addAction'],

       name: "CreditCart",
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