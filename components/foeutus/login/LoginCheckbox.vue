<template>
       <div v-on:click="setState"
              class="  cursor-pointer  w-[14px] h-[14px] bg-white border border-[#DEE0E4] border-[1px]  rounded-[2px] px-[1.25px] py-[1.75px] "
              v-bind:class="{ 'mybg border-[#DEE0E4]': (isChecked === true), 'bg-white': (isChecked === false) }">
             


       </div>
</template>
<script>

export default {
       name: "LoginCheckBox",
       props: {
              checked: {
                     type: Boolean
              },
             
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
       }
       ,
       methods: {
              setState() {
                     
                            this.isChecked = !this.isChecked


                    

              }

       }
};
</script>
<style scoped>
.mybg {
       background-color: #4489FE;
}
</style>
