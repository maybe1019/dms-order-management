<template>
       <div>

              <div
                     class="overflow-x-hidden overflow-y-auto fixed inset-0 z-[9999] outline-none focus:outline-none justify-center items-center flex">
                     <div class="relative w-auto my-6 mx-auto max-w-6xl  max-h-[463px]  max-w-[586px] overflow-auto ">
                            <!--content-->
                            <div
                                   class=" rounded-[4px] shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
                                   <!--header-->
                                   <div
                                          class="flex items-start justify-between py-5 px-[43px]  border-b border-solid border-slate-200 rounded-t">
                                          <div
                                                 class="text-[18px] font-[400] font-roboto leading-[21.09px] text-[#212121]">
                                                 Invite
                                          </div>

                                   </div>
                                   <!--body-->
                                   <div class="relative  mx-[43px] flex-auto space-y-[19px] pt-[39px] mb-[69px]">
                                          <div class=" flex space-x-[10px]">
                                                 <div class="relative w-full">
                                                        <input type="text" id="first-name" value="First Name"
                                                               class="block px-[21px]   w-full leading-[16.41px] text-[14px] font-[400] font-roboto  h-[50px]  text- text-gray-900 bg-transparent rounded-[4px] border border-[#DEE0E4] appearance-none  focus:outline-none focus:ring-0 focus:border-[#DEE0E4]"
                                                               placeholder=" " />
                                                        <label for="first-name"
                                                               class="absolute text-[#757575]  leading-[16.41px] text-[14px] font-[400] font-roboto   duration-300 transform -translate-y-[18px] translate-x-[11px] scale-100 top-2 z-10 origin-[0] bg-white  pl-[6px] pr-[4px]   peer-focus:text-[#757575]  peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-2 peer-focus:scale-75 peer-focus:-translate-y-4 left-1">
                                                               First Name</label>
                                                 </div>

                                                 <div class="relative w-full">
                                                        <input type="text" id="second-name" value="Second Name"
                                                               class="block px-[21px]    w-full leading-[16.41px] text-[14px] font-[400] font-roboto  h-[50px]  text- text-gray-900 bg-transparent rounded-[4px] border border-[#DEE0E4] appearance-none  focus:outline-none focus:ring-0 focus:border-[#DEE0E4]"
                                                               placeholder=" " />
                                                        <label for="second-name"
                                                               class="absolute text-[#757575]  leading-[16.41px] text-[14px] font-[400] font-roboto   duration-300 transform -translate-y-[18px] translate-x-[11px] scale-100 top-2 z-10 origin-[0] bg-white  pl-[6px] pr-[4px]   peer-focus:text-[#757575]  peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-2 peer-focus:scale-75 peer-focus:-translate-y-4 left-1">
                                                               Second Name</label>
                                                 </div>
                                          </div>

                                        
                                           <FormCustomSelect
                                                 :options="['Without Designation', 'python', 'rust', 'javascript']"
                                                 :default="'Without Designation'" :cssClass="'w-full'"
                                                 :label="'Designation'" class="select z-[9999]" />
                                          <div class="relative">
                                                 <input type="email" id="email" value="xxxxxx@gmail.com"
                                                        class="block px-[21px]  w-full leading-[16.41px] text-[14px] font-[400] font-roboto  h-[50px]  text- text-gray-900 bg-transparent rounded-[4px] border border-[#DEE0E4] appearance-none  focus:outline-none focus:ring-0 focus:border-[#DEE0E4]"
                                                        placeholder=" " />
                                                 <label for="email"
                                                               class="absolute text-[#757575]  leading-[16.41px] text-[14px] font-[400] font-roboto   duration-300 transform -translate-y-[18px] translate-x-[11px] scale-100 top-2 z-10 origin-[0] bg-white  pl-[6px] pr-[4px]   peer-focus:text-[#757575]  peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-2 peer-focus:scale-75 peer-focus:-translate-y-4 left-1">
                                                        Email</label>
                                          </div>


                                          <div class=" flex items-center justify- center space-x-[10px] mx-[83px]">
                                                 <button class=" text-center w-[200px] h-[50px]  border border-[#DEE0E4]   bg-white  font-[400] font-roboto  text-[14px] text-[#757575] rounded-[4px] outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                                                        type="button" @click="toggleModal(1)">
                                                        Back
                                                 </button>
                                                 <button class=" text-center w-[200px] h-[50px]   bg-[#4489FE]  font-[400] font-roboto  text-[14px] text-[#FFFFFF] rounded-[4px] outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                                                        type="button" @click="toggleModal(1)">
                                                        Send Invite
                                                 </button>
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
import FormCustomSelect from '../embrillons/FormCustomSelect.vue';

export default {
       emits: ['addAction'],
       components: {
               FormCustomSelect
       },

       name: "InviteStaff",
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