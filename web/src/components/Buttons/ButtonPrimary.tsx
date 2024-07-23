import { ButtonHTMLAttributes } from 'react'
import './ButtonPrimary.scss';

type PropsButton = ButtonHTMLAttributes<HTMLButtonElement> & {
  label: string;
}

export function ButtonPrimary({label, ...props }: PropsButton) {
  return (
    <button  {...props} className="btnPrimary">
      {label}
    </button>
  )
}
