import React from 'react';
import Link from "next/link";
import Image from "next/image";
import styles from "./arrow-down.module.scss";
type ArrowDownProps = {
  linkTo: string
}

function ArrowDown({linkTo}: ArrowDownProps) {
  return (
    <Link className={styles.arrow_down_icon} href={`#${linkTo}`}>
      <Image src={'/icons/arrow_down.svg'} alt={"arrow down"} width={32} height={32}/>
    </Link>
  );
}

export default ArrowDown;