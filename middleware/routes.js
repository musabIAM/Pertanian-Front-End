import Api from './api'

export default {

  getSoilData (params) {
    return Api().post('/soil', params)
  },
  postRegisterData (params) {
    return Api().post('/user/register', params)
  },
  requestDataLogin (params) {
    return Api().post('/user/login', params)
  }
}
