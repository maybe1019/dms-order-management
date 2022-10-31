<template>
  <div
    class="border py-3 px-4  flex flex-row w-full pt-[31px] space-x-[5px] pb-[32px]  max-w-[355px]  rounded-[4px]  justify-between items-center shadow brick smbrick:space-x-0" 
  >
    <p class="font-roboto  float-left font-[400] font-roboto  text-[16px] text-[#212121] leading-[18.75px]">Total Projects</p>
    <p class="font-roboto text-blue-dark text-[18px] leading-[21.09px] right font-[400] ">1024</p>
  </div>
</template>
<script>
export default {
  name: "DashStatBrick",
 


};
</script>
<style scoped>

@media screen and (max-width: 680px) {
  .brick {
    flex-direction: column;
    justify-content: space-between;
    padding-top: 1rem;
    padding-bottom: 1rem; 
    align-items: center;
  }
  p:nth-child(1){
    margin-bottom: 1rem;
  }
}
</style>
