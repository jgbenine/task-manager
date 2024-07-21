import { AnchorHTMLAttributes } from 'react'
import './LinkPrimary.scss';
import Link from 'next/link';

type PropsLink = AnchorHTMLAttributes<HTMLAnchorElement> & {
  label: string;
  href: string;
}

export default function LinkPrimary({label, href, ...props }: PropsLink) {
  return (
    <Link href={href} {...props} className="linkPrimary">
      {label}
    </Link>
  )
}
