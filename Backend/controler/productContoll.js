const productModel=require('../model/productModel');
exports.getProducts=async(req,res,next)=>{
    const query= req.query.keyword?{title:{
        $regex:req.query.keyword,
        $options:'i'
    }}:{}
    const products=await productModel.find(query);
    res.json({
        success:true,
        products
    })
}
exports.getSingleProduct=async(req,res,next)=>{
    let id=req.params.id
    console.log(id)
    const products=await productModel.findById(id);
    res.json({
        success:true,
        products
    })
}