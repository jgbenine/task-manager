import { AnchorHTMLAttributes } from 'react'
import './LinkSecondary.scss';
import Link from 'next/link';

type PropsLinkSecondary = AnchorHTMLAttributes<HTMLAnchorElement> & {
  label: string;
  href: string;
  variants?: "green" | "black";
}

export default function LinkSecondary({variants="green", label, href, ...props }: PropsLinkSecondary) {
  return (
    <Link href={href} {...props} className={`linkSecondary ${variants === 'black' ? "linkSecondary--black" : ""}`}>
      {label}
    </Link>
  )
}
