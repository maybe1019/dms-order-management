<template>
    <div class=" max-w-[343px] h-[50px] mt-[50px] border rounded-[4px]  px-[21px] flex items-center">
        <select id="default"
            class="bg-white font-roboto  border-gray-300 font-[400] leading-[19px] text-[16px] text-[#212121]  focus: outline-none block w-full p-2 ">
            <option selected>Order Information</option>
            <option value="US" class=" hover:bg-gray-100 w-full">TopDown</option>
            <option value="CA"  class=" hover:bg-gray-100">Canada</option>
            <option value="FR"  class=" hover:bg-gray-100">France</option>
            <option value="DE"  class=" hover:bg-gray-100">Germany</option>
        </select>

























    </div>
</template>


<script>
export default {
    name: "StatSelectFilter",
};

</script>
<style scoped>
</style>
