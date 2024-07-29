import React, { InputHTMLAttributes } from 'react'
import './Input.scss'

type PropsInput = InputHTMLAttributes<HTMLInputElement> & {
  type?: string
  placeholder?: string
  label?: string
  error?: string
}

export function Input({ label, error, ...props }: PropsInput) {
  return (
    <label className="input">
      {label}
      <input {...props} className="input__element" />
      {error && <p className="error">{error}</p>}
    </label>
  )
}
