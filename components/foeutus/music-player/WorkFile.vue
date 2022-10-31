<template>
       <div class="min-w-[400px] min-h-[600px]  border border-[0.5px] flex items-center flex-col rounded-[4px] ">

              <div class="font-roboto font-[400] text-[24px] leading-[28.13px] text-[#212121]">Work Files</div>
              <div class="font-roboto font-[400] text-[12px] leading-[14.06px] text-[#757575] ">Only .doc files</div>
              <div class="mt-[25.55px]">

                     <input type="file" class="hidden" id="filetask">

                     <label for="filetask">
                            <div
                                   class="flex justify-center items-center px-6 py-2 border-[0.5px] border-[#4489FE]  min-w-[161.61px] min-h-[40px] text-[#4489FE] font-medium text-[14] leading-[16.41px]  rounded-[4px] hover:cursor-pointer hover:bg-opacity-5 focus:outline-none  transition duration-150 ease-in-out">Upload
                                   More Files</div>
                     </label>


              </div>





              <div class="mt-[38px]  w-full">
                     <div
                            class="audio   py-[12.5px] font-roboto font-[400] text-[14px] leading-[16.41px] text-[#212121]   flex flex-row justify-around items-center hover:bg-[#E9F0FD]">
                            <div>Audio_File_1.mp3</div>
                            <div>2KB</div>
                            <div class=" opacity-0 more cursor-pointer">
                                   <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none"
                                          viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                                          <path stroke-linecap="round" stroke-linejoin="round"
                                                 d="M5 12h.01M12 12h.01M19 12h.01M6 12a1 1 0 11-2 0 1 1 0 012 0zm7 0a1 1 0 11-2 0 1 1 0 012 0zm7 0a1 1 0 11-2 0 1 1 0 012 0z" />
                                   </svg>
                            </div>

                     </div>
                     <div
                            class="audio   py-[12.5px] font-roboto font-[400] text-[14px] leading-[16.41px] text-[#212121]   flex flex-row justify-around items-center hover:bg-[#E9F0FD]">
                            <div>Audio_File_1.mp3</div>
                            <div>2KB</div>
                            <div class=" opacity-0 more cursor-pointer">
                                   <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none"
                                          viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                                          <path stroke-linecap="round" stroke-linejoin="round"
                                                 d="M5 12h.01M12 12h.01M19 12h.01M6 12a1 1 0 11-2 0 1 1 0 012 0zm7 0a1 1 0 11-2 0 1 1 0 012 0zm7 0a1 1 0 11-2 0 1 1 0 012 0z" />
                                   </svg>
                            </div>

                     </div>
                     <div
                            class="audio   py-[12.5px] font-roboto font-[400] text-[14px] leading-[16.41px] text-[#212121]   flex flex-row justify-around items-center hover:bg-[#E9F0FD]">
                            <div>Audio_File_1.mp3</div>
                            <div>2KB</div>
                            <div class=" opacity-0 more cursor-pointer">
                                   <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none"
                                          viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                                          <path stroke-linecap="round" stroke-linejoin="round"
                                                 d="M5 12h.01M12 12h.01M19 12h.01M6 12a1 1 0 11-2 0 1 1 0 012 0zm7 0a1 1 0 11-2 0 1 1 0 012 0zm7 0a1 1 0 11-2 0 1 1 0 012 0z" />
                                   </svg>
                            </div>

                     </div>
              </div>





       </div>
</template>

<script>
export default {
       name: "WorkFile",
};
</script>

<style scoped>
.audio:hover .more {
       opacity: 1;
}
</style>
