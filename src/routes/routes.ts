import express from 'express';
import controller from '../controllers/userController';
import { Schemas, ValidateJoi } from '../middlware/joi';

const router = express.Router();

router.post('/create', ValidateJoi(Schemas.user.create), controller.createUser);
router.get('/get/:userId', controller.userByID);
router.get('/get', controller.getAllUser);
router.patch('/update/:userId', ValidateJoi(Schemas.user.update), controller.updateUser);
router.delete('/delete/:userId', controller.deleteUser);

export = router;