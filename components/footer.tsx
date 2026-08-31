import React from 'react'
import style from './footer.module.css'

export default function Footer() {
  return (
    <footer className={`container ${style.footer}`}>
      <small>
        &copy; 2026 David.  All rights reserved
      </small>
      <p>
        <span>About this website:</span> built with React and Next.js (App router and server actions), TypeScript, Framer Motion, React Email & Resend, Vercel hosting.
      </p>
    </footer>
  )
}
