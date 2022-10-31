<template>
       <div class="flex items-start flex-row spacex-[101px] mt-[38.5px] mx-auto max-w-[823px]">
              <ul class="flex mb-0 list-none items-start  flex-col space-y-[23px] flex-none ">
                     <li class=" flex-auto">
                            <a class="text-roboto font-[400] text-[16px] leading-[18.75px]  py-3    cursor-pointer"
                           
                            v-scroll-to="{ element: '#passsecurity', duration: 100 }"
                           
                                   v-on:click="toggleTabs(1)"
                                   v-bind:class="{' text-[#212121]': openTab !== 1, 'text-[#4489FE] ': openTab === 1}">
                                   Security
                            </a>
                     </li>
                    
                    <li class="flex-auto">
                            <a class="text-roboto font-[400] text-[16px] leading-[18.75px]  py-3   cursor-pointer"
                                   v-on:click="toggleTabs(2)"
                           v-scroll-to="{ element: '#notification', duration: 100 }"

                                   v-bind:class="{ ' text-[#212121]': openTab !== 2, 'text-[#4489FE] ': openTab === 2 }">
                                   Notification
                            </a>
                     </li>
                     <li class="flex-auto">
                            <a class="text-roboto font-[400] text-[16px] leading-[18.75px]  py-3   cursor-pointer"
                                   v-on:click="toggleTabs(3)"
                                   
                                   v-bind:class="{ ' text-[#212121]': openTab !== 3, 'text-[#4489FE] ': openTab === 3}">
                                   Payments
                            </a>
                     </li>

                      <li class="flex-auto">
                            <a class="text-roboto font-[400] text-[16px] leading-[18.75px]  py-3   cursor-pointer"
                                   v-on:click="toggleTabs(4)"
                                   v-bind:class="{ ' text-[#212121]': openTab !== 4, 'text-[#4489FE] ': openTab === 4}">
                                   Language & Time
                            </a>
                     </li>
                      <li class="flex-auto">
                            <a class="text-roboto font-[400] text-[16px] leading-[18.75px]  py-3   cursor-pointer"
                                   v-on:click="toggleTabs(5)"
                                   v-bind:class="{ ' text-[#212121]': openTab !== 5, 'text-[#4489FE] ': openTab === 5}">
                                   Transaction History
                            </a>
                     </li>
                      <li class="flex-auto">
                            <a class="text-roboto font-[400] text-[16px] leading-[18.75px]  py-3   cursor-pointer"
                                   v-on:click="toggleTabs(6)"
                                   v-bind:class="{ ' text-[#212121]': openTab !== 6, 'text-[#4489FE] ': openTab === 6}">
                                   Privacy
              </a>
                     </li>
              </ul>
              <div class="tab-content" >
                     <div class="relative flex flex-col min-w-0  w-full ">
                            




                                        <!-- content -->
                                        <Setting/>
                                   
                     
                     </div>
              </div>

              
       </div>
</template>
<script>

import Setting from './setting/Setting.vue';
export default {
       name: "UserSettingSecure",
       components: {
           Setting   
       },
       data() {
              return {
                     openTab: 1
              }
       },
       methods: {
              toggleTabs: function (tabNumber) {
                     this.openTab = tabNumber
              }
       }
};
</script>
<style scoped>
</style>
