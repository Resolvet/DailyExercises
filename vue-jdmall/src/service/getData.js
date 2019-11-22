import Http from '../utils/http'

export const getDataShou=(params)=>Http().require({
    api: "/cmsGetDataIndex",
    params: params
})

export const getDataTabs=(params)=>Http().require({
    api:"/getDataTabs",
    params: params
})

export const getDataRem=(params)=>Http().require({
    api:"/getDataRem",
    params: params
})

export const getrecommended=(params)=>Http().require({
    api:"/getrecommended",
    params: params
})
