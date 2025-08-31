import categoryModel from "../../models/category.model.js";


const addNewCategoryController = async(req,res)=>{
    try {
        const {name} = req.body;
        const newCategory = await categoryModel.create({name});

        res.status(201).json({
            message: "category created successfully",
            data: newCategory,
            error: false,
            success: true
        })
    } catch (error) {
        res.status(400).json({
            message: "category creation failed" || error.message,
            error: true,
            success: false,

        })
    }
}
export default addNewCategoryController