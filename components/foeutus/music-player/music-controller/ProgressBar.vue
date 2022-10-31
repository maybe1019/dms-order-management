<template>
       <div class="flex flex-row space-x-[12px] items-center ">
              <div>
                     <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 hover:cursor-pointer" fill="#C4C4C4" v-show="isMute == false"
                            v-on:click="mute" viewBox="0 0 24 24" stroke="#C4C4C4" stroke-width="1">
                            <path stroke-linecap="round" stroke-linejoin="round"
                                   d="M5.586 15H4a1 1 0 01-1-1v-4a1 1 0 011-1h1.586l4.707-4.707C10.923 3.663 12 4.109 12 5v14c0 .891-1.077 1.337-1.707.707L5.586 15z"
                                   clip-rule="evenodd" />
                     </svg>


                     <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 hover:cursor-pointer" fill="#C4C4C4" viewBox="0 0 24 24" v-show="isMute == true"  v-on:click="mute"
                            stroke="#C4C4C4" stroke-width="1">
                            <path stroke-linecap="round" stroke-linejoin="round"
                                   d="M5.586 15H4a1 1 0 01-1-1v-4a1 1 0 011-1h1.586l4.707-4.707C10.923 3.663 12 4.109 12 5v14c0 .891-1.077 1.337-1.707.707L5.586 15z"
                                   clip-rule="evenodd" />
                            <path stroke-linecap="round" stroke-linejoin="round"
                                   d="M17 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2" />
                     </svg>
              </div>



              <!-- bar -->

              <div class="min-w-[144px] bg-gray-200 h-[2px] flex items-center hover:cursor-pointer">
                     <input type="range" class=" w-full h-full  bg-[#4489FE]" min="0" max="100" step="1" :value="volumeValue" v-on:change="setVolume">

              </div>

              <!-- volume -->
              <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 hover:cursor-pointer" fill="#C4C4C4" v-on:click="fullVolume(val)"
                     viewBox="0 0 24 24" stroke="#C4C4C4" stroke-width="1">
                     <path stroke-linecap="round" stroke-linejoin="round"
                            d="M15.536 8.464a5 5 0 010 7.072m2.828-9.9a9 9 0 010 12.728M5.586 15H4a1 1 0 01-1-1v-4a1 1 0 011-1h1.586l4.707-4.707C10.923 3.663 12 4.109 12 5v14c0 .891-1.077 1.337-1.707.707L5.586 15z" />
              </svg>
       </div>
</template>
<script>
export default {
       name: "ProgressBar",
       
       data() {
              return (
                     {
                            isMute: false,
                            isFullVolume: false,
                            volumeValue:50
                     }
              )
       },
       methods: {
              mute() {
                     this.isMute = !this.isMute
                     this.$emit("mute", this.isMute)
              },
              fullVolume() {
                     this.isFullVolume = !this.isFullVolume
                     if (this.isFullVolume) {
                            this.volumeValue=100
                            
                     } else {
                                                    this.volumeValue=50
    
                     }
                                          this.$emit("fullVolume", this.isFullVolume)

              },
              setVolume(event) {
                     this.volumeValue = event.target.value
                     this.$emit('volumeValue',this.volumeValue)
                     
              }
       }
};
</script>
<style scoped>
</style>
