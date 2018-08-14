import http from '../config/http'

export  const goodList=(cb)=> http.req('/api/goodList').$get(cb)

export const getInfomation = (cb) => http.req('/api/getinfo').$get(cb)
