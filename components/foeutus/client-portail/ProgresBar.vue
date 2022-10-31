<template>
      <div class="mt-[50px]">
       <div class="text-black-dark font-[400] font-roboto text-[24px] leading-[28.13px] ">
              Progress 
       </div>
        <div class=" flex space-x-[10px] mt-[30px]">
              <div class="text-gray-dark font-[400] font-roboto text-[14px] leading-[16.41px] ">
                     00
              </div>
              <div class="w-full border bg-white rounded-full p-[4px] h-[20px]">
                     <div class="bg-blue-dark h-full  rounded-full" style="width: 60%"> </div>
              </div>

              <div class="text-gray-dark font-[400] font-roboto text-[14px] leading-[16.41px] ">
                     60
              </div>
       </div>
      </div>

</template>
<script>
export default {
       name: "ProgressBar"
};
</script>
<style scoped>
</style>
