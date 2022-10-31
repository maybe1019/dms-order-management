<template>
  <div class="grid gap-4 grid-cols-4 grid-rows-1">
    <DashStatBrick />
    <DashStatBrick />
    <DashStatBrick />
    <DashStatBrick />
  </div>
</template>
<script>
import DashStatBrick from "../embrillons/DashStatBrick.vue";
export default {
  name: "StafStackBrick",
  components: {
    DashStatBrick,
  },
};
</script>
<style scoped>

</style>
