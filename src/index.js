
const path = require('path')
const express = require('express')
const morgan = require('morgan')
const {engine} = require('express-handlebars')
const app = express()
const port = 3000
//http logger
app.use(morgan('combined'))
app.use(express.static(path.join(__dirname, 'public')))
//template engine
app.engine('hbs', engine({extname: '.hbs'}));
app.set('view engine', 'hbs')
app.set('views',path.join(__dirname, 'resources/views'))

//method
app.get('/', (req, res) => {
  res.render('home');
})

app.get('/tin-tuc', (req, res) => {
  res.render('news');
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})