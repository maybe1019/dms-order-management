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
                                                        Paypal

                                                 </div>

                                          </div>
                                          <!--body-->
                                          <div
                                                 class="relative   flex-auto space-y-[19px]  mb-[69px] leading-[16.41px] text-[13px] font-[400] font-roboto ">


                                                 <div>
                                                        Transfer funds to your PayPal account for $1 USD per withdrawal,
                                                        plus any fees charged by PayPal.
                                                        <a href="https://www.paypal.com/fr/webapps/mpp/account-selection"
                                                               class="text-blue-dark underline ">
                                                               Learn more about PayPal
                                                               withdrawals

                                                        </a>



                                                 </div>
                                                 <div>
                                                        <a href="https://www.paypal.com/fr/webapps/mpp/account-selection"
                                                               class="text-blue-dark underline ">
                                                               Don't have a PayPal account? Visit PayPal

                                                        </a>
                                                 </div>

                                                 <div class="relative w-full">
                                                        <input type="email" id="paypal-email" value="example@gmail.com"
                                                               class="block px-[21px]   w-full leading-[16.41px] text-[14px] font-[400] font-roboto  h-[50px]  text- text-gray-900 bg-transparent rounded-[4px] border border-[#DEE0E4] appearance-none  focus:outline-none focus:ring-0 focus:border-[#DEE0E4]"
                                                               placeholder=" example@gmail.com" />
                                                        <label for="paypal-email"
                                                               class="absolute text-[#757575]  leading-[16.41px] text-[14px] font-[400] font-roboto   duration-300 transform -translate-y-[18px] translate-x-[11px] scale-100 top-2 z-10 origin-[0] bg-white  pl-[6px] pr-[4px]   peer-focus:text-[#757575]  peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-2 peer-focus:scale-75 peer-focus:-translate-y-4 left-1">
                                                               Card Holder Name</label>
                                                 </div>

                                                 <div>
                                                        This payment method will become active in 3 days.
                                                 </div>


                                                 <div
                                                        class=" flex items-center justify-center space-x-[10px] mx-[83px]">
                                                        <button class=" text-center w-[200px] h-[50px]  border border-[#DEE0E4] font-medium  bg-white   font-roboto  text-[14px] text-[#757575] rounded-[4px] outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                                                               type="button" @click="toggleModal(1)">
                                                               Cancel
                                                        </button>
                                                        <button class=" text-center w-[200px] h-[50px] font-medium bg-[#4489FE]   font-roboto  text-[14px] text-[#FFFFFF] rounded-[4px] outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
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

       name: "Paypal",
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