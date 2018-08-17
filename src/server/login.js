import http from '../config/http'

class login extends  http.$http {
  constructor (){
    super()
    this.userData = {}
  }
  getUserInfo(callback){
    wx.getUserInfo({
      success:res=>{
        this.userData = res
        this.getCode(callback)
      }
    })
    return this
  }
  getCode(callback){
    wx.login({
      success:res=>{
        const login={
          'wx-encry':this.userData.encryptedData,
          'wx-iv':this.userData.iv,
          'wx-code':res.code
        }
        const loginSync = http.req('/api/login').options({ ...login }).$post((err,res)=>{
          callback(err,res)
        })
      }
    })
    return this
  }
  getData(callback){
    this.getUserInfo(callback)
    return this
  }
}

export const loginWx = new login()
