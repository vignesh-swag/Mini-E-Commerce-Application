const mongoose=require("mongoose");
const connectDataBase=()=>{
    mongoose.connect('mongodb://localhost:27017/mini-ECommerce').then(()=>{
        console.log("mongodb connected succesfully")
    })
};
module.exports=connectDataBase;