<template>
    <div class="bg-wihte mt-[28px] mx-auto max-w-[810px]">
        <!-- header permission -->
        <div class=" flex justify-between items-center flex-row">
            <div class="font-roboto font-[400] text-[24px] leading-[28.13px] text-[#212121]">Permissions</div>
            <div class=" flex items-center space-x-[21px] ">



                <FormCustomSelect :options="['Without Designation', 'python', 'rust', 'javascript']"
                    :default="'Without Designation'" :cssClass="'w-full w-[240px]'" :label="'Designation'"
                    class="select z-[9999]" />
                <div class="form-check flex space-x-[8.14px] ">
                    <CheckBox :checkType="'determinate'" id="advance" />

                    <label class="form-check-label text-[12px] font-roboto leading-[14.06px] font-[400] text-[#212121]"
                        for="advance">
                        Advance
                    </label>
                </div>

            </div>
        </div>

        <!-- tab permission content -->

        <table class="w-full text-sm border-collapse mt-[55px]   text-left text-gray-500  ">
            <thead class=" ">
                <tr class="border-b leading-[14.06px] text-[#212121] text-[12px] font-roboto font-medium">

                    <th scope="col" class="py-[24.5px] py-[25.75px] px-[15px]  ">
                        Page Name
                    </th>
                    <th scope="col" class="py-[24.5px] py-[25.75px] pl-[92px] ">
                        View
                    </th>
                    <th scope="col" class="py-[24.5px] py-[25.75px] pl-[92px] ">
                        Use
                    </th>
                    <th scope="col" class="py-[24.5px] py-[25.75px] pl-[92px] ">
                        Create
                    </th>
                    <th scope="col" class="py-[24.5px] py-[25.75px] pl-[92px] ">
                        Edit
                    </th>
                    <th scope="col" class="py-[24.5px] py-[25.75px] pl-[92px] ">
                        Delete
                    </th>
                    <th scope="col" class="py-[24.5px] py-[25.75px] pl-[92px] pr-[34.76px] ">
                        All
                    </th>
                </tr>
            </thead>

            <tbody>
                <tr class="  hover:bg-gray-50 ">

                    <td
                        class=" border-l-0  py-0 px-[15px] text-[#212121] font-roboto font-[400] leading-[16.41px] h-[60px]">

                        Prodaction


                    </td>
                    <td class=" py-0 pl-[92px]">

                        <CheckBox :checkType="'determinate'" />



                    </td>

                    <td class=" py-0 pl-[92px]">

                        <CheckBox :checkType="'determinate'" />



                    </td>
                    <td class=" py-0 pl-[92px]">

                        <CheckBox :checkType="'determinate'" :checked="true" />



                    </td>
                    <td class=" py-0 pl-[92px]">

                        <CheckBox :checkType="'determinate'" :checked="true" />



                    </td>
                    <td class=" py-0 pl-[92px]">

                        <CheckBox :checkType="'determinate'" :checked="true" />



                    </td>
                    <td class=" border-r-0 py-0 pl-[92px]">

                        <CheckBox :checkType="'determinate'" :checked="true" />



                    </td>

                </tr>


                






            </tbody>
        </table>


        <div class=" flex  items-center justify-center space-x-[10px] mt-[84px] mb-[84px] ">
            <button
                class=" text-center w-[200px] h-[50px]  border border-[#DEE0E4] font-medium  bg-white  font-[400] font-roboto text-[14px] text-[#757575] rounded-[4px] outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                type="button">
                Cancel
            </button>
            <button
                class=" text-center w-[200px] h-[50px]   font-medium bg-[#4489FE]   font-roboto  text-[14px] text-[#FFFFFF] rounded-[4px] outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                type="button">
                Save Changes
            </button>
        </div>







    </div>
</template>

<script>
import CheckBox from '../embrillons/CheckBox.vue';
import FormCustomSelect from '../embrillons/FormCustomSelect.vue';
export default {
    name: "UserPermissions",
    components: { FormCustomSelect, CheckBox }
};
</script>

<style scoped>
</style>
