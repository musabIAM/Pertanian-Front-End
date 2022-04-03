<template>
<div class="pt-5">
   <b-container>
     <b-row>
       <b-col md="7"><h1>Soil Sensor</h1>
       <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Consectetur eaque ea nam reiciendis sit earum ab quod labore accusamus, laborum tenetur eum illo illum, blanditiis natus quasi. Earum, incidunt illum!</p>
       </b-col>
       <b-col md="5">
        <b-table sticky-header striped hover :items="items" :fields="fields"></b-table>
       </b-col>
     </b-row>
     <b-row>
       <b-col md="12"><Chart :height="100" :chartData="dataSoil" :options="soilOption"></Chart></b-col>
     </b-row>
     <hr class="py-5">
     <b-row>
       <b-col md="7"><h1>Water Flow Sensor</h1>
       <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Consectetur eaque ea nam reiciendis sit earum ab quod labore accusamus, laborum tenetur eum illo illum, blanditiis natus quasi. Earum, incidunt illum!</p>
       </b-col>
       <b-col md="5">
        <b-table sticky-header striped hover :items="water" :fields="fields"></b-table>
       </b-col>
     </b-row>
     <b-row>
       <b-col md="12"><Chart :height="100" :chartData="dataDebit" :options="waterOption"></Chart></b-col>
     </b-row>
   </b-container>
</div>
</template>

<script>
import Chart from '../components/partials/chartVue'
import api from '../middleware/routes'

export default {
  layout: 'navbar',
  components: {
    Chart
  },
  data () {
    return {
      // Note `isActive` is left out and will not appear in the rendered table
      fields: ['Time', 'Name', 'Status'],
      items: [],
      water: [],
      soilOption: {
        responsive: true,
        scales: {
          xAxes: [ {
            display: true,
            scaleLabel: {
              display: true,
              labelString: 'Jam'
            }
          } ],
          yAxes: [ {
            display: true,
            scaleLabel: {
              display: true,
              labelString: 'Kelembaban'
            }
          } ]
        }
      },
      waterOption: {
        responsive: true,
        scales: {
          xAxes: [ {
            display: true,
            scaleLabel: {
              display: true,
              labelString: 'Jam'
            }
          } ],
          yAxes: [ {
            display: true,
            scaleLabel: {
              display: true,
              labelString: 'Debit'
            },
            ticks: {
              callback: (value, index, values) => {
                return `${value} ml`
              }
            }
          } ]
        }
      },
      dataSoil: {
        labels: [],
        datasets: [
          {
            label: 'Data Kelembaban',
            backgroundColor: 'rgba(96, 128, 121, 1)',
            data: []
          }
        ]
      },
      dataDebit: {
        labels: [],
        datasets: [
          {
            label: 'Data Water Flow',
            backgroundColor: '#2196F3',
            data: []
          }
        ]
      },
      device_id: null,
      dataX: [],
      dataY: [],
      waterX: [],
      waterY: []
    }
  },
  methods: {
    setAuth () {
      if (!this.$session.exists()) {
        this.$router.push('/')
      }
      const dataAuth = JSON.parse(localStorage.getItem('auth'))
      console.log(dataAuth)
      this.device_id = dataAuth.device_id
    },
    async getHistory () {
      console.log(this.device_id)
      const data = {
        d_id: this.device_id
      }

      const response = await api.getSoilData(data)

      let i = 0
      let lembab = null
      const length = response.data.data_soil.length
      for (i; i < length; i++) {
        this.dataY.push(Number(response.data.data_soil[i].data_sensor))
        const date = new Date(response.data.data_soil[i].timestamp)
        const hours = date.getHours()
        const minutes = date.getMinutes()
        const seconds = date.getSeconds()
        const jams = hours + ':' + minutes + ':' + seconds
        this.dataX.push(jams)
        if (Number(response.data.data_soil[i].data_sensor) >= 3.7) {
          lembab = 'Kering'
        } else {
          lembab = 'Basah'
        }

        const dataTable = {
          Time: jams,
          Name: response.data.data_soil[i].jenis_iot,
          Status: lembab
        }
        this.items.push(dataTable)

        if (this.dataX.length > 12) {
          const index = this.dataX.length - 12
          this.dataX.splice(0, index)
          this.dataY.splice(0, index)
          this.items.splice(12)
        }
        this.dataSoil = {
          labels: this.dataX,
          datasets: [
            {
              label: 'Data Soil',
              backgroundColor: 'rgba(96, 128, 121, 1)',
              data: this.dataY
            }
          ]
        }
      }
    },
    async getWater () {
      console.log(this.device_id)
      const data = {
        d_id: this.device_id
      }

      const response = await api.getSoilData(data)
      let i = 0
      const length = response.data.data_water.length
      for (i; i < length; i++) {
        this.waterY.push(Number(response.data.data_water[i].data_sensor))
        const date = new Date(response.data.data_water[i].timestamp)
        const hours = date.getHours()
        const minutes = date.getMinutes()
        const seconds = date.getSeconds()
        const jams = hours + ':' + minutes + ':' + seconds
        this.waterX.push(jams)
        const liter = Number(response.data.data_water[i].data_sensor) + ' ml'
        const dataTable = {
          Time: jams,
          Name: response.data.data_soil[i].jenis_iot,
          Status: liter
        }
        this.water.push(dataTable)

        if (this.waterX.length > 12) {
          const index = this.waterX.length - 12
          this.waterX.splice(0, index)
          this.waterY.splice(0, index)
          this.items.splice(12)
        }
        this.dataDebit = {
          labels: this.waterX,
          datasets: [
            {
              label: 'Data Water',
              backgroundColor: '#2196F3',
              data: this.waterY
            }
          ]
        }
      }
    }
  },
  mounted () {
    // this.setAuth()
    // this.getHistory()
    // this.getWater()
  }
}
</script>
