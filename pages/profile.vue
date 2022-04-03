<template>
  <div class="h-70" style="padding-top: 3%">
    <b-row align-h="center" align-v="center">
    <b-col md="11">
    <b-card>
      <h1>
        Account Data
      </h1>
      <p>Device Id: <b>{{device_id}}</b></p>
    <b-table striped hover :items="items" :fields="fields"></b-table>
  </b-card>
  </b-col>
  </b-row>
  </div>
</template>

<script>
export default {
  layout: 'navbar',
  data () {
    return {
      // Note `isActive` is left out and will not appear in the rendered table
      device_id: null,
      fields: ['first_name', 'last_name', 'age'],
      items: [
        { isActive: true, age: 40, first_name: 'Dickerson', last_name: 'Macdonald' },
        { isActive: false, age: 21, first_name: 'Larsen', last_name: 'Shaw' },
        { isActive: false, age: 89, first_name: 'Geneva', last_name: 'Wilson' },
        { isActive: true, age: 38, first_name: 'Christian', last_name: 'Dior' }
      ]
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
    }
  },
  mounted () {
    // this.setAuth()
  }
}
</script>
