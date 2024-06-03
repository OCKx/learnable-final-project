import prisma from 'src/config/prisma';
import fs from 'fs';
import path from 'path';

class FileService {
  async uploadFile(apiKey: string, file: Express.Multer.File) {
    const user = await prisma.user.findUnique({ where: { apiKey } });
    if (!user) {
      throw new Error('Invalid API key');
    }
    const fileData = fs.readFileSync(file.path, 'base64');
    const result = await prisma.file.create({
      data: {
        userId: user.id,
        fileName: file.originalname,
        fileData,
      },
    });
    fs.unlinkSync(file.path); // Delete file from system
    return result;
  }

  async getFile(id: string) {
    return prisma.file.findUnique({ where: { id: parseInt(id) } });
  }
}

export default new FileService();
