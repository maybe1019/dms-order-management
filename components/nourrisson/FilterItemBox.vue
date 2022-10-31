<template>


       <div class=" overflow-x-hidden overflow-y-auto  inset-0 z-[9999] outline-none focus:outline-none justify-center items-center flex">
              <div class="relative my-2 mx-10  h-[236px]  w-[460px] sm:w-full ">
                     <!--content-->
                     <div
                            class="   rounded-[4px] z-[9999] shadow-lg relative px-[32px] py-[30px]  flex flex-row justify-between w-full  max-w-[460px] bg-white outline-none ">
                            <!--header-->

                            <!--body-->
                            <div class="space-y-[15px]">
                                   <div
                                          class=" text-left align-middle font-medium font-roboto text-[18px] text-[700] leading-[16.41px] text-[#212121] ">
                                          Designation</div>

                                   <div class="flex items-center space-x-[13px] ">
                                          <input id="default-checkbox" type="checkbox"
                                                 class="w-4 h-4 text-blue-600  accent-blue-dark rounded border-gray-300 focus:ring-blue-500 ">
                                          <label for="default-checkbox"
                                                 class=" align-middle text-[#212121] text-[14px] leading-[16.41px] text-[400] font-roboto  ">
                                                 All</label>
                                   </div>
                                   <div class="flex items-center space-x-[13px] ">
                                          <input id="default-checkbox" type="checkbox" checked
                                                 class="w-4 h-4 text-blue-600  accent-blue-dark rounded border-gray-300 focus:ring-blue-500 ">
                                          <label for="default-checkbox"
                                                 class=" align-middle text-[#212121] text-[14px] leading-[16.41px] text-[400] font-roboto  ">
                                                 Proofreader</label>
                                   </div>
                                   <div class="flex items-center space-x-[13px] ">
                                          <input id="default-checkbox" type="checkbox"
                                                 class="w-4 h-4 text-blue-600  accent-blue-dark rounded border-gray-300 focus:ring-blue-500 ">
                                          <label for="default-checkbox"
                                                 class=" align-middle text-[#212121] text-[14px] leading-[16.41px] text-[400] font-roboto  ">
                                                 Manager</label>
                                   </div>
                                   <div class="flex items-center space-x-[13px] ">
                                          <input id="default-checkbox" type="checkbox"
                                                 class="w-4 h-4 text-blue-600  accent-blue-dark rounded border-gray-300 focus:ring-blue-500 ">
                                          <label for="default-checkbox"
                                                 class=" align-middle text-[#212121] text-[14px] leading-[16.41px] text-[400] font-roboto  ">
                                                 Transcriptionist</label>
                                   </div>



                            </div>

                            <div class="space-y-[15px]">
                                   <div
                                          class=" text-left align-middle font-medium font-roboto text-[18px] text-[700] leading-[16.41px] text-[#212121] ">
                                          Tasks</div>

                                   <div class="flex items-center space-x-[13px] ">
                                          <input id="default-checkbox" type="checkbox"
                                                 class="w-4 h-4 text-blue-600  accent-blue-dark rounded border-gray-300 focus:ring-blue-500 ">
                                          <label for="default-checkbox"
                                                 class=" align-middle text-[#212121] text-[14px] leading-[16.41px] text-[400] font-roboto  ">
                                                 All</label>
                                   </div>

                                   <div class="flex items-center space-x-[13px] ">
                                          <input id="default-checkbox" type="checkbox"
                                                 class="w-4 h-4 text-blue-600  accent-blue-dark rounded border-gray-300 focus:ring-blue-500 ">
                                          <label for="default-checkbox"
                                                 class=" align-middle text-[#212121] text-[14px] leading-[16.41px] text-[400] font-roboto  ">
                                                 With Tasks</label>
                                   </div>
                                   <div class="flex items-center space-x-[13px] ">
                                          <input id="default-checkbox" type="checkbox" checked
                                                 class="w-4 h-4 text-blue-600  accent-blue-dark rounded border-gray-300 focus:ring-blue-500 ">
                                          <label for="default-checkbox"
                                                 class=" align-middle text-[#212121] text-[14px] leading-[16.41px] text-[400] font-roboto  ">
                                                 Without Tasks</label>
                                   </div>


                            </div>







                            <!--footer-->

                     </div>
              </div>
       </div>

</template>

<script>
export default {
       emits: ['filterAction'],

       name: "FilterItemBox",
       data() {
              return {
                     showModal: true
              }
       },
       methods: {
              toggleModal: function (option) {

                     this.$emit('filterAction', option)
              }
       }
}
</script>