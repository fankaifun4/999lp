let  baseUrl=''
let  auth=''
if (process.env.NODE_ENV === 'development') {
  baseUrl = 'http://localhost:7001'
  auth = {
    sessionToken: '',
  }
} else if (process.env.NODE_ENV === 'production') {
  baseUrl = 'https://www.999lp.cn'
}
export {
  baseUrl,
  auth
}
