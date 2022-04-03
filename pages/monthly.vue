<template>
  <div class="h-70" style="padding-top: 3%">
    <b-row align-h="center" align-v="center">
    <b-col md="11">
    <b-card>
      <h1>
        Monthly Config
      </h1>
      <b-tabs content-class="mt-3">
        <b-container>
          <b-row class="my-1" v-for="type in types" :key="type">
            <b-col sm="3">
            <label :for="`type-${type}`">Type {{ type }}:</label>
            </b-col>
            <b-col sm="9">
        <b-form-input :id="`type-${type}`" :type="type"></b-form-input>
      </b-col>
    </b-row>
        </b-container>
      </b-tabs>
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
      fields: ['id', 'config'],
      items: [
        { isActive: true, age: 40, first_name: 'Dickerson', last_name: 'Macdonald' },
        { isActive: false, age: 21, first_name: 'Larsen', last_name: 'Shaw' },
        { isActive: false, age: 89, first_name: 'Geneva', last_name: 'Wilson' },
        { isActive: true, age: 38, first_name: 'Jami', last_name: 'Carney' }
      ],
      types: [
        'text',
        'password',
        'email',
        'number',
        'url',
        'tel',
        'date',
        `time`,
        'range',
        'color'
      ]
    }
  }
}
</script>
