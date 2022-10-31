<template>
       <div class="bg-wihte mt-[28px] mb-[150px] font-roboto">


              <!-- add othe payment method -->
              <List v-show="showList" @addAction="setShowList" />

              <!-- header payement method -->

              <div class="flex flex-row  space-x-[90px]">

                     <div class=" space-y-[45px]">
                            <div class="font-roboto font-[400] text-[24px] leading-[28.13px] text-[#212121] mb-[32px]">
                                   Payment Methods
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
                     <button type="button" v-on:click="setShowList" 
                                   class="flex justify-center items-center text-white font-roboto border ml-[45px] mt-[45px] w-[285px] sm:max-w-[285px] h-[50px] bg-[#4489FE] border-[#4489FE] rounded-[4px] hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium  focus:outline-none">
                                   Add Payment Method
                            </button>

                     </div>



                     <div class=" space-y-[27px]">
                            <div class="font-roboto font-[400] text-[24px] leading-[28.13px] text-[#212121] ">
                                   Billing Instructions
                            </div>



                            <FormCustomSelect
                                   :options="['Monthly ( last Wednesday of each month)', 'Monthly ( last Wednesday of each month)']"
                                   :default="'Monthly ( last Wednesday of each month)'" :cssClass="'w-full '"
                                   :label="'Preferred Invoice Schedule'" class="select z-[20] " />



                            <div class="flex items-center space-x-[25px] ">
                                   <CheckBox :checkType="'determinate'" :checked="true"/>


                                   <div class="relative">
                                          <input type="text" id="invoice-amount" value="$2000"
                                                 class="block px-2.5  min-w-[364px] leading-[16.41px] text-[14px] font-[400] font-roboto  h-[50px]  text- text-gray-900 bg-transparent rounded-[4px] border border-[#DEE0E4] appearance-none  focus:outline-none focus:ring-0 focus:border-[#DEE0E4]"
                                                 placeholder=" " />
                                          <label for="invoice-amount"
                                                 class="absolute text-[#757575]  leading-[16.41px] text-[14px] font-[400] font-roboto   duration-300 transform -translate-y-4 scale-100 top-2 z-10 origin-[0] bg-white  px-2 pl-4   peer-focus:text-[#757575]  peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-2 peer-focus:scale-75 peer-focus:-translate-y-4 left-1">
                                                 When Invoice Amount Over</label>
                                   </div>
                            </div>


                     </div>



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

              <table class="w-full border-collapse mt-[54px]   text-left   ">
                     <thead class=" ">
                            <tr
                                   class="border-b  leading-[14.06px] text-[#212121] text-[12px] font-roboto font-medium">

                                   <th scope="col" class="py-[25px] px-6 ">
                                          Date
                                   </th>
                                   <th scope="col" class="py-[25px] px-6 ">
                                          Invoice ID
                                   </th>
                                   <th scope="col" class="py-[25px] px-6 ">
                                          Project
                                   </th>
                                   <th scope="col" class="py-[25px] px-6 ">
                                          Amount
                                   </th>
                                   <th scope="col" class="py-[25px] px-6 ">
                                          Status
                                   </th>
                                   <th scope="col" class="py-[25px] px-6  flex justify-end ">
                                          Invoice
                                   </th>

                            </tr>
                     </thead>

                     <tbody>
                            <tr
                                   class="bg-white h-[65.5px] leading-[15.23px] text-[#212121] text-[13px] font-roboto font-[400]   hover:bg-gray-50  ">

                                   <td
                                          class=" py-0 border-l-0  px-6 text-[#757575] font-roboto font-[400] leading-[15.23px]">
                                          <div class=" flex items-center  ">
                                                
                                                <div class=" space-y-[3px] flex flex-col">
                                                 <span>08/24/2019</span>
                                                 <span> 02:30 PM</span>
                                                </div> 
                                          </div>
                                          
                                   </td>
                                   <td class=" px-6 py-0 ">
                                          <div class=" flex items-center ">
                                             234453    
                                          </div>
                                          
                                   </td>

                                   <td class=" px-6 py-0">
                                          <div class=" flex items-center ">
                                                English Project Edition 
                                          </div>
                                          
                                   </td>
                                   <td class=" px-6 py-0">
                                          <div class=" flex items-center ">
                                           $3000.00
                                          </div>
                                         
                                   </td>
                                   <td class=" px-6 py-0">
                                          <div class="flex items-center">
                                                 <div class="h-2.5 w-2.5  flex-none  rounded-full bg-[#4489FE] mr-2">
                                                 </div>
                                                 <span
                                                        class="leading-[13.23px] text-[#4489FE] text-[13px] font-roboto font-[400]">
                                                        Payment Awaiting </span>

                                          </div>

                                   </td>
                                   <td class=" px-6 py-0  border-r-0">
                                          <div class=" flex items-center justify-end">
                                                 <button type="button"
                                                 class="  font-roboto border-[#4489FE] bg-blue-dark  w-[84px] h-[30px] text-white font-[700] text-[13px] leading-[15.23px]  rounded-[4px] hover:cursor-pointer hover:bg-opacity-3 focus:outline-none  transition duration-150 ease-in-out">View
                                          </button>
                                          </div>
                                          

                                   </td>


                            </tr>

                          
                           

                     </tbody>
              </table>








       </div>
</template>

<script>
import CheckBox from '../embrillons/CheckBox.vue';
import FormCustomSelect from '../embrillons/FormCustomSelect.vue';
import List from './payement-method/List.vue';
export default {
       name: "ClientBillInfo",
       components: {
              List,
              FormCustomSelect,
              CheckBox
       },
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
