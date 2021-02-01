const bodyParser = require('body-parser')
const express = require('express')
const app = express();

app.use(express.json())
app.use(bodyParser.urlencoded({extended: false}))
app.use(bodyParser.json());

app.post('/form', function(req, res){
 const teste =  req.body
console.log(teste)
console.log(req.body.teste2)

  console.log('passou')
});

app.listen(3333, () => {
  console.log('server is running...')
});
