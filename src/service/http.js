import { baseUrl,auth } from "./baseConfig";

function setUrl(url){
  return baseUrl+url
}

function get(url,data,callBack){
  url=setUrl(url)
  request(url,data,'GET',callBack)
}

function post(url,data,callBack){
  url=setUrl(url)
  request(url,data,'POST')
}

function request(url,data,type,header,callBack){
  type=type||'POST'
   wx.request({
      url,
      data,
      method:type,
      success:res=>{
        callBack && callBack(res)
      },
      fail:res=>{
        callBack && callBack(res)
      }
    })
}



export default {
  get,
  post
}
