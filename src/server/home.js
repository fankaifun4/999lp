import http from '../config/http'

export  const goodList=(cb)=> http.req('/api/goodList').$get(cb)

export const getCommunity = ({page},cb) => http.req('/api/community',{page}).$post(cb)
