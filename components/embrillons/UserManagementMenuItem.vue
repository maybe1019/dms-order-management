<template>
  <a href="/">
    <div class=" justify-between h-[4.375rem] flex flex-row ">
      <div class="border w-[0.5rem]  h-full flex-none rounded-tr-lg rounded-br-lg"  :class="route == 'user-management' ? 'bg-[#4489FE] ' : ''">

      </div>
      <div
        class=" uppercase text-[0.625rem] leading-[0.7325rem] text-center flex flex-col items-center  text-[#4489FE]">
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" :class="
          route == 'user-management' ? 'text-blue-dark stroke-current fill-current' : ''
        ">
          <path fill-rule="evenodd" clip-rule="evenodd"
            d="M14.2123 7.76241C14.2123 10.4062 12.0489 12.5248 9.34932 12.5248C6.65069 12.5248 4.4863 10.4062 4.4863 7.76241C4.4863 5.11865 6.65069 3 9.34932 3C12.0489 3 14.2123 5.11865 14.2123 7.76241ZM2 17.9173C2 15.47 5.38553 14.8577 9.34933 14.8577C13.3347 14.8577 16.6987 15.4911 16.6987 17.9403C16.6987 20.3877 13.3131 21 9.34933 21C5.364 21 2 20.3666 2 17.9173ZM16.1734 7.84875C16.1734 9.19506 15.7605 10.4513 15.0364 11.4948C14.9611 11.6021 15.0276 11.7468 15.1587 11.7698C15.3407 11.7995 15.5276 11.8177 15.7184 11.8216C17.6167 11.8704 19.3202 10.6736 19.7909 8.87118C20.4885 6.19675 18.4415 3.79542 15.8339 3.79542C15.5511 3.79542 15.2801 3.82417 15.0159 3.87687C14.9797 3.88454 14.9405 3.90179 14.921 3.93245C14.8955 3.97174 14.9141 4.02253 14.9396 4.05606C15.7233 5.13216 16.1734 6.44206 16.1734 7.84875ZM19.3173 13.7023C20.5932 13.9466 21.4317 14.444 21.7791 15.1694C22.0736 15.7635 22.0736 16.4534 21.7791 17.0475C21.2478 18.1705 19.5335 18.5318 18.8672 18.6247C18.7292 18.6439 18.6186 18.5289 18.6333 18.3928C18.9738 15.2805 16.2664 13.8048 15.5658 13.4656C15.5364 13.4493 15.5296 13.4263 15.5325 13.411C15.5345 13.4014 15.5472 13.3861 15.5697 13.3832C17.0854 13.3545 18.7155 13.5586 19.3173 13.7023Z"
            :fill="route == 'user-management' ? '#4489FE' : '#757575'"></path>
        </svg>
        <span class="mt-2 font-roboto "> user management </span>

      </div>
    </div>
  </a>

</template>

<script>
export default {
  name: "DataManagementMenuItem",
  props: {
    route: {
      type: String,
      require: false,
    },
  },
};
</script>

<style scoped>
</style>
