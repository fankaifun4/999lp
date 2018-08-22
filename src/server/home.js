import http from '../config/http'

export  const goodList=(cb)=> http.req('/api/goodList').$post(cb)

export const getCommunity = ({page},cb) => http.req('/api/community',{page}).$post(cb)

export const getArticle = ({id,_type},cb) => http.req('/api/article',{id,_type}).$post(cb)
