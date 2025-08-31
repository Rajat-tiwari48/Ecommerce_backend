import addToCartModel from "../../models/cartProduct.model.js";


const deleteCartItemController = async(req,res)=>{
    try {
        const currentUserId = req.userId;
        const addToCartProductId = req.body._id;

        const deleteProduct = await addToCartModel.findOneAndDelete({_id: addToCartProductId});

        res.json({
            message:"Deleted from Cart",
            error: false,
            success: true,
            data: deleteProduct
        })
    } catch (error) {
         res.status(400).json({
            message: " deleting item from cart failed" || error.message,
            error: true,
            success: false,

        })
    }
}

export default deleteCartItemController