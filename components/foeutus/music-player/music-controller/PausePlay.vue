<template>
       <div class="flex flex-row items-center space-x-[50px]">
              <!-- back -->
              <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 hover:cursor-pointer" fill="#C4C4C4"
                     v-on:click="back" viewBox="0 0 24 24" stroke="#C4C4C4" stroke-width="1">
                     <path stroke-linecap="round" stroke-linejoin="round" d="M11 19l-7-7 7-7m8 14l-7-7 7-7" />
              </svg>
              <!-- play stop -->
              <div class="  w-[56px] h-[56px] rounded-full bg-blue-dark flex justify-center items-center hover:cursor-pointer"
                     @click="changeState">


<!-- play -->

                     <svg v-show="!play " xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="white" class=""
                            viewBox="0 0 16 16" id="IconChangeColor" transform="rotate(90)">
                            <path fill-rule="evenodd"
                                   d="M7.022 1.566a1.13 1.13 0 0 1 1.96 0l6.857 11.667c.457.778-.092 1.767-.98 1.767H1.144c-.889 0-1.437-.99-.98-1.767L7.022 1.566z"
                                   id="mainIconPathAttribute" fill="#ffffff"></path>
                     </svg>

<!-- pause -->
                     <svg v-show="play" style="color: white" xmlns="http://www.w3.org/2000/svg" width="20" height="20"
                            stroke="white" fill="white" class="" viewBox="0 0 16 16">
                            <path d="M6 3.5a.5.5 0 0 1 .5.5v8a.5.5 0 0 1-1 0V4a.5.5 0 0 1 .5-.5zm4 0a.5.5 0 0 1 .5.5v8a.5.5 0 0 1-1 0V4a.5.5 0 0 1 .5-.5z"
                                   fill="white"></path>
                     </svg>


                   

              </div>
              <!-- next -->
              <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 hover:cursor-pointer" fill="#C4C4C4"
                     v-on:click="forward" viewBox="0 0 24 24" stroke="#C4C4C4" stroke-width="1">
                     <path stroke-linecap="round" stroke-linejoin="round" d="M13 5l7 7-7 7M5 5l7 7-7 7" />
              </svg>
       </div>
</template>
<script>
export default {
       name: "PausePlay",
       props:["soundStop"],

       data() {
              return ({
                     play: false,

              })
       },
       methods: {
              changeState() {
                     this.play = !this.play
                     this.$emit("playerState", this.play)
              },
              forward() {
                     return this.$emit('quick', true)
              },
              back() {
                     return this.$emit('quick', false)
              }


       }
};
</script>
<style scoped>
</style>
