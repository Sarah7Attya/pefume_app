const productsModel = require("../database/models/products.model")
// const sendEmail = require("../helper/sendEmail.helper")
const path = require("path")
const fs = require("fs")
class Products{
    static add = async(req,res)=>{
        try{
            const Products = new productsModel(req.body)
            await Products.save()
            sendTitle(Products.title)
            res.status(200).send({
                apiStatus:true,
                data: Products,
                message:"Products added successfully"
            })
        }
        catch(e){
            res.status(500).send({
                apiStatus:false,
                data: e.message,
                message:"Products adding problem"
            })

        }
    }
   
   
   
    static allProducts = async(req,res)=>{
        try{
            const limitCount = Number(req.params.limitCount)
            const skipCount = Number(req.params.pageNum)*limitCount
            const users = await productsModel.find().skip(skipCount).limit(limitCount)
            res.status(200).send({
                apiStatus:true,
                data:Products,
                message:"data fetched"
            })
        }
        catch(e){
            res.status(500).send({
                apiStatus:false,
                data:e.message,
                message:"error in fetching"
            })
        }
    }
    static singleProducts = async(req,res)=>{
        try{
            const Products = await ProductsrModel.findById(req.params.id)
            if(!Products)
                return res.status(404).send({ apiStatus:false, data:{}, message:"Products not found"})    
            res.status(200).send({ apiStatus:true, data:Products, message:"data fetched" })
        }
        catch(e){
            res.status(500).send({ apiStatus:false, data:e.message, message:"error in fetching" })
        }

    }
    
    
    static changeImage =async(req,res)=>{
        try{
            // const filename= req.file.path +(path.extname(req.file.originalname)).toLowerCase()
            // fs.rename(req.file.path, filename, ()=>{})
            //req.file => originalname
            // req.user.image = filename
            req.Products.image = req.file.path
            await req.Products.save()
            res.send({
                apiStatus:true,
                data:req.Products,
                message:"updated"
            })
        }
        catch(e){
            res.status(500).send({ apiStatus:false, data:e.message, message:"error in fetching" })
        }

    }
}
module.exports = Products