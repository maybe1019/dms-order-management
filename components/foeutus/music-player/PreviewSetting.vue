<template>
              <div class="w-full">
                     <div class="flex items-center flex-col">
                            <div class="font-roboto font-[400] text-[24px] leading-[28.13px] text-[#212121]">Preview &
                                   Settings</div>
                            <div class="font-roboto font-[400] text-[12px] leading-[14.06px] text-[#757575] ">Lorem
                                   ipsum
                                   dolor sit
                                   amet, consectetuer adipiscing elit. </div>


                     </div>



                     <div
                            class=" flex justify-center  mt-[40px] font-roboto font-medium text-[12px] leading-[14.06px] text-[#212121] ">
                            Audio_File_1.mp3
                     </div>





                     <audio class="hideen" src="music2.mp3" ref="player">
                     </audio>
                     <!-- spectogramme -->

                     <div class="flex flex-row items-center space-x-[14px] mt-[33px]">
                            <div v-show="audioLoaded">
                                   <span class=" leading-[14.06px] center font-roboto text-[12px] font-[400] text-[#757575] "
                                          v-html="elapsedTime()"> </span>
                            </div>
                            <av-waveform ref-link="player" :audio-controls="false" :canv-width="620" :canv-height="40"
                                   :playtime-line-color="'#ABC123'" :noplayed-line-color="'#C4C4C4'"
                                   :playtime-slider-color="'#4489FE'" :playtime="false" :playtime-line-width="0.2"
                                   :canv-class="'white'">


                            </av-waveform>
                            <div v-show="audioLoaded">
                                   <span class="leading-[14.06px] center font-roboto text-[12px] font-[400] text-[#757575]"
                                          v-html="totalTime()"> </span>
                            </div>
                     </div>


                     <div class="flex justify-items-start items-center space-x-[63.25px] mt-[24px]">

                            <ProgressBar @mute="handleVolume" @fullVolume="fullVolumeHandle" @volumeValue="setVolume"/>
                            <PausePlay @playerState="handlePlayPause" @quick="quickForwardBack" :soundStop="isPlaying"/>
                     </div>



              </div>



              <!-- <div class=" flex  flex-col min-w-[792px] min-h-[600px]  border border-[0.5px] px-[45px] pb-[45px] space-y-[40px] rounded-[4px]"> -->



</template>
<script>
import ProgressBar from "./music-controller/ProgressBar.vue"
import PausePlay from "./music-controller/PausePlay.vue"
export default {
       name: "PreviewSetting",
       components: {
              ProgressBar,
              PausePlay,
       },

       data() {
              return (
                     {
                            defaultSound: null,
                            playbackTime: 0,
                            audioDuration: 100,
                            audioLoaded: false,
                            isPlaying: false,
                            curentVolume: null,
                     }
              )
       },
       mounted() {





              // nextTick code will run only after the entire view has been rendered
              this.$nextTick(function () {

                     var audio = this.$refs.player;
                     //Wait for audio to load, then run initSlider() to get audio duration and set the max value of our slider 
                     // "loademetadata" Event https://www.w3schools.com/tags/av_event_loadedmetadata.asp
                     audio.addEventListener(
                            "loadedmetadata",
                            function (e) {
                                   this.initSlider();
                            }.bind(this)
                     );
                     // "canplay" HTML Event lets us know audio is ready for play https://www.w3schools.com/tags/av_event_canplay.asp
                     audio.addEventListener(
                            "canplay",
                            function (e) {
                                   this.audioLoaded = true;
                            }.bind(this)
                     );
                     //Wait for audio to begin play, then start playback listener function
                     this.$watch("isPlaying", function () {
                            if (this.isPlaying) {
                                   var audio = this.$refs.player;
                                   this.initSlider();
                                   //console.log("Audio playback started.");
                                   //prevent starting multiple listeners at the same time
                                   if (!this.listenerActive) {
                                          this.listenerActive = true;
                                          //for a more consistent timeupdate, include freqtimeupdate.js and replace both instances of 'timeupdate' with 'freqtimeupdate'
                                          audio.addEventListener("timeupdate", this.playbackListener);
                                   }
                            }
                     });
                     //Update current audio position when user drags progress slider
                     this.$watch("playbackTime", function () {
                            var audio = this.$refs.player;
                            var diff = Math.abs(this.playbackTime - this.$refs.player.currentTime);

                            //Throttle synchronization to prevent infinite loop between playback listener and this watcher
                            if (diff > 0.01) {
                                   this.$refs.player.currentTime = this.playbackTime;
                            } else {
                                                               this.isPlaying = false;

                            }
                     });
              });

       },



       methods: {

              setVolume(val) {
                     let audio = this.$refs.player;
                     if (audio) {
                         audio.volume = val/100
                     }

              },

              quickForwardBack(val) {
                     let audio = this.$refs.player;

                     if (val) {

                            audio.currentTime = audio.currentTime + 10

                     } else {

                            audio.currentTime = audio.currentTime - 10

                     }
              },



              fullVolumeHandle(val) {
                     var audio = this.$refs.player;
                  

                     if (val===true) {

                            audio.volume = 1

                     } else {
                            audio.volume = 0.5

                     }

              },


              handleVolume(val) {
                     var audio = this.$refs.player;
                     if (audio.volume > 0.1) {
                            this.curentVolume = audio.volume

                     }

                     if (val) {

                            audio.volume = 0

                     } else {
                            audio.volume = this.curentVolume


                     }
              },



              handlePlayPause(val) {
                     var audio = this.$refs.player;

                     if (val) {

                            audio.play()
                            this.isPlaying = true;

                     } else {
                            audio.pause()
                            this.isPlaying = false;


                     }
              },

              //Set the range slider max value equal to audio duration
              initSlider() {
                     var audio = this.$refs.player;
                     if (audio) {
                            this.audioDuration = Math.round(audio.duration);
                     }
              },
              //Convert audio current time from seconds to min:sec display
              convertTime(seconds) {
                     const format = val => `0${Math.floor(val)}`.slice(-2);
                     var hours = seconds / 3600;
                     var minutes = (seconds % 3600) / 60;
                     return [minutes, seconds % 60].map(format).join(":");
              },
              //Show the total duration of audio file
              totalTime() {
                     var audio = this.$refs.player;
                     if (audio) {
                            var seconds = audio.duration;
                            return this.convertTime(seconds);
                     } else {
                            return '00:00';
                     }
              },
              //Display the audio time elapsed so far
              elapsedTime() {
                     var audio = this.$refs.player;
                     if (audio) {
                            var seconds = audio.currentTime;
                            return this.convertTime(seconds);
                     } else {
                            return '00:00';
                     }
              },
              //Playback listener function runs every 100ms while audio is playing
              playbackListener(e) {
                     var audio = this.$refs.player;
                     //Sync local 'playbackTime' var to audio.currentTime and update global state
                     this.playbackTime = audio.currentTime;

                     //console.log("update: " + audio.currentTime);
                     //Add listeners for audio pause and audio end events
                     audio.addEventListener("ended", this.endListener);
                     audio.addEventListener("pause", this.pauseListener);
              },
              //Function to run when audio is paused by user
              pauseListener() {
                     this.isPlaying = false;
                     this.listenerActive = false;
                     this.cleanupListeners();
              },
              //Function to run when audio play reaches the end of file
              endListener() {
                     this.isPlaying = false;
                     this.listenerActive = false;
                     this.cleanupListeners();
              },
              //Remove listeners after audio play stops
              cleanupListeners() {
                     var audio = this.$refs.player;
                     audio.removeEventListener("timeupdate", this.playbackListener);
                     audio.removeEventListener("ended", this.endListener);
                     audio.removeEventListener("pause", this.pauseListener);
                     //console.log("All cleaned up!");
              },
              toggleAudio() {
                     var audio = this.$refs.player;
                     //var audio = document.getElementById("audio-player");
                     if (audio.paused) {
                            audio.play();
                            this.isPlaying = true;
                     } else {
                            audio.pause();
                            this.isPlaying = false;
                     }
              },
       }
};
</script>
<style scoped>
/* Play/Pause Button */
.play-button {
       height: 45px
}

input[type="range"] {
       margin: auto;
       -webkit-appearance: none;
       position: relative;
       overflow: hidden;
       width: 100%;
       cursor: pointer;
       outline: none;
       border-radius: 0;
       /* iOS */
       background: transparent;
}

input[type="range"]:focus {
       outline: none;
}

::-webkit-slider-runnable-track {
       background: #fff;
}

/*
 * 1. Set to 0 width and remove border for a slider without a thumb
 */
::-webkit-slider-thumb {
       -webkit-appearance: none;
       width: 0;
       /* 1 */
       height: 40px;
       background: #fff;
       box-shadow: -100vw 0 0 100vw dodgerblue;
       border: none;
       /* 2px solid #999; */
}

::-moz-range-track {
       height: 40px;
       background: #ddd;
}

::-moz-range-thumb {
       background: #fff;
       height: 40px;
       width: 0;
       /* 20px; */
       border: none;
       /* 3px solid #999; */
       border-radius: 0 !important;
       box-shadow: -100vw 0 0 100vw dodgerblue;
       box-sizing: border-box;
}

::-ms-fill-lower {
       background: dodgerblue;
}

::-ms-thumb {
       background: #fff;
       border: 2px solid #999;
       height: 40px;
       width: 20px;
       box-sizing: border-box;
}

::-ms-ticks-after {
       display: none;
}

::-ms-ticks-before {
       display: none;
}

::-ms-track {
       background: #ddd;
       color: transparent;
       height: 40px;
       border: none;
}

::-ms-tooltip {
       display: none;
}
</style>
