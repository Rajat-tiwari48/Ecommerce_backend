import express from "express";
import getAllProductController from "../controllers/product/getAllProduct.js";
import getProductByIdController from "../controllers/product/getProductDetail.js";
import uploadProductController from "../controllers/product/uploadNewProduct.js";
import updateProductController from "../controllers/product/updateProduct.js";
import deleteProductController from "../controllers/product/deleteProduct.js";
import getAllCategoriesController from "../controllers/categort/getAllCategories.js";
import addNewCategoryController from "../controllers/categort/addNewCategory.js";
import addItemToCartController from "../controllers/cart/addItemToCart.js";
import getAllCartItemController from "../controllers/cart/getCartItems.js";
import deleteCartItemController from "../controllers/cart/deleteCartitem.js";

const router = express.Router();

//Product Routes
router.get("/products",getAllProductController)
router.get("/products/:id", getProductByIdController );
router.post("/products",uploadProductController)
router.put("/products/:id", updateProductController)
router.delete("/products/:id", deleteProductController);

//category Routes
router.get("/categories",getAllCategoriesController)
router.post("/categories",addNewCategoryController)

//Cart Routers
router.post("/cart",addItemToCartController)
router.get("/cart",getAllCartItemController)
router.delete("/cart/:id", deleteCartItemController)



export default router;