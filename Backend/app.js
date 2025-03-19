const express=require('express');
const app=express();
const products=require('./routs/products');
const order=require('./routs/order');
const connetDataBase=require('./connectDataBase')
const cors=require('cors')
connetDataBase()
app.use(express.json())
app.use(cors())
app.use("/api/e1/",products);
app.use('/api/e1/',order);
app.listen(3300,()=>{
    console.log('server running')
})