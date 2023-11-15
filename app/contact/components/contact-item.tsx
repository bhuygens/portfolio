import Image from "next/image";
import React from "react";
import styles from "./contact-item.module.scss"
type ContactItemProps = {
  image: string,
  title: string,
  detail: string
}
export default function ContactItem({image, detail, title}: ContactItemProps) {
  return <div className={styles.container}>
    <Image src={`/icons/${image}.svg`} alt={image} height={32} width={24}/>
    <div className={styles.content}>
      <p className={styles.title}>{title}</p>
      <p className={styles.text}>{detail}</p>
    </div>
  </div>;
}
