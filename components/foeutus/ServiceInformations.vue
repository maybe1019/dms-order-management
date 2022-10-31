<template>
  <div class=" justify-center items-center w-11/12 service-info flex flex-col ">

    <p class="flex justify-center font-roboto ">Select your Service First</p>
    <p> Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
  </div>
</template>
<script>
export default {
  name: "ServiceInformations",
};
</script>
<style scoped>
.service-info {
  height: 500px;
  box-sizing: border-box;

  border: 0.5px solid #dadce0;
  border-radius: 4px;
  margin-left: 0.5rem;
}

.service-info p:nth-child(1){
  font-weight: 400;
  font-size:  24px;
  line-height: 28.13px;

}
.service-info p:nth-child(2){
  font-weight: 400;
  font-size:  12px;
  line-height: 14.06px;
  color: rgba(117, 117, 117, 1);

}
</style>
