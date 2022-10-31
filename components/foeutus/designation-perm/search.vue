<template>
    <div class="">

<!-- search zone -->
        <div class="flex space-x-[12px] items-center ">
            <div
                class="relative flex flex-row justify-between border border-gray-300 bg-white w-[342px] h-[50px] rounded-[4px] search-container">
                <label for="search-staff">
                    <div class="flex absolute inset-y-0 left-0 items-center pl-3 cursor-pointer">
                        <svg xmlns="http://www.w3.org/2000/svg" class="h-[14.58px] w-[14.58px] " fill="none" viewBox="0 0 24 24"
                stroke="#757575" stroke-width="2">
                <path stroke-linecap="round" stroke-linejoin="round" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
              </svg>
                    </div>
                </label>

                <input type="text" id="search-staff"
                    class="w-full search-input font-roboto text-gray-900 rounded-[4px] focus:outline-none block pl-16 p-2.5 "
                    placeholder="Enter Module Name" />
            </div>
            <!-- plus icon -->
            <div class="flex space-x-2 justify-center">
                <div>
                    <button type="button"
                        class="inline-block rounded-full bg-[#4489FE] text-white leading-normal  shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out w-9 h-9">



                        <svg xmlns="http://www.w3.org/2000/svg" aria-hidden="true" focusable="false" data-prefix="fas"
                            class="w-6 h-6 mx-auto" fill="none" viewBox="0 0 24 24" stroke="currentColor"
                            stroke-width="2">
                            <path stroke-linecap="round" stroke-linejoin="round" d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
                        </svg>


                    </button>
                </div>
            </div>
        </div>

        <!-- module list -->
        <div class="flex flex-col space-y-[6px] pt-[19px]">
            <div v-for="(item ,index) in items" :key="item"
                class=" group hiduration-300 hover:bg-[#F3F7FF] bg-white  rounded-[4px] h-[70px]  border flex flex-row space-x-[24.57px] py-[15px] px-[24.5px] items-center ">
                <div class="">
                   


                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20"  stroke-width="1"
                        class="group-hover:fill-blue-dark fill-gray-dark" viewBox="0 0 16 16" id="IconChangeColor">
                        <path fill-rule="evenodd" d="M5.5 6.5A.5.5 0 0 1 6 6h4a.5.5 0 0 1 0 1H6a.5.5 0 0 1-.5-.5z"
                            id="mainIconPathAttribute" ></path>
                        <path
                            d="M2 2a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v13.5a.5.5 0 0 1-.777.416L8 13.101l-5.223 2.815A.5.5 0 0 1 2 15.5V2zm2-1a1 1 0 0 0-1 1v12.566l4.723-2.482a.5.5 0 0 1 .554 0L13 14.566V2a1 1 0 0 0-1-1H4z"
                            id="mainIconPathAttribute"></path>
                    </svg>


                </div>
                <div> <span
                        class=" font-roboto font-[400] text-[16px] leading-[18.75px] text-[#212121]">Ordering</span><br />
                    <span class="font-roboto font-[400] text-[13px] leading-[18.75px] text-[#757575]">Module
                        Description</span>
                </div>

            </div>
           

        </div>

    </div>
</template>

<script>
export default {
    name: "Search",
    data() {
        return {
            items:[1,1,1,1,1]
        }
    }
};
</script>

<style scoped>
</style>
