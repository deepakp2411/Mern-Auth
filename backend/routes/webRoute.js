import express from "express";
const router = express.Router();
import {changePassword, loggedUser, userLogin, userRegistration} from '../controller/userController.js'
import checkUserAuth from "../middleware/auth-middleware.js";


// route level middleware to protect route

router.use('/changepassword', checkUserAuth)
router.use('/loggedUser', loggedUser)


// public routes
router.post('/register',userRegistration)
router.post('/login',userLogin)



//private routes

router.post('/changepassword', changePassword)
router.get('/loggedUser', loggedUser)


export default router;
