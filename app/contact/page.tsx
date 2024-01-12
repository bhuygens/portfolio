import styles from "./page.module.scss"
import ContactItem from "./components/contact-item";
import {Toaster} from 'sonner'
import ContactForm from "./components/contact-form/contact-form";
import {Metadata} from "next";

export const metadata: Metadata = {
  title: 'Huygens - Contact',
  description: 'This is my contact page',
}

function ContactPage() {
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Contact</h1>

      <div className={styles.content}>
        <ContactForm/>

        <div className={styles.content_infos}>
          <ContactItem image={"address"} detail={"Montreal"} title={"Address"}/>
          <ContactItem image={"phone"} detail={"FR: +33 6 59 58 29 54, CA: +1 (438) 448-1802"} title={"Phone"}/>
          <ContactItem image={"mail"} detail={"huygens.benjamin@gmail.com"} title={"Mail"}/>
        </div>
      </div>

      <Toaster/>
    </div>
  );
}

export default ContactPage;
