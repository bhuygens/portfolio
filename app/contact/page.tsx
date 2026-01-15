import styles from "./page.module.scss";
import ContactItem from "./components/contact-item";
import { Toaster } from "sonner";
import ContactForm from "./components/contact-form/contact-form";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Benjamin Huygens - Contact",
  description: "Get in touch with me",
};

function ContactPage() {
  return (
    <div className={styles.page}>
      <div className={styles.header}>
        <span className={styles.tag}>Contact</span>
        <h1 className={styles.title}>
          Get in <span className={styles.gradient}>Touch</span>
        </h1>
        <p className={styles.subtitle}>
          Have a project in mind? I&apos;d love to hear about it. Send me a
          message and let&apos;s create something amazing.
        </p>
      </div>

      <div className={styles.container}>
        <div className={styles.content}>
          <ContactForm />

          <div className={styles.content_infos}>
            <ContactItem image="address" detail="Lille" title="Address" />
            <ContactItem
              image="phone"
              detail="FR: +33 6 59 58 29 54, CA: +1 (438) 448-1802"
              title="Phone"
            />
            <ContactItem
              image="mail"
              detail="huygens.benjamin@gmail.com"
              title="Mail"
            />
          </div>
        </div>
      </div>

      <Toaster
        position="bottom-right"
        toastOptions={{
          style: {
            background: "#1c1c1f",
            border: "1px solid #27272a",
            color: "#fafafa",
          },
        }}
      />
    </div>
  );
}

export default ContactPage;
