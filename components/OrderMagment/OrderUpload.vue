<template>
       <div :class="options.length == 0 ? 'border-dashed  border-[2px] px-[22px]  bg-[#F9FBFF] items-center justify-center' : ' '"
              class="border  border-[#D8D8D8] rounded-[4px] w-[400px] h-[782px]   flex   ">
              <FirstUpload v-if="options.length === 0" />
              <div v-if="options.length > 0" class="w-full ">
                     <FileCategorySelect />
                     <div class="max-h-[362px] overflow-y-scroll	">
                            <FileCategoryItems @itemIsSelected="setDisplayDelete" v-for="(item, index) in items "  :key="index"/>

                     </div>
                     <!-- delete button -->
                     <div class="flex justify-center mt-[100px]" v-show="showDelete">
                            <button class="  text-center w-[161.61px] h-[40px]  border border-[#FE5722] font-medium bg-white  font-roboto  text-[14px] text-[#FE5722] rounded-[4px] outline-none focus:outline-none  mb-1 ease-linear transition-all duration-150"
                                   type="button">
                                   Delete Files
                            </button>
                     </div>
              </div>



       </div>
</template>
       <script>
import FileCategoryItems from './FileManagment/FileCategoryItems.vue'
import FileCategorySelect from './FileManagment/FileCategorySelect.vue'
import FirstUpload from './FileManagment/FirstUpload.vue';

export default {
       name: "OrderUpload",
       components: {
              FirstUpload,
              FileCategorySelect,
              FileCategoryItems
       },
       data() {
              return {
                     options: [1],
                     showDelete: false,
                     NumberOfSelectedItems: 0,
                     items:[1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1]

              }
       },
       methods: {
              setDisplayDelete(val) {
                     if (val) {
                            this.NumberOfSelectedItems++;
                            this.showDelete = true
                     } else {
                            this.NumberOfSelectedItems--;

                            this.showDelete = this.NumberOfSelectedItems>0? true:false
                            
                     }
                     
              }
       }

};
</script>
       <style scoped>
       </style>
       