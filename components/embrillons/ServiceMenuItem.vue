<template>
    <a href="/services" class="flex items-center sm:text-base" style="height: 4.375rem">
        <div :class="route == 'services' ? 'bg-blue-dark' : ''" class="w-[0.31rem] mr-[1.125rem] h-full flex-none rounded-tr-lg rounded-br-lg"></div>
        <div :class="route == 'services' ? 'text-blue-dark' : 'text-[#757575]'" class="uppercase text-[0.625rem] leading-[0.7325rem] text-center flex flex-col items-center">
            <div>
                <svg xmlns="http://www.w3.org/2000/svg" width="22" height="24" viewBox="0 0 22 24" fill="none" :class="
                route == 'services'
                  ? 'text-blue-dark stroke-current fill-current'
                  : ''
              ">
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M2.54 2H5.92C7.33 2 8.46 3.15 8.46 4.561V7.97C8.46 9.39 7.33 10.53 5.92 10.53H2.54C1.14 10.53 0 9.39 0 7.97V4.561C0 3.15 1.14 2 2.54 2ZM2.54 13.4697H5.92C7.33 13.4697 8.46 14.6107 8.46 16.0307V19.4397C8.46 20.8497 7.33 21.9997 5.92 21.9997H2.54C1.14 21.9997 0 20.8497 0 19.4397V16.0307C0 14.6107 1.14 13.4697 2.54 13.4697ZM17.4601 2H14.0801C12.6701 2 11.5401 3.15 11.5401 4.561V7.97C11.5401 9.39 12.6701 10.53 14.0801 10.53H17.4601C18.8601 10.53 20.0001 9.39 20.0001 7.97V4.561C20.0001 3.15 18.8601 2 17.4601 2ZM14.0801 13.4697H17.4601C18.8601 13.4697 20.0001 14.6107 20.0001 16.0307V19.4397C20.0001 20.8497 18.8601 21.9997 17.4601 21.9997H14.0801C12.6701 21.9997 11.5401 20.8497 11.5401 19.4397V16.0307C11.5401 14.6107 12.6701 13.4697 14.0801 13.4697Z"
                :fill="route == 'services' ? '#4489FE' : '#757575'"
              ></path>
            </svg>
            </div>
            <span class="mt-2 text-[0.65rem] font-roboto"> Service </span>
        </div>
    </a>
</template>

<script>
export default {
    name: "ServiceMenuItem",
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
