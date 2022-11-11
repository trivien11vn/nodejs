
const route=require('./routes')
const path = require('path')
const express = require('express')
const morgan = require('morgan')
const {engine} = require('express-handlebars')
const app = express()
const port = 3000
//http logger
// app.use(morgan('combined'))
app.use(express.static(path.join(__dirname, 'public')))

//su dung midleware de lay .body
app.use(express.urlencoded({
  extended:true
}))
app.use(express.json())
//template engine
app.engine('hbs', engine({extname: '.hbs'}));
app.set('view engine', 'hbs')
app.set('views',path.join(__dirname, 'resources/views'))

//route init
route(app)

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})