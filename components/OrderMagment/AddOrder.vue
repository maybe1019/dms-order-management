<template>
       <div>

              <div
                     class="overflow-x-hidden overflow-y-auto fixed inset-0 z-[9999]    outline-none focus:outline-none justify-center  flex">
                     <div class="relative sm:w-full mt-[255px] mx-auto      w-[1094px] overflow-auto">
                            <!--content-->
                            <div
                                   class=" rounded-[4px] shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
                                   <!--header-->
                                   <div
                                          class="flex items-start justify-between py-5 px-[27px] border-b-[1.5px] border-solid  shadow-sm">
                                          <div
                                                 class="text-[18px] font-[700] font-roboto leading-[21.09px] text-[#212121]">
                                                 Order Part Details
                                          </div>

                                   </div>
                                   <!--body-->
                                   <div class="relative  mx-[27px] flex-auto  pt-[39px] mb-[61px]">
                                          <div class=" flex space-x-[10px]">
                                                 <div class="relative">
                                                        <input type="text" id="first-name" value="English"
                                                               class="block px-[21px]  sm:full w-[308px] leading-[16.41px] text-[14px] font-[400] font-roboto  h-[50px]  text- text-gray-900 bg-transparent rounded-[4px] border border-[#DEE0E4] appearance-none  focus:outline-none focus:ring-0 focus:border-[#DEE0E4] "
                                                               placeholder=" " />
                                                        <label for="first-name"
                                                               class="absolute text-[#757575]  leading-[16.41px] text-[14px] font-[400] font-roboto   duration-300 transform -translate-y-[18px] translate-x-[11px] scale-100  top-2 z-10 origin-[0] bg-white  pl-[6px] pr-[4px]   peer-focus:text-[#757575]  peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-2 peer-focus:scale-100 peer-focus:-translate-y-4 left-1">
                                                               Order Part Name</label>
                                                 </div>

                                                 <FormCustomSelect
                                                        :options="['English Template', 'python', 'rust', 'javascript']"
                                                        :default="'English Template'" :cssClass="'w-full w-[302px]'"
                                                        :label="'Temlate'" class="select z-[9999]" />

                                                 <div class="relative">
                                                        <input type="text" id="first-name" value="2"
                                                               class="block px-[21px]  sm:w-full w-[200px] leading-[16.41px] text-[14px] font-[400] font-roboto  h-[50px]  text- text-gray-900 bg-transparent rounded-[4px] border border-[#DEE0E4] appearance-none  focus:outline-none focus:ring-0 focus:border-[#DEE0E4] "
                                                               placeholder=" " />
                                                        <label for="first-name"
                                                               class="absolute text-[#757575]  leading-[16.41px] text-[14px] font-[400] font-roboto   duration-300 transform -translate-y-[18px] translate-x-[11px] scale-100  top-2 z-10 origin-[0] bg-white  pl-[6px] pr-[4px]   peer-focus:text-[#757575]  peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-2 peer-focus:scale-100 peer-focus:-translate-y-4 left-1">
                                                               Total FIles</label>
                                                 </div>

                                                 <div class="relative">
                                                        <input type="text" id="second-name" value="00:00:00"
                                                               class="block px-[21px]  sm:w-full w-[200px] leading-[16.41px] text-[14px] font-[400] font-roboto  h-[50px]  text- text-gray-900 bg-transparent rounded-[4px] border border-[#DEE0E4] appearance-none  focus:outline-none focus:ring-0 focus:border-[#DEE0E4] "
                                                               placeholder=" " />
                                                        <label for="second-name"
                                                               class="absolute text-[#757575]  leading-[16.41px] text-[14px] font-[400] font-roboto   duration-300 transform -translate-y-[18px] translate-x-[11px] scale-100  top-2 z-10 origin-[0] bg-white  pl-[6px] pr-[4px]   peer-focus:text-[#757575]  peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-2 peer-focus:scale-100 peer-focus:-translate-y-4 left-1">
                                                               Total Duration</label>
                                                 </div>
                                          </div>





                                          <div class="relative mt-[24px]">
                                                 <textarea id="address"
                                                        class="block py-[17px] px-[29.29px]  w-full leading-[16.41px] text-[14px] font-[400] font-roboto  h-[100px]  text- text-gray-900 bg-transparent rounded-[4px] border border-[#DEE0E4] appearance-none  focus:outline-none focus:ring-0 focus:border-[#DEE0E4] "
                                                        placeholder=" ">Geroev Dnipra st.57, Ukraine</textarea>
                                                 <label for="address"
                                                        class="absolute text-[#757575]  leading-[16.41px] text-[14px] font-[400] font-roboto   duration-300 transform -translate-y-[18px] translate-x-[11px] scale-100  top-2 z-10 origin-[0] bg-white  pl-[6px] pr-[4px]   peer-focus:text-[#757575]  peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-2 peer-focus:scale-100 peer-focus:-translate-y-4 left-1">
                                                        Address</label>
                                          </div>



                                          <div class=" flex flex-wrap justify-between items-center mt-[24px] ">
                                                 <div class="relative">
                                                        <input type="text" id="parent-folder" value="$2000" 
                                                               class="block px-[21px] pb-2.5 mb-2  pt-4 sm:w-full w-[200px] leading-[16.41px] text-[14px] font-[400] font-roboto  min-h-[50px]  text-gray-dark bg-transparent rounded-[4px] border border-[#DEE0E4] appearance-none  focus:outline-none focus:ring-0 focus:border-[#DEE0E4]"
                                                               placeholder=" " />
                                                        <label for="parent-folder"
                                                               class="absolute text-[#757575]  leading-[16.41px] text-[14px] font-[400] font-roboto   duration-300 transform -translate-y-[18px] translate-x-[11px] scale-100  top-2 z-10 origin-[0] bg-white  pl-[6px] pr-[4px]   peer-focus:text-[#757575]  peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-2 peer-focus:scale-100 peer-focus:-translate-y-4 left-1">
                                                               Total Service Price</label>
                                                 </div>

                                                 <div class="relative">
                                                        <input type="text" id="contact-number" value="$100" 
                                                               class="block px-[21px] pb-2.5 mb-2 pt-4 sm:w-full w-[200px] leading-[16.41px] text-[14px] font-[400] font-roboto  min-h-[50px]  text-gray-dark bg-transparent rounded-[4px] border border-[#DEE0E4] appearance-none  focus:outline-none focus:ring-0 focus:border-[#DEE0E4]"
                                                               placeholder=" " />
                                                        <label for="contact-number"
                                                               class="absolute text-[#757575]  leading-[16.41px] text-[14px] font-[400] font-roboto   duration-300 transform -translate-y-[18px] translate-x-[11px] scale-100  top-2 z-10 origin-[0] bg-white  pl-[6px] pr-[4px]   peer-focus:text-[#757575]  peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-2 peer-focus:scale-100 peer-focus:-translate-y-4 left-1">
                                                               Total Add-Ons Price</label>
                                                 </div>
                                                 
                                                 <div class="relative">
                                                        <input type="text" id="parent-folder" value="No Diascount"
                                                               
                                                               class="block px-[21px]  mb-2 sm:w-full w-[200px] leading-[16.41px] text-[14px] font-[400] font-roboto  min-h-[50px]  text-gray-dark bg-transparent rounded-[4px] border border-[#DEE0E4] appearance-none  focus:outline-none focus:ring-0 focus:border-[#DEE0E4]"
                                                               placeholder=" " />
                                                        <label for="parent-folder"
                                                               class="absolute text-[#757575]  leading-[16.41px] text-[14px] font-[400] font-roboto   duration-300 transform -translate-y-[18px] translate-x-[11px] scale-100  top-2 z-10 origin-[0] bg-white  pl-[6px] pr-[4px]   peer-focus:text-[#757575]  peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-2 peer-focus:scale-100 peer-focus:-translate-y-4 left-1">
                                                               Total Price</label>
                                                 </div>
                                                 <div class="relative">
                                                        <input type="text" id="parent-folder" value="$2100" 
                                                               class="block px-[21px]  mb-2 sm:w-full w-[200px] leading-[16.41px] text-[14px] font-[400] font-roboto  min-h-[50px]  text-gray-dark bg-transparent rounded-[4px] border border-[#DEE0E4] appearance-none  focus:outline-none focus:ring-0 focus:border-[#DEE0E4]"
                                                               placeholder=" " />
                                                        <label for="parent-folder"
                                                               class="absolute text-[#757575]  leading-[16.41px] text-[14px] font-[400] font-roboto   duration-300 transform -translate-y-[18px] translate-x-[11px] scale-100  top-2 z-10 origin-[0] bg-white  pl-[6px] pr-[4px]   peer-focus:text-[#757575]  peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-2 peer-focus:scale-100 peer-focus:-translate-y-4 left-1">
                                                               Total Manual Discount</label>
                                                 </div>
                                                 <div class="relative">
                                                        <input type="text" id="parent-folder" value="$0" 
                                                               class="block px-[21px]  mb-2 sm:w-full w-[200px] leading-[16.41px] text-[14px] font-[400] font-roboto  min-h-[50px]  text-gray-dark bg-transparent rounded-[4px] border border-[#DEE0E4] appearance-none  focus:outline-none focus:ring-0 focus:border-[#DEE0E4]"
                                                               placeholder=" " />
                                                        <label for="parent-folder"
                                                               class="absolute text-[#757575]  leading-[16.41px] text-[14px] font-[400] font-roboto   duration-300 transform -translate-y-[18px] translate-x-[11px] scale-100  top-2 z-10 origin-[0] bg-white  pl-[6px] pr-[4px]   peer-focus:text-[#757575]  peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-2 peer-focus:scale-100 peer-focus:-translate-y-4 left-1">
                                                               Final Price</label>
                                                 </div>
                                          </div>





                                          <div class=" w-full flex items-center justify-center space-x-[10px] mt-[53px]">
                                                 <button class=" text-center w-full max-w-[200px] h-[50px]  border border-[#DEE0E4] font-medium  bg-white   font-roboto  text-[14px] text-[#757575] rounded-[4px] outline-none focus:outline-none  ease-linear transition-all duration-150"
                                                        type="button" @click="toggleModal(false)">
                                                        Cancel
                                                 </button>
                                                 <button class=" text-center w-full max-w-[200px] h-[50px]  bg-[#4489FE]  font-[400] font-roboto  text-[14px] text-[#FFFFFF] rounded-[4px] outline-none focus:outline-none  ease-linear transition-all duration-150"
                                                        type="button" @click="toggleModal(true)">
                                                        Create 
                                                 </button>
                                          </div>
                                   </div>
                                   <!--footer-->

                            </div>
                     </div>
              </div>
              <div v-show="showModal" class="opacity-25 fixed inset-0 z-40 bg-black-dark"></div>
       </div>
</template>

<script>
import FormCustomSelect from '../embrillons/FormCustomSelect.vue';
export default {
       emits: ['addAction'],
       components: {
              FormCustomSelect
       },

       name: "AddOrdrer",
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