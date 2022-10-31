
<template>
       <div :class="itemSelect? 'bg-[#E9F0FD]':' '" class="flex justify-between items-center group hover:cursor-pointer hover:bg-[#E9F0FD] h-[42px] pl-[31px] pr-[29px]">
              <div class="flex space-x-[16px] items-center">
                     <CheckBox :checkType="'determinate'" :checked="itemSelect" :key="checkKey" @isSelect="displayBgState" />
                     <div class="leading-[16.41px] text-[14px] font-roboto  font-[400] text-black-dark">Audio_File_1.mp3</div>
              </div>

              <div class="flex space-x-[27px] items-center">
                     <div class="leading-[16.41px] text-[14px] font-roboto  font-[400] text-black-dark">2KB</div>
                     <div class="  opacity-0 more cursor-pointer group-hover:opacity-[100]">
                                   <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none"
                                          viewBox="0 0 24 24" stroke="#757575" stroke-width="2">
                                          <path stroke-linecap="round" stroke-linejoin="round"
                                                 d="M5 12h.01M12 12h.01M19 12h.01M6 12a1 1 0 11-2 0 1 1 0 012 0zm7 0a1 1 0 11-2 0 1 1 0 012 0zm7 0a1 1 0 11-2 0 1 1 0 012 0z" />
                                   </svg>
                            </div>
              </div>


       </div>
</template>
       <script>
import CheckBox from '../../embrillons/CheckBox.vue';
export default {
       name: "FileCategoryItems",
       components: {
              CheckBox
       },
       data() {
              return {
                     itemSelect: false,
                     checkKey: 0,
              }
       }
       , methods: {
              displayBgState(val) {
                     this.itemSelect = !this.itemSelect
                     this.$emit('itemIsSelected', this.itemSelect)
              }
       }
};
</script>
<style scoped>
</style>
       