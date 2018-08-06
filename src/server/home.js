import http from '../config/http'

export  const goodList=(cb)=> http.get('/api/goodList',{},cb)
