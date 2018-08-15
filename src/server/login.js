import http from '../config/http'

class login extends  http.$http {
  constructor (){
    super()
    this.userData = {}
    this.code = ""
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
        this.code =res.code
        const login={
          'wx-encry':this.userData.encryptedData,
          'wx-iv':this.userData.iv,
          'wx-signature':this.userData.signature,
          'wx-code':this.code
        }
        const loginSync = http.req('/api/login').options({ ...login }).$post((err,res)=>{
          console.log(err)
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
