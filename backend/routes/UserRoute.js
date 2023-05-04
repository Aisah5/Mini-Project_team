import express from "express";
import {
    getUsers,
    createUsers,
    // updateUsers,
    // deleteUsers,
    userLogin,
    getUserById
} from "../controllers/UserController.js";

const router = express.Router();

router.get('/users', getUsers);
router.get('/users/:id', getUserById);
router.post('/users', createUsers);
// router.patch('/category/:id', updateCategory);
// router.delete('/category/:id', deleteCategory);
router.post('/login', userLogin);
export default router;



