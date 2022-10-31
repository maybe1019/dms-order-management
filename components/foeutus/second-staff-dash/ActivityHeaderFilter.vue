<template>
  <div class="flex flex-row justify-between items-center project-header font-roboto">
    <div class="font-roboto leading-[25.78px] font-[400] text-[22px]">
      {{ title }}
    </div>

    <div class="flex space-x-[18.5px]">
      <div class="flex items-center space-x-[8.5px]">
        <div class="font-roboto text-[14px] leading-[16.41px] font-[400] text-[#757575]">
          Filter
        </div>

        <div class="cursor-pointer h-[10px] w-[15px] flex justify-center items-center">
          <svg  viewBox="0 0 48 48"  xmlns="http://www.w3.org/2000/svg">
              <path d="M6 36h12v-4h-12v4zm0-24v4h36v-4h-36zm0 14h24v-4h-24v4z" fill="#757575" />
              <path d="M0 0h48v48h-48z" fill="none"  />
            </svg>
        </div>
      </div>
      <div class="flex items-center space-x-[8.5px]">
        <span class="font-roboto text-[14px] leading-[16.41px] font-[400] text-[#757575]">
          Sort
        </span>

        <div class="cursor-pointer h-[10px] w-[15px] flex justify-center items-center">
          <svg  viewBox="0 0 48 48"  xmlns="http://www.w3.org/2000/svg">
              <path d="M6 36h12v-4h-12v4zm0-24v4h36v-4h-36zm0 14h24v-4h-24v4z" fill="#757575" />
              <path d="M0 0h48v48h-48z" fill="none"  />
            </svg>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "ActivityHeaderFilter",
  props: ['title']
};
</script>
<style scoped>
</style>
