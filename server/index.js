var
  express = require('express')
  app = express()

app.get('/api/test', function (req, res) {
  res.send('API server works!')
})

app.listen(3000, function () {
  console.log('API server works on port 3000!')
})