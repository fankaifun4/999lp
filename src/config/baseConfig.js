let  baseUrl=''
let  auth=''
if (process.env.NODE_ENV === 'development') {
  baseUrl = 'http://localhost:7001'
  auth = {
    sessionToken: '',
  }
} else if (process.env.NODE_ENV === 'production') {
  baseUrl = ''
}
export {
  baseUrl,
  auth
}
