
<template>
       <div>
              <div class=" flex justify-center items-center flex-col space-y-[15px] mt-[38px] ">
                     <OrderSelect :options="['All Files', 'Python', 'Rust', 'Javascript']" :default="'All Files'"
                            :cssClass="'w-full max-w-[150px] text-[24px] font-[400] leading-[28.13px]'" class="select"
                            :itemsCss="'text-[12px] font-[400] leading-[14.06px] font-roboto text-black-dark'" />
                     <div class="text-[12px] font-[400] leading-[14.06px] mt-[1px] font-roboto text-gray-dark">
                            Please config all files
                     </div>

              </div>
              <div class=" mt-[32.55px] mb-[36px] flex items-center justify-center space-x-[10.77px]  w-full">
                     <button class=" text-center w-[161.61px] h-[40px]  border border-[#DEE0E4]  bg-white  font-[500] font-roboto  text-[14px] text-[#757575] rounded-[4px] outline-none focus:outline-none  ease-linear transition-all duration-150"
                                   type="button">
                                   Create Order Part
                            </button>

                            <label for="uploadfile">

                                   <div
                                          class="text-white flex justify-center items-center font-roboto  h-[40px] bg-[#4489FE]  rounded-[4px] w-[167.61px] hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium  focus:outline-none">
                                          Upload More Files
                                   </div>

                                   <input type="file" id="uploadfile" name="uploadfile" hidden
                                          accept=".doc,.docx,application/msword" />
                            </label>

              </div>
       </div>

</template>
<script>
import OrderSelect from './../../embrillons/OrderSelect.vue'
export default {
       name: "FileCategorySelect",
       components: {
              OrderSelect
       }
};
</script>
<style scoped>
.hidden-file {
       display: none;
}
</style>
       