<template>
       <div class="flex flex-col justify-between items-center w-full max-w-[1200px] mx-auto">
              <div class="flex space-x-[483px] items-center w-full max-w-[1175px] mb-[73px] sm:justify-between sm:space-x-0">
                     <!-- back button -->
                     <div>
                            <a href="#" class="flex items-center cursor-pointer">
                                   <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 stroke-[#757575]" fill="none"
                                          viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                                          <path stroke-linecap="round" stroke-linejoin="round" d="M15 19l-7-7 7-7" />
                                   </svg>
                                   <span class="text-[#757575] font-roboto font-[400] text-[14px] leading-[16.41px]">
                                          Back
                                   </span>
                            </a>
                     </div>

                     <!-- task number -->
                     
                            <div class="font-roboto font-[400] text-[24px] leading-[28.13px]">
                                   Task №23424
                            </div>
                     
              </div>

              <div class="flex flex-row space-x-[8px] sm:flex-wrap sm:w-full sm:space-x-0 sm:space-y-[10px]">
                     <Task class="sm:w-full" />
                     <Staff class="sm:min-w-full" />
              </div>
              <div class="flex justify-end items-end  mt-[50px] space-x-[11px] max-w-[1250px] sm:w-full sm:justify-center">
                     <button type="button"
                            class="text-blue-dark font-roboto bg-white border border-[#4489FE] rounded-[4px] w-[183px] focus:outline-none hover:bg-gray-100 font-medium px-5 py-2.5  mb-2 focus:outline-none">
                            Back to Task List
                     </button>

                     <button type="button"
                            class="text-white font-roboto border bg-[#4489FE] border-[#4489FE] rounded-[4px] w-[183px] hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium px-5 py-2.5 mb-2 focus:outline-none">
                            Asign
                     </button>
              </div>
       </div>
</template>

<script>
import Task from './Task.vue'
import Staff from './Staff.vue'
export default {
       name: 'Index',
       components: {
              Task,
              Staff,
       },
}
</script>

<style scoped>
</style>
