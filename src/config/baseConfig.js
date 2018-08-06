let  baseUrl=''
let  auth=''
if (process.env.NODE_ENV === 'development') {
  baseUrl = 'http://localhost:7001'
  auth = {
    sessionToken: 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJuaWNrTmFtZSI6IuW9rea2myIsInVzZXJJZCI6IjgyMDAwMDEwIiwiYWNjb3VudCI6InBlbmd0YW8xIiwiYnJhbmNoQ29kZSI6IjgyMCIsImV4dCI6MTUzMjk0MjQ5MTk3Nn0._sB0697jrZAp9Dx2STF7SZiUcLiDfu_D5aSa-GtLLMo',
  }
} else if (process.env.NODE_ENV === 'production') {
  baseUrl = ''
}
export {
  baseUrl,
  auth
}
