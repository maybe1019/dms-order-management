<template>
       <div class="w-full mt-[70px] flex flex-col space-y-[10px]">
              <OrderInformationVue />
              <OrderPartList/>
              <TotalPricing/>
       </div>
</template>
<script>
import TotalPricing from "./TotalPricing.vue"
import OrderInformationVue from './OrderInformation.vue';

import OrderPartList from './OrderPartList.vue';

export default {
       name: "MainInformation",
       components: {
              OrderInformationVue,
              OrderPartList,
              TotalPricing
       }
};
</script>
<style scoped>
</style>
