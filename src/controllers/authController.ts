import { Request, Response } from 'express';
import AuthService from '../services/authService';
import OtpUtil from '../utils/otpUtil';
import EmailUtil from '../utils/emailUtil';

class AuthController {
  async register(req: Request, res: Response) {
    const { email, password } = req.body;
    const user = await AuthService.register(email, password);
    const otp = OtpUtil.generateOtp();
    await OtpUtil.storeOtp(email, otp);
    await EmailUtil.sendEmail(email, otp);
    res.status(201).json({ message: 'Registration successful. Please check your email for the OTP.' });
  }

  async login(req: Request, res: Response) {
    const { email, otp } = req.body;
    const token = await AuthService.login(email, otp);
    if (token) {
      res.status(200).json({ token });
    } else {
      res.status(401).json({ message: 'Invalid OTP' });
    }
  }
}


export default new AuthController();