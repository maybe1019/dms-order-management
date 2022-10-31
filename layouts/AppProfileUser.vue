<template>
    <div class="flex ml-9 ">
        <div class="flex flex-none items-center mr-3">
            <button
                id="user-menu-button"
                data-v-74aba0be=""
                type="button"
                aria-expanded="false"
                aria-haspopup="true"
                class="bg-white rounded-full flex items-center focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
            >
                <img :src="'profil.jpeg'" alt="" class="h-8 w-8 rounded-full" />
            </button>
        </div>
        <div class="flex flex-col">
            <span class="text-sm font-[400] text-black-dark">Serhii Movchan</span>
             <div class="flex items-center space-x-[5px] flex-none">
                            <span class="leading-[20px] font-roboto font-medium text-[14px] text-[#0FAA58]">Active
                            </span>
                            <span > <svg xmlns="http://www.w3.org/2000/svg" class="h-[20px] w-[15px]  rounded-[2px] stroke-[#0FAA58]"
                                    fill="#0FAA58" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                                    <path stroke-linecap="round" stroke-linejoin="round" d="M19 9l-7 7-7-7" />
                                </svg></span>
                        </div>


        </div>
    </div>
</template>
<script>
export default {
    name: 'AppProfileUser',
    computed: {
        user() {
            return true
        },
    },
}
</script>
