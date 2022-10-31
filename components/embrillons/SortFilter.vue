<template>
  <div class="flex space-x-4 items-center">
    
    <!-- filter -->
        <div class="flex items-center space-x-[8.5px]">
          <div class="font-[400] text-[14px] leading-[16.41px] " data-dropdown-toggle="filter">
            Filter
          </div>

          <div class="icon cursor-pointer h-[10px] w-[15px]" id="dropdownBottomButton"
            data-dropdown-toggle="dropdownBottom" data-dropdown-placement="bottom">
          
            <svg xmlns="http://www.w3.org/2000/svg"  fill="currentColor"
              class="bi bi-filter-left" viewBox="0 0 16 16" id="IconChangeColor">
              <path
                d="M2 10.5a.5.5 0 0 1 .5-.5h3a.5.5 0 0 1 0 1h-3a.5.5 0 0 1-.5-.5zm0-3a.5.5 0 0 1 .5-.5h7a.5.5 0 0 1 0 1h-7a.5.5 0 0 1-.5-.5zm0-3a.5.5 0 0 1 .5-.5h11a.5.5 0 0 1 0 1h-11a.5.5 0 0 1-.5-.5z"
                id="mainIconPathAttribute" stroke-width="0.3" stroke="#757575" fill="#757575"></path>
            </svg>
          </div>
          <!-- <div  id="filter">
    						<FilterItemBox @filterAction="displayFilterOption" />
    					</div> -->
        </div>
        <div class="flex items-center space-x-[8.5px]">
          <div class="font-[400] text-[14px] leading-[16.41px] ">
            Sort
          </div>

          <div class="icon cursor-pointer h-[10px] w-[15px]" id="dropdownBottomButton"
            data-dropdown-toggle="dropdownBottom" data-dropdown-placement="bottom">
          
            <svg xmlns="http://www.w3.org/2000/svg"  fill="currentColor"
              class="bi bi-filter-left" viewBox="0 0 16 16" id="IconChangeColor">
              <path
                d="M2 10.5a.5.5 0 0 1 .5-.5h3a.5.5 0 0 1 0 1h-3a.5.5 0 0 1-.5-.5zm0-3a.5.5 0 0 1 .5-.5h7a.5.5 0 0 1 0 1h-7a.5.5 0 0 1-.5-.5zm0-3a.5.5 0 0 1 .5-.5h11a.5.5 0 0 1 0 1h-11a.5.5 0 0 1-.5-.5z"
                id="mainIconPathAttribute" stroke-width="0.3" stroke="#757575" fill="#757575"></path>
            </svg>
          </div>


        </div>
  </div>
</template>

<script>
export default {
  name: "SortFilter",
};
</script>

<style scoped>
</style>
