import Image from "next/image";
import React from "react";
import styles from "./certification-item.module.scss";
type CertificationItemProps = {
  image: string,
  title: string,
  detail: string
}

export default function CertificationItem({image, title, detail}: CertificationItemProps) {
  return (
    <div className={styles.certification_item}>
      <Image src={`icons/${image}.svg`} alt={image} height={56} width={56}/>
      <div>
        <p>{title}</p>
        <p>{detail}</p>
      </div>
    </div>
  );
}
