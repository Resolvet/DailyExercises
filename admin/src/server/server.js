import Http from '@/utils/http'

export const ideasty=(params)=>Http().require({
    api: "/ideas",
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