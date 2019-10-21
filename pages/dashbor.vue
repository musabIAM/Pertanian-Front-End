<template>
  <div class="container">
    <div>
      <h1 class="title">
        {{ dataMesin[2] }}
      </h1>
      <h2 class="subtitle">
        {{ dataMesin[3] }}
      </h2>
      <div class="links">
        <a
          href="https://nuxtjs.org/"
          target="_blank"
          class="button--green"
        >
          Documentation
        </a>
        <a
          href="https://github.com/nuxt/nuxt.js"
          target="_blank"
          class="button--grey"
        >
          GitHub
        </a>
      </div>
    </div>
  </div>
</template>

<script>
// import rmq from '~/plugins/rmq'
// import config from '~/config_rmq'

export default {
  layout: 'default',
  data () {
    return {
      dataMesin: [],
      dataPengolahan: []
    }
  },
  beforeCreate () {
    // rmq.on('connect', function () {
    //   rmq.subscribe(config.rmqTopic, function (err) {
    //     if (!err) {
    //       console.log('Subscribe to RMQ PPTIK Success')
    //     } else if (err) {
    //       console.log(err)
    //     }
    //   })
    // })
  },
  methods: {
    fillData () {
      // const ini = this
      // console.log('siapmenerimapesan')
      // rmq.on('message', function (topic, message) {
      //   ini.dataMesin = message.toString().split('#')
      // })
    }
  },
  mounted () {
    // this.fillData()
  }
}
/* eslint-enable no-alert */
</script>

<style>
.container {
  margin: 0 auto;
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
}

.title {
  font-family: 'Quicksand', 'Source Sans Pro', -apple-system, BlinkMacSystemFont,
    'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif;
  display: block;
  font-weight: 300;
  font-size: 100px;
  color: #35495e;
  letter-spacing: 1px;
}

.subtitle {
  font-weight: 300;
  font-size: 42px;
  color: #526488;
  word-spacing: 5px;
  padding-bottom: 15px;
}

.links {
  padding-top: 15px;
}
</style>
