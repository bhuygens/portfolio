import React from 'react';
import styles from "./footer.module.scss";
import Image from "next/image";
import SocialIcon from "@/components/social-icon/social-icon";
import SocialLink from './components/social-link/social-link';
import Link from 'next/link';

function Footer() {
  return (
    <div className={styles.footer}>
      <div className={styles.content}>

        <div className={styles.brand}>
          <Image className={styles.logo} src="/brand_logo.svg" alt="HB" width={64} height={64} priority/>
          <p style={{fontWeight: 700}}>Huygens Benjamin</p>
        </div>

        <div className={styles.links}>

          <div className={styles.links_column}>
            <p className={styles.column_title}>Mes réseaux sociaux.</p>
            <div className={styles.social_icon}>
              <SocialIcon icon={"github"} link={"https://github.com/bhuygens"}/>
              <SocialIcon icon={"linkedin"} link={"https://www.linkedin.com/in/benjamin-huygens"}/>
            </div>
          </div>

          <div className={styles.links_column}>
            <p className={styles.column_title}>Liens utiles</p>
            <SocialLink link={"/contact"} text={"Me contacter"}/>
            <SocialLink link={"https://www.malt.fr/profile/benjaminhuygens"} text={"Malt"} blankTarget/>
          </div>

        </div>

        <div className={styles.separator}/>

        <div className={styles.bottom}>
          <div className={styles.bottom_text}>
            <p>Made with ❤ by</p>
            <Link style={{textDecoration: "underline"}} href="https://www.instagram.com/benhuyg"
                  target="_blank"
                  aria-label={'@benhuy'}
                  role={"link"}>
              @benhuy
            </Link>
          </div>
          <div className={styles.bottom_text}>
            <p style={{fontSize: 12}}>Images from</p>
            <Link style={{textDecoration: "underline", fontSize: 12}}
                  href="https://fr.freepik.com/vecteurs"
                  target="_blank"
                  aria-label={'freepick'}
                  role={"link"}>
              freepick
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
