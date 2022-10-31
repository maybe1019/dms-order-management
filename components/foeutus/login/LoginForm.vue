<template>
       <div class="flex flex-col items-center p-[1rem] ">
              <div class="   inset-0 z-50    outline-none">
                     <div class="relative w-auto my-6   ">
                            <!--content-->
                            <div
                                   class=" rounded-[4px]  relative flex flex-col w-full bg-white outline-none focus:outline-none">
                                   <!--header-->

                                   <!--body-->
                                   <div class="relative flex-auto items-center space-y-[39px] min-w-[450px]  ">
                                          <div class="space-y-[18px]">
                                                 <div
                                                        class="text-[24px] font-[400] font-roboto leading-[21.09px] text-[#212121]">
                                                        Sign in to DeskVantage
                                                 </div>
                                                 <div
                                                        class="text-gray-dark text-[14px] font-[400] font-roboto leading-[16.41px] ">
                                                        Enter your details below
                                                 </div>

                                          </div>

                                          <div class="space-y-[30px]">
                                                 <div class="relative flex">
                                                        <input type="email" id="email" value="biwate8033@yubua.com"
                                                               class="block px-[21px]  w-full leading-[16.41px] text-[14px] font-[400] font-roboto  h-[49px]  text- text-gray-900 bg-transparent rounded-l-[4px] border border-[#DEE0E4] appearance-none focus:outline-none focus:ring-0 focus:border-[#DEE0E4] "
                                                               placeholder=" " />
                                                        <label for="email"
                                                               class="  absolute text-[#757575]  leading-[16.41px] text-[14px] font-[400] font-roboto   duration-300 transform -translate-y-[18px] translate-x-[11px] scale-100 top-2 z-10 origin-[0] bg-white  pl-[6px] pr-[4px]   peer-focus:text-[#757575]  peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-2 peer-focus:scale-75 peer-focus:-translate-y-4 left-1">
                                                               Email</label>


                                                        <FormCustomSelect
                                                               :options="['Client', 'Staff', 'Admin', 'Reseller']"
                                                               :default="'Reseller'" :cssClass="'w-full max-w-[103px] '"
                                                               :selectCss="'!bg-[#DEE0E4] !rounded-l-none '" :label="''"
                                                               class=" select z-[100]" />

                                                 </div>
                                                 <div class="relative">
                                                        <input type="password" id="password"
                                                               value="biwate8033@yubua.com"
                                                               class="block px-[21px]  w-full leading-[16.41px] text-[14px] font-[400] font-roboto  h-[49px]  text- text-gray-900 bg-transparent rounded-[4px] border border-[#DEE0E4] appearance-none focus:outline-none focus:ring-0 focus:border-[#DEE0E4] "
                                                               placeholder=" " />
                                                        <label for="password"
                                                               class="absolute text-[#757575]  leading-[16.41px] text-[14px] font-[400] font-roboto   duration-300 transform -translate-y-[18px] translate-x-[11px] scale-100 top-2 z-10 origin-[0] bg-white  pl-[6px] pr-[4px]   peer-focus:text-[#757575]  peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-2 peer-focus:scale-75 peer-focus:-translate-y-4 left-1">
                                                               Password</label>
                                                 </div>
                                                 <!-- remember me -->
                                                 <div class=" flex justify-between items-center ">
                                                        <div class="flex items-center space-x-[10px]">
                                                               
                                                                      <LoginCheckbox :checked="true"  id="muhRadio" />
                                                               <label for="muhRadio"
                                                                      class="text-black-dark  leading-[15.23px] text-[13px] font-[400] font-roboto">


                                                                      Remember
                                                                      me
                                                               </label>
                                                        </div>
                                                        <a herf=""
                                                               class=" underline cursor-pointer text-[#757575]  leading-[15.23px] text-[13px] font-[400] font-roboto ">Forgot
                                                               Password?</a>
                                                 </div>
                                          </div>












                                          <div class=" flex items-center justify- center space-x-[10px]">

                                                 <button class=" text-center w-full h-[50px] font-medium bg-[#4489FE]   font-roboto  text-[14px] text-[#FFFFFF] rounded-[4px] outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                                                        type="button">
                                                        Save Change
                                                 </button>
                                          </div>
                                          <div class=" leading-[16.41px] text-[14px] font-medium font-roboto">
                                                 Don't have an account? <a href=""
                                                        class="underline text-blue-dark">Create new one</a>
                                          </div>
                                   </div>
                                   <!--footer-->

                            </div>
                     </div>
              </div>
       </div>
</template>
<script>
import LoginCheckbox from './LoginCheckbox.vue';
import CheckBox from '../../embrillons/CheckBox.vue';
import FormCustomSelect from '../../embrillons/FormCustomSelect.vue';
export default {
       name: "LoginFrom",
       components: { FormCustomSelect, CheckBox ,LoginCheckbox}
};
</script>
<style scoped>
input[type=radio] {

       -webkit-appearance: none;
}
</style>
