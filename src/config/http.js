import { baseUrl,auth } from "./baseConfig";

function setUrl(url){
  return baseUrl+url
}

function get(url='',data={},callBack,options){
  url=setUrl(url)
  request(url,data,'GET',callBack,options)
}

function post(url,data,callBack,options){
  url=setUrl(url)
  request(url,data,'POST',callBack,options)
}

function request(url,data,type,callBack,options){
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
