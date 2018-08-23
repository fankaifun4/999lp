import http from '../config/http'

export  const addZan =({id,master},cb)=>http.req('/api/addZan',{id,master}).$post(cb)

export const getDetail = ({_id='',_type=''},cb) => http.req('/api/communityDetail',{_id,_type}).$post(cb)
