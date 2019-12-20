const Joi= require('joi');
const express = require('express');
const app=express();
app.use( express.json()); 

const genres=[
      { id:1 , name:'solo'},
      { id:2 , name:'pair'},
      { id:3 , name:'sad'}
    ]

app.get('/movies/genres', (req,res)=>{
res.send(genres);
})

app.put('/movies/genres/:id', (req,res)=>{
    const result=genres.find(m=>m.id===parseInt(req.params.id));
    if(!result) return res.status(404).send('incrrect ID');
   
    result.name=req.body.name;   
    res.send(result);

            })

app.post('/movies/genres',(req,res)=>{
 const genre={
     id: genres.length+1,
     name:req.body.name

 }
 genres.push(genre);
 res.send(genres);
 

})  

app.delete('/movies/genres/:id',(req,res)=>{
 const check= genres.find(m=>m.id===parseInt(req.params.id))
 if(!check) return res.status(404).send('errorrrrr');

 const ids= genres.indexOf(check);
 genres.splice(ids,1);
res.send(genres);
})


 const port= process.env.port || 3000;
app.listen(3000);