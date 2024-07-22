import React, { InputHTMLAttributes } from 'react'
import './Input.scss'

type PropsInput = InputHTMLAttributes<HTMLInputElement> & {
  type?: string
  placeholder?: string
  label?: string
}

export function Input({ label, ...props }: PropsInput) {
  return (
    <label className="input">
      {label}
      <input {...props} className="input__element" />
    </label>
  )
}
