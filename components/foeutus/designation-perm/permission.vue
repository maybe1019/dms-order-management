<template>
	<div class="border py-[45px] px-[38px] mb-[49px] w-full rounded-[4px]">
		<div class="font-[400] font-roboto text-[24px] leading-[28.13px]">
			Permissions
		</div>
		<table class="w-full text-sm border-collapse mt-[55px]   text-left text-gray-500 ">
			<thead class=" ">
				<tr
					class="border-none leading-[14.06px] text-[#212121] text-[12px] font-roboto font-medium">

					<th scope="col" class="py-[21px] px-6  ">
						Page Name
					</th>
					<th scope="col" class="py-[21px] px-6 ">
						View
					</th>
					<th scope="col" class="py-[21px] px-6 ">
						Use
					</th>
					<th scope="col" class="py-[21px] px-6 ">
						Create
					</th>
					<th scope="col" class="py-[21px] px-6 ">
						Edit
					</th>
					<th scope="col" class="py-[21px] px-6 ">
						Delete
					</th>
					<th scope="col" class="py-[21px] px-6 ">
						All
					</th>
				</tr>
			</thead>

			<tbody>
				<tr class="   hover:bg-gray-50  ">

					<td
						class=" border-l-0 py-0 px-6 text-[#212121] font-roboto font-[400] leading-[16.41px]">
						<div class="flex items-center h-[60px]">
							Prodaction

						</div>
					</td>
					<td class="py-0  px-6">
						<div class="flex items-center h-[60px]">
							<CheckBox :checkType="'determinate'" :checked="true" />

						</div>

					</td>

					<td class="py-0  px-6">
						<div class="flex items-center h-[60px]">
							<CheckBox :checkType="'determinate'" :checked="true" />

						</div>

					</td>
					<td class="py-0  px-6">
						<div class="flex items-center h-[60px]">
							<CheckBox :checkType="'determinate'" :checked="true" />

						</div>

					</td>
					<td class="py-0  px-6">
						<div class="flex items-center h-[60px]">
							<CheckBox :checkType="'determinate'" />

						</div>

					</td>
					<td class="py-0  px-6">
						<div class="flex items-center h-[60px]">
							<CheckBox :checkType="'determinate'" />

						</div>

					</td>
					<td class="py-0  border-r-0  px-6">
						<div class="flex items-center h-[60px]">
							<CheckBox :checkType="'determinate'" />

						</div>

					</td>

				</tr>




				<tr class="   hover:bg-gray-50  ">

					<td
						class=" border-l-0 py-0 px-6 text-[#212121] font-roboto font-[400] leading-[16.41px]">
						<div class="flex items-center h-[60px]">
							Prodaction

						</div>
					</td>
					<td class="py-0  px-6">
						<div class="flex items-center h-[60px]">
							<CheckBox :checkType="'determinate'" :checked="true" />

						</div>

					</td>

					<td class="py-0  px-6">
						<div class="flex items-center h-[60px]">
							<CheckBox :checkType="'determinate'" :checked="true" />

						</div>

					</td>
					<td class="py-0  px-6">
						<div class="flex items-center h-[60px]">
							<CheckBox :checkType="'determinate'" :checked="true" />

						</div>

					</td>
					<td class="py-0  px-6">
						<div class="flex items-center h-[60px]">
							<CheckBox :checkType="'determinate'" />

						</div>

					</td>
					<td class="py-0  px-6">
						<div class="flex items-center h-[60px]">
							<CheckBox :checkType="'determinate'" />

						</div>

					</td>
					<td class="py-0  border-r-0  px-6">
						<div class="flex items-center h-[60px]">
							<CheckBox :checkType="'determinate'" />

						</div>

					</td>

				</tr>




				<tr class="   hover:bg-gray-50  ">

					<td
						class=" border-l-0 py-0 px-6 text-[#212121] font-roboto font-[400] leading-[16.41px]">
						<div class="flex items-center h-[60px]">
							Prodaction

						</div>
					</td>
					<td class="py-0  px-6">
						<div class="flex items-center h-[60px]">
							<CheckBox :checkType="'determinate'" :checked="true" />

						</div>

					</td>

					<td class="py-0  px-6">
						<div class="flex items-center h-[60px]">
							<CheckBox :checkType="'determinate'" :checked="true" />

						</div>

					</td>
					<td class="py-0  px-6">
						<div class="flex items-center h-[60px]">
							<CheckBox :checkType="'determinate'" :checked="true" />

						</div>

					</td>
					<td class="py-0  px-6">
						<div class="flex items-center h-[60px]">
							<CheckBox :checkType="'determinate'" />

						</div>

					</td>
					<td class="py-0  px-6">
						<div class="flex items-center h-[60px]">
							<CheckBox :checkType="'determinate'" />

						</div>

					</td>
					<td class="py-0  border-r-0  px-6">
						<div class="flex items-center h-[60px]">
							<CheckBox :checkType="'determinate'" />

						</div>

					</td>

				</tr>






			</tbody>
		</table>

		<div class=" flex  items-center justify-center space-x-[10px] mt-[48px] mb-[49px] ">

			<button class=" text-center w-[200px] h-[50px]  border border-[#DEE0E4] font-medium bg-[#4489FE]  font-[400] font-roboto  text-[14px] text-[#FFFFFF] rounded-[4px] outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
				type="button">
				Save as Role
			</button>
		</div>

	</div>
</template>

<script>
import CheckBox from '../../embrillons/CheckBox.vue';
export default {
	name: 'Permissiom',
	components: {
		CheckBox
	}
}
</script>

<style scoped>
</style>
