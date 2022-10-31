<template>

       <div>

              <ActivityHeaderFilter :title="'My Active Task'" />
              <table class="w-full border-collapse   text-left  mt-[57px] ">
                     <thead class="  ">
                            <tr
                                   class="border-none leading-[14.46px] text-[#212121] text-[12px] font-roboto font-medium">


                                   <th scope="col" class="py-3 pb-[19.75px] px-6  ">
                                          Task Name
                                   </th>
                                   <th scope="col" class="py-3 pb-[19.75px] px-6 ">
                                          Staff
                                   </th>
                                   <th scope="col" class="py-3 pb-[19.75px] px-6 ">
                                          Last Activity
                                   </th>

                                   <th scope="col" class="py-3 pb-[19.75px] px-6 ">
                                          Added Files
                                   </th>
                                   <th scope="col" class="py-3 pb-[19.75px] px-6 ">

                                   </th>
                                   <th scope="col" class="py-3 pb-[19.75px] px-6 ">

                                   </th>

                            </tr>
                     </thead>

                     <tbody class="leading-[16.41px] text-[#212121] text-[14px] font-roboto font-[400]">
                            <tr class=" h-[91.5px] hover:bg-gray-50 ">

                                   <td class="py-0 px-6 ">
                                          
                                          Task Name Number 1
                                   </td>
                                   <td class="py-0 px-6">

                                          <div class="flex flex-none items-center">
                                                 <div class="flex-none">
                                                        <img type="button"
                                                               class="w-[40px] h-[40px] rounded-full cursor-pointer"
                                                               src="profil.jpeg" alt="User Name" />
                                                 </div>

                                                 <div class="pl-[11px]">
                                                        <span
                                                               class="  font-roboto p-username text-[14px] text-[#212121] font-[400] ">{{
                                                                             name
                                                               }}</span><br />
                                                        <span class=" text-[#757575]">Manager</span>
                                                 </div>
                                          </div>
                                   </td>
                                   <td class="py-0 px-6">
                                          <div class="flex flex-col  text-[#757575] items-start">
                                                 <div>
                                                        08/24/2019 </div>

                                                 <div>
                                                        Due 3 days ago
                                                 </div>
                                          </div>
                                   </td>

                                   <td class="py-0 px-6 ">
                                          <div
                                                 class=" flex justify-center items-center  min-w-[78.32px] h-[24px] bg-[#E9F0FD] text-[#4489FE] space-x-[11px] rounded-[2px] ">
                                                 <p>Trascription.doc</p>


                                                 <svg xmlns="http://www.w3.org/2000/svg"
                                                        class="h-4 w-4 hover:cursor-pointer" fill="none"
                                                        viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                                                        <path stroke-linecap="round" stroke-linejoin="round"
                                                               d="M6 18L18 6M6 6l12 12" />
                                                 </svg>
                                          </div>

                                   </td>

                                   <td class="py-0 px-6">

                                          <div
                                                 class="border-dashed flex flex-col justify-center items-center font-roboto font-[400] text-black-dark text-[14px] leading-[16.41px] min-w-[257px] h-[56px]  bg-[#F9FBFF] border border-[1px] border-[#D8D8D8] rounded-[4px]">

                                                 <p>Drag and drop Task Here</p>

                                                 <p class="text-[#757575]">Only .doc files</p>
                                          </div>

                                   </td>


                                   <td class="py-0 px-6">
                                          <div id="dropdownBottomButton" data-dropdown-toggle="activityDropdown"
                                                 data-dropdown-placement="bottom">
                                                 <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24"
                                                        fill="#757575"
                                                        class="text-center cursor-pointer -translate-y-[3px]"
                                                        viewBox="0 0 16 16" id="IconChangeColor">
                                                        <path d="M3 9.5a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3zm5 0a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3zm5 0a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3z"
                                                               id="mainIconPathAttribute" fill="#757575"></path>
                                                 </svg>
                                          </div>



                                   </td>

                            </tr>


                     </tbody>
              </table>
              <!-- Dropdown menu filter-->
              <div id="activityDropdown" class="hidden z-[9999]  rounded divide-y divide-gray-100 ">
                     <LastActivityEdition class=" transform  " />
              </div>


       </div>
</template>
<script>
import LastActivityEdition from './LastActivityEdition.vue'
import ActivityHeaderFilter from './ActivityHeaderFilter.vue';
export default {
       name: "OtherTaskActivity",
       components: {
              ActivityHeaderFilter,
              LastActivityEdition
       },
       data() {
              return (
                     {
                            name: "user name",
                            more: false

                     }
              )
       },
       methods: {
              setMore() {
                     this.more = !this.more
              }
       }
};
</script>
<style scoped>
td,
tr th {
       border: none;
       border-bottom: 0.5px solid #C4C4C4 !important;
}
</style>
