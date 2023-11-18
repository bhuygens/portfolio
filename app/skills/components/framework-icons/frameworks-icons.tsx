"use client";
import Image from "next/image";
import useWindowSize from "@/hooks/window.hook";

export default function SkillsFrameworksIcons() {
  const {windowsWidth} = useWindowSize()
  return ( (windowsWidth > 768) &&
    <>
      <Image src={"/icons/react.svg"} alt={"react"} width={64} height={64}
             style={{position: "absolute", top: "20%", left: "10%"}}/>
      <Image src={"/icons/react.svg"} alt={"react"} width={64} height={64}
             style={{position: "absolute", top: "60%", left: "25%"}}/>
      <Image src={"/icons/react.svg"} alt={"react"} width={64} height={64}
             style={{position: "absolute", top: "20%", right: "10%"}}/>
      <Image src={"/icons/react.svg"} alt={"react"} width={64} height={64}
             style={{position: "absolute", top: "60%", right: "25%"}}/>
    </>
  );
}
