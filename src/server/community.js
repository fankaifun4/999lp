import http from '../config/http'

export const getDetail = ({_id='',_type=''},cb) => http.req('/api/getDetail',{_id,_type}).$post(cb)
