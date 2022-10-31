<template>
    <div class="flex justify-between items-center min-w-[160px] h-[54px] py-[19px] px-[10px] bg-[#F3F3F3] border-0 rounded-[4px] hover:cursor-pointer">
        <!-- logo -->
        <div class="w-[41px]">
    
            <img :src="src" alt="" srcset="" width="100%" height="100%">
        </div>
    
    
        <!-- text -->
        <div class="font-roboto font-[400] text-[14px]">
    
            {{message}}
        </div>
    
    </div>
</template>

<script>
export default {
    name: "BankExample",
    props: ["src", "message"]
};
</script>

<style scoped>

</style>
