import http from '../config/http'

export  const addZan =({id,master},cb)=>http.req('/api/addZan',{id,master}).$post(cb)

export const getDetail = ({_id=''},cb) => http.req('/api/communityDetail',{_id}).$post(cb)
