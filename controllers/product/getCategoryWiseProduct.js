import productModel from "../../models/product.model.js";


const getCategoryWiseProductController = async(req,res)=>{
    try {
        const {categoryId} = req.body;
        const categoryWiseProduct = await productModel.find({category:categoryId});

        res.status(200).json({
            message: "fetch category wise products successfully",
            data: categoryWiseProduct,
            error: false,
            success: true
        })
    } catch (error) {
        res.status(400).json({
            message: "fetch category wise products failed" || error.message,
            error: true,
            success: false,

        })
    }
}
export default getCategoryWiseProductController