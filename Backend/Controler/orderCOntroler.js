const orderModel=require('../model/orderModel');
const productModel=require('../model/productModel')
// let date=new Date()
// create order
exports.createOrder=async (req,res,next)=>{
    console.log(req.body)
    const cartItems=req.body;
    const amount=cartItems.reduce((acc,items)=>(acc+items.product.price*items.qty),0).toFixed(2)
    console.log(amount,"amt")
    const status='pending';
    // const dateValue=date.getDate()
    const order= await orderModel.create({cartItems,amount,status})
    cartItems.forEach(async(item)=>{
        const product=await productModel.findById(item.product._id);
        product.count=product.count-item.qty;
        await prodcut.save();
    })
    res.json({
        success:true,
        order
    })
}
