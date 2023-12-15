const express = require('express');
const  app= express();
const stuffs= 
[
    {name: 'table', price: 100, amount: 1, id:1},
    {name: 'flower', price: 50, amount: 2, id:2},
    {name: 'microphone', price: 200, amount: 1, id:3},
    {name: 'pillow', price: 20, amount: 1, id:4},
    {name: 'mouse', price: 70, amount: 1, id:5},
    {name: 'phone case', price: 20, amount: 2, id:6},
    {name: 'scarf', price: 20, amount: 1, id:7},
    {name: 'magents', price: 25, amount: 5, id:8},
    {name: 'pillow case', price: 20, amount: 10, id:9},
    {name: 'marker', price: 7, amount: 2, id:10},
]
app.get('/', (req,res)=>{
    res.send("home")
})
app.get('/stuffs', (req,res)=>{
    res.send(stuffs)
})
app.get ('/stuffs/:id', (req,res)=>{
    const stuffId= req.params.id;
    const selectedItem=stuffs.find(stuf=>stuf.id==stuffId)
    if (selectedItem){
        res.send(selectedItem)
    }else {
        res.status(404).send("no data")
    }
})
app.listen(3000, ()=>{
    console.log("server");
})