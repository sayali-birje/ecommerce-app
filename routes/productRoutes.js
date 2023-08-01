import express from "express";
import { isAdmin, requireSignIn } from "../middlewares/authMiddleware.js";
import { createProductController, deleteProductController, getProductController, getSingleProductController, productPhotoController, updateProductController,productFiltersController, productCountController, productListController, searchProductController, realtedProductController, productCategoryController, braintreeTokenController, brainTreePaymentController } from "../controller/productController.js";
import formidable from 'express-formidable'
const router=express.Router()

//routes
router.post('/create-product',requireSignIn,isAdmin,formidable(),createProductController)

//get products
router.get('/get-product',getProductController)

//single
router.get('/get-product/:slug',getSingleProductController)

//get photo
router.get('/product-photo/:pid',productPhotoController)

//delete product
router.delete('/delete-product/:pid',deleteProductController)

//update
router.put('/update-product/:pid',requireSignIn,isAdmin,formidable(),updateProductController)

//filter
router.post('/product-filters',productFiltersController)

//count product
router.get("/product-count", productCountController);


//product per page

//product per page
router.get("/product-list/:page", productListController);


//search product
router.get("/search/:keyword", searchProductController);


//similar product
router.get("/related-product/:pid/:cid", realtedProductController);

//category wise product
router.get("/product-category/:slug", productCategoryController);

//payments routes
//token
router.get("/braintree/token", braintreeTokenController);

//payments
router.post("/braintree/payment", requireSignIn, brainTreePaymentController);


export default router
