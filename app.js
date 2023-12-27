import { createSSRApp } from 'vue'

export const createApp = ()=>{
    return createSSRApp({
        data : ()=>({count : 1}),
        template : `<button @click="count++">{{count}}</button>`
    })
}
