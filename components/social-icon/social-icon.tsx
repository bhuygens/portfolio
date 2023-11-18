"use client"
import React from 'react';
import Image from "next/image";
import {motion} from "framer-motion";

type SocialIconProps = {
  icon: string,
  link: string
}

function SocialIcon({icon, link}: SocialIconProps) {
  return (
    <motion.a
      href={link}
      target="_blank"
      whileHover={{scale: 1.1}}
      whileTap={{scale: 0.95}}
    >
      <Image src={`/icons/${icon}.svg`} alt={icon} width={32} height={32}/>
    </motion.a>
  );
}

export default SocialIcon;