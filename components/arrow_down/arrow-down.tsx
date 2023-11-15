"use client";
import React from 'react';
import Link from "next/link";
import Image from "next/image";
import styles from "./arrow-down.module.scss";
import {useScrollTop} from "@/hooks/scrollTop.hook";

type ArrowDownProps = {
  linkTo: string
}

function ArrowDown({linkTo}: ArrowDownProps) {
  const scrollPosition = useScrollTop();

  return (
    (scrollPosition < 100) && <Link className={styles.arrow_down_icon} href={`#${linkTo}`}>
      <Image src={'/icons/arrow_down.svg'} alt={"arrow down"} width={32} height={32}/>
    </Link>
  );
}

export default ArrowDown;