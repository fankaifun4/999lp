import http from '../config/http'

export  const goodList=(cb)=> http.req('/api/goodList').$get(cb)

export const getCommunity = ({pages},cb) => http.req('/api/community',{pages}).$post(cb)
