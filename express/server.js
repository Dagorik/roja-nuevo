const express = require('express');

const app = express();

app.use(express.urlencoded({extended:true}))
app.use(express.json())

app.get('/',(request, response) => {
  console.log('Entro a un GET de la ruta /');  
  response.send({message:'Hola desde express'})
});

app.get('/users',(req,res) => {
  res.send({
    user:'Pedro',
    last_name:'x'
  })
});

//Params
app.get('/user/:uid',(req,res) => {
  console.log(req.params);
  res.send({message:'Enpoint con parametro ' + req.params.uid})
});

//Querys
app.get('/users/query',(req,res) => {
  console.log(req.query);
  res.send({message:'Queryyy'})
});

app.post('/user',(req,res) => {
  console.log(req.body);
  res.status(201).send({
    id:1,
    ...req.body
  })
});

app.listen(3000,() => {
    console.log('Server on');
});