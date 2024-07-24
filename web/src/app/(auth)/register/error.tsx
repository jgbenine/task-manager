'use client'

import Link from "next/link"

function Error() {
  return (
    <section className="errorCreateUser">
      <h1 className="errorCreateUser__title">Error in create user account</h1>
      <Link href="/">Return Home</Link>
    </section>
  )
}

export default Error
