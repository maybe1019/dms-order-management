<template>
       <div>

              <div
                     class="overflow-x-hidden overflow-y-auto fixed inset-0 z-50    outline-none focus:outline-none justify-center  flex">
                     <div class="relative w-auto my-6 mx-auto   max-h-[463px]  max-w-[586px]  sm:w-full">
                            <!--content-->
                            <div
                                   class=" rounded-[4px] shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
                                   <!--header-->
                                   <div
                                          class="flex items-start justify-between py-5 px-[43px] border-b border-solid border-slate-200 rounded-t">
                                          <div
                                                 class="text-[18px] font-[400] font-roboto leading-[21.09px] text-[#212121]">
                                                 Create New Order
                                          </div>

                                   </div>
                                   <!--body-->
                                   <div class="relative  mx-[43px] flex-auto space-y-[19px] pt-[39px] mb-[69px]">


                                          <div class="relative">
                                                 <input type="text" id="project-name" value="Project Name"
                                                        class="block px-[21px]  w-full leading-[16.41px] text-[14px] font-[400] font-roboto  h-[50px]  text- text-gray-900 bg-transparent rounded-[4px] border border-[#DEE0E4] appearance-none  focus:outline-none focus:ring-0 focus:border-[#DEE0E4]"
                                                        placeholder=" " />
                                                 <label for="project-name"
                                                        class="absolute text-[#757575]  leading-[16.41px] text-[14px] font-[400] font-roboto   duration-300 transform -translate-y-[18px] translate-x-[11px] scale-100 top-2 z-10 origin-[0] bg-white  pl-[6px] pr-[4px]   peer-focus:text-[#757575]  peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-2 peer-focus:scale-75 peer-focus:-translate-y-4 left-1">
                                                        Project Name</label>
                                          </div>







                                          <FormCustomSelect
                                                 :options="['MalWithout Designatione', 'Without Designation']"
                                                 :default="'Without Designation'" :cssClass="'w-full'"
                                                 :label="'Designation'" class="select z-[99]" />

                                          <div class="relative">
                                                 <input type="date" id="date" value="2018-07-22"
                                                        class="block px-[21px]  w-full leading-[16.41px] text-[14px] font-[400] font-roboto  h-[50px]  text- text-gray-900 bg-transparent rounded-[4px] border border-[#DEE0E4] appearance-none  focus:outline-none focus:ring-0 focus:border-[#DEE0E4]"
                                                        placeholder=" " />
                                                 <label for="date"
                                                        class="absolute text-[#757575]  leading-[16.41px] text-[14px] font-[400] font-roboto   duration-300 transform -translate-y-[18px] translate-x-[11px] scale-100 top-2 z-10 origin-[0] bg-white  pl-[6px] pr-[4px]   peer-focus:text-[#757575]  peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-2 peer-focus:scale-75 peer-focus:-translate-y-4 left-1">
                                                        Date Of Birth</label>
                                          </div>


                                          <div class="relative">
                                                 <textarea id="address"
                                                        class="block px-[21px]  w-full leading-[16.41px] text-[14px] font-[400] font-roboto  h-[130px]  text- text-gray-900 bg-transparent rounded-[4px] border border-[#DEE0E4] appearance-none  focus:outline-none focus:ring-0 focus:border-[#DEE0E4]"
                                                        placeholder=" ">Geroev Dnipra st.57, Ukraine</textarea>
                                                 <label for="address"
                                                        class="absolute text-[#757575]  leading-[16.41px] text-[14px] font-[400] font-roboto   duration-300 transform -translate-y-[18px] translate-x-[11px] scale-100 top-2 z-10 origin-[0] bg-white  pl-[6px] pr-[4px]   peer-focus:text-[#757575]  peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-2 peer-focus:scale-75 peer-focus:-translate-y-4 left-1">
                                                        Address</label>
                                          </div>





                                          <div
                                                 class="space-y-[37px] border-dashed flex-col flex justify-center items-center font-roboto font-[400] text-black-dark text-[14px] leading-[16.41px] w-full h-[291px] bg-[#F9FBFF]  border-[1px] border-[#D8D8D8] rounded-[4px]">



                                                 <div class="w-[69px] h-[44.52px]">

                                                        <svg class="svg-icon"
                                                               style="width: 100%; height: 100%;vertical-align: middle;fill: #4489FE ;overflow: hidden;"
                                                               viewBox="0 0 1024 1024" version="1.1"
                                                               xmlns="http://www.w3.org/2000/svg">
                                                               <path
                                                                      d="M815.104 363.008a307.2 307.2 0 0 0-606.72 0A256 256 0 0 0 256 870.4h204.8v-204.8H358.4l153.6-204.8 153.6 204.8h-102.4v204.8h204.8a256 256 0 0 0 47.104-507.392z" />
                                                        </svg>
                                                 </div>
                                                 <div> Drag and drop Task Here</div>


                                                 <label for="uploadfile">

                                                        <div
                                                               class="text-white flex justify-center items-center font-roboto border h-[36px] bg-[#4489FE] border-[#4489FE] rounded-[4px] w-[147px] hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium  focus:outline-none">
                                                               Upload Files
                                                        </div>

                                                        <input type="file" id="uploadfile" name="uploadfile" hidden
                                                               accept=".doc,.docx,application/msword" />
                                                 </label>




                                          </div>






                                          <div class=" flex items-center justify- center space-x-[10px] mx-[83px]">
                                                 <button class=" text-center w-[200px] h-[50px]  border border-[#DEE0E4] font-medium  bg-white   font-roboto  text-[14px] text-[#757575] rounded-[4px] outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                                                        type="button" @click="toggleModal(1)">
                                                        Cancel
                                                 </button>
                                                 <button class=" text-center w-[200px] h-[50px]  border border-[#DEE0E4] font-medium bg-[#4489FE]  font-roboto  text-[14px] text-[#FFFFFF] rounded-[4px] outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                                                        type="button" @click="toggleModal(1)">
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
import FormCustomSelect from '../../embrillons/FormCustomSelect.vue';
export default {
       emits: ['addAction'],

       name: "AddOrder",
       components: { FormCustomSelect },
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