<template>
  <div>
    <ActivityHeaderFilter :title="'My Active Task'" />

    <table class="w-full border-collapse   text-left mt-[57px] ">
      <thead class="  ">
        <tr class="border-none leading-[14.46px] text-[#212121] text-[12px] font-roboto font-medium">


          <th scope="col" class="py-3 pb-[19.75px] px-6 ">
            Task Name
          </th>
          <th scope="col" class="py-3 pb-[19.75px] px-6">
            Last Activity
          </th>
          <th scope="col" class="py-3 pb-[19.75px] px-6">
            Descriprion
          </th>
          <th scope="col" class="py-3 pb-[19.75px] px-6">

          </th>


        </tr>
      </thead>
      <tbody class="leading-[16.41px] text-[#212121] text-[14px] font-roboto font-[400]">
        <tr class="  hover:bg-gray-50 ">

          <td class="py-0 px-6 ">
            <div class="flex items-center">
              Task Name Number 1
            </div>

          </td>
          <td class="py-0 px-6">
            <div class="h-[91.5px] flex items-center text-[#757575]   ">

              <div class=" space-y-[3px] flex flex-col">
                <span>08/24/2019</span>
                <span> 02:30 PM</span>
              </div>
            </div>
          </td>
          <td class="py-0 px-6  ">
            <div class="  h-[91.5px] max-w-[353px]  text-gray-dark ">
              <p class="w-full h-full flex items-center text-ellipsis overflow-hidden ">
                One morning, when Gregor Samsa woke from troubled dreams, he found himself transformed in his bed into a
                horrible vermin. He lay on his armour-like back,
              </p>

            </div>

          </td>
          <td class="py-0 px-6  ">
            <div class="flex items-center space-x-[5.3px] justify-center h-[91.5px]">

              <button type="button"
                class="text-blue-dark font-roboto bg-white border h-[36px] border-[#4489FE] rounded-[4px] w-[117.6px] focus:outline-none hover:bg-gray-100 font-medium px-5 py-2.5  focus:outline-none">
                View
              </button>

              <button type="button"
                class="text-white font-roboto border h-[36px] bg-[#4489FE] border-[#4489FE] rounded-[4px] w-[117.6px] hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium px-5 py-2.5 focus:outline-none">
                Accept
              </button>
            </div>
          </td>



        </tr>









      </tbody>
     
    </table>




  </div>
</template>

<script>
import ActivityHeaderFilter from './ActivityHeaderFilter.vue'
export default {
  name: 'ActivittTask',
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
