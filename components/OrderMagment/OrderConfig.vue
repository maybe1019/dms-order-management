<template>
       <div
              class=" border-[0.5px] border-[#DADCE0] px-[50px] rounded-[4px] w-full h-[209px]  pt-[40px] ">
              <div class="flex justify-center w-full items-center flex-col">
                     <div class="font-roboto leading-[28.13px] font-[400] text-[24px] text-center text-black-dark">
                            Order Part Config</div>
                   



              </div>
              <div class="flex space-x-[10px]  mt-[42px]">
                     <CustomSelect :options="['Test Project', 'Python', 'Rust', 'Javascript']" :default="'Test Project'"
                            :cssClass="' w-full max-w-[375px] text-[14px] font-[400] leading-[16.41px] !text-gray-dark'" class="select" />
                     <CustomSelect :options="['Transcription', 'Python', 'Rust', 'Javascript']" :default="'Transcription'"
                            :cssClass="' w-full max-w-[375px] text-[14px] font-[400] leading-[16.41px] !text-gray-dark'" class="select" />

                            <CustomSelect :options="['English Trancription ($3)', 'Python', 'Rust', 'Javascript']" :default="'English Trancription ($3)'"
                                   :cssClass="' w-full max-w-[375px] text-[14px] font-[400] leading-[16.41px] !text-gray-dark'"
                                   class="select" />
              </div>



       </div>
</template>
       <script>
import CustomSelect from '../embrillons/CustomSelect.vue';
export default {
       name: "OrderConfig",
       components: {
              CustomSelect
       }
};
</script>
       <style scoped>
       </style>
       