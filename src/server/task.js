import http from '../config/http'

export const getQiyulist = (cb)=>http.req('/api/getqiyulist').$post(cb)

export const getQiyuDetail = ({id,_type},cb)=>http.req('/api/getQiyuDetail',{id,_type}).$post(cb)
