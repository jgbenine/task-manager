import React, { TextareaHTMLAttributes } from 'react'
import './TextArea.scss';

type PropsTextArea = TextareaHTMLAttributes<HTMLTextAreaElement> & {
  label?: string,
}

export function TextArea({ label, ...props }: PropsTextArea) {
  return (
    <label className="textArea">
      {label}
      <textarea {...props} className="textArea__element" />
    </label>
  )
}
