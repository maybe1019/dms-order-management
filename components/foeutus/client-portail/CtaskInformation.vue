<template>
       <div>
              <ProgresBar />
              <div class=" mt-[88px] flex   justify-between space-x-[35px]  sm:space-x-0 sm:flex-wrap   ">
                     <div class="flex flex-col w-full max-w-[827px]	sm:w-full">
                            <CtaskInfoFilter />
                            <TaskTable class="mt-[50px]"/>

                     </div>
                     <div class="w-full max-w-[338px] h-[629px] sm:w-full">
                            <ProjectCommunication/>
                     </div>
                     
              </div>

       </div>



</template>
<script>
import TaskTable from './TaskTable.vue'
import CtaskInfoFilter from './CtaskInfoFilter.vue';
import ProgresBar from './ProgresBar.vue';
import ProjectCommunication from './ProjectCommunication.vue'
export default {
       name: "CtaskInformation",
       components: {
              CtaskInfoFilter,
              ProgresBar,
              TaskTable,
              ProjectCommunication
       }
};
</script>
<style scoped>
</style>
