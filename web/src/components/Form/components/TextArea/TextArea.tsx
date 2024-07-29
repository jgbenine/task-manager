import React, { TextareaHTMLAttributes } from 'react'
import './TextArea.scss';

type PropsTextArea = TextareaHTMLAttributes<HTMLTextAreaElement> & {
  label?: string,
  error?: string
}

export function TextArea({ label, error, ...props }: PropsTextArea) {
  return (
    <label className="textArea">
      {label}
      <textarea {...props} className="textArea__element" />
      {error && <p className="error">{error}</p>}
    </label>
  )
}
