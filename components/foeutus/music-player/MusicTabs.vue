<template>
    <div>

        <!-- header -->

        <div class=" flex justify-between items-center  mb-[73px]">
            <!-- back button -->
            <a href="#" class=" flex items-center cursor-pointer">
                <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 stroke-[#757575]" fill="none" viewBox="0 0 24 24"
                    stroke="currentColor" stroke-width="2">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M15 19l-7-7 7-7" />
                </svg>
                <span class="text-[#757575] font-roboto font-[400] text-[14px] leading-[16.41px]"> Back</span>
            </a>
            <!-- task number -->
            <div class="flex w-full justify-center items-center">
                <div class=" font-roboto font-[400] text-[24px] leading-[28.13px]"> Task №23424</div>
            </div>

        </div>

        <SnackBar :message="'Task added successfully'" :type="'info'" :color="'#29B77B'" />


        <WorkSpace />

        <div class="flex justify-center items-center my-[64px]">
            <button type="button"
                class="  font-bold text-white px-6 py-[15.41px] bg-blue-dark border-[#29B77B] min-w-[218px] min-h-[18.18px]  text-[14px] leading-[16.41px]  rounded-[4px] hover:cursor-pointer hover:bg-opacity-3 focus:outline-none  transition duration-150 ease-in-out">Start
                Working</button>

        </div>






    </div>
</template>

<script>
import SnackBar from '../../embrillons/SnackBar.vue';
import WorkSpace from '../../nourrisson/WorkSpace.vue';
export default {
    name: "MusicTabs",
    components: {
        WorkSpace,
        SnackBar
    }
};
</script>

<style scoped>
</style>
