<template>
       <div class="flex justify-between items-center space-x-[5px]">
              <div class="text-base">{{ source }}</div>
              <div class="flex space-x-5">

                     <div>

                            <div
                                   class="relative flex flex-row justify-between border border-gray-300 bg-gray-50 max-w-[285px] h-[44px] rounded-[4px] search-container">
                                   <label :for="source">
                                          <div class="flex absolute inset-y-0 left-0 items-center pl-3 cursor-pointer">
                                                 <svg xmlns="http://www.w3.org/2000/svg" class="h-[14.58px] w-[14.58px] " fill="none" viewBox="0 0 24 24"
                stroke="#757575" stroke-width="2">
                <path stroke-linecap="round" stroke-linejoin="round" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
              </svg>
                                          </div>
                                   </label>

                                   <input type="text" :id="source"
                                          class="bg-white  search-input font-roboto text-gray-900 rounded-[4px] focus:outline-none  pl-16 p-2.5 "
                                          placeholder="Search" />
                            </div>

                     </div>

                     <!-- filter -->
                     <div class="flex items-center space-x-[18.5px]">
                            <div class="flex items-center space-x-[8.5px]" v-show="source === 'Staff'">
                                   <div class="text-gray-dark font-[400] text-[14px] leading-[16.41px] font-roboto">Filter</div>

                                   <div class=" flex items-center icon cursor-pointer h-[10px] w-[15px]" id="dropdownBottomButton"
                                          data-dropdown-toggle="dropdownBottom" data-dropdown-placement="bottom">

                                          <svg  viewBox="0 0 48 48"  xmlns="http://www.w3.org/2000/svg">
              <path d="M6 36h12v-4h-12v4zm0-24v4h36v-4h-36zm0 14h24v-4h-24v4z" fill="#757575" />
              <path d="M0 0h48v48h-48z" fill="none"  />
            </svg>
                                   </div>
                            </div>
                            <div class="flex items-center space-x-[8.5px]" v-show="source === 'Staff'">
                                   <span class="text-gray-dark font-[400] text-[14px] leading-[16.41px] font-roboto">Sort</span>

                                   <div class=" flex items-center icon cursor-pointer h-[10px] w-[15px]" id="dropdownBottomButton"
                                          data-dropdown-toggle="dropdownBottom" data-dropdown-placement="bottom">

                                          <svg  viewBox="0 0 48 48"  xmlns="http://www.w3.org/2000/svg">
              <path d="M6 36h12v-4h-12v4zm0-24v4h36v-4h-36zm0 14h24v-4h-24v4z" fill="#757575" />
              <path d="M0 0h48v48h-48z" fill="none"  />
            </svg>
                                   </div>
                            </div>
                     </div>

              </div>
       </div>
</template>
<script>
export default {
       props: ["source"],
       name: "HeaderSearch",
};
</script>
<style scoped>
</style>
