import Image from "next/image";
import React from "react";
import styles from "./certification-item.module.scss";

type CertificationItemProps = {
    image: string,
    title: string,
    detail: string,
    subtitle?: string
}

export default function CertificationItem({image, title, detail, subtitle}: CertificationItemProps) {
    return (
        <div className={styles.container}>
            <Image src={`icons/${image}.svg`} alt={image} height={56} width={56}/>
            <div className={styles.content}>
                <div className={styles.content_text}>
                    <p className={styles.content_textTitle}>{title}</p>
                    <p>{detail}</p>
                </div>
                {subtitle && <span>{subtitle}</span>}
            </div>
        </div>
    );
}
