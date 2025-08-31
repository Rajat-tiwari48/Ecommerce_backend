import productModel from "../../models/product.model.js";


const deleteProductController = async(req,res)=>{
    try {
        const {productId} = req.body;
        const deleteProduct = await productModel.findByIdAndDelete(productId);

        res.status(200).json({
            message: "product Delete Successfully",
            data: deleteProduct,
            error: false,
            success: true
        })
        
    } catch (error) {
        res.status(400).json({
            message: "Product deleting failed" || error.message,
            error: true,
            success: false,

        })
    }
}

export default deleteProductController