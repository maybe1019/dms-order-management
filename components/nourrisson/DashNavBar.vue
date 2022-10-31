<template>
    <nav
        class="my-nav bg-white   shadow-[0_0px_2px_0px_rgba(0,0,0,0.3)] px-[40px] py-[20px]">
        <div class="flex  justify-between  items-center ">
            <!-- menu left icon -->
            <div class="flex space-x-[76px]">
                <div>
                    <svg xmlns="http://www.w3.org/2000/svg" class="h-[30px] w-[30px] " fill="none" viewBox="0 0 24 24"
                        stroke="currentColor" stroke-width="2">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M4 6h16M4 12h16M4 18h16" />
                    </svg>
                </div>

                <div class="flex flex-none items-center space-x-[19.57px]">
                    <a href="/">
                        <img src="logo.png" class=" w-[26.43px] h-[30px]" alt="Company Logo" />
                    </a>
                    <div class="font-roboto font-[400] text-[22px] text-[#4489FE]">DeskVantage</div>
                </div>

            </div>

            <div class="flex items-center flex-none space-x-[50px]">
                <!-- search zone -->

                <div
                    class="flex flex-row justify-between  bg-[#F1F3F4] items-center  min-w-[574px] h-[50px] px-[20px] mx-[100px] py-[10px] rounded-[4px] ">
                    <div class="relative h-full w-full ">
                        <label for="search">
                            <div class="flex absolute inset-y-0 left-0 items-center pl-3 cursor-pointer">
                                <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 text-gray-500" fill="none"
                                    viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                                    <path stroke-linecap="round" stroke-linejoin="round"
                                        d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                                </svg>
                            </div>
                        </label>


                        <input type="text" id="search"
                            class="bg-transparent  border-transparent focus:!outline-none focus:ring-0 h-full w-full text-[14px] leading-[16.41px]   text-[#757575] font-roboto  block pl-16 p-2.5  "
                            placeholder="Start typing fo search" />
                    </div>

                    <select id="countries"
                        class=" items-end bg-transparent  font-roboto  text-[14px] leading-[16.41px]  text-[#757575] focus:!outline-none  block ">
                        <option selected>All</option>
                        <option value="US">United</option>
                        <option value="CA">Canada</option>
                        <option value="FR">France</option>
                        <option value="DE">Germany</option>
                    </select>
                </div>







                <!-- nav bar icons -->
                <div class="ml-[31px]">
                    <ul class="flex mt-4 space-x-[18.58px]">
                        <li>
                            <div>
                                <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 stroke-[#757575]" fill="none"
                                    viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                                    <path stroke-linecap="round" stroke-linejoin="round"
                                        d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
                                </svg>
                            </div>
                        </li>
                        <li>
                            <div>
                                <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 stroke-[#757575]" fill="none"
                                    viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                                    <path stroke-linecap="round" stroke-linejoin="round"
                                        d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
                                </svg>
                            </div>
                        </li>

                    </ul>
                </div>

                <!-- user profiler -->

                <div class="flex flex-none justify-center space-x-2">
                    <div>
                        <img class="w-10 h-10 rounded-full cursor-pointer" src="profil.jpeg" alt="User Name" />
                    </div>

                    <div>
                        <div class="flex">
                            <span class=" leading-[24px] font-roboto text-[#212121] font-[400]  text-[14px] ">Serhii
                                Movchan</span>

                        </div>

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
            </div>
            <!-- search bar -->


        </div>
    </nav>
</template>

<script>
import DashNavItem from "./DashNavItem.vue"
export default {
    name: "DashNavBar",
    props: {
        dashType: {
            type: String,
            default: '1',
        },


    },
    components: {
        DashNavItem
    }

};
</script>

<style scoped>
* {
    margin: 0px;
}

@media screen and (max-width: 900px) {
    .my-nav {
        margin: 0px;
        padding: 0%;
    }
}
</style>
