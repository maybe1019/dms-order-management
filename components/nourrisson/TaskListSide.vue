<template>
    <div class="w-[500px] py-5 space-y-[46.5px]  flex flex-col sm:max-w-[500px] mr-[51px]">
        <!-- header -->
        <div class="flex flex-row justify-between items-center">
            <div class="flex flex-row justify-between items-center font-roboto space-x-[18.5px]">
                <div class=" font-roboto  leading-[25.78px] font-[400] text-[22px]">Tasks</div>
                <div class="flex items-center space-x-[8.5px]">
                    <div class="font-roboto text-[14px] leading-[16.41px] font-[400] text-[#757575]">Filter</div>

                   <div class="icon cursor-pointer w-[15px] h-[15px]" id="dropdownBottomButton"
                        data-dropdown-toggle="dropdownBottom" data-dropdown-placement="bottom">

                        <svg  viewBox="0 0 48 48"  xmlns="http://www.w3.org/2000/svg">
              <path d="M6 36h12v-4h-12v4zm0-24v4h36v-4h-36zm0 14h24v-4h-24v4z" fill="#757575" />
              <path d="M0 0h48v48h-48z" fill="none"  />
            </svg>
                    </div>
                </div>
                <div class="flex items-center space-x-[8.5px]">
                    <span class="font-roboto text-[14px] leading-[16.41px] font-[400] text-[#757575]">Sort</span>

                    <div class="icon cursor-pointer w-[15px] h-[15px]" id="dropdownBottomButton"
                        data-dropdown-toggle="dropdownBottom" data-dropdown-placement="bottom">

                        <svg  viewBox="0 0 48 48"  xmlns="http://www.w3.org/2000/svg">
              <path d="M6 36h12v-4h-12v4zm0-24v4h36v-4h-36zm0 14h24v-4h-24v4z" fill="#757575" />
              <path d="M0 0h48v48h-48z" fill="none"  />
            </svg>
                    </div>
                </div>
            </div>
            <!-- linl to all projects -->
            <div>
                <a href="/staff"
                    class=" font-[400] text-[#4489FE] text-[14px] leading-[16.41px] float-right font-roboto underline">All
                    Tasks</a>
            </div>
        </div>
        <!-- list -->
        <div>
            <div class="overflow-x-auto relative ">
                <table class="  border-collapse w-full  text-left  ">
                    <thead class=" h-[53.5px] text-[12px] text-[#212121] font-medium font-roboto  border-b ">
                        <tr>
                            <th scope="col" class=" ">Project Name</th>
                            <th scope="col" class=" pl-28">status</th>
                            <th scope="col" class=" pl-3 pr-0">Staff</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr class="hover:bg-gray-50 h-[53.5px] ">
                            <td scope="row"
                                class="px-0 py-0 font-[400] text-[14px] leading-[16.41px] text-[#212121] font-roboto text-gray-900 whitespace-nowrap ">
                                <div class="flex inline-flex">
                                    <span> English Task</span>
                                    <span class="external">
                                        <svg xmlns="http://www.w3.org/2000/svg" class="h-full w-full"
                                            fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                                            <path stroke-linecap="round" stroke-linejoin="round"
                                                d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                                        </svg>
                                    </span>
                                </div>
                            </td>
                            <td class="py-0 pl-28">
                                <div>
                                    <div class=" font-roboto font-[400] text-[13px] leading-[15.23px] text-[#0FAA58]">
                                        Approved
                                    </div>
                                    <div class=" font-roboto font-[400] text-[13px] leading-[15.23px] text-[#757575]">
                                        Please configure for production
                                    </div>
                                </div>
                            </td>
                            <td class="py-0 pr-0">
                                <div class="flex -space-x-[12px] flex-none">
                                    <img class="w-[29.63px] h-[29.63px] rounded-full border-2 border-white "
                                        src="profil.jpeg" alt="" />
                                    <img class="w-[29.63px] h-[29.63px] rounded-full border-2 border-white "
                                        src="profil.jpeg" alt="" />
                                    <img class="w-[29.63px] h-[29.63px] rounded-full border-2 border-white "
                                        src="profil.jpeg" alt="" />
                                    <a class="flex justify-center items-center w-[29.63px] h-[29.63px] text-xs font-medium text-black-400 avatar-background rounded-full border-2 border-white hover:bg-gray-600 "
                                        href="#">+5</a>
                                </div>
                            </td>
                        </tr>
                        <tr class="hover:bg-gray-50 h-[53.5px] ">
                            <td scope="row"
                                class="px-0 py-0 font-[400] text-[14px] leading-[16.41px] text-[#212121] font-roboto text-gray-900 whitespace-nowrap ">
                                <div class="flex inline-flex">
                                    <span> English Task</span>
                                    <span class="external">
                                        <svg xmlns="http://www.w3.org/2000/svg" class="h-full w-full"
                                            fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                                            <path stroke-linecap="round" stroke-linejoin="round"
                                                d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                                        </svg>
                                    </span>
                                </div>
                            </td>
                            <td class="py-0 pl-28">
                                <div>
                                    <div class=" font-roboto font-[400] text-[13px] leading-[15.23px] text-[#0FAA58]">
                                        Approved
                                    </div>
                                    <div class=" font-roboto font-[400] text-[13px] leading-[15.23px] text-[#757575]">
                                        Please configure for production
                                    </div>
                                </div>
                            </td>
                            <td class="py-0 pr-0">
                                <div class="flex -space-x-[12px] flex-none">
                                    <img class="w-[29.63px] h-[29.63px] rounded-full border-2 border-white "
                                        src="profil.jpeg" alt="" />
                                    <img class="w-[29.63px] h-[29.63px] rounded-full border-2 border-white "
                                        src="profil.jpeg" alt="" />
                                    <img class="w-[29.63px] h-[29.63px] rounded-full border-2 border-white "
                                        src="profil.jpeg" alt="" />
                                   
                                </div>
                            </td>
                        </tr>

                       



                    </tbody>
                </table>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: "ProjectListSide",
};
</script>


<style scoped>
tr th,
tr td {
    border-top: none;
    border-left: none;
    border-right: none;
}

.external {
    width: 20px;
    height: 20px;
    color: #4489fe;
    padding-left: 7px;
    cursor: pointer;
}



.avatar-background {
    background: #dbdbdb;
}



.icon {
    width: 20px;
    height: 20px;
    color: #757575;
}


</style>
