import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';
import { PrismaClient } from '@prisma/client';
import EmailUtil from '../utils/emailUtil';
import OtpUtil from '../utils/otpUtil';

const prisma = new PrismaClient();

class AuthService {
  async register(email: string, password: string) {
    const hashedPassword = await bcrypt.hash(password, 10);
    const apiKey = this.generateApiKey();
    return prisma.user.create({
      data: {
        email,
        password: hashedPassword,
        apiKey,
      },
    });
  }

  generateApiKey() {
    return jwt.sign({ timestamp: Date.now() }, process.env.JWT_SECRET!);
  }

  async login(email: string, otp: string) {
    const storedOtp = await OtpUtil.getOtp(email);
    if (storedOtp === otp) {
      const user = await prisma.user.findUnique({ where: { email } });
      if (user) {
        return jwt.sign({ userId: user.id }, process.env.JWT_SECRET!, { expiresIn: '1h' });
      }
    }
    return null;
  }
}


export default new AuthService();