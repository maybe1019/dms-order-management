

<template>
       <div class="alert   rounded-[4px] space-x-[20px]  text-[14px] font-medium font-roboto max-w-[347px] h-[50px] inline-flex  alert-dismissible fade show shadow "
              role="alert">
              <div class=" bg-[#29B77B] w-[40px] flex justify-center items-center ">
                     <svg xmlns="http://www.w3.org/2000/svg" class="h-full w-6" fill="none" viewBox="0 0 24 24"
                            stroke="white" stroke-width="1">
                            <path stroke-linecap="round" stroke-linejoin="round" d="M5 13l4 4L19 7"
                                   v-if="type === 'success'" />
                            <path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12"
                                   v-if="type === 'error'" />

                            <path stroke-linecap="round" stroke-linejoin="round"
                                   d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                                   v-if="type === 'info'" />
                            <path stroke-linecap="round" stroke-linejoin="round"
                                   d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"  v-if="type === 'warning'" />




                     </svg>


              </div>
              <div v-bind:class="`text-[${color}]`" class=" flex justify-center items-center"  > {{ message }}</div>
              <button type="button"
                     class="btn-close box-content w-4 h-4 p-1 ml-auto text-yellow-900 border-none rounded-none opacity-50 focus:shadow-none focus:outline-none focus:opacity-100 hover:text-yellow-900 hover:opacity-75 hover:no-underline"
                     data-bs-dismiss="alert" aria-label="Close"></button>
       </div>
</template>
<script>

export default {
       name: "SnackBar",

       props: {
              type: String,
              message: String,
              color: String

       }
};
</script>
<style scoped>
</style>
