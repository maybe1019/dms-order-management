<template>
  <div class="flex justify-center items-center my-12 ">
    <div class="flex flex-col items-start">
      <div class="flex flex-row justify-between mb-1">
        <div class="border bar-line text-color"></div>

        <p class=" setup-text text-color font-roboto ml-4">
          COMPANY SET-UP
        </p>
      </div>
      <p class="text-3xl font-roboto ">Setup your Company</p>
    </div>
  </div>
</template>
<script>
export default {
  name: "SetupText",
};
</script>
<style scoped>

.setup-text{
    font-size:  12px;
    line-height: 14.06px;
    font-weight: 700;
}
.text-color{
    color:rgba(68, 137, 254, 1)

}
.bar-line{
    background-color: rgba(68, 137, 254, 1);
    width: 80px;
    height: 3px;
    vertical-align: bottom;
    transform: translateY(8px);
}

</style>
