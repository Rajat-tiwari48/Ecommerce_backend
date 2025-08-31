import productModel from "../../models/product.model.js";


const getProductByIdController = async(req, res)=>{
    try {
        const {productId} = req.body;
        const product = await productModel.find(productId);

        res.status(200).json({
            message: "fetch product detail successfully",
            data: product,
            error: false,
            success: true
        })
    } catch (error) {
        res.status(400).json({
            message: "Product upload failed" || error.message,
            error: true,
            success: false,

        })
    }
}

export default getProductByIdController;
