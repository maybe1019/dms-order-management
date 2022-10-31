<template>
       <div class="ml-[101px]">
              <!-- passowr and and security -->
              <div class=" flex flex-col space-y-[51px]">
                     <div id="passsecurity "
                            class="font-roboto text-[24px] leading-[28.13px] font-[400]  text-[#212121]">
                            Password & Security
                     </div>
                     <div class=" flex flex-row justify-between space-x-[15px]">

                            <div class="relative  w-[402px]">
                                   <input type="password" required value="hello deskvantage"
                                          class="block px-[21px]  w-full leading-[16.41px] text-[14px] font-[400] font-roboto  h-[50px]  text- text-gray-900 bg-transparent rounded-[4px] border border-[#DEE0E4] appearance-none  focus:outline-none focus:ring-0 focus:border-[#DEE0E4]"
                                          placeholder=" " />
                                   <label for="emergency-person"
                                          class="absolute text-[#757575]  leading-[16.41px] text-[14px] font-[400] font-roboto   duration-300 transform -translate-y-[18px] translate-x-[11px] scale-100 top-2 z-10 origin-[0] bg-white  pl-[6px] pr-[4px]   peer-focus:text-[#757575]  peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-2 peer-focus:scale-75 peer-focus:-translate-y-4 left-1">
                                          Password
                                   </label>
                            </div>
                            <button class=" text-center w-[168px] h-[50px] font-medium bg-[#4489FE]  font-roboto  text-[14px] text-[#FFFFFF] rounded-[4px] outline-none focus:outline-none  mb-1 ease-linear transition-all duration-150"
                                   type="button">
                                   Edit
                            </button>

                     </div>
                     <div class=" flex flex-row justify-between space-x-[15px]">

                            <div class="relative  w-[402px]">
                                   <input type="email" required value="example@gmail.com"
                                          class="block px-[21px]  w-full  leading-[16.41px] text-[14px] font-[400] font-roboto  h-[50px]  text- text-gray-900 bg-transparent rounded-[4px] border border-[#DEE0E4] appearance-none  focus:outline-none focus:ring-0 focus:border-[#DEE0E4]"
                                          placeholder=" " />
                                   <label for="emergency-person"
                                          class="absolute text-[#757575]  leading-[16.41px] text-[14px] font-[400] font-roboto   duration-300 transform -translate-y-[18px] translate-x-[11px] scale-100 top-2 z-10 origin-[0] bg-white  pl-[6px] pr-[4px]   peer-focus:text-[#757575]  peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-2 peer-focus:scale-75 peer-focus:-translate-y-4 left-1">
                                          email
                                   </label>
                            </div>
                            <button class=" text-center w-[168px] h-[50px]  font-medium bg-[#4489FE]    font-roboto  text-[14px] text-[#FFFFFF] rounded-[4px] outline-none focus:outline-none mb-1 ease-linear transition-all duration-150"
                                   type="button">
                                   Edit
                            </button>

                     </div>
                     <!-- language and timezone -->
                     <div id="language-time "
                            class="font-roboto text-[24px] leading-[28.13px] font-[400]  text-[#212121]">
                            Language & Timezone
                     </div>

                     <div class=" flex flex-row  justify-between space-x-[15px] ">


                            <FormCustomSelect :options="['English', 'Frensh', 'Italic']" :default="'English'"
                                   :cssClass="'w-full max-w-[402px]'" :label="'Language'" class="select z-[9999]" />
                            <button class=" text-center w-[168px] h-[50px]   font-medium bg-[#4489FE]    font-roboto  text-[14px] text-[#FFFFFF] rounded-[4px] outline-none focus:outline-none  mb-1 ease-linear transition-all duration-150"
                                   type="button">
                                   Language
                            </button>

                     </div>
                     <div class=" flex flex-row  justify-between space-x-[15px] ">

                          
                            <FormCustomSelect
                                   :options="['UTC−03:30, Nepal Standar', 'UTC−03:30, Nepal Standar', 'UTC−03:30, Nepal Standar']"
                                   :default="'UTC−03:30, Nepal Standar'" :cssClass="'w-full max-w-[402px]'"
                                   :label="'Timezone'" class="select z-[1100]" />

                            <button class=" text-center w-[168px] h-[50px]  font-medium bg-[#4489FE]   font-roboto  text-[14px] text-[#FFFFFF] rounded-[4px] outline-none focus:outline-none  mb-1 ease-linear transition-all duration-150"
                                   type="button">
                                   Save
                            </button>

                     </div>

                     <div id="notification"
                            class=" mb-[51px] font-roboto text-[24px] leading-[28.13px] font-[400]  text-[#212121]">
                            Notification
                     </div>

                     <div>
                            <div class="flex flex-row justify-between space-x-[15px]">
                                   <div class="font-roboto text-[15px] leading-[20px] font-medium  text-[#212121]">
                                          E-mail
                                          Notification</div>
                                   <div>
                                          <label for="default-toggle"
                                                 class="inline-flex relative items-center cursor-pointer">
                                                 <input type="checkbox" checked value="" id="default-toggle"
                                                        class="sr-only peer">
                                                 <div
                                                        class="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300  rounded-full peer  peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all  peer-checked:bg-[#4489FE]">
                                                 </div>
                                                 <span class="ml-3 text-sm font-medium text-gray-900 "></span>
                                          </label>

                                   </div>
                            </div>
                            <div
                                   class=" font-roboto text-[13px] leading-[18px] font-[400] tracking-[0.25px] text-[#757575]">
                                   Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo
                            </div>
                     </div>


              </div>

       </div>
</template>

<script>
import FormCustomSelect from '../../embrillons/FormCustomSelect.vue';
export default {
       name: "Setting",
       components: {
              FormCustomSelect
       },
};
</script>

<style scoped>
</style>
