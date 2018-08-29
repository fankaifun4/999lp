import http from '../config/http'

export const getGonglue = ({page},cb)=>http.req('/api/getGonglue',{page,pageSize:6}).$post(cb)

export const getGonglueDetail = ({id},cb)=>http.req('/api/getGonglueDetail',{id}).$post(cb)
