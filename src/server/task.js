import http from '../config/http'

export const getQiyulist = (cb)=>http.req('/api/getqiyulist').$post(cb)
