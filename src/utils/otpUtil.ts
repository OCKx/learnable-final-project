import redisClient from './redisClient';

class OtpUtil {
  private OTP_EXPIRATION_TIME: number = 300;

  generateOtp(): string {
    return Math.floor(100000 + Math.random() * 900000).toString();
  }

  async storeOtp(email: string, otp: string): Promise<void> {
    try {
      await redisClient.set(email, otp, {
        EX: this.OTP_EXPIRATION_TIME,
      });
    } catch (error) {
      console.error(`Failed to store OTP for ${email}:`, error);
      throw new Error('Could not store OTP');
    }
  }

  async getOtp(email: string): Promise<string | null> {
    try {
      const otp = await redisClient.get(email);
      return otp;
    } catch (error) {
      console.error(`Failed to retrieve OTP for ${email}:`, error);
      throw new Error('Could not retrieve OTP');
    }
  }
}


export default new OtpUtil();