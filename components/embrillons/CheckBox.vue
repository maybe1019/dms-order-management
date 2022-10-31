<template>
       <div v-on:click="setState"
              class="  cursor-pointer  w-[18px] h-[18px] bg-white  border-[#DEE0E4] border-[1px]  rounded-[2px] px-[1.25px] py-[1.75px] "
              v-bind:class="{ 'mybg border-blue-dark': (isChecked === true), 'bg-white': (isChecked === false) }">
              <svg v-if="isChecked && checkType === 'determinate'" xmlns="http://www.w3.org/2000/svg" fill="none"
                     viewBox="0 0 24 24" stroke-width="3" stroke="white" class="w-full h-full strock-white">
                     <path stroke-linejoin="round" d="M3 13.5l6.75 6.75L21 4.5" />
              </svg>
              <svg v-if="checkType === 'indeterminate' && indType === true" xmlns="http://www.w3.org/2000/svg" fill="none"
                     viewBox="0 0 24 24" stroke-width="3" stroke="white" class="w-full h-full strock-white">
                     <path d="M5 12h14" />
              </svg>
              <svg v-if="indType === false && checkType === 'indeterminate'" xmlns="http://www.w3.org/2000/svg"
                     fill="none" viewBox="0 0 24 24" stroke-width="3" stroke="white" class="w-full h-full strock-white">
                     <path stroke-linejoin="round" d="M3 13.5l6.75 6.75L21 4.5" />
              </svg>


       </div>
</template>
<script>

export default {
       name: "CheckBox",
       props: {
              checked: {
                     type: Boolean
              },
              index: {
                     type: Number
              }
              , checkType: {
                     type: String,
                     require: true
              }
       },
       data() {
              return ({
                     isChecked: false,
                     indType: true
              })
       },
       async mounted() {
              await this.$nextTick();
              if (this.checked) {
                     this.isChecked = true
              }
              console.log('hello', this.checked);
       }
       ,
       methods: {
              setState() {
                     if (this.checkType === 'determinate') {
                            this.isChecked = !this.isChecked
                            this.$emit("isSelect", this.isChecked)


                     } else if (this.checkType === 'indeterminate') {
                            this.indType = !this.indType
                            if (this.indType === false) {
                                   this.$emit("selectAll", true)
                            } else {
                                   this.$emit("selectAll", false)
                                   
                            }

                     } {

                     }

              }

       }
};
</script>
<style scoped>
.mybg {
       background-color: #4489FE;
}
</style>
