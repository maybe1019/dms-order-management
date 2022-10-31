
<template>
       <div class="mt-[45px]">
              <table class="w-full  border-collapse  text-left  ">
                     <thead class=" ">
                            <tr
                                   class="border-none   leading-[14.46px] text-[#212121] text-[12px] font-roboto font-medium">


                                   <th scope="col" class="pt-[40px]  pb-[20px]  px-6 bg-white">
                                          Job ID
                                   </th>
                                   <th scope="col" class="pt-[40px]  pb-[20px] px-6 bg-white">
                                          Task Name
                                   </th>
                                   <th scope="col" class="pt-[40px]  pb-[20px] px-6 bg-white">
                                          Staff Assigned
                                   </th>

                                   <th scope="col" class="pt-[40px]  pb-[20px] px-6 bg-white">
                                          Create/Due Date
                                   </th>
                                   <th scope="col" class="pt-[40px]  pb-[20px] px-6 bg-white">
                                          Order Status
                                   </th>


                            </tr>


                     </thead>

                     <tbody class="leading-[16.41px] text-[#212121] text-[14px] font-roboto font-[400]">
                            <tr v-for="(item, index) in items" :key="item" class="  hover:bg-gray-50 ">

                                   <td class="py-0 px-6 ">
                                          <div class="h-[91.5px] flex items-center   border-b-[#C4C4C4]">
                                                 #42343
                                          </div>

                                   </td>

                                   <td class="py-0 px-6">
                                          <div class="h-[91.5px] flex items-center   border-b-[#C4C4C4]">
                                                 Task Name Number 1
                                          </div>

                                   </td>
                                   <td class="py-0 px-6">
                                          <div class="h-[91.5px] flex items-center   border-b-[#C4C4C4]">
                                                 <a href="" class="text-blue-dark underline">5</a>
                                          </div>

                                   </td>
                                   <td class="py-0 px-6">
                                          <div class="h-[91.5px] text-[#757575] flex items-center   border-b-[#C4C4C4] ">
                                                
                                                <div class=" space-y-[3px] flex flex-col">
                                                 <span>08/24/2019</span>
                                                 <span> 02:30 PM</span>
                                                </div> 
                                          </div>
                                   </td>




                                   <td class="py-0 px-6">
                                          <div class="flex items-center text-blue-dark h-[91.5px] ">
                                                 <div class="h-2.5 w-2.5  rounded-full bg-blue-dark mr-2">
                                                 </div>
                                                 in Progress
                                          </div>
                                   </td>

                            </tr>






                     </tbody>
              </table>


              <TableStepper :dataLength="70" />




       </div>
</template>
<script>
import TableStepper from '../../embrillons/TableStepper.vue';
export default {
       name: "TaskTable",
       components: {
              TableStepper
       },
       data() {
              return ({

                     items: [1, 1, 1, 1, 1, 1, 1, 1, 1]
              })
       }
};
</script>
<style scoped>
td,
tr th {
       border: none;
       border-bottom: 0.5px solid #C4C4C4 !important;
}

table th {

       position: sticky;
       top: 0 !important;
       margin-top: 0px !important;
       z-index: 0;
}
</style>
