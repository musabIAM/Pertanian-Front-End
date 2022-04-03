<template>
  <div class="h-70" style="padding-top: 3%">
    <b-container>
    <b-col md="12">
    <b-card>
      <h1>
        Account Config
      </h1>
      <b-tabs content-class="mt-3">
        <b-container>
        <b-tab title="Daily"><b-table striped hover :items="items" :fields="fields"></b-table><b-row><b-button href="daily" variant="dark">Add Config</b-button></b-row></b-tab>
        <b-tab title="Weekly"><b-table striped hover :items="items" :fields="fields"></b-table><b-row><b-button href="weekly" variant="dark">Add Config</b-button></b-row></b-tab>
        <b-tab title="Monthly"><b-table striped hover :items="items" :fields="fields"></b-table><b-row><b-button href="monthly" variant="dark">Add Config</b-button></b-row></b-tab>
        </b-container>
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
      items: [
        { isActive: true, age: 40, first_name: 'Dickerson', last_name: 'Macdonald' },
        { isActive: false, age: 21, first_name: 'Larsen', last_name: 'Shaw' },
        { isActive: false, age: 89, first_name: 'Geneva', last_name: 'Wilson' },
        { isActive: true, age: 38, first_name: 'Jami', last_name: 'Carney' }
      ]
    }
  }
}
</script>
