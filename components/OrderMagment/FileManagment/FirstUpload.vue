<template>
        <div
                     class="space-y-[20.48px]  flex-col flex justify-center items-center font-roboto font-[400] text-black-dark text-[14px] leading-[16.41px] w-full">



                     <div class="w-[75px] h-[44.52px]">
                           


                            <svg class="svg-icon"
                                   style="width: 100%; height: 100%;vertical-align: middle;fill: #4489FE ;overflow: hidden;"
                                   viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg">
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
                     <div class="font-roboto text-gray-dark font-[400] text-[14px] leading-[16.41px]">
                            - or -
                     </div>

                     <div
                            class="px-[15.67px]  flex items-center bg-white w-full h-[40px] rounded-[4px] border border-[#DEE0E4] boder-[1px]  space-x-[15.67px] ">

                            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24"
                                   fill="#757575" stroke="#757575" stroke-width="2" stroke-linecap="round"
                                   stroke-linejoin="round" class="feather feather-link-2" id="IconChangeColor">
                                   <path d="M15 7h3a5 5 0 0 1 5 5 5 5 0 0 1-5 5h-3m-6 0H6a5 5 0 0 1-5-5 5 5 0 0 1 5-5h3"
                                          id="mainIconPathAttribute" fill="#ffffff"></path>
                                   <line x1="8" y1="12" x2="16" y2="12"></line>
                            </svg>
                            <input type="url" placeholder="Pastle link to Download"
                                   class="  focus:appearance-none  focus:outline-none   appearance-none  w-full bg-white h-full border-none  font-roboto font-[400] text-[14px] leading-[16.41px]">
                     </div>


              </div>
       </template>
       <script>
       export default {
         name: "FirstUpload",
       };
       </script>
       <style scoped></style>
       