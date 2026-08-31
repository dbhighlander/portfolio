import React from 'react'
import style from './section-heading.module.css'

type SectionHeadingProps = {
  children: React.ReactNode
}

export default function SectionHeading({
  children
}: SectionHeadingProps) {
  return (
    <h2 className={style.heading}>{children}</h2>
  )
}
