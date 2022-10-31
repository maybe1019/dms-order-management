<template>
       <div class="z-[9999]">
              <div>
                     <div class="w-full flex flex-row justify-between  py-[30px] items-center font-roboto font-[400]">

                            <div class="w-[40px] h-[26px]"><img src="credit-card.jpg" alt="" srcset="" width="100%"
                                          height="100%">
                            </div>
                            <div class="flex flex-col max-w-[250.01px]">

                                   <p class="text-black-dark text-[15px] leading-[17.58px]">Credit / Debit Cards</p>
                                   <ul role="list" class="list-disc font-[400] text-[11px] leading-[12.89px] ">
                                          <li>
                                                 Free payments to U.S. banks
                                          </li>
                                          <li>Credit/Debit may charge <span class="text-blue-dark underline">additional
                                                        fees</span> for sending and withdrawing funds.
                                          </li>
                                   </ul>
                            </div>
                            <div>
                                   <button type="button" v-on:click="displayCardMethod('credit')"
                                          class=" font-medium leading-[16.4px] text-blue-dark font-roboto bg-white border-[1px]  border-[#4489FE] h-[34px]  rounded-[4px]   w-[90px] focus:outline-none hover:bg-gray-100  font-medium   focus:outline-none">
                                          Set Up
                                   </button>
                            </div>
                     </div>
                     <hr class="w-[501px]">

              </div>

              <div>
                     <div class="w-full flex flex-row justify-between  py-[30px] items-center font-roboto font-[400]">

                            <div class="w-[50px] h-[30px]"><img src="paypal-logo.png" alt="" srcset="" width="100%"
                                          height="100%">
                            </div>
                            <div class="flex flex-col max-w-[250.01px]">

                                   <p class="text-black-dark text-[15px] leading-[17.58px]">PayPal</p>
                                   <ul role="list" class="list-disc font-[400] text-[11px] leading-[12.89px] ">
                                          <li>
                                                 $1 USD DeskVantage withdrawal fee




                                          </li>
                                          <li>
                                                 PayPal may charge <span class="text-blue-dark underline">additional
                                                        fees</span>for sending and withdrawing funds. <span
                                                        class="text-blue-dark underline">Don't have a PayPal
                                                        account?</span>
                                          </li>
                                   </ul>
                            </div>
                            <div>
                                   <button type="button" v-on:click="displayCardMethod('paypal')"
                                          class=" font-medium leading-[16.4px] text-blue-dark font-roboto bg-white border-[1px]  border-[#4489FE] h-[34px]  rounded-[4px]   w-[90px] focus:outline-none hover:bg-gray-100  font-medium   focus:outline-none">
                                          Set Up
                                   </button>
                            </div>
                     </div>
                     <hr class="w-[501px]">

              </div>
              <div>
                     <div class="w-full flex flex-row justify-between  py-[30px] items-center font-roboto font-[400]">

                            <div class="w-[40px] h-[26px]"><img src="banck.jpg" alt="" srcset="" width="100%"
                                          height="100%">
                            </div>
                            <div class="flex flex-col max-w-[250.01px]">

                                   <p class="text-black-dark text-[15px] leading-[17.58px]">Bank Payments (ACH)</p>
                                   <ul role="list" class="list-disc font-[400] text-[11px] leading-[12.89px] ">
                                          <li>
                                                 Free payments to U.S. banks
                                          </li>
                                          <li>Credit/Debit may charge additional fees for sending and withdrawing funds.
                                          </li>
                                   </ul>
                            </div>
                            <div>
                                   <button type="button" v-on:click="displayCardMethod('bank')"
                                          class=" font-medium leading-[16.4px] text-blue-dark font-roboto bg-white border-[1px]  border-[#4489FE] h-[34px]  rounded-[4px]   w-[90px] focus:outline-none hover:bg-gray-100  font-medium   focus:outline-none">
                                          Set Up
                                   </button>
                            </div>
                     </div>
                     <hr class="w-[501px]">

              </div>
       </div>

</template>
<script>
export default {
       name: "Method",
       methods: {
              displayCardMethod(option) {
                     this.$emit("methodType" , option)
              }
       }
};
</script>
<style scoped>
</style>
