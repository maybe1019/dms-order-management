<template>
    <div class="mt-[57px] w-full">
        <div>
            <CustomSelect :options="['Order Information', 'python', 'rust', 'javascript']"
                :default="'Order Information'" :cssClass="'max-w-[343px]'" class="select" />
        </div>

        <div class="flex justify-between pr-[53px] pt-[39px] pb-[47px]">
            <!-- legend -->
            <div class="flex space-x-[14px] items-center">
                <div class="flex space-x-[9px] items-center">
                    <div class="w-[12px] h-[12px] rounded-[1px] bg-[#4489FE]"></div>
                    <div class="text-gray-dark w-[35px] rounded-[2px] font-roboto  text-[14px] text-center font-[400] leading-[16.41px]">Orders</div>

                </div>
                <div class="flex space-x-[9px] items-center">
                    <div class="w-[12px] h-[12px] rounded-[1px] bg-[#90B9FF]"></div>
                    <div class="text-gray-dark font-roboto text-[14px] text-center font-[400] leading-[16.41px]">New Order</div>

                </div>

            </div>
            <!-- peroid -->
            <div class="flex">
                <button type="button"
                    class="text-gray-dark w-[35px] rounded-[2px] font-roboto text-[12px]  font-[400] leading-[14.06px] hover:cursor-pointer ">
                    <span class=" font-roboto"> 1D </span>
                </button>
                <button type="button"
                    class="text-gray-dark w-[35px] rounded-[2px] font-roboto text-[12px]  font-[400] leading-[14.06px] hover:cursor-pointer ">
                    <span class=" font-roboto"> 7D </span>
                </button>
                <button type="button"
                    class="text-gray-dark w-[35px] rounded-[2px] font-roboto text-[12px]  font-[400] leading-[14.06px] hover:cursor-pointer ">
                    <span class=" font-roboto"> 1M </span>
                </button>
                <button type="button"
                    class="text-gray-dark w-[35px] rounded-[2px] font-roboto text-[12px]  font-[400] leading-[14.06px] bg-blue-dark hover:cursor-pointer">
                    <span class=" text-white "> 1Y </span>
                </button>
                <button type="button"
                    class="text-gray-dark w-[59px] rounded-[2px] font-roboto text-[12px]  font-[400] leading-[14.06px] hover:cursor-pointer  ">
                    <span class=" font-roboto"> Custum </span>
                </button>
            </div>
        </div>



        <div>


            <Bar :chart-options="chartOptions" :chart-data="chartData" :chart-id="chartId"
                :dataset-id-key="datasetIdKey" :plugins="plugins" :css-classes="barchart" :styles="styles"
                :width="width" :height="height" />



        </div>
    </div>
</template>

<script>
import { Bar } from "vue-chartjs";
import CustomSelect from "../embrillons/CustomSelect.vue";
import StatSelectFilter from "./../embrillons/StatSelectFilter.vue";
import {
    Chart as ChartJS,
    Title,
    Tooltip,
    Legend,
    BarElement,
    CategoryScale,
    LinearScale,
} from "chart.js";

ChartJS.register(
    Title,
    Tooltip,
    Legend,
    BarElement,
    CategoryScale,
    LinearScale
);


export default {
    name: "Stat",
    components: { Bar, StatSelectFilter, CustomSelect },
    props: {
        chartId: {
            type: String,
            default: "bar-chart",
        },
        datasetIdKey: {
            type: String,
            default: "label",
        },
        width: {
            type: Number,
            default: 700,
        },
        height: {
            type: Number,
            default: 400,
        },
        cssClasses: {
            default: "",
            type: String,
        },
        styles: {
            type: Object,
            default: () => { },
        },
        plugins: {
            type: Array,
            default: () => [],
        },
    },


    data() {
        return {

            barchart: "Bar",

            chartData: {
                labels: [
                    "Jan",
                    "Feb",
                    "Mar",
                    "January",
                    "February",
                    "March",
                    "January",
                    "February",
                    "March",
                    "January",
                    "February",
                    "March",
                ],
                datasets: [{
                    label: "Orders",
                    barPercentage: 0.6,
                    categoryPercentage: 0.6, // here 

                    borderColor: "#6289c4",
                    borderWidth: 0,
                    backgroundColor: ["#4489FE"],
                    data: [0, 200, 200, 300, 400, 500, 0, 100, 200, 300, 400, 500],
                },
                {
                    label: "New Order",
                    categoryPercentage: 0.6, // here 

                    barPercentage: 0.6,
                    borderColor: "#90B9FF",
                    borderWidth: 0,
                    backgroundColor: ["#90B9FF"],
                    data: [100, 100, 100, 500, 400, 500, 200, 100, 600, 200, 600, 400],
                },
                ],
            },

            chartOptions: {

                aspectRatio: 3,
                responsive: true,
                inflateAmount: "1",
                plugins: {
                    legend: {
                        display: false,
                        align: "start",
                        labels: {
                            color: "rgb(255, 99, 132)",
                            padding: 20,
                            color: "#757575",
                            boxWidth: 12,
                            boxHeight: 12,
                            font: {
                                size: 14,
                                family: "Roboto"

                            }
                        },
                    },
                },

                layout: {

                },
                animations: {
                    tension: {
                        duration: 1000,
                        easing: "linear",
                        from: 1,
                        to: 0,
                        loop: true,
                    },
                },
                scales: {
                    x: {
                        stacked: true,
                        ticks: {
                            font: {
                                size: 12,
                            },
                        },
                        grid: {
                            display: false,
                        },
                    },
                    y: {
                        stacked: false,
                        position: "right",
                        grid: {
                            display: true,
                            drawBorder: false,
                        },
                        ticks: {
                            beginAtZero: true,
                            stepSize: 100,
                            min: 0,
                        },
                    },
                },
            },
        };
    },
};
</script>

<style scoped>



</style>
