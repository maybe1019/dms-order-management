<template>
    <div>
        <ActivityHeaderFilter :title="'Last Activity'" />

        <table class="w-full border-collapse   text-left mt-[57px] ">
            <thead class="  ">
                <tr class="border-none leading-[14.46px] text-[#212121] text-[12px] font-roboto font-medium">


                    <th scope="col" class="py-3 pb-[20.75px]  px-6  ">
                        Type
                    </th>
                    <th scope="col" class="py-3 pb-[20.75px] px-6 ">
                        Time
                    </th>
                    <th scope="col" class="py-3 pb-[20.75px] px-6 ">
                        Last Activity
                    </th>
                    <th scope="col" class="py-3 pb-[20.75px] px-6 ">

                    </th>


                </tr>
            </thead>

            <tbody class="leading-[16.41px] text-[#212121] text-[14px] font-roboto font-[400]">
                <tr class="  hover:bg-gray-50 ">




                    <td class="py-0 px-6 ">
                        <div class="flex items-center h-[91.5px]">
                            <div
                                class=" flex justify-center items-center  w-[78.32px] h-[24px] bg-green-bgsuccess text-[#0FAA58] rounded-[2px] ">
                                Payments
                            </div>
                        </div>

                    </td>
                    <td class="py-0 px-6 text-[#757575]">
                        <div class="h-[91.5px] flex items-center">
                            Yesterday at 6:56 PM

                        </div>
                    </td>
                    <td class=" py-0 px-6 ">
                        <div class="flex items-center h-[91.5px]">
                            <div class="flex  flex-col   items-start">
                                <div>
                                    Paymetns #1231423</div>

                                <div class="text-[#757575]">
                                    You have new payment
                                </div>
                            </div>
                        </div>


                    </td>
                    <td></td>


                </tr>










            </tbody>
        </table>




    </div>
</template>

<script>
import ActivityHeaderFilter from './ActivityHeaderFilter.vue'
export default {
    name: 'LastActivity',
    components: {
        ActivityHeaderFilter
    }
}
</script>

<style scoped>
td,
tr th {
    border: none;
    border-bottom: 0.5px solid #C4C4C4 !important;
}
</style>
