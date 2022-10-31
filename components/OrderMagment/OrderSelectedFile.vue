<template>
       <div  class=" border-[0.5px] border-[#DADCE0] px-[50px] rounded-[4px] w-full h-[106px]  pt-[20px] flex justify-center">
              <FormCustomSelect
                                                 :options="['Select Order Part', 'python', 'rust', 'javascript']"
                                                 :default="'Select Order Part'" :cssClass="' w-full max-w-[375px] !text-[14px] !font-[400] !leading-[16.41px] !text-gray-dark'"
                                                 :label="'Select Files or Order Part First'" class="select z-[9999]" />
       </div>
</template>
       <script>
              import FormCustomSelect from '../embrillons/FormCustomSelect.vue';
export default {
       name: "OrderInformation",
       components: {
              FormCustomSelect
       }
};
</script>
       <style scoped>
       </style>
       