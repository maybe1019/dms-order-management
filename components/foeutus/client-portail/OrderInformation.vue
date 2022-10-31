<template>




       <div class=" rounded-[4px] border-[0.5px] w-full border-gray-light min-h-[335px] p-[50px] space-y-[50px] relative sm:p-[1rem]">
              <div class=" flex flex-col justify-center items-center w-full ">
                     <p class="leading-[28.13px] text-[24px] font-[400] font-roboto">Order Information</p>
                     <p class="text-[#757575]  leading-[14.6px] text-[12px] font-[400] font-roboto ">Please enter all
                            information</p>
              </div>

              <div
                     class="  flex flex-row space-x-[10px]   relative sm:flex-col sm:space-y-[10px] sm:items-center sm:space-x-0 ">
                     <!-- test -->
                     <div class="flex flex-col space-y-[20.41px]">
                            <div class=" flex space-x-[10px]">
                                   <div class="relative w-full max-w-[267px]">
                                          <input type="text" id="parent-folder" value="3434553" readonly
                                                 class="block px-[21px]  w-full leading-[16.41px] text-[14px] font-[400] font-roboto  min-h-[50px]  text- text-gray-900 bg-transparent rounded-[4px] border border-[#DEE0E4] appearance-none  focus:outline-none focus:ring-0 focus:border-[#DEE0E4]"
                                                 placeholder=" " />
                                          <label for="parent-folder"
                                                               class="absolute text-[#757575]  leading-[16.41px] text-[14px] font-[400] font-roboto   duration-300 transform -translate-y-[18px] translate-x-[11px] scale-100 top-2 z-10 origin-[0] bg-white  pl-[6px] pr-[4px]   peer-focus:text-[#757575]  peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-2 peer-focus:scale-75 peer-focus:-translate-y-4 left-1">
                                                 Job ID</label>
                                   </div>

                                   <div class="relative w-full max-w-[267px]">
                                          <input type="text" id="contact-number" value="Create VR Transcript" readonly
                                                 class="block px-[21px]  w-full leading-[16.41px] text-[14px] font-[400] font-roboto  min-h-[50px]  text- text-gray-900 bg-transparent rounded-[4px] border border-[#DEE0E4] appearance-none  focus:outline-none focus:ring-0 focus:border-[#DEE0E4]"
                                                 placeholder=" " />
                                          <label for="contact-number"
                                                               class="absolute text-[#757575]  leading-[16.41px] text-[14px] font-[400] font-roboto   duration-300 transform -translate-y-[18px] translate-x-[11px] scale-100 top-2 z-10 origin-[0] bg-white  pl-[6px] pr-[4px]   peer-focus:text-[#757575]  peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-2 peer-focus:scale-75 peer-focus:-translate-y-4 left-1">
                                                 Task</label>
                                   </div>
                            </div>
                            <div class=" flex space-x-[10px]">
                                   <div class="relative w-full max-w-[267px]">
                                          <input type="text" id="parent-folder" value="approved" readonly
                                                 class="block px-[21px]  w-full leading-[16.41px] text-[14px] font-[400] font-roboto  min-h-[50px]  text-green-dark bg-transparent rounded-[4px] border border-[#DEE0E4] appearance-none  focus:outline-none focus:ring-0 focus:border-[#DEE0E4]"
                                                 placeholder=" " />
                                          <label for="parent-folder"
                                                               class="absolute  text-[#757575]  leading-[16.41px] text-[14px] font-[400] font-roboto   duration-300 transform -translate-y-[18px] translate-x-[11px] scale-100 top-2 z-10 origin-[0] bg-white  pl-[6px] pr-[4px]   peer-focus:text-[#757575]  peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-2 peer-focus:scale-75 peer-focus:-translate-y-4 left-1">
                                                 Status</label>
                                   </div>

                                   <div class="relative w-full max-w-[267px] ">
                                          <input type="date" id="contact-number" value="2019-12-19" readonly
                                                 class="block px-[21px]  w-full leading-[16.41px] text-[14px] font-[400] font-roboto  min-h-[50px]  text- text-gray-900 bg-transparent rounded-[4px] border border-[#DEE0E4]   focus:outline-none focus:ring-0 focus:border-[#DEE0E4]"
                                                 placeholder=" " />
                                          <label for="contact-number"
                                                               class="absolute text-[#757575]  leading-[16.41px] text-[14px] font-[400] font-roboto   duration-300 transform -translate-y-[18px] translate-x-[11px] scale-100 top-2 z-10 origin-[0] bg-white  pl-[6px] pr-[4px]   peer-focus:text-[#757575]  peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-2 peer-focus:scale-75 peer-focus:-translate-y-4 left-1">
                                                 Dua Date</label>
                                   </div>
                            </div>

                     </div>
                     <!-- text area -->
                     <div class="relative w-full max-w-[700px]">
                            <textarea id="address"  readonly
                                   class="block px-[21px]  w-full leading-[16.41px] text-[14px] font-[400] font-roboto  h-[120px]  text- text-gray-900 bg-transparent rounded-[4px] border border-[#DEE0E4] appearance-none  focus:outline-none focus:ring-0 focus:border-[#DEE0E4]"
                                   placeholder=" ">Comments about tasks</textarea>
                            <label for="address"
                                                               class="absolute text-[#757575]  leading-[16.41px] text-[14px] font-[400] font-roboto   duration-300 transform -translate-y-[18px] translate-x-[11px] scale-100 top-2 z-10 origin-[0] bg-white  pl-[6px] pr-[4px]   peer-focus:text-[#757575]  peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-2 peer-focus:scale-75 peer-focus:-translate-y-4 left-1">
                                   Production Information</label>
                     </div>
              </div>
       </div>
</template>
<script>

export default {
       name: "OrderInformation",

};
</script>
<style scoped>
</style>
