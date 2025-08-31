import addToCartModel from "../../models/cartProduct.model.js";

const addItemToCartController = async(req,res)=>{
    try {
        const {productId} = req.body;
        const currentUser = req.userId;

        const isProductAvailable = await addToCartModel.findOne({productId});

        if(isProductAvailable){
            return res.json({
                message: "Product Already in Cart",
                error: true,
                success: false
            })
        }

        const payload = {
            productId: productId,
            quantity: 1,
            userId: currentUser
        }

        const newAddToCart = await addToCartModel.create(payload);
        const saveProduct = await newAddToCart.save();

        res.status(201).json({
            message: "item added to cart successfully",
            data: saveProduct,
            error: false,
            success: true
        })
    } catch (error) {
        res.status(400).json({
            message: "add item to cart failed" || error.message,
            error: true,
            success: false,

        })
    }
}
export default addItemToCartController