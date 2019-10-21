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
        label-for="input-1"
        description="We'll never share your email with anyone else.">

        <b-form-input
          id="input-1"
          v-model="form.email"
          type="email"
          required
          placeholder="Enter email"
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

      If you don't have an account please create <b-link href="register">here</b-link>

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
  layout: 'aabb',
  data () {
    return {
      spinnerShow: false,
      modalShow: false,
      pesan: null,
      form: {
        email: '',
        pass: ''
      },
      show: true
    }
  },
  methods: {
    onSubmit (evt) {
      evt.preventDefault()
      this.spinnerShow = true
      this.login_auth()
    },
    onReset (evt) {
      evt.preventDefault()
      // Reset our form values
      this.form.email = ''
      this.form.pass = ''
      // Trick to reset/clear native browser form validation state
      this.show = false
      this.$nextTick(() => {
        this.show = true
      })
    },
    async login_auth () {
      const data = {
        email: this.form.email,
        password: this.form.pass
      }

      const response = await api.requestDataLogin(data)

      if (response.data.status === false) {
        this.spinnerShow = false
        this.modalShow = true
        this.pesan = response.data.message
      } else {
        this.$session.start()
        this.$session.set('auth', response.data)
        localStorage.setItem('auth', JSON.stringify(response.data))
        setTimeout(() => {
          this.spinnerShow = false
          this.$router.replace('/dashboard')
        }, 2000)
      }
    }
  }
}
</script>
