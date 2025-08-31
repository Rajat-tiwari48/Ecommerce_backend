import categoryModel from "../../models/category.model.js";

const getAllCategoriesController = async(req,res)=>{
    try {
        const allCategories = await categoryModel.find().sort({createdAt:-1});

        res.status(200).json({
            message: "fetch categories successfully",
            data: allCategories,
            error: false,
            success: true
        })
    } catch (error) {
        res.status(400).json({
            message: "fetch categories failed" || error.message,
            error: true,
            success: false,

        })
    }
}
export default getAllCategoriesController
