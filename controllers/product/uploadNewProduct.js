import productModel from "../../models/product.model.js";


async function uploadProductController(req,res){
    try {
        const uploadProduct = new productModel(req.body);
        const saveProduct = await uploadProduct.save();

        res.status(200).json({
            message: "Product uploaded successfully",
            error: false,
            success: true,
            data: saveProduct
        })
    } catch (error) {
        res.status(400).json({
            message: "Product upload failed" || error.message,
            error: true,
            success: false,

        })
        
    }
}

export default uploadProductController;