import { Router } from "express";
import allController from "../controller/allController";

const route = Router()
route.post('/create', allController.usersController.createUser);


export default route