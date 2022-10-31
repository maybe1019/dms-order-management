<template>
       <div class="mt-[37px]">
              <div class="font-roboto font-[400] text-[18px] text-black-dark leading-[21.09px]">
                     Add-Ons

              </div>
              <div class="flex space-x-[10px] mt-[27px]">
                     <CustomSelect :options="['Select Add-On: Turnaround', 'python', 'rust', 'javascript']"
                            :default="'Select Add-On: Turnaround'" :cssClass="' w-full max-w-[358px] font-roboto font-[400] text-[14px] leading-[16.41px] !text-gray-dark'" class="select" />
                     <CustomSelect :options="['Select Add-On Audio_Quality', 'python', 'rust', 'javascript']"
                            :default="'Select Add-On Audio_Quality'" :cssClass="' w-full max-w-[358px] font-roboto font-[400] text-[14px] leading-[16.41px] !text-gray-dark'"
                            class="select" />
              </div>
       </div>

</template>
       <script>
import CustomSelect from '../embrillons/CustomSelect.vue';
export default {
       name: "AddOns",
       components: {
              CustomSelect
       }
};

</script>
       <style scoped>
       </style>
       