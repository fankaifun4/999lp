import { baseUrl,auth } from "./baseConfig";
class $http {
  constructor (url='',data={}){
    this.data=data
    this.url = url.indexOf('http')>-1?url:baseUrl+url
    this.data = data
    this.$options={}
  }
  options(options){
    this.$options = {...options}
    return this
  }

  $get(callback){
    this.$request('GET',callback)
    return this
  }

  $post(callback){
    this.$request('POST',callback)
    return this
  }
  $request(method,callback){
    const _this = this
    const token = wx.getStorageSync('token')
    wx.request({
      url:_this.url,
      header:{
        token,
        ..._this.$options
      },
      method,
      data:{ ..._this.data },
      success(res){
        if(res.data){
          callback(null,res)
        }else{
          callback(new Error)
        }
      },
      fail(err){
        callback(err)
      }
    })
  }
}

function req(url,data){
  return new $http(url,data)
}

export default {
  $http,
  req
}
