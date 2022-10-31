<template>
       <div class="bg-wihte mt-[28px] mb-[150px] mx-auto max-w-[810px]">
              <!-- header payement method -->
              <!-- add othe payment method -->
              <List v-show="showList" @addAction="setShowList" />

              <div>
                     <div class="font-roboto font-[400] text-[24px] leading-[28.13px] text-[#212121] mb-[32px]">Payment
                            Methods
                     </div>
                     <div class="space-y-[11px]">
                            <!-- payement method -->

                            <div class="form-check flex flex-row space-x-[42px]">
                                   <input class="w-[16.63px] h-[19.16px] accent-blue-dark" type="radio"
                                          name="flexRadioDisabled" id="flexRadioDisabled" checked>

                                   <!-- logo -->


                                   <div class="">
                                          <svg style="color: blue" id="Layer_1" data-name="Layer 1"
                                                 class="w-[20px] h-[19.16px]" xmlns="http://www.w3.org/2000/svg"
                                                 viewBox="0 0 512 512">
                                                 <path d="M424.81,148.79c-.43,2.76-.93,5.58-1.49,8.48-19.17,98-84.76,131.8-168.54,131.8H212.13a20.67,20.67,0,0,0-20.47,17.46L169.82,444.37l-6.18,39.07a10.86,10.86,0,0,0,9.07,12.42,10.72,10.72,0,0,0,1.7.13h75.65a18.18,18.18,0,0,0,18-15.27l.74-3.83,14.24-90,.91-4.94a18.16,18.16,0,0,1,18-15.3h11.31c73.3,0,130.67-29.62,147.44-115.32,7-35.8,3.38-65.69-15.16-86.72A72.27,72.27,0,0,0,424.81,148.79Z"
                                                        fill="#139AD6"></path>
                                                 <path d="M385.52,51.09C363.84,26.52,324.71,16,274.63,16H129.25a20.75,20.75,0,0,0-20.54,17.48l-60.55,382a12.43,12.43,0,0,0,10.39,14.22,12.58,12.58,0,0,0,1.94.15h89.76l22.54-142.29-.7,4.46a20.67,20.67,0,0,1,20.47-17.46h42.65c83.77,0,149.36-33.86,168.54-131.8.57-2.9,1.05-5.72,1.49-8.48h0C410.94,98.06,405.19,73.41,385.52,51.09Z"
                                                        fill="#263B80"></path>
                                          </svg>
                                   </div>
                                   <p>
                                          <span
                                                 class="font-roboto leading-[16.41px] text-[14px] font-[400] text-[#212121]">PayPal
                                                 account: ser*****n</span>&nbsp; <span
                                                 class="font-roboto leading-[16.41px] text-[14px] font-medium text-[#4489FE]">(Default)</span>

                                   </p>
                            </div>


                            <div class="form-check flex flex-row space-x-[31.27px]">
                                   <input class="w-[16.63px] h-[19.16px] accent-blue-dark" type="radio"
                                          name="flexRadioDisabled" id="flexRadioDisabled">

                                   <!-- logo -->
                                   <div class="w-[42.09px] h-[28px] ">
                                          <img src="mastercard.png" alt="MasterCard" srcset="" width="100%"
                                                 height="100%">

                                   </div>
                                   <p>
                                          <span
                                                 class="font-roboto leading-[16.41px] text-[14px] font-[400] text-[#212121]">MasterCard
                                                 ending in 8423</span>

                                   </p>
                            </div>



                     </div>
                     <button type="button" v-on:click="setShowList" v-if="user === 'staff'"
                            class="flex justify-center items-center text-white font-roboto border ml-[45px] mt-[45px] w-[285px] sm:max-w-[285px] h-[50px] bg-[#4489FE] border-[#4489FE] rounded-[4px] hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium  focus:outline-none">
                            Add Payment Method
                     </button>

              </div>

              <div>
                     <div class="flex flex-row justify-between items-center mt-[85px]">
                            <span class="font-roboto font-[400] text-[24px] leading-[28.13px]  text-[#212121]">Transaction
                                   Hystory</span>
                            <span><a href="#"
                                          class="font-roboto font-medium underline  text-[14px] leading-[16.41px]  text-[#4489FE]">View
                                          All</a> </span>
                     </div>

              </div>
              <!-- tab tracability  content -->

              <table class="w-full table  border-collapse mt-[29px]   text-left   ">
                     <thead class="  ">
                            <tr
                                   class="border-none  leading-[14.06px] text-[#212121] text-[12px] font-roboto font-medium">

                                   <th scope="col" class="py-[25px] pl-[30px]  ">
                                          Date
                                   </th>
                                   <th scope="col" class="py-[25px] pl-0 ">
                                          Payments ID
                                   </th>
                                   <th scope="col" class="py-[25px] pl-[25px] ">
                                          Project
                                   </th>
                                   <th scope="col" class="py-[25px] pl-[110px] ">
                                          Amount--
                                   </th>
                                   <th scope="col" class="py-[25px] pl-[136px]  ">
                                          Status
                                   </th>

                            </tr>
                     </thead>

                     <tbody>

                            <tr
                                   class="bg-white h-[65.5px]  leading-[15.23px] text-[#212121] text-[13px] font-roboto font-[400]   hover:bg-gray-50  ">

                                   <td
                                          class=" border-l-0  pl-[30px] py-0 text-[#757575] font-roboto font-[400] leading-[15.23px]">
                                          <div class=" flex items-center   ">

                                                 <div class=" space-y-[3px] flex flex-col">
                                                        <span>08/24/2019</span>
                                                        <span> 02:30 PM</span>
                                                 </div>
                                          </div>
                                   </td>
                                   <td class=" pl-0 py-0 ">
                                          <div class=" flex items-center  ">
                                                 234453

                                          </div>
                                   </td>

                                   <td class=" pl-[25px] py-0">
                                          <div class=" flex items-center  ">
                                                 English Project Edition

                                          </div>
                                   </td>
                                   <td class=" pl-[110px] py-0">
                                          <div class=" flex items-center  ">
                                                 $3000.00

                                          </div>
                                   </td>
                                   <td class="pl-[136px] py-0 border-r-0">

                                          <div class="      flex items-center">
                                                 <div class="h-2.5 w-2.5 flex-none  rounded-full bg-[#4489FE] mr-2">
                                                 </div>
                                                 <span
                                                        class="leading-[13.23px] text-[#4489FE] text-[13px] font-roboto font-[400]">
                                                        Payment Awaiting </span>

                                          </div>

                                   </td>


                            </tr>
                           


                     </tbody>
              </table>








       </div>
</template>

<script>
import List from './payement-method/List.vue';
export default {
       name: "UserBillInfo",
       components: {
              List
       },
       props: ['user'],
       data() {
              return {
                     showList: false
              }
       },
       methods: {
              setShowList() {
                     this.showList = !this.showList
              }
       }
};
</script>

<style scoped>
</style>
