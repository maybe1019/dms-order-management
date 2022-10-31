<template>
	<div>
		<div class="font-[400] font-roboto text-[24px] leading-[28.13px]">Designation Information</div>
		<div class="space-y-[19px] mt-[51px]">
			<div class="relative w-full rounded-[4px] border border-[#DEE0E4] ">
				<input type="text" id="designation-name" value="Designation Name"
					class="block   px-[17px]  w-full leading-[16.41px] text-[14px] font-[400] font-roboto h-[50px] text- text-gray-900 bg-transparent appearance-none  focus:outline-none focus:ring-0 focus:border-[#DEE0E4]"
					placeholder=" " />
				<label for="designation-name"
					class="absolute text-[#757575]  leading-[16.41px] text-[14px] font-[400] font-roboto   duration-300 transform -translate-y-[18px] translate-x-[11px] scale-100 top-2 z-10 origin-[0] bg-white  pl-[6px] pr-[4px]   peer-focus:text-[#757575]  peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-2 peer-focus:scale-75 peer-focus:-translate-y-4 left-1">
					Designation Name
				</label>
			</div>

			<div class="flex flex-row space-x-[15px]">


				<FormCustomSelect :options="['Ux/Ui Design', 'DevOps']" :default="'DevOps'"
					:cssClass="'w-full '" :label="'Role'" class="select z-[9999]" />

				<button class=" text-center w-[201.5px] h-[50px]  border border-[#DEE0E4] font-medium bg-[#4489FE]  font-[400] font-roboto  text-[14px] text-white rounded-[4px] mr-1"
					type="button">
					Add More Role </button>
				<button class=" text-center w-[201.5px] h-[50px]  border border-[#FE5722] font-medium  bg-white  font-[400] font-roboto  text-[14px] text-[#FE5722] rounded-[4px] mr-1 "
					type="button">
					Delete Role
				</button>


			</div>
		</div>
	</div>
</template>

<script>
import FormCustomSelect from '../../embrillons/FormCustomSelect.vue';
export default {
	name: 'Header',
	components: {
		FormCustomSelect
	}

}
</script>

<style scoped>
</style>
