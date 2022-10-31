<template>

    <div class="mt-[57px] w-full">
        <div>
         <CustomSelect :options="['Order Information', 'python', 'rust', 'javascript']"
      :default="'Order Information'" :cssClass="'max-w-[343px]'"
      class="select" />
        </div>

        <div class="flex justify-end">
            <button type="button"
                class="items-center px-1 py-1 text-sm font-roboto text-center text-white bg-white hover:cursor-pointer ">
                <span class="period-content font-roboto"> 1D </span>
            </button>
            <button type="button"
                class="items-center px-1 py-1 text-sm font-roboto text-center text-white bg-white hover:cursor-pointer ">
                <span class="period-content font-roboto"> 7D </span>
            </button>
            <button type="button"
                class="items-center px-1 py-1 text-sm font-roboto text-center text-white bg-white hover:cursor-pointer ">
                <span class="period-content font-roboto"> 1M </span>
            </button>
            <button type="button"
                class="items-center px-1 py-0.5 active-button-bg w-10 text-center hover:cursor-pointer rounded-[4px] ">
                <span class="period-content active-text font-roboto"> 1Y </span>
            </button>
            <button type="button"
                class="items-center px-1 py-1 text-sm font-roboto text-center text-white hover:cursor-pointer ">
                <span class="period-content font-roboto"> Custum </span>
            </button>
        </div>

        <div>
            <LineChartGenerator :chart-options="chartOptions" :chart-data="chartData" :chart-id="chartId"
                :dataset-id-key="datasetIdKey" :plugins="plugins" :css-classes="cssClasses" :styles="styles"
                :width="width" :height="height" />
        </div>


    </div>


</template>

<script>
import CustomSelect from '../embrillons/CustomSelect.vue';
import { Line as LineChartGenerator } from 'vue-chartjs'
import StatSelectFilter from "./../embrillons/StatSelectFilter.vue";

import {
    Chart as ChartJS,
    Title,
    Tooltip,
    Legend,
    LineElement,
    LinearScale,
    CategoryScale,
    PointElement
} from 'chart.js'

ChartJS.register(
    Title,
    Tooltip,
    Legend,
    LineElement,
    LinearScale,
    CategoryScale,
    PointElement
)

export default {
    name: 'LineGraph',
    components: {
        LineChartGenerator,
        StatSelectFilter,
        CustomSelect
    },
    props: {
        chartId: {
            type: String,
            default: 'line-chart'
        },
        datasetIdKey: {
            type: String,
            default: 'label'
        },
        width: {
            type: Number,
            default: 800
        },
        height: {
            type: Number,
            default: 400
        },
        cssClasses: {
            default: 'font-roboto',
            type: String
        },
        styles: {
            type: Object,
            default: () => { }
        },
        plugins: {
            type: Array,
            default: () => []
        }
    },
    data() {
        return {
            chartData: {
                labels: [
                    'January',
                    'February',
                    'March',
                    'April',
                    'May',
                    'June',
                    'July'
                ],
                datasets: [
                    {
                        label: 'Money($)',
                        borderColor: "#4489FE",
                        pointStyle: 'circle',
                        borderWidth: 1,
                        pointRadius: 10,
                        pointHoverRadius: 15,
                        backgroundColor: 'white',
                        data: [40, 39, 10, 40, 39, 80, 40]
                    }
                ]
            },


            chartOptions: {
                aspectRatio: 3,
                
                responsive: true,
                inflateAmount: "1",
                plugins: {
                    legend: {
                        display: true,
                        align: "start",
                        labels: {
                            padding: 20,
                            color: "#4489FE",
                            boxWidth: 12,
                            boxHeight: 12,
                            backgroundColor: "#4489FE",
                            font: {
                                size: 14,
                                family: "Roboto"
                        
                    }
                        },
                    },
                },

                layout: {},

                scales: {
                    x: {
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
                        stacked: true,
                        position: "right",
                        grid: {
                            display: true,
                            drawBorder: false,
                        },
                        ticks: {
                            beginAtZero: true,
                            stepSize: 10,
                            min: 0,
                        },
                    },
                },
            },
        }
    }
}
</script>
<style scoped>
.period-content {
    font-weight: 400;
    font-size: 12px;
    line-height: 14px;
    color: #757575;
}

button {
    margin-right: 10px;
}

.active-text {
    color: white;
}

.active-button-bg {
    background: #4489fe;
}

</style>