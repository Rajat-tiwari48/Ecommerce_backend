import addToCartModel from "../../models/cartProduct.model.js";


const getAllCartItemController = async (req, res)=>{
    try {
        const currentUser = req.userId;

        const allProduct = await addToCartModel.find({
            userId: currentUser
        }).populate("productId").
            sort({createdAt:-1});

        res.status(200).json({
            message: "get all cart items successfully",
            data: allProduct,
            error: false,
            success: true
        })

    } catch (error) {
         res.status(400).json({
            message: "get all cart items failed" || error.message,
            error: true,
            success: false,

        })
    }
}

export default getAllCartItemController