<template>
       <div>
              <div   v-show="showModal" >
                     <div class="overflow-x-hidden overflow-y-auto fixed inset-0 z-50    outline-none focus:outline-none justify-center items-center flex"
                          >
                            <div class="relative w-auto my-6 mx-auto  max-h-[463px]  min-w-[586px] ">
                                   <!--content-->
                                   <div
                                          class=" rounded-[4px] shadow-lg relative flex flex-col w-full bg-white pb-[50px]">
                                          <!--header-->
                                          <div
                                                 class="flex items-start justify-between p-5 border-b border-solid border-slate-200 rounded-t">
                                                 <div
                                                        class="text-[18px] font-medium font-roboto leading-[21.09px] text-[#212121]">
                                                        Add a Payment Method
                                                 </div>

                                          </div>
                                          <!--body-->
                                          <div
                                                 class="relative  px-[43px] flex flex-col space-y-[19px] pt-[39px] items-center">


                                                 <Method @methodType="setMethodType" />
                                                 <button class=" text-center w-[200px] h-[50px]  border border-[#DEE0E4] font-medium  bg-white  font-[400] font-roboto  text-[14px] text-[#757575] rounded-[4px] outline-none focus:outline-none  ease-linear transition-all duration-150"
                                                        type="button" @click="toggleModal(1)">
                                                        Cancel
                                                 </button>
                                          </div>
                                          <!--footer-->


                                   </div>
                            </div>
                     </div>
                     <div  class="opacity-25 fixed inset-0 z-40 bg-black-dark"></div>
              </div>
              
              <CreditCart v-show="creditShow"  @addAction="setShowPayementMethod"/>
              <PayPal v-show="paypalShow"  @addAction="setShowPayementMethod"/>
              <Bank v-show="banckShow" @addAction="setShowPayementMethod"/>
       </div>
</template>

<script>
import Bank from './Bank.vue'
import PayPal from './PayPal.vue'
import Method from './Method.vue'
import CreditCart from './CreditCart.vue'
export default {
       emits: ['addAction'],

       name: "List",
       components: {
    Method,
    CreditCart,
    PayPal,
    Bank,
    
},

       data() {
              return {
                     showModal: true,
                     creditShow: false,
                     paypalShow: false,
                     banckShow: false,
              }
       },
       methods: {
              toggleModal: function (option) {

                     this.$emit('addAction', option)
              },
              setMethodType(option) {

                     if (option === 'credit') {
                            this.creditShow = true
                            this.paypalShow = false
                            this.banckShow = false
                            this.showModal = false
                     }
                     if (option === 'paypal') {
                            this.creditShow = false
                            this.paypalShow = true
                            this.banckShow = false
                            this.showModal = false

                     }
                     if (option === 'bank') {
                            this.creditShow = false
                            this.paypalShow = false
                            this.banckShow = true
                            this.showModal = false

                     }

              },
              setShowPayementMethod() {
                            this.creditShow = false
                            this.paypalShow = false
                     this.banckShow = false
                             this.showModal = true
              }
              
       }
}
</script>