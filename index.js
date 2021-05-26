const path = require('path')
const express = require('express')
const App = express()

App.use('/static/', express.static(path.join(__dirname, 'build/static'), {
    index: false
}))

App.get('/', (request, response) => {
    response.sendFile(path.join(__dirname, 'build/index.html'))
})

App.listen(8080)