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

export const getqueryId=(params)=>Http().require({
    api:"/getqueryId",
    params: params
})

export const getCategory=(params)=>Http().require({
	api: '/getCategory',
	params: params
})

export const foundGetselects=(params)=>Http().require({
	api: '/foundGetselects',
	params: params
})

export const getqueryShop=(params)=>Http().require({
	api: '/getqueryShop',
	params: params
})
