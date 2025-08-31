import productModel from "../../models/product.model.js";


const updateProductController = async (req, res)=>{
    try {
        const {_id,...resbody} = req.body;
        const updateProduct = await productModel.findByIdAndUpdate(_id,resbody,{new:true});
        res.status(200).json({
            message: "Product updated successfully",
            error: false,
            success: true,
            data: updateProduct
        })
    } catch (error) {
        res.status(400).json({
            message: "Product update failed" || error.message,
            error: true,
            success: false,

        })
    }
}

export default updateProductController;