import productModel from "../../models/product.model.js"


const getAllProductController = async(req,res)=>{
    try {
        const allProduct = await productModel.find().sort({createdAt:-1});

        res.status(200).json({
            message: "fetch products successfully",
            data: allProduct,
            error: false,
            success: true
        })
    } catch (error) {
        res.status(400).json({
            message: "fetch products failed" || error.message,
            error: true,
            success: false,

        })
    }
}
export default getAllProductController