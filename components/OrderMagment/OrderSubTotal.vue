<template>
       <div class="w-full border-[0.5px] h-[101px] rounded-[4px] border-[#DADCE0] flex justify-between items-center px-[33px]">
              <div class="w-full max-w-[195px] font-roboto leading-[21.09px] font-[400] text-black-dark text-[18px] "> 
                     Sub Total: $500.50
              </div>
              <div class="  flex items-center justify-end space-x-[15px]  w-full">
                     <button class=" text-center w-[118px] h-[50px]  border border-[#DEE0E4] leading-[16.41px]  bg-white  font-[500] font-roboto  text-[14px] text-[#757575] rounded-[4px] outline-none focus:outline-none ease-linear transition-all duration-150"
                            type="button">
                            Cancel
                     </button>
                     <button class=" text-center w-[237px] h-[50px]  leading-[16.41px] bg-[#4489FE]  font-medium font-roboto  text-[14px] text-[#FFFFFF] rounded-[4px] outline-none focus:outline-none ease-linear transition-all duration-150"
                            type="button">
                            Save Changes
                     </button>
              </div>
       </div>
</template>
<script>
export default {
       name: "OrderSubTotal",
       components: {

       }
}
</script>
<style scoped>

</style>
       