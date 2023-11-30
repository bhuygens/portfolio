import Link from 'next/link';
import React from 'react';
import styles from "./social-link.module.scss";

type LinkProps = {
  text: string;
  link: string;
  blankTarget?: boolean
}

function SocialLink({text, link, blankTarget = false}: LinkProps) {
  return (
    <Link href={link}
          target={blankTarget ? "_blank" : "_self"}
          className={styles.link}
          aria-label={text}
          role={"link"}
    >
      {text}
    </Link>
  )
}

export default SocialLink;