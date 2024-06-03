import { Request, Response } from 'express';
import FileService from '../services/fileService';

class FileController {
  async uploadFile(req: Request, res: Response) {
    const { apiKey } = req.headers;
    const file = req.file;
    if (!file || !apiKey) {
      return res.status(400).json({ message: 'Invalid request' });
    }
    const result = await FileService.uploadFile(apiKey as string, file);
    res.status(201).json(result);
  }

  async getFile(req: Request, res: Response) {
    const { id } = req.params;
    const file = await FileService.getFile(id);
    if (file) {
      res.status(200).json(file);
    } else {
      res.status(404).json({ message: 'File not found' });
    }
  }
}

export default new FileController();
