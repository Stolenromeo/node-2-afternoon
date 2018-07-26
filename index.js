const express = require('express')
     ,bodyPar = require('body-parser')
     ,massive = require('massive');
const productsCtrl = require('./Controller/ProductsCtrl')

     require('dotenv').config();

const app= express();
app.use(bodyPar.json());
const port=3000;


massive(process.env.CONNECTION_STRING).then(db=>{
    app.set('db', db);
}).catch(err => {
    console.log('there was an error connecting to DB:', err)
})

app.post('/api/product', productsCtrl.create)
app.get('/api/products', productsCtrl.readAll)
app.get('/api/product/:id', productsCtrl.readOne)
app.put('/api/product/:id', productsCtrl.update)
app.delete('/api/product/:id', productsCtrl.delete)


app.listen(port, ()=>{
    console.log('Gotta catch them all on port:', port)
})