var
  express = require('express')
  app = express()
  products = require('./mock.products.json')

app.get('/api/test', function (req, res) {
  res.send('API server works!')
})

app.get('/api/products', function (req, res) {
  res.setTimeout(1500, function(){
    res.send(products)
  })
})

app.listen(3000, function () {
  console.log('API server works on port 3000!')
})