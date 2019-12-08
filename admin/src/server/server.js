import Http from '@/utils/http'

export const getDataShou=(params)=>Http().require({
    api: "/getDataRem",
    params: params
})

export const getrecommended=(params)=>Http().require({
    api: "/getrecommended",
    params: params
})

export const foundGetselects=(params)=>Http().require({
    api: "/foundGetselects",
    params: params
})