<template>
  <div  class="h-70" style="padding-top: 3%">
    <b-container>
    <b-col md="12">
    <b-card>
      <h1>
        Daily Config
      </h1>
      <b-tabs content-class="mt-3">
          <b-row class="my-1">
            <b-col sm="1">
            <label>DAY :</label>
            </b-col>
            <b-col sm="10">
              <b-form-select v-model="selected" :options="days"></b-form-select>
            </b-col>
           </b-row>
           <b-row class="my-1">
            <b-col sm="1">
            <label>HOUR :</label>
            </b-col>
            <b-col sm="10">
            <b-form-input type="time"></b-form-input>
            </b-col>
            <b-button href="monthly" variant="dark">Add Config</b-button>
           </b-row>
      </b-tabs>
  </b-card>
  </b-col>
  </b-container>
  </div>
</template>

<script>
export default {
  layout: 'navbar',
  data () {
    return {
      // Note `isActive` is left out and will not appear in the rendered table
      fields: ['id', 'config'],
      items: [],
      selected: '',
      days: [
        { value: 0, text: 'Minggu' },
        { value: 1, text: 'Senin' },
        { value: 2, text: 'Selasa' },
        { value: 3, text: 'Rabu' },
        { value: 4, text: 'Kamis' },
        { value: 5, text: 'Jumat' },
        { value: 6, text: 'Sabtu' }
      ]
    }
  }
}
</script>
