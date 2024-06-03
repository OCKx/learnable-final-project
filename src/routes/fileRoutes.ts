import { Router } from 'express';
import multer from 'multer';
import FileController from '../controllers/fileController';
import authMiddleware from '../middlewares/authMiddleware';

const router = Router();
const upload = multer({ dest: 'uploads/' });

router.post('/upload', upload.single('file'), FileController.uploadFile);
router.get('/:id', FileController.getFile);


export default router;