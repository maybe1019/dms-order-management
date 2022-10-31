<template>
       <div>

              <div
                     class="   inset-0 z-50    outline-none">
                     <div class="relative w-full my-6  mx-auto  max-w-[810px] ">
                            <!--content-->
                            <div
                                   class=" rounded-[4px]  relative flex flex-col w-full bg-white outline-none focus:outline-none">
                                   <!--header-->
                                 
                                   <!--body-->
                                   <div class="relative w-full   flex-auto space-y-[19px]  mb-[40px]">
                                           <div
                                                 class="text-[18px] font-[400] font-roboto leading-[21.09px] text-[#212121]">
                                                 Main Information
                                          </div>

                                          <div class=" flex w-full space-x-[10px] sm:flex-wrap sm:space-x-0 sm:space-y-[10px]">
                                                 <div class="relative  ">
                                                        <input type="text" id="first-name" value="First Name"
                                                               class="block px-[21px]  w-full min-w-[400px]  sm:w-full   leading-[16.41px] text-[14px] font-[400] font-roboto  h-[50px]  text- text-gray-900 bg-transparent rounded-[4px] border border-[#DEE0E4] appearance-none focus:outline-none focus:ring-0 focus:border-[#DEE0E4]"
                                                               placeholder=" " />
                                                        <label for="first-name"
                                                               class="absolute text-[#757575]  leading-[16.41px] text-[14px] font-[400] font-roboto   duration-300 transform -translate-y-[18px] translate-x-[11px] top-2 z-10 origin-[0] bg-white  pl-[6px] pr-[4px]   peer-focus:text-[#757575]  peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-2 peer-focus peer-focus:-translate-y-4 left-1">
                                                               First Name</label>
                                                 </div>

                                                 <div class="relative ">
                                                        <input type="text" id="second-name" value="Secomd Name"
                                                               class="block px-[21px]  w-full min-w-[400px] sm:w-full leading-[16.41px] text-[14px] font-[400] font-roboto  h-[50px]  text- text-gray-900 bg-transparent rounded-[4px] border border-[#DEE0E4] appearance-none focus:outline-none focus:ring-0 focus:border-[#DEE0E4]"
                                                               placeholder=" " />
                                                        <label for="second-name"
                                                               class="absolute text-[#757575]  leading-[16.41px] text-[14px] font-[400] font-roboto   duration-300 transform -translate-y-[18px] translate-x-[11px] top-2 z-10 origin-[0] bg-white  pl-[6px] pr-[4px]   peer-focus:text-[#757575]  peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-2 peer-focus peer-focus:-translate-y-4 left-1">
                                                               Second Name</label>
                                                 </div>
                                          </div>

                                           <FormCustomSelect
                                                 :options="['Without Designation', 'python', 'rust', 'javascript']"
                                                 :default="'Without Designation'" :cssClass="'w-full'"
                                                 :label="'Designation'" class="select z-[9999]" />


                                          <div class=" flex space-x-[10px] sm:flex-wrap sm:space-x-0 sm:space-y-[10px]">
                                                
                                                  <FormCustomSelect
                                                 :options="['Male', 'Femele']"
                                                 :default="'Male'" :cssClass="'w-full max-w-[400px]'"
                                                 :label="'Male'" class="select z-[1100]" />


                                                 <div class="relative">
                                                        <input type="date" id="date"  value="2018-07-22"
                                                               class="block px-[21px]  min-w-[400px] sm:w-full leading-[16.41px] text-[14px] font-[400] font-roboto  h-[50px]  text- text-gray-900 bg-transparent rounded-[4px] border border-[#DEE0E4] appearance-none focus:outline-none focus:ring-0 focus:border-[#DEE0E4]"
                                                               placeholder=" " />
                                                        
                                                               <label for="second-name"
                                                               class="absolute text-[#757575]  leading-[16.41px] text-[14px] font-[400] font-roboto   duration-300 transform -translate-y-[18px] translate-x-[11px] top-2 z-10 origin-[0] bg-white  pl-[6px] pr-[4px]   peer-focus:text-[#757575]  peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-2 peer-focus peer-focus:-translate-y-4 left-1">
                                                               Date Of Birth</label>
                                                 </div>


                                          </div>

                                          <div class="relative">
                                                 <input type="email" id="email"  value="biwate8033@yubua.com"
                                                 class="block px-[21px]  w-full leading-[16.41px] text-[14px] font-[400] font-roboto  h-[50px]  text-gray-dark bg-transparent rounded-[4px] border border-[#DEE0E4] appearance-none focus:outline-none focus:ring-0 focus:border-[#DEE0E4]"
                                                        placeholder=" " />
                                                 <label for="email"
                                                 class="absolute text-[#757575]  leading-[16.41px] text-[14px] font-[400] font-roboto   duration-300 transform -translate-y-[18px] translate-x-[11px] top-2 z-10 origin-[0] bg-white  pl-[6px] pr-[4px]   peer-focus:text-[#757575]  peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-2 peer-focus peer-focus:-translate-y-4 left-1">
                                                        Email</label>
                                          </div>

                                          <div class=" flex space-x-[10px] sm:flex-wrap sm:space-x-0 sm:space-y-[10px]">
                                                 <div class="relative">
                                                        <input type="text" id="parent-folder" value="Parent Folder"
                                                               class="block px-[21px]  min-w-[400px] sm:w-full leading-[16.41px] text-[14px] font-[400] font-roboto  h-[50px]  text- text-gray-900 bg-transparent rounded-[4px] border border-[#DEE0E4] appearance-none focus:outline-none focus:ring-0 focus:border-[#DEE0E4]"
                                                               placeholder=" " />
                                                        <label for="parent-folder"
                                                               class="absolute text-[#757575]  leading-[16.41px] text-[14px] font-[400] font-roboto   duration-300 transform -translate-y-[18px] translate-x-[11px] top-2 z-10 origin-[0] bg-white  pl-[6px] pr-[4px]   peer-focus:text-[#757575]  peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-2 peer-focus peer-focus:-translate-y-4 left-1">
                                                               Parent Folder</label>
                                                 </div>

                                                 <div class="relative">
                                                        <input type="number" id="contact-number" value="123456789"
                                                               class="block px-[21px]  min-w-[400px] sm:w-full leading-[16.41px] text-[14px] font-[400] font-roboto  h-[50px]  text- text-gray-900 bg-transparent rounded-[4px] border border-[#DEE0E4] appearance-none focus:outline-none focus:ring-0 focus:border-[#DEE0E4]"
                                                               placeholder=" " />
                                                        <label for="contact-number"
                                                               class="absolute text-[#757575]  leading-[16.41px] text-[14px] font-[400] font-roboto   duration-300 transform -translate-y-[18px] translate-x-[11px] top-2 z-10 origin-[0] bg-white  pl-[6px] pr-[4px]   peer-focus:text-[#757575]  peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-2 peer-focus peer-focus:-translate-y-4 left-1">
                                                               Contact Number</label>
                                                 </div>
                                          </div>

                                          <div class="relative">
                                                 <textarea id="address" required
                                                        class="block px-[21px]  w-full leading-[16.41px] text-[14px] font-[400] font-roboto  h-[100px]  text- text-gray-900 bg-transparent rounded-[4px] border border-[#DEE0E4] appearance-none focus:outline-none focus:ring-0 focus:border-[#DEE0E4]"
                                                        placeholder=" ">Geroev Dnipra st.57, Ukraine</textarea>
                                                 <label for="address"
                                                        class="absolute text-[#757575]  leading-[16.41px] text-[14px] font-[400] font-roboto  duration-300 transform -translate-y-4 top-2 z-10 origin-[0] bg-white px-2 pl-4   peer-focus:text-[#757575]  peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-2 peer-focus peer-focus:-translate-y-4 left-1">
                                                        Address</label>
                                          </div>



                                          <div class=" flex space-x-[10px] sm:flex-wrap sm:space-x-0 sm:space-y-[10px]">
                                                 <div class="relative">
                                                        <input type="text" id="emergency-person" required value="-"
                                                               class="block px-[21px]  min-w-[400px] sm:w-full leading-[16.41px] text-[14px] font-[400] font-roboto  h-[50px]  text- text-gray-900 bg-transparent rounded-[4px] border border-[#DEE0E4] appearance-none focus:outline-none focus:ring-0 focus:border-[#DEE0E4]"
                                                               placeholder=" " />
                                                        <label for="emergency-person"
                                                               class="absolute text-[#757575]  leading-[16.41px] text-[14px] font-[400] font-roboto   duration-300 transform -translate-y-[18px] translate-x-[11px] top-2 z-10 origin-[0] bg-white  pl-[6px] pr-[4px]   peer-focus:text-[#757575]  peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-2 peer-focus peer-focus:-translate-y-4 left-1">
                                                               Emergency Contact Person</label>
                                                 </div>

                                                 <div class="relative">
                                                        <input type="number" id="emergency-number" required value="12457"
                                                               class="block px-[21px]  min-w-[400px] sm:w-full leading-[16.41px] text-[14px] font-[400] font-roboto  h-[50px]  text- text-gray-900 bg-transparent rounded-[4px] border border-[#DEE0E4] appearance-none focus:outline-none focus:ring-0 focus:border-[#DEE0E4]"
                                                               placeholder=" " />
                                                        <label for="emergency-number"
                                                               class="absolute text-[#757575]  leading-[16.41px] text-[14px] font-[400] font-roboto   duration-300 transform -translate-y-[18px] translate-x-[11px] top-2 z-10 origin-[0] bg-white  pl-[6px] pr-[4px]   peer-focus:text-[#757575]  peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-2 peer-focus peer-focus:-translate-y-4 left-1">
                                                               Emergency Number</label>
                                                 </div>
                                          </div>
                                            <div class="relative">
                                                        <input type="text" id="relationship" required value="-"
                                                               class="block px-[21px]  w-full leading-[16.41px] text-[14px] font-[400] font-roboto  h-[50px]  text- text-gray-900 bg-transparent rounded-[4px] border border-[#DEE0E4] appearance-none focus:outline-none focus:ring-0 focus:border-[#DEE0E4]"
                                                               placeholder=" " />
                                                        <label for="relationship"
                                                               class="absolute text-[#757575]  leading-[16.41px] text-[14px] font-[400] font-roboto   duration-300 transform -translate-y-[18px] translate-x-[11px] top-2 z-10 origin-[0] bg-white  pl-[6px] pr-[4px]   peer-focus:text-[#757575]  peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-2 peer-focus peer-focus:-translate-y-4 left-1">
                                                               Relationship</label>
                                                 </div>





                                          <div class=" flex items-center justify-center space-x-[10px] mx-[83px] sm:flex-wrap sm:space-x-0 sm:space-y-[10px]">
                                                 <button class=" text-center w-[200px] h-[50px]  border border-[#DEE0E4] font-medium  bg-white  font-[400] font-roboto  text-[14px] text-[#757575] rounded-[4px] outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                                                        type="button" @click="toggleModal(1)">
                                                        Cancel
                                                 </button>
                                                 <button class=" text-center w-[200px] h-[50px]  border border-[#DEE0E4] font-medium bg-[#4489FE]  font-[400] font-roboto  text-[14px] text-[#FFFFFF] rounded-[4px] outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                                                        type="button" @click="toggleModal(1)">
                                                        Save Change
                                                 </button>
                                          </div>
                                   </div>
                                   <!--footer-->

                            </div>
                     </div>
              </div>
       </div>
</template>

<script>
import FormCustomSelect from '../embrillons/FormCustomSelect.vue';
export default {
       emits: ['addAction'],
       components: {
              FormCustomSelect
       },

       name: "UserMainInfo",
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
<style scoped>
       

</style>