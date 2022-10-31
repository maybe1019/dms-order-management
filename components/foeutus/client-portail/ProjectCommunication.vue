<template>
       <div class="  justify-between flex flex-col font-roboto border rounded-[4px] h-full">

              <div>
                     <div class="flex flex-col justify-center items-center w-full py-[19px]">
                            <p class="font-medium text-black-dark leading-[15.23px] text-[13px] ">Group Chat</p>
                            <span class="font-medium text-gray-dark leading-[13.13px] text-[11px]">8 members, 3
                                   online</span>

                     </div>

                     <hr>

              </div>

              <section
                     class="overflow-y-scroll !overflow-x-hidden  flex-col mychat  px-[14px] py-[28px] h-full space-y-[8px]">
                     <!-- chat container -->
                     <div class="flex items-end space-x-[1rem]">
                            <div class="bottom-0 mb-0    w-[30px] h-[30px]">
                                   <img src="profil.jpeg" alt="" width="100%" hight="100%" class="rounded-full">
                            </div>
                            <div class="max-w-[228px] rounded-[15px] bg-[#F9F9F9] p-[12px] relative">
                                   <p class="text-blue-dark font-medium text-[11px]">Ruben de bois</p>
                                   <p class="font-[400] text-black  leading-[20px] text-[13px]">
                                          Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni minus
                                          repellendus
                                          nesciunt in ipsa, optio sapiente sint dolorum, et soluta sunt rem explicabo
                                          quae hic
                                          deleniti voluptate ipsam asperiores dolor.
                                   </p>
                                   <span
                                          class="flex justify-end text-[#A4AAB3] font-[400]   leading-[14.06px] text-[12px]">10:05</span>


                                   <div class="transform -translate-x-[1.5rem] -translate-y-[0.5rem] ">
                                          <svg xmlns="http://www.w3.org/2000/svg" width="23" height="15"
                                                 fill="currentColor" class="absolute" viewBox="0 0 16 16"
                                                 id="IconChangeColor" transform="rotate(270)">
                                                 <path d="M6 .278a.768.768 0 0 1 .08.858 7.208 7.208 0 0 0-.878 3.46c0 4.021 3.278 7.277 7.318 7.277.527 0 1.04-.055 1.533-.16a.787.787 0 0 1 .81.316.733.733 0 0 1-.031.893A8.349 8.349 0 0 1 8.344 16C3.734 16 0 12.286 0 7.71 0 4.266 2.114 1.312 5.124.06A.752.752 0 0 1 6 .278z"
                                                        id="mainIconPathAttribute" fill="#F9F9F9"></path>
                                          </svg>
                                   </div>
                            </div>
                     </div>

                     <div class="flex items-end  justify-end space-x-[1rem] relative">

                            <div class="max-w-[228px] rounded-[15px] bg-blue-dark text-white p-[12px]">
                                   <p class="font-[400] text-white  leading-[20px] text-[13px]">
                                          Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni minus
                                          repellendus
                                          nesciunt in ipsa, optio sapiente sint dolorum, et soluta sunt rem explicabo
                                          quae hic
                                          deleniti voluptate ipsam asperiores dolor.
                                   </p>
                                   <span
                                          class="flex justify-end text-white font-[400]   leading-[14.06px] text-[12px]">10:05</span>
                                   <div class="transform translate-x-full -translate-y-[0.5rem] ">
                                          <svg xmlns="http://www.w3.org/2000/svg" width="23" height="15"
                                                 fill="currentColor" class="absolute" viewBox="0 0 16 16"
                                                 id="IconChangeColor">
                                                 <path d="M6 .278a.768.768 0 0 1 .08.858 7.208 7.208 0 0 0-.878 3.46c0 4.021 3.278 7.277 7.318 7.277.527 0 1.04-.055 1.533-.16a.787.787 0 0 1 .81.316.733.733 0 0 1-.031.893A8.349 8.349 0 0 1 8.344 16C3.734 16 0 12.286 0 7.71 0 4.266 2.114 1.312 5.124.06A.752.752 0 0 1 6 .278z"
                                                        id="mainIconPathAttribute" fill="#4489FE"></path>
                                          </svg>
                                   </div>

                            </div>

                            <!-- <div class="bottom-0 mb-0    w-[30px] h-[30px]">
                                   <img src="profil.jpeg" alt="" width="100%" hight="100%" class="rounded-full">
                            </div> -->
                     </div>
                     <div class="flex items-end space-x-[1rem]">
                            <div class="bottom-0 mb-0    w-[30px] h-[30px]">
                                   <img src="profil.jpeg" alt="" width="100%" hight="100%" class="rounded-full">
                            </div>
                            <div class="max-w-[228px] rounded-[15px] bg-[#F9F9F9] p-[12px] relative">
                                   <p class="text-blue-dark font-medium text-[11px]">Ruben de bois</p>
                                   <p class="font-[400] text-black  leading-[20px] text-[13px]">
                                          Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni minus
                                          repellendus
                                          nesciunt in ipsa, optio sapiente sint dolorum, et soluta sunt rem explicabo
                                          quae hic
                                          deleniti voluptate ipsam asperiores dolor.
                                   </p>
                                   <span
                                          class="flex justify-end text-[#A4AAB3] font-[400]   leading-[14.06px] text-[12px]">10:05</span>


                                   <div class="transform -translate-x-[1.5rem] -translate-y-[0.5rem] ">
                                          <svg xmlns="http://www.w3.org/2000/svg" width="23" height="15"
                                                 fill="currentColor" class="absolute" viewBox="0 0 16 16"
                                                 id="IconChangeColor" transform="rotate(270)">
                                                 <path d="M6 .278a.768.768 0 0 1 .08.858 7.208 7.208 0 0 0-.878 3.46c0 4.021 3.278 7.277 7.318 7.277.527 0 1.04-.055 1.533-.16a.787.787 0 0 1 .81.316.733.733 0 0 1-.031.893A8.349 8.349 0 0 1 8.344 16C3.734 16 0 12.286 0 7.71 0 4.266 2.114 1.312 5.124.06A.752.752 0 0 1 6 .278z"
                                                        id="mainIconPathAttribute" fill="#F9F9F9"></path>
                                          </svg>
                                   </div>
                            </div>
                     </div>
              </section>



              <div class="bottom-0 mb-0">

                     <div class=" w-full flex flex-row  justify-between items-center border px-[13px]  h-[50px]">

                            <input type="file" id="atach-file" class="hidden">
                            <div>
                                   <label for="atach-file"> <svg xmlns="http://www.w3.org/2000/svg"
                                                 class="h-6 w-6 -rotate-[80deg] cursor-pointer" fill="none"
                                                 viewBox="0 0 24 24" stroke="#757575" stroke-width="1">
                                                 <path stroke-linecap="round" stroke-linejoin="round"
                                                        d="M15.172 7l-6.586 6.586a2 2 0 102.828 2.828l6.414-6.586a4 4 0 00-5.656-5.656l-6.415 6.585a6 6 0 108.486 8.486L20.5 13" />
                                          </svg>
                                   </label>

                            </div>

                            <div>
                                   <input type="text" id="message" multiline row="1"
                                          class="bg-white  font-roboto text-gray-900 text-[14px]  focus:outline-none block"
                                          placeholder="Message…" />
               </div>
                            <div>

                                   <svg width="24" height="24" xmlns="http://www.w3.org/2000/svg" fill-rule="evenodd"
                                          fill="#757575" stroke="#757575" stroke-width="0.5" clip-rule="none">
                                          <path
                                                 d="M12 0c6.623 0 12 5.377 12 12s-5.377 12-12 12-12-5.377-12-12 5.377-12 12-12zm0 1c6.071 0 11 4.929 11 11s-4.929 11-11 11-11-4.929-11-11 4.929-11 11-11zm-.045 17.51h-.015c-2.285 0-4.469-1.189-6.153-3.349l.789-.614c1.489 1.911 3.394 2.963 5.364 2.963h.013c1.987-.004 3.907-1.078 5.408-3.021l.791.611c-1.693 2.194-3.894 3.405-6.197 3.41zm-3.468-10.01c.552 0 1 .448 1 1s-.448 1-1 1-1-.448-1-1 .448-1 1-1zm7.013 0c.552 0 1 .448 1 1s-.448 1-1 1-1-.448-1-1 .448-1 1-1z" />
                                   </svg>

                            </div>
                            <div class="w-[25px] h-[25px]">
                                   <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="white"
                                          class="bi bi-telegram" viewBox="0 0 16 16" id="IconChangeColor">
                                          <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM8.287 5.906c-.778.324-2.334.994-4.666 2.01-.378.15-.577.298-.595.442-.03.243.275.339.69.47l.175.055c.408.133.958.288 1.243.294.26.006.549-.1.868-.32 2.179-1.471 3.304-2.214 3.374-2.23.05-.012.12-.026.166.016.047.041.042.12.037.141-.03.129-1.227 1.241-1.846 1.817-.193.18-.33.307-.358.336a8.154 8.154 0 0 1-.188.186c-.38.366-.664.64.015 1.088.327.216.589.393.85.571.284.194.568.387.936.629.093.06.183.125.27.187.331.236.63.448.997.414.214-.02.435-.22.547-.82.265-1.417.786-4.486.906-5.751a1.426 1.426 0 0 0-.013-.315.337.337 0 0 0-.114-.217.526.526 0 0 0-.31-.093c-.3.005-.763.166-2.984 1.09z"
                                                 id="mainIconPathAttribute" fill="#4489FE"></path>
                                   </svg>
                            </div>




                     </div>
              </div>

       </div>
</template>
<script>
export default {
       name: "ProjectCommunication",
};
</script>
<style scoped>
/* width */
section::-webkit-scrollbar {
       width: 5px;


}

/* Track */
section::-webkit-scrollbar-track {
       box-shadow: inset 0 0 5px white;
       border-radius: 4px;
}

/* Handle */
section::-webkit-scrollbar-thumb {
       background: #D8D8D8;
       border-radius: 4px;

}

/* Handle on hover */
section::-webkit-scrollbar-thumb:hover {
       background: #D8D8D8;
}
</style>
