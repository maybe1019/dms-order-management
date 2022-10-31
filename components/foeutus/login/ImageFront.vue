<template>

       <div>
              <div class="w-full  logimage  ">

                     <div class="myblack p-[4rem] flex flex-col justify-between    text-white font-roboto">
                            <div class="font-[400] text-[22px] leading-[25.78px]  ">
                                   DeskVantage
                            </div>
                            <div class="flex flex-col items-center">
                                   <div class="font-medium text-[12px] leading-[14px] text-white">TYPE OF USERS:</div>
                                   <div class="font-medium text-[24px] leading-[28px]"> Reseller</div>
                                   <div class="font-[400] text-[14px] leading-[23px]">Lorem ipsum dolor sit amet,
                                          consectetuer
                                          adipiscing elit. Aenean commodo ligula eget dolor.
                                          Aenean massa. Cum sociis natoque penatibus et magnis dis parturient </div>

                            </div>
                            <div class="flex justify-center  items-center space-x-[13px]  ">
                                   <div
                                          class=" w-[14px] h-[14px] border border-white rounded-full border-[1px] bg-black-dark flex justify-center items-center  relative">
                                          <div class=" rounded-full w-[9.8px] h-[9.8px] bg-white center">
                                          </div>

                                   </div>

                                   <div
                                          class=" w-[14px] h-[14px] border border-white rounded-full border-[1px] bg-black-dark flex justify-center items-center  relative">


                                   </div>
                                   <div
                                          class=" w-[14px] h-[14px] border border-white rounded-full border-[1px] bg-black-dark flex justify-center items-center  relative">


                                   </div>
                                   <div
                                          class=" w-[14px] h-[14px] border border-white rounded-full border-[1px] bg-black-dark flex justify-center items-center  relative">


                                   </div>

                            </div>
                     </div>



              </div>

       </div>

</template>
<script>
export default {
       name: "ImageFront",
};
</script>
<style scoped>
.logimage {
       background-image: url("./../../../static/login.jpeg");
       background-repeat: no-repeat;
       background-size: 100% 100%;
       height: 100vh;
}

.myblack {
       background-color: rgba(77, 74, 74,0.5);
       background-size: 100% 100%;
       height: 100vh;

}
</style>
