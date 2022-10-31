<template>
       <nav class="flex justify-center mt-[75.75px] items-center pt-4 mb-[76px]" aria-label="Table navigation">
              <ul class="flex items-center  justify-center">
                     <li>
                            <a href="#" class="bg-white hover:bg-gray-100 hover:text-gray-700" v-on:click="prevPage"> 
                                   <svg class=" w-8 h-8 text-[#757575] mr-[47px] " aria-hidden="true" fill="#757575"
                                          strocke="#757575" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                                          <path fill-rule="evenodd"
                                                 d="M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z"
                                                 clip-rule="evenodd"></path>
                                   </svg>
                            </a>
                     </li>

                     <li>
                            <ul class="flex justify-center items-center space-x-[10px]">
                                   <li v-for="(value, index) in range(numberOfPages)" :key="index" 
                                          class=" flex justify-center items-center  text-center w-[30px] h-[30px]  rounded-[4px]  " :class="{'bg-blue-dark':value===curentPage}" v-on:click="xPosition(value)">
                                          <a href="#"
                                                 class="font-medium text-[#212121] leading-[16.41px]   font-roboto text-[14px] " :class="{'text-white':value===curentPage}" >{{value}}</a>
                                   </li>
                                  

                            </ul>
                     </li>


                     <li class="flex items-center justify-center">
                            <a href="#" class="bg-white hover:bg-gray-100 hover:text-gray-700 ml-[47px]" v-on:click="nextPage">
                                   <svg class="w-8 h-8 " aria-hidden="true" fill="#757575" strocke="#757575"
                                          viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                                          <path fill-rule="evenodd"
                                                 d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                                                 clip-rule="evenodd"></path>
                                   </svg>
                            </a>
                     </li>
              </ul>
       </nav>

</template>
<script>


export default {
       name: "TableStepper.vue",
       props: {
              dataLength: {
                     type: Number,
                     require: true,
              },
              elmtPeerPage: {
                     type: Number,
                     default:10
              }
           
       },
       data() {
              return {
                     content: [],
                     curentPage: 1,
                     pageSize: 10,
                     numberOfPages:1

              }
       },
       async mounted() {
              await this.$nextTick()
              this.contentLength = this.dataLength
              this.pageSize = this.elmtPeerPage
              this.numberOfPages = this.dataLength/this.pageSize 
             
              
       },

       methods: {
              nextPage() {
                     if ((this.curentPage*this.pageSize)<this.contentLength) {
                            this.curentPage++;
                            this.$emit('pageNumber',this.curentPage)
                     }
               },
              prevPage() { 
                     if ((this.curentPage)>1) {
                            this.curentPage--;
                            this.$emit('pageNumber',this.curentPage)

                     }
              },
              xPosition(indice) {
                     this.curentPage = indice
                     this.$emit('pageNumber',this.curentPage)

                     
              },
              range(sup) {
                     let tab=[]
                 for (let index = 1; index <= sup; index++) {
                    tab.push(index)
                     }  
                 return tab  
              }
       }
};
</script>
<style scoped>
</style>
