const mongoose=require('mongoose');
const productSchema= new mongoose.Schema({
    id:Number,
    title:String,
    price:Number,
    description:String,
    category:String,
    image:String,
    rating:String,
    count:String,
    numOfReviews:String
})
const productModel= mongoose.model('product',productSchema)
module.exports=productModel