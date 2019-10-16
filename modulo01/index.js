const express = require('express');

const server = express();

//Avisar o server para ler o response body como JSON
server.use(express.json());

//localhost:3000/teste

const users = ['Henrique', 'Wagner' , 'Otavio'];

server.get('/users',(req,res) => {
  return res.json(users);
})

server.get('/user/:id',(req,res) => {
  const index = req.params.id;
  return res.json(users[index]);
})

server.post('/users',(req,res) =>{
  const { name } = req.body;
  users.push(name);
  
  return res.json(users);
})

server.put("/user/:id",(req,res)=>{
  const { name }  = req.body;
  const index = req.params.id;

  users[index] = name;

  return res.json(users);

})

server.delete("/user/:id",(req,res)=>{
  
  const index = req.params.id;

  users.splice(index,1);

  return res.json(users);

})

server.listen(3000);

