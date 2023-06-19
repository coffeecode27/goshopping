import { Router } from "express";
import allController from "../controller/allController";

const route = Router()
route.post('/create', allController.categoriesController.createCategory);
route.get('/allcategory', allController.categoriesController.getCategories);
route.get('/:id', allController.categoriesController.getCategoryById);
route.put('/:id', allController.categoriesController.updateCategory);
route.delete('/:id', allController.categoriesController.deleteCategory);

export default route