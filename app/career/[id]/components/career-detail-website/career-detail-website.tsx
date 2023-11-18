"use client";
import React from 'react';
import styles from "@/app/career/[id]/page.module.scss";
import {CldImage} from "next-cloudinary";

type CareerDetailWebsiteProps = {
  title:string,
  url: string
}
function CareerDetailWebsite({title, url}: CareerDetailWebsiteProps) {
  return (
    <CldImage alt={title}
              src={url}
              width={1000}
              height={1000}
              style={{
                width: "100vw",
                height: "auto",
              }}
              className={styles.image_presentation}
              priority
    />
  );
}

export default CareerDetailWebsite;