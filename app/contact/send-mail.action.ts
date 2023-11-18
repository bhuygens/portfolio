"use server";
import {ResendClient} from "@/lib/resend";
import {z, ZodError} from 'zod';

const schema = z.object({
  mailAddress: z.string().email(),
  mailContent: z.string(),
  subject: z.string()
}).required();

export async function submitForm(formData: FormData): Promise<boolean> {
  try {
    const parsed = schema.parse({
      subject: formData.get('subject'),
      mailAddress: formData.get('mail'),
      mailContent: formData.get('mail_content'),
    });
    const resendClient = new ResendClient();

    await resendClient.sendMail(parsed.subject, parsed.mailAddress, parsed.mailContent);
    return true;

  } catch (e: any) {
    if (e instanceof ZodError) {
      console.log('Validation error:', e.errors[0].message);
      const errorsParsed = e.errors.reduce((accumulator, currentValue) => accumulator + `, ${currentValue.message}`, "");
      return Promise.reject(errorsParsed);
    }
    return Promise.reject(e.toString());
  }
}
