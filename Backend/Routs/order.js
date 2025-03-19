const express=require("express");
const router=express.Router();
const{createOrder}=require('../Contoler/orderCOntroler');
router.route("/order").post(createOrder);
module.exports=router;
