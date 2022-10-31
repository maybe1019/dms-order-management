<template>
       <div
              class=" border-[0.5px] border-[#DADCE0] px-[50px] rounded-[4px] w-full h-full  max-h-[335px] pb-[67px] pt-[50px] relative">

              <div class="flex justify-center w-full items-center flex-col">
                     <div class="font-roboto leading-[28.13px] font-[400] text-[24px] text-center text-black-dark">
                            Order Information</div>
                     <div class="font-roboto leading-[14.06px] font-[400] text-[12px] text-center text-gray-dark">Please
                            enter all information</div>



              </div>

              <div class="flex flex-row space-x-[10px] mt-[52.14px]">
                     <div class="flex flex-col space-y-[20.41px]">
                            <div
                                   class="border-[1px] boder-[#DEE0E4] w-[267px] h-[50px] sm:max-w-[267px] rounded-[4px] px-[16.41px] flex items-center font-roboto text-[14px] font-[400] leading-[16.41px] text-black-dark">
                                   Serhii Movchan
                            </div>
                            <CustomSelect :options="['Approved', 'Python', 'Rust', 'Javascript']" :default="'Approved'"
                                   :cssClass="'max-w-[267px] text-[14px] font-[400] leading-[16.41px]'"
                                   class="select" />


                     </div>
                     <div class="flex flex-col space-y-[20.41px] max-w-[267px]">
                            <div
                                   class="border-[1px] boder-[#DEE0E4] w-[267px] h-[50px] sm:max-w-[267px] rounded-[4px] px-[16.41px] flex items-center font-roboto text-[14px] font-[400] leading-[16.41px] text-black-dark">
                                   1202444
                            </div>
                            <div
                                   class=" border-[1px] boder-[#DEE0E4] w-[267px] h-[50px] sm:max-w-[267px] rounded-[4px] px-[16.41px] flex items-center justify-between font-roboto text-[14px] font-[400] leading-[16.41px] text-black-dark">
                                   <p>2019-12-19 09:55</p>
                                   <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="#757575"
                                   class="w-[18px] h-[18px]">
                                   <path fill-rule="evenodd"
                                          d="M6.75 2.25A.75.75 0 017.5 3v1.5h9V3A.75.75 0 0118 3v1.5h.75a3 3 0 013 3v11.25a3 3 0 01-3 3H5.25a3 3 0 01-3-3V7.5a3 3 0 013-3H6V3a.75.75 0 01.75-.75zm13.5 9a1.5 1.5 0 00-1.5-1.5H5.25a1.5 1.5 0 00-1.5 1.5v7.5a1.5 1.5 0 001.5 1.5h13.5a1.5 1.5 0 001.5-1.5v-7.5z"
                                          clip-rule="evenodd" />
                            </svg>

                            </div>

                     </div>




                     <div
                            class="border-[1px] boder-[#DEE0E4] w-[546px] h-[120px]  rounded-[4px] px-[16.41px] py-[17px] font-roboto text-[14px] font-[400] leading-[16.41px] text-black-dark">
                            <p>
                                   Without Instruction
                            </p>
                            

                     </div>


              </div>




       </div>
</template>
       <script>
import CustomSelect from '../embrillons/CustomSelect.vue';
export default {
       name: "OrderInformation",
       components: {
              CustomSelect
       }
};
</script>
       <style scoped>
       </style>
       