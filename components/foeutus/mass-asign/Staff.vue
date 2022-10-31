<template>
       <div
              class="min-w-[669px] min-h-[782px] px-[21px] py-[39px] border-[0.5px] border-[#DADCE0] flex flex-col space-y-[30px] rounded-[4px] sm:w-full">
              <HeaderSearch :source="'Staff'" />
              <TaskAsignation />
              <TaskAsignation />
       </div>
</template>
<script>
import HeaderSearch from './HeaderSearch.vue';
import TaskAsignation from './TaskAsignation.vue';
export default {
       name: "Staff",
       components: {
              HeaderSearch,
              TaskAsignation

       }
};
</script>
<style scoped>
</style>
