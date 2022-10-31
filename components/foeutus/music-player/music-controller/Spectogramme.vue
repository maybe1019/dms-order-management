 <template>
       <div class="flex flex-row space-x-[1px] items-center "> 
 <div v-for="(item,index) in spectData" :key="index" >
<div class=" border w-[4px] bg-[#4489FE]" :class=" `h-[${item}px]`">
&nbsp;
</div>
  </div>

       </div>
</template>
<script>
export default {
       name: "Spectogramme",
       data() {
              return ({
       spectData : Array(100).fill().map(() => Math.floor(Math.random() * 100) +1)
              

              })

       }, 
       mounted() {
              console.log(this.spectData)
       }
       
};
</script>
<style scoped>
</style>
