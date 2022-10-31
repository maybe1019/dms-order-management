<template>

    <div class="w-full   max-w-[1200px] mx-auto ">

        <!-- body containner -->

        <!-- add order call view -->
        <div v-show="showAddOrder">
            <AddOrder @addAction="setShowAddOrder" />

        </div>
        <!-- post -->
        <div v-show="showPost">
            <PostAdded @addAction="setShowPostOrder" />

        </div>


        <div class=" flex flex-col space-y-[10px] mt-[68px] items-center ">
            <div class="w-full">
                <OrderInformation />
            </div>
            <div class="w-full">
                <OrderSelectedFile />
            </div>
            <div class="w-full">
                <OrderConfig />
            </div>
            <div class="w-full flex space-x-[10px]">
                <OrderUpload />
                <OrderFileDetails />
            </div>
            <div class="w-full">
                <OrderSubTotal />
            </div>
            <div class="w-full">
                <OrderPartList />
            </div>
            <div class="w-full">
                <OrderTotalPricing />
            </div>


            <div class="  flex items-center justify-end space-x-[10px] mx-[83px] w-full">
                <button
                    class=" text-center w-[173px] h-[50px]  border border-[#DEE0E4] leading-[16.41px]  bg-white  font-[500] font-roboto  text-[14px] text-[#757575] rounded-[4px] outline-none focus:outline-none  ease-linear transition-all duration-150"
                    type="button">
                    Back to Order List
                </button>
                <button v-on:click="init"
                    class=" text-center w-[173px] h-[50px]  leading-[16.41px] bg-[#4489FE]  font-[500] font-roboto  text-[14px] text-[#FFFFFF] rounded-[4px] outline-none focus:outline-none  ease-linear transition-all duration-150"
                    type="button">
                    Add to Order
                </button>
            </div>
        </div>





    </div>








</template>

<script>
import PostAdded from '../components/OrderMagment/PostAdded.vue'
import AddOrder from '../components/OrderMagment/AddOrder.vue';
import OrderPartList from '../components/OrderMagment/OrderPartList.vue';
import OrderSubTotal from '../components/OrderMagment/OrderSubTotal.vue';
import OrderFileDetails from '../components/OrderMagment/OrderFileDetails.vue';
import OrderConfig from '../components/OrderMagment/OrderConfig.vue';
import OrderTotalPricing from '../components/OrderMagment/OrderTotalPricing.vue';
import OrderInformation from '../components/OrderMagment/OrderInformation.vue';
import OrderSelectedFile from '../components/OrderMagment/OrderSelectedFile.vue';
import OrderUpload from '../components/OrderMagment/OrderUpload.vue';
export default {
    name: "IndexPage",
    components: {
        PostAdded,
        AddOrder,
        OrderConfig,
        OrderInformation,
        OrderSelectedFile,
        OrderUpload
        , OrderTotalPricing,
        OrderFileDetails,
        OrderSubTotal,
        OrderPartList



    },
    data() {
        return {
            showAddOrder: false,
            showPost:false
        }
    },

    methods: {
        setShowAddOrder(val) {
            this.showAddOrder = !this.showAddOrder
            if (val) {
            this.showPost = !this.showPost
                
            } 
            
        },
        
        setShowPostOrder() {
            this.showPost = !this.showPost

        },
        init() {
            this.showAddOrder = !this.showAddOrder
 
        }
    }
    ,
    layout: 'tailwind',

};
</script>

<style scoped>

</style>
