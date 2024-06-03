import nodemailer from 'nodemailer';

class EmailUtil {
  private transporter;

  constructor() {
    this.transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
    });
  }

  async sendEmail(recipient: string, otp: string) {
    const mailOptions = {
      from: process.env.EMAIL_USER,
      to: recipient,
      subject: 'Your OTP Code',
      text: `Your OTP code is ${otp}`,
    };

    await this.transporter.sendMail(mailOptions);
  }
}


export default new EmailUtil();