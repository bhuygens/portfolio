import React from 'react';
import Image from "next/image";

type FrameworkCardProps = {
  icon: string,
  content: string,
  subContent: string
}

function FrameworkCard({content, icon, subContent}: FrameworkCardProps) {
  return (
    <div>
      <div>
        <Image src={`/icons/${icon}`} alt={icon}/>
        <p>{content}</p>
        <p>{subContent}</p>
      </div>
    </div>
  );
}

export default FrameworkCard;
