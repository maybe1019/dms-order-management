<template>
       <div class="w-full border-[0.5px] rounded-[4px]  border-gray-light font-roboto p-[24px] flex flex-col">


              <div class=" flex flex-col justify-center items-center w-full ">

                     <div class="flex  flex-col w-full justify-center items-center max-w-[792.07px] h-[29px] ">
                            <div class=" font-roboto font-[400] text-[24px] leading-[28.13px]"> Order Part List</div>
                            <p class="text-[#757575]  leading-[14.6px] text-[12px] font-[400] font-roboto ">Please enter
                                   all
                                   information</p>
                     </div>


              </div>






              <table class="w-full border-collapse   text-left overflow-scroll  mt-[69px] ">
                     <thead class="  ">
                            <tr class="border-b leading-[14.46px] text-[#212121] text-[12px] font-roboto font-medium">


                                   <th scope="col" class="py-[13px] !pl-[25px]  w-[217px] ">
                                          Order Part Name
                                   </th>
                                   <th scope="col" class="py-[13px] w-[173px]">

                                          Files / Job Description


                                   </th>

                                   <th scope="col" class="py-[13px] w-[208px] ">
                                          Service
                                   </th>
                                   <th scope="col" class="py-[13px] w-[125px] ">

                                          <div class="w-[74px]">
                                                 Total Service
                                                 Price
                                          </div>

                                   </th>
                                   <th scope="col" class="py-[13px] w-[132px]  ">
                                          Total Add-Ons <br />
                                          Price
                                   </th>

                                   <th scope="col" class="py-[13px] w-[83px] ">
                                          Total <br />
                                          Price
                                   </th>
                                   <th scope="col" class="py-[13px] w-[99px] ">
                                          Manual <br />
                                          Discount
                                   </th>
                                   <th scope="col" class="py-[13px] w-[73px] ">
                                          Final <br>
                                          Price
                                   </th>
                                   <th scope="col" class="py-[13px] w-[42px] !pr-[7px]  ">
                                          Status
                                   </th>


                            </tr>
                     </thead>

                     <tbody class="">

                            <tr
                                   class="  hover:bg-gray-50  leading-[16.41px] text-[#212121] text-[14px] font-roboto font-[400] h-[91.5px]">



                                   <td class=" !pl-[25px]  w-[217px] py-0 text-black-dark">

                                          <div class="w-[180px]">
                                                 Spanish
                                          </div>




                                   </td>
                                   <td class=" py-0  w-[173px]">
                                          <div class="w-[130px]">
                                                 50 Files <a href="" class="text-blue-dark underline">View
                                                        Details</a>
                                          </div>







                                   </td>
                                   <td class="  w-[208px]  py-0">

                                          Sacramento <br />
                                          Transcription - Spanish



                                   </td>

                                   <td class=" w-[125px] py-0">
                                          $100

                                   </td>


                                   <td class="  w-[132px]  py-0">
                                          $40

                                   </td>

                                   <td class=" w-[83px]  py-0">
                                          $140


                                   </td>

                                   <td class="  w-[99px] py-0">
                                          $20


                                   </td>

                                   <td class=" w-[73px] py-0 text-blue-dark font-medium">
                                          $160


                                   </td>
                                   <td class=" w-[42px] !pr-[7px] py-0">
                                          <div class=" flex items-center justify-end ">
                                                 <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                                                        stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                                                        <path stroke-linecap="round" stroke-linejoin="round"
                                                               d="M6.75 12a.75.75 0 11-1.5 0 .75.75 0 011.5 0zM12.75 12a.75.75 0 11-1.5 0 .75.75 0 011.5 0zM18.75 12a.75.75 0 11-1.5 0 .75.75 0 011.5 0z" />
                                                 </svg>

                                          </div>

                                   </td>


                            </tr>








                     </tbody>
              </table>



       </div>
</template>
<script>
export default {
       name: "OrderPartList",
};
</script>
<style scoped>
tr th,
tr td {
       border-top: none;
       border-left: none;
       border-right: none;
       padding-right: 0px;
       padding-left: 0px;
}
</style>
