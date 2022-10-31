
<template>
       <div>

              <div
                     class="overflow-x-hidden overflow-y-auto fixed inset-0 z-[9999]    outline-none focus:outline-none justify-center  flex">
                     <div class="relative sm:w-full my-auto mx-auto  w-full    max-w-[608px] overflow-auto">
                            <!--content-->
                            <div class=" rounded-[4px]  relative flex flex-col w-full bg-white   focus:outline-none">
                                   <!--header-->
                                   <div
                                          class="flex items-start justify-between pt-[18.97px] pb-[19.03px] px-[27px] border-b-[1.5px] border-solid shadow-sm">
                                          <div
                                                 class="text-[18px] font-[700] font-roboto leading-[21.09px] text-[#212121]">
                                                 Order Added
                                          </div>

                                   </div>
                                   <!--body-->
                                   <!-- text -->
                                   <div class="mx-auto mt-[49.33px] mb-[61px]">
                                          <div class="w-full flex justify-center">
                                                 <div>
                                                         <svg height="83.33px" version="1.1" viewBox="0 0 20 20" width="83.33px"
                                                        xmlns="http://www.w3.org/2000/svg"
                                                        xmlns:sketch="http://www.bohemiancoding.com/sketch/ns"
                                                        xmlns:xlink="http://www.w3.org/1999/xlink">
                                                        <title />
                                                        <desc />
                                                        <defs />
                                                        <g fill="none" fill-rule="evenodd" id="Page-1" stroke="none"
                                                               stroke-width="1">
                                                               <g fill="#29B77B" id="Core"
                                                                      transform="translate(-44.000000, -86.000000)">
                                                                      <g id="check-circle"
                                                                             transform="translate(44.000000, 86.000000)">
                                                                             <path d="M10,0 C4.5,0 0,4.5 0,10 C0,15.5 4.5,20 10,20 C15.5,20 20,15.5 20,10 C20,4.5 15.5,0 10,0 L10,0 Z M8,15 L3,10 L4.4,8.6 L8,12.2 L15.6,4.6 L17,6 L8,15 L8,15 Z"
                                                                                    id="Shape" />
                                                                      </g>
                                                               </g>
                                                        </g>
                                                 </svg>
                                                 </div>
                                                
                                          </div>
                                          <div
                                                 class="font-roboto font-[400] text-[24px] leading-[28.13px] max-w-[397px] w-full text-center mt-[30.33px]">
                                                 Your specifications have been added.
                                                 What would you like to do next?
                                          </div>


                                          <div class="space-y-[21px] mt-[36px]">
                                                 <div
                                                        class=" w-full flex items-center justify-center space-x-[29px] mt-[53px]">
                                                        <button class=" text-center w-full max-w-[200px] h-[50px]  border border-[#4489FE] font-medium  bg-white   font-roboto  text-[14px] text-[#4489FE] rounded-[4px] outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                                                               type="button" >
                                                               Share
                                                        </button>
                                                        <button class=" text-center w-full max-w-[200px] h-[50px]  bg-[#4489FE]  font-[400] font-roboto  text-[14px] text-[#FFFFFF] rounded-[4px] outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                                                               type="button" >
                                                               Edit Order Details
                                                        </button>
                                                 </div>
                                                 <div
                                                        class=" w-full flex items-center justify-center space-x-[29px] mt-[53px]">
                                                        <button class=" text-center w-full max-w-[200px] h-[50px]  border border-[#29B77B] font-medium  bg-white   font-roboto  text-[14px] text-[#29B77B] rounded-[4px] outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                                                               type="button" >
                                                               Approve & Send Mail
                                                        </button>
                                                        <button class=" text-center w-full max-w-[200px] h-[50px]  bg-[#29B77B]  font-[400] font-roboto  text-[14px] text-[#FFFFFF] rounded-[4px] outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                                                               type="button" >
                                                               Approve
                                                        </button>
                                                 </div>

                                          </div>
                                   </div>






                                   <!--footer-->

                            </div>
                     </div>
              </div>
              <div v-show="showModal" class="opacity-25 fixed inset-0 z-40 bg-black-dark"></div>
       </div>
</template>

<script>
import FormCustomSelect from '../embrillons/FormCustomSelect.vue';
export default {
       emits: ['addAction'],
       components: {
              FormCustomSelect
       },

       name: "PostAdded",
       data() {
              return {
                     showModal: true
              }
       },
       methods: {
              toggleModal: function (option) {

                     this.$emit('addAction', option)
              }
       }
}
</script>