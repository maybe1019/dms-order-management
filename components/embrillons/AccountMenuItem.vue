<template>
    <a href="/account" class="flex items-center h-[4.375rem] sm:text-base">
        <div :class="route == 'account' ? 'bg-blue-dark' : ''" class="w-[0.31rem] mr-[1.125rem] h-full flex-none rounded-tr-lg rounded-br-lg"></div>
        <div :class="route == 'account' ? 'text-blue-dark' : 'text-[#757575]'" class="uppercase text-[0.625rem] text-gray leading-[0.7325rem] text-center flex flex-col items-center">
            <div>
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" :class="
                route == 'account'
                  ? 'text-blue-dark stroke-current fill-current'
                  : ''
              ">
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M8.87774 6.37856C8.87774 8.24523 7.33886 9.75821 5.43887 9.75821C3.53999 9.75821 2 8.24523 2 6.37856C2 4.51298 3.53999 3 5.43887 3C7.33886 3 8.87774 4.51298 8.87774 6.37856ZM20.4933 4.89835C21.3244 4.89835 22 5.56205 22 6.37858C22 7.1962 21.3244 7.85991 20.4933 7.85991H13.9178C13.0856 7.85991 12.4101 7.1962 12.4101 6.37858C12.4101 5.56205 13.0856 4.89835 13.9178 4.89835H20.4933ZM3.50777 15.958H10.0833C10.9155 15.958 11.5911 16.6217 11.5911 17.4393C11.5911 18.2558 10.9155 18.9206 10.0833 18.9206H3.50777C2.67555 18.9206 2 18.2558 2 17.4393C2 16.6217 2.67555 15.958 3.50777 15.958ZM18.5611 20.7778C20.4611 20.7778 22 19.2648 22 17.3992C22 15.5325 20.4611 14.0195 18.5611 14.0195C16.6623 14.0195 15.1223 15.5325 15.1223 17.3992C15.1223 19.2648 16.6623 20.7778 18.5611 20.7778Z"
                :fill="route == 'account' ? '#4489FE' : '#757575'"
              ></path>
            </svg>
            </div>
            <span class="mt-2 text-[0.65rem] font-roboto"> Account </span>
        </div>
    </a>
</template>

<script>
export default {
    name: "AccountMenuItem",
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
