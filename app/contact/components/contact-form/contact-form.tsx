"use client"
import styles from "@/app/contact/page.module.scss";
import Button from "@/components/button/button";
import {toast} from "sonner";
import {submitForm} from "@/app/contact/send-mail.action";
import {FormEvent, useState} from "react";

export default function ContactForm() {
  const [isLoading, setIsLoading] = useState(false);

  const sendMail = async (formData: FormData) => {
    setIsLoading(true);
    try {
      toast.promise(submitForm(formData), {
        loading: 'Loading...',
        success: (): string => {
          return `Votre mail a été envoyé avec succès !`;
        },
        error: (error: any): string => {
          console.error('MAIL_ERROR', error);
          return "Une erreur est survenue, veuillez réessayer";
        },
        finally: () => {
          setIsLoading(false);
        }
      });
    } catch (error) {
      console.error('MAIL_ERROR', error);
      toast.error("Une erreur est survenue, veuillez réessayer");
      setIsLoading(false);
    }
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    await sendMail(formData);
  };

  return <form className={styles.content_form} onSubmit={handleSubmit}>

    <div className={styles.content_item}>
      <label htmlFor="subject">
        <p className={styles.content_title}>Subject</p>
      </label>
      <input type="text" name={"subject"} className={styles.content_input} required id="subject"/>
    </div>

    <div className={styles.content_item}>
      <label htmlFor="mail">
        <p className={styles.content_title}>Email</p>
      </label>
      <input type="email" name={"mail"} className={styles.content_input} required id="mail"/>
    </div>

    <div className={styles.content_item}>
      <label htmlFor="mailContent">
        <p className={styles.content_title}>Content</p>
      </label>
      <textarea className={styles.content_textarea} name="mail_content" cols={56}
                rows={30} required id="mailContent"></textarea>
    </div>

    <div className={styles.content_button}>
      <Button isLoading={isLoading} loadingText={"Envoi en cours ..."} text={"Envoyer"}/>
    </div>
  </form>;
}