import http from '../config/http'

export const news =({page},cb)=> http.req('/api/news',{page}).$post(cb)

export const newsDetail = ({id},cb)=>http.req('/api/newsDetail',{id}).$post(cb)
