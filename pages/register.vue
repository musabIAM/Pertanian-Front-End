<template>
<div class="h-100" style="padding-top: 11%">
  <b-container>
  <b-row align-h="center" align-v="center">
  <b-col md="7">
  <b-card>
  <div>
    <b-form @submit="onSubmit" @reset="onReset" v-if="show">
      <b-form-group
        id="input-group-1"
        label-for="input-1">

        <b-form-input
          id="input-1"
          v-model="form.email"
          type="email"
          required
          placeholder="Enter email"
        ></b-form-input>
      </b-form-group>

      <b-form-group id="input-group-2" label-for="input-2">
        <b-form-input
          id="input-2"
          v-model="form.name"
          required
          placeholder="Enter name"
        ></b-form-input>
      </b-form-group>

      <b-form-group @submit.stop.prevent id="input-group-3" label-for="input-3">
          <b-input
          type="password"
          id="text-password"
          aria-describedby="password-help-block"
          v-model="form.pass"
          required
          placeholder="Enter Password"
        ></b-input>
      </b-form-group>

      Already have an account <b-link href="/">Login</b-link>

      <b-form-group id="input-group-4">
        <b-form-checkbox-group v-model="form.checked" id="checkboxes-4">
        </b-form-checkbox-group>
      </b-form-group>

      <b-button type="submit" variant="dark">Submit</b-button>
      <b-button type="reset" variant="dark">Reset</b-button>
    </b-form>
  </div>
  </b-card>
  </b-col>
  </b-row>
  <b-row align-h="center" align-v="center" class="p-3">
      <b-spinner v-show="spinnerShow" aria-hidden="true" variant="primary" label="Spinning"></b-spinner>
  </b-row>
  </b-container>
  <b-modal v-model="modalShow">{{ pesan }}</b-modal>
</div>
</template>

<script>
import api from '../middleware/routes'

export default {
  data () {
    return {
      spinnerShow: false,
      modalShow: false,
      pesan: null,
      form: {
        email: '',
        name: '',
        pass: ''
      },
      show: true
    }
  },
  methods: {
    onSubmit (evt) {
      evt.preventDefault()
      this.spinnerShow = true
      this.reg_auth()
    },
    onReset (evt) {
      evt.preventDefault()
      // Reset our form values
      this.form.email = ''
      this.form.name = ''
      this.form.pass = ''
      // Trick to reset/clear native browser form validation state
      this.show = false
      this.$nextTick(() => {
        this.show = true
      })
    },
    async reg_auth () {
      const data = {
        email: this.form.email,
        user: this.form.name,
        password: this.form.pass
      }

      const response = await api.postRegisterData(data)

      this.spinnerShow = false

      if (response.data.status === false) {
        this.modalShow = true
        this.pesan = response.data.message
      } else {
        this.modalShow = true
        this.pesan = response.data.message
      }
    }
  }
}
</script>
