"use client";
import {CSSProperties} from 'react';
import {TypeAnimation} from "react-type-animation";
import {SequenceElement} from "react-type-animation/dist/cjs/components/TypeAnimation/index.types";

const CURSOR_CLASS_NAME = 'custom-type-animation-cursor';

type TypedComponentProps = {
  text: SequenceElement[];
  styleComponent?: CSSProperties;
  repeat?: number,

}

function TypedComponent({styleComponent, text, repeat = 1}: TypedComponentProps) {
  text.push()
  return (
    <TypeAnimation
      className={CURSOR_CLASS_NAME}
      sequence={text}
      style={styleComponent}
      repeat={repeat}
      cursor={false}

    />
  );
}

export default TypedComponent;