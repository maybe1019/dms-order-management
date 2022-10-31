<template>
       <div class="custom-select z-[999] text-black-dark" :class="cssClass" :tabindex="tabindex" @blur="open = false">
              <div class="selected border border-[0.5px] font-roboto " :class="{ open: open ,itemsZone}" @click="open = !open">
                     {{ selected }}
              </div>
              <div class="items border border-[0.5px] " :class="{ selectHide: !open , itemsCss }">


                     <div v-for="(option, i) of options" :key="i" @click="
       selected = option;
open = false;
$emit('input', option);
                     ">
                            {{ option }}
                     </div>
              </div>
       </div>
</template>

<script>

export default {
       name: "CustomSelect",
       props: {
              options: {
                     type: Array,
                     required: true,
              },
              default: {
                     type: String,
                     required: false,
                     default: null,
              },
              tabindex: {
                     type: Number,
                     required: false,
                     default: 0,
              },
              cssClass: {
                     type: String,
                     required: true
              },
              itemsCss: {
                     type: String,
                     required: false
              },
              itemsZone: {
                     type: String,
                     required: false
              }

       },
       data() {
              return {
                     selected: this.default
                            ? this.default
                            : this.options.length > 0
                                   ? this.options[0]
                                   : null,
                     open: false,
              };
       },

};
</script>

<style scoped>
.custom-select {
       position: relative;
       text-align: left;
       outline: none;
       height: 50px;
       line-height: 47px;
}

.custom-select .selected {
       background-color: #ffff;
       border-radius: 4px;

       padding-left: 1em;
       cursor: pointer;
       user-select: none;
       margin-bottom: 0.5rem;
}

.custom-select .selected.open {
       border: 0.5px solid #757575;
       border-radius: 4px;
}

.custom-select .selected:after {
       position: absolute;
       content: "";
       top: 22px;
       right: 1em;
       width: 0;
       height: 0;
       border: 5px solid transparent;
       border-color: #757575 transparent transparent transparent;
}

.custom-select .items {

       border-radius: 4px;
       overflow: hidden;


       position: absolute;
       background-color: white;
       left: 0;
       right: 0;

}

.custom-select .items div {
       color: #212121;
       padding-left: 1em;
       cursor: pointer;
       user-select: none;
}

.custom-select .items div:hover {
       background-color: #E9F0FD;
}

.selectHide {
       display: none;
}
</style>
