import {Resend} from "resend";

export class ResendClient {
  private resend: Resend;

  constructor() {
    this.resend = new Resend(process.env.RESEND_TOKEN);
  }

  public async sendMail(subject: string, email: string, content: string) {
    try {
      // Send mail to customer
      const data = await this.resend.emails.send({
        from: 'contact@huygens.io',
        to: email,
        subject,
        html: `email: ${email}, subject: ${subject}, content: ${content}`
      })

      // Send mail to me
      await this.resend.emails.send({
        from: 'contact@huygens.io',
        to: 'huygens.benjamin@gmail.com',
        subject,
        html: `email: ${email}, subject: ${subject}, content: ${content}`
      })
    } catch (e) {
      throw e
    }
  }
}