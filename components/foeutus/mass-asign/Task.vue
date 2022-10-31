<template>
       <div
              class=" min-w-[523px] min-h-[782px] px-[21px] py-[39px] border-[0.5px] border-[#DADCE0] space-y-[30px] rounded-[4px] bg-[FBFBFB] sm:w-full">
              <HeaderSearch :source="'Task'" />

              <div v-for="(item,index) in items" :key="index" class="w-full  max-w-[481px] h-[76px] shadow  bg-white space-y-[10px] px-[10px] py-[10px]" draggable>
                     <div class="flex flex-row justify-between">
                            <span class="font-roboto font-medium text-[13px] leading-[15.23px] text-black-dark">English
                                   Transcription Part 1</span>
                            <div class="flex items-center">
                                   <div
                                          class="font-roboto font-[400]  text-[11px] leading-[16px] text-gray-dark flex items-center">
                                          08/24/2019</div> &nbsp;
                                   <div class=" ">

                                          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24"
                                                 fill="#757575" class="text-center cursor-pointer -translate-y-[3px]" viewBox="0 0 16 16"
                                                 id="IconChangeColor">
                                                 <path d="M3 9.5a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3zm5 0a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3zm5 0a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3z"
                                                        id="mainIconPathAttribute" fill="#757575"></path>
                                          </svg>
                                   </div>
                            </div>
                     </div>
                     <div class="font-roboto font-[400]  text-[11px] leading-[16px] text-gray-dark">
                            Transcription - English Trancription ($3) • Without Addon

                     </div>
              </div>
              

              
       </div>
</template>

<script>
import HeaderSearch from './HeaderSearch.vue'
export default {
       name: 'Task',
       components: {
              HeaderSearch,
       },
       data() {
              return ({
                     items:[1,1,1,1,1]
              })
       }
}
</script>

<style scoped>
</style>
