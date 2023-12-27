import express from 'express'
import { createApp } from './app.js'
import { renderToString } from 'vue/server-renderer'

const server = express()

server.use(express.static('.'))

server.get('/',(req,res)=>{
    let app = createApp()
    renderToString(app).then(html=>{
        let str = `<!DOCTYPE html>
            <html>
                <head>
                    <title>Vue SSR Example</title>
                    <script type="importMap">
                        {
                            "imports" : {
                                "vue" : "/node_modules/vue/dist/vue.esm-browser.js"
                            }
                        }
                    </script>
                    <script type="module" src="./client.js"></script>
                </head>
                <body>
                    <div id="app">${html}</div>
                </body>
            </html>
            `
        res.send(str)
    })
})
server.listen(5656,()=>{
    console.log('ready')
})