import { Router } from "express";
import allController from "../controller/allController";

const route = Router()
route.post('/create', allController.productsController.createProduct);
route.post('/addtocart', allController.productsController.addToCart);


export default route