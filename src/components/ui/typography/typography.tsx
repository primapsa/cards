import { CSSProperties, ComponentPropsWithoutRef, ElementType, ReactNode } from 'react'

import clsx from 'clsx'

import s from './typography.module.scss'

const COMPONENTS = {
  body1: 'p',
  body2: 'p',
  caption: 'span',
  h1: 'h1',
  h2: 'h2',
  h3: 'h3',
  link1: 'a',
  link2: 'a',
  overline: 'span',
  subtitle1: 'span',
  subtitle2: 'span',
} as const

export type ComponentType = keyof typeof COMPONENTS

export type TypographyProps<Tag extends ElementType> = {
  as?: Tag
  children?: ReactNode
  className?: string
  color?: CSSProperties['color']
  variant?: ComponentType
}

export const Typography = <Tag extends ElementType = 'span'>({
  as,
  children,
  className,
  color,
  style,
  variant = 'body1',
  ...props
}: TypographyProps<Tag> & Omit<ComponentPropsWithoutRef<Tag>, keyof TypographyProps<Tag>>) => {
  const Component = as || 'span'
  const classNames = clsx(s[variant], className)
  const styles = { color: color, ...style }

  return (
    <Component className={classNames} style={styles} {...props}>
      {children}
    </Component>
  )
}
