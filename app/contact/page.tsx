import React from "react";
import styles from "./page.module.scss"
import ContactItem from "./components/contact-item";

function Page() {

  async function submitForm(formData: FormData) {
    'use server';
    console.log('toto', formData);
  }


  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Contact</h1>
      <div className={styles.content}>

        <form className={styles.content_inputs} action={submitForm}>
          <div className={styles.content_item}>
            <p className={styles.content_title}>Subject</p>
            <input type="text" name={"subject"} className={styles.content_subject}/>
          </div>

          <div className={styles.content_item}>
            <p className={styles.content_title}>Email</p>
            <input type="text" name={"mail"} className={styles.content_subject}/>
          </div>

          <div className={styles.content_item}>
            <p className={styles.content_title}>Content</p>
            <textarea name="mail_content" cols={56} rows={30} style={{resize: "none", border: "none"}}></textarea>
          </div>

          <button type={"submit"}>Submit</button>
        </form>

        <div className={styles.content_infos}>
          <ContactItem image={"address"} detail={"Montreal"} title={"Address"}/>
          <ContactItem image={"phone"} detail={"+33 6 59 58 29 54"} title={"Phone"}/>
          <ContactItem image={"mail"} detail={"huygens.benjamin@gmail.com"} title={"Mail"}/>
          <ContactItem image={"follow"} detail={"Linkedin"} title={"Follow me !"}/>
        </div>
      </div>
    </div>
  );
}

export default Page;
