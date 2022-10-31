<template>
       <div class="custom-select  " :class="cssClass" :tabindex="tabindex" @blur="open = false" :id="label">
              <div class="selected  border-[0.5px] pb-2.5 flex items-center leading-[16.41px] h-[50px] text-[14px] font-[400] font-roboto "
                     :class="[{ open: open }, selectCss]" @click="open = !open">
                     {{ selected }}
              </div>
              <label :for="label"
                     class="absolute text-[#757575]  leading-[16.41px] text-[14px] font-[400] font-roboto   duration-300 transform -translate-y-[18px] translate-x-[11px] px-[5px] scale-100  top-2 z-[9999] origin-[0] bg-white     left-1">
                     {{ label }}</label>

              <div class="items  border-[0.5px] font-roboto py-[15px]" :class="{ selectHide: !open }">
                    

                     <div v-for="(option, i) of options" :key="i" @click="
       selected = option;
open = false;
$emit('input', option);
                     " class="h-[50px] flex items-center">
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
              label: {
                     type: String,
                     required: true
              },
              selectCss: {
                     type: String,
              }
       },
       data() {
              return {
                     selected: this.default ?
                            this.default :
                            this.options.length > 0 ?
                                   this.options[0] :
                                   null,
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


}

.custom-select .selected {
       background-color: #ffff;
       border-radius: 4px;

       padding-left: 17px;
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
       color: #212121;
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
