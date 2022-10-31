<template>
       <div class="font-roboto">
              <div v-show="showAddStaff">
                     <AddDesignation @addAction="displayAddStaff" />
              </div>




              <div class="flex justify-between items-center mt-[87px] w-full ">
                     <div class="font-[400] text-[24px]  loading-">Designations List
                     </div>
                     <div class="flex space-x-5">


                            <button type="button" v-on:click="displayAddStaff"
                                   class="text-white  border  text-[14px] text-white bg-[#4489FE] border-[#4489FE]  rounded-[4px] h-[44px]  w-[183px] sm:max-w-[183px] hover:bg-blue-700  font-medium   focus:outline-none">
                                   Add Designation
                            </button>
                            <div>
                                   <div
                                          class="flex flex-row justify-between border border-gray-300 bg-gray-50 max-w-[285px] h-[44px] rounded-[4px] search-container">
                                          <div class="relative">
                                                 <label for="search-staff">
                                                        <div
                                                               class="flex absolute inset-y-0 left-0 items-center pl-3 cursor-pointer">
                                                               <svg xmlns="http://www.w3.org/2000/svg"
                                                                      class="h-6 w-6 text-gray-500" fill="none"
                                                                      viewBox="0 0 24 24" stroke="currentColor"
                                                                      stroke-width="2">
                                                                      <path stroke-linecap="round"
                                                                             stroke-linejoin="round"
                                                                             d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                                                               </svg>
                                                        </div>
                                                 </label>

                                                 <input type="text" id="search-staff"
                                                        class="bg-gray-50 search-input  text-gray-900 rounded-[4px] focus:outline-none block pl-16 p-2.5 "
                                                        placeholder="name@flowbite.com" />
                                          </div>
                                   </div>
                            </div>

                            <div class="flex items-center space-x-[8.5px]">
                                   <div class="font-[400] text-[14px] leading-[16.41px] "
                                          data-dropdown-toggle="filter">
                                          Filter
                                   </div>

                                   <div class="icon cursor-pointer h-[10px] w-[15px]" id="dropdownBottomButton"
                                          data-dropdown-toggle="dropdownBottom" data-dropdown-placement="bottom">

                                          <svg viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg">
                                                 <path d="M6 36h12v-4h-12v4zm0-24v4h36v-4h-36zm0 14h24v-4h-24v4z"
                                                        fill="#757575" />
                                                 <path d="M0 0h48v48h-48z" fill="none" />
                                          </svg>
                                   </div>
                                   <!-- <div  id="filter">
    						<FilterItemBox @filterAction="displayFilterOption" />
    					</div> -->
                            </div>
                            <div class="flex items-center space-x-[8.5px]">
                                   <div class="font-[400] text-[14px] leading-[16.41px] ">
                                          Sort
                                   </div>

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


              <div id="dropdownBottom" class="hidden z-[9999]  rounded divide-y divide-gray-100 ">
                     <FilterItemBox class=" transform -translate-x-60  " />
              </div>

              <table class="w-full  border-collapse   text-left  mt-[91.75px] ">

                     <thead class=" ">
                            <tr class="bg-white  border-b leading-[14.46px] text-[#212121] text-[12px]  font-medium">
                                   <th scope="col" class=" px-[21.37px] pb-[18.75px] pt-[40px]  bg-white">
                                          <CheckBox :checkType="'indeterminate'" :checked="true"
                                                 @selectAll="setSelectAll" />
                                   </th>

                                   <th scope="col" class=" pb-[18.75px] px-6 bg-white pt-[40px]  ">
                                          #
                                   </th>
                                   <th scope="col" class="pb-[18.75px] px-6 bg-white pt-[40px] ">
                                          Designation
                                   </th>
                                   <th scope="col" class="pb-[18.75px] px-6 bg-white pt-[40px] ">
                                          Role
                                   </th>
                                   <th scope="col" class="pb-[18.75px] px-6 bg-white pt-[40px] ">
                                          Staff Amount

                                   </th>
                                   <th scope="col" class="pb-[18.75px] px-6 bg-white text-right pt-[40px] ">
                                          Actions </th>

                            </tr>
                     </thead>


                     <tbody>
                            <tr v-for="(item, index) in items"
                                   class=" h-[91.5px] hover:bg-gray-50  py-0 leading-[16.41px] text-[#212121] text-[14px]  font-[400]"
                                   :key="index">
                                   <td class="px-6 py-0">
                                          <CheckBox :checkType="'determinate'" :checked="itemSelect" :key="checkKey" />

                                   </td>
                                   <td class=" px-6">
                                          1
                                   </td>
                                   <td class="px-6">
                                          Proofreader
                                   </td>

                                   <td class=" px-6">
                                          Proofreader
                                   </td>
                                   <td class="px-6">

                                          12

                                   </td>

                                   <td class="px-6 py-0">
                                          <div class="flex justify-end">
                                                 <svg fill="none" height="16" viewBox="0 0 16 16" width="16"
                                                        xmlns="http://www.w3.org/2000/svg">
                                                        <path d="M10 8C10 9.10457 9.10457 10 8 10C6.89543 10 6 9.10457 6 8C6 6.89543 6.89543 6 8 6C9.10457 6 10 6.89543 10 8Z"
                                                               fill="#757575" />
                                                        <path d="M4 8C4 9.10457 3.10457 10 2 10C0.895431 10 0 9.10457 0 8C0 6.89543 0.895431 6 2 6C3.10457 6 4 6.89543 4 8Z"
                                                               fill="#757575" />
                                                        <path d="M16 8C16 9.10457 15.1046 10 14 10C12.8954 10 12 9.10457 12 8C12 6.89543 12.8954 6 14 6C15.1046 6 16 6.89543 16 8Z"
                                                               fill="#757575" />
                                                 </svg>
                                          </div>

                                   </td>
                            </tr>










                     </tbody>

              </table>
       </div>
</template>

<script>
import CheckBox from '../../embrillons/CheckBox.vue';
import FilterItemBox from '../FilterItemBox.vue';
import SortFilter from '../../embrillons/SortFilter.vue';
import AddStaff from '../../nourrisson/AddStaff.vue';
import InviteStaff from '../../nourrisson/InviteStaff.vue';
import AddDesignation from './AddDesignation.vue';
export default {
       name: "FilterHeader",
       components: {
              AddStaff,
              InviteStaff,
              AddDesignation,
              SortFilter,
              FilterItemBox,
              CheckBox

       },
       data() {
              return {
                     showAddStaff: false,
                     showInViteStaff: false,
                     showFilterOption: false,
                     items: [1, 1, 1],
                     itemSelect: false,
                     checkKey: 0,

              }
       },
       methods: {
              displayAddStaff() {
                     this.showAddStaff = !this.showAddStaff
              },
              displayInviteStaff() {
                     this.showInViteStaff = !this.showInViteStaff
              },
              displayFilterOption() {
                     this.showFilterOption = !this.showFilterOption
              },
              setSelectAll(val) {
                     console.log("select all state", val)
                     if (val) {
                            this.itemSelect = true
                            this.checkKey += 1;



                     } else {
                            this.itemSelect = false
                            this.checkKey += 1;

                     }

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

.text-filters {
       font-size: 14px;
       font-weight: 400;
       line-height: 16.41px;
       color: #757575;
}


tr th,
tr td {
       border-top: none;
       border-left: none;
       border-right: none;
}

table th {

       position: sticky;
       top: 0 !important;
       margin-top: 0px !important;
       z-index: 0;
}
</style>
