<template>
       <div :class="options.length === 0 ? ' flex justify-center items-center' : ''"
              class=" border-[0.5px] border-[#DADCE0] pl-[32px] pr-[33px]	bg-white rounded-[4px] w-[792px] h-[782px]  ">
              <div class="flex justify-center w-full items-center flex-col" v-show="options.length === 0">
                     <div class="font-roboto leading-[28.13px] font-[400] text-[24px] text-center text-black-dark">
                            Select Your File First</div>
                     <div class="font-roboto leading-[14.06px] font-[400] text-[12px] text-center text-gray-dark">Please
                            Lorem ipsum dolor sit amet, consectetuer adipiscing elit. </div>



              </div>
              <div class="w-full mt-[38px]" v-show="options.length > 0">
                     <PreviewSetting />
                     <FileSetting/>
                     <AddOns/>
              </div>


       </div>
</template>
       <script>
import FileSetting from './FileSetting.vue'
import AddOns from './AddOns.vue'
import PreviewSetting from '../foeutus/music-player/PreviewSetting.vue';
export default {
       name: "OrderFileDetails",
       data() {
              return {
                     options: [1]
              }
       },
       components: {
              PreviewSetting,
              FileSetting,
              AddOns
       }
};
</script>
       <style scoped>
       </style>
       
