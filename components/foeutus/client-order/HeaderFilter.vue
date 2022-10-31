<template>
       <div class="font-roboto">

              <div v-show="showAddOrder">
                     <AddOrder @addAction="displayAddStaff" />
              </div>




              <div class="flex justify-between items-center mt-[87px]">
                     <div class="text-[24px] leading-[28.13px] ">Orders List
                     </div>
                     <div class="flex space-x-5">


                            <button type="button" v-on:click="displayAddStaff"
                                   class="text-white font-roboto border  bg-[#4489FE] border-[#4489FE]  rounded-[4px]   w-[183px] hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium  px-5 py-2.5 mr-2 mb-2  focus:outline-none ">
                                   New Order
                            </button>
                            <div>

                                   <div
                                          class="relative flex flex-row justify-between border border-gray-300 bg-gray-50 max-w-[285px] h-[44px] rounded-[4px] search-container">
                                          <label for="search-staff">
                                                 <div
                                                        class="flex absolute inset-y-0 left-0 items-center pl-3 cursor-pointer">
                                                        <svg xmlns="http://www.w3.org/2000/svg"
                                                               class="h-[14.58px] w-[14.58px] " fill="none"
                                                               viewBox="0 0 24 24" stroke="#757575" stroke-width="2">
                                                               <path stroke-linecap="round" stroke-linejoin="round"
                                                                      d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                                                        </svg>
                                                 </div>
                                          </label>

                                          <input type="text" id="search-staff"
                                                 class="bg-white  search-input font-roboto text-gray-900 rounded-[4px] focus:outline-none block pl-16 p-2.5 "
                                                 placeholder="Search" />
                                   </div>

                            </div>

                            <!-- filter -->
                            <div class="flex items-center space-x-[8.5px]">
                                   <div class=" font-[400] text-[14px] leading-[16.41px] font-roboto">Filter</div>

                                   <div class="icon cursor-pointer h-[10px] w-[15px]" id="dropdownBottomButton"
                                          data-dropdown-toggle="dropdownBottom" data-dropdown-placement="bottom">

                                          <svg viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg">
                                                 <path d="M6 36h12v-4h-12v4zm0-24v4h36v-4h-36zm0 14h24v-4h-24v4z"
                                                        fill="#757575" />
                                                 <path d="M0 0h48v48h-48z" fill="none" />
                                          </svg>
                                   </div>
                            </div>
                            <div class="flex items-center space-x-[8.5px]">
                                   <span class=" font-[400] text-[14px] leading-[16.41px] font-roboto">Sort</span>

                                   <div class="icon cursor-pointer h-[10px] w-[15px]" id="dropdownBottomButton"
                                          data-dropdown-toggle="dropdownBottom" data-dropdown-placement="bottom">

                                          <svg viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg">
                                                 <path d="M6 36h12v-4h-12v4zm0-24v4h36v-4h-36zm0 14h24v-4h-24v4z"
                                                        fill="#757575" />
                                                 <path d="M0 0h48v48h-48z" fill="none" />
                                          </svg>
                                   </div>
                            </div>
                     </div>
              </div>



       </div>
</template>

<script>
import AddOrder from './AddOrder.vue';
import InviteStaff from './../../nourrisson/InviteStaff.vue';
export default {
       name: "HeaderFilter",
       components: {

              InviteStaff,
              AddOrder

       },
       data() {
              return {
                     showAddOrder: false,
                     showInViteStaff: false,
                     showFilterOption: false
              }
       },
       methods: {
              displayAddStaff() {
                     this.showAddOrder = !this.showAddOrder
              },
              displayInviteStaff() {
                     this.showInViteStaff = !this.showInViteStaff
              },
              displayFilterOption() {
                     this.showFilterOption = !this.showFilterOption
              }



       }




};
</script>

<style scoped>
.search-input {
       height: 100%;
       width: 100%;
       font-size: 14px;
       color: rgba(117, 117, 117, 1);
       line-height: 16.41px;
}

.icon {
       width: 20px;
       height: 20px;
       color: #757575;
}
</style>
