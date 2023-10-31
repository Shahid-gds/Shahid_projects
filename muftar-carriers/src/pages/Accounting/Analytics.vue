<template>
    <!-- MAIN SECTION -->
    <div class="h-screen flex flex-col justify-start space-y-10 mt-10 overflow-auto">
        <!-- ANALYTICS SMALL CARDS -->
        <div class="grid mt-2  gap-2 mx-4 md:grid-cols-4 lg:grid-cols-4 xl:grid-cols-4 2xl:grid-cols-4">
            <SmallCard v-for="(card, index) in small_cards" :card="card" :key="index" />
        </div>

        <!-- ANALYTICS BIG CARDS -->
        <div class="grid sm:grid-cols-1  lg:grid-cols-2 gap-4 mx-4">
            <!-- CARD 1 -->
            <div class="bg-white text-gray-500 space-y-8 pb-18 py-4 px-6 rounded-md shadow shadow-primary">
                <!-- CARD HEADER -->
                <div>
                    <p class="text-lg">Audiences Metrics</p>
                </div>

                <apexchart type="bar" height="450" :options="bar_chart_options" :series="bar_data"></apexchart>
            </div>

            <!-- CARD 2 -->
            <!-- bg-[#1c1c24] -->
            <div class="bg-white text-gray-500 py-4 pb-18 px-6  rounded-md space-y-8 shadow shadow-primary">
                <!-- CARD HEADER -->
                <div>
                    <p class="text-lg">Audiences Session by Country</p>
                </div>

                <apexchart type="heatmap" height="450" :options="chartOptions" :series="heat_map_data"></apexchart>
            </div>
        </div>

    </div>
</template>
<script>
import SmallCard from '@/components/Accounting/Analytics/SmallCard.vue'
import axios from 'axios'
import { mapState } from 'vuex'
export default {
    name: "Analytics",
    components: {
        SmallCard
    },
    data() {
        return {
            small_cards: [],
            // BAR CHART DATA
            bar_data: [{
                data: []
            }],
            bar_chart_options: {
                chart: {
                    height: 350,
                    type: 'bar',
                    events: {
                        click: function (chart, w, e) {
                            // console.log(chart, w, e)
                        }
                    }
                },
                colors: ["#3E82FC", "#10A674", "#FCB005", "#B30049"],
                plotOptions: {
                    bar: {
                        columnWidth: '45%',
                        distributed: true,
                    }
                },
                dataLabels: {
                    enabled: false
                },
                legend: {
                    show: false
                },
                xaxis: {
                    categories: [],
                    labels: {
                        style: {
                            colors: ["#9ca3af", "#9ca3af", "#9ca3af", "#9ca3af", "#9ca3af", "#9ca3af", "#9ca3af", "#9ca3af"],
                            fontSize: '12px'
                        }
                    }
                },
                yaxis: {
                    labels: {
                        style: {
                            colors: ["#9ca3af", "#9ca3af", "#9ca3af", "#9ca3af", "#9ca3af", "#9ca3af", "#9ca3af",],
                            fontSize: '12px'
                        }
                    }
                }
            },


            //   HEATMAP CHART DATA
            heat_map_data: [],
            chartOptions: {
                chart: {
                    height: 450,
                    type: 'heatmap',
                },
                dataLabels: {
                    enabled: false
                },
                colors: ["#008FFB"],
            },


        }
    },
    methods: {
        // CARD SUMMRY API
        async getCardsSummry() {
            const config = {
                headers: {
                    orgID: this.orgID,
                    userID: this.userID

                }
            }
            try {

                const res = await axios.get(this.$api_path + '/analytics/summary/cards', config);
                this.small_cards = res.data.result[0];

            } catch (error) {
                console.log(error)
            }
        },
        // BAR CHART API
        async getBarChartData() {
            const config = {
                headers: {
                    orgID: this.orgID,
                    userID: this.userID
                }
            }
            try {
                const res = await axios.get(this.$api_path + '/analytics/summary/bar', config);
                res.data.result.forEach((value) => {
                    this.bar_chart_options.xaxis.categories.push(value.driver.name)
                    this.bar_data[0].data.push(value.content_value)
                })
            } catch (error) {
                console.log(error)
            }

        },
        async getHeatMapData() {
            const config = {
                headers: {
                    orgID: this.orgID,
                    userID: this.userID
                }
            }

            try {
                const res = await axios.get(this.$api_path + '/analytics/summary/heatmap', config);
                this.heat_map_data = res.data.result;
                console.log(this.heat_map_data);
            } catch (error) {
                console.log(error)

            }
        }

    },
    created() {
        this.getCardsSummry();
        this.getBarChartData();
        this.getHeatMapData();
    },
    computed: {
        ...mapState(['orgID', 'userID'])
    }
}
</script>
<style scoped></style>
