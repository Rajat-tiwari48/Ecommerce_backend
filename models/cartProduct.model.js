import mongoose from "mongoose";

const addToCart = mongoose.Schema({
    productId:{
        type: mongoose.Schema.Types.ObjectId,
        ref: "Product"
    },
    quantity:{
        type: Number,
        required: true
    },
    userId:{
        type: String
    }
},{
    timestamps: true
})

const addToCartModel = mongoose.model("AddToCart", addToCart);
export default addToCartModel;