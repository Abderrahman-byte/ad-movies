const path = require('path')
const os = require('os')
const express = require('express')

const PORT = os.userInfo().uid === 0 ? 80 : 8080
const ADDR = os.userInfo().uid === 0 ? '0.0.0.0' : '127.0.0.1'
const App = express()

App.use('/static/', express.static(path.join(__dirname, 'build/static'), {
    index: false
}))

App.get('/', (request, response) => {
    response.sendFile(path.join(__dirname, 'build/index.html'))
})

App.listen(PORT, ADDR, (err) => {
    console.log(`[*] Listining on ${ADDR}:${PORT}`)
})