import { cn } from '@/utils/cn'

export default function Container({ as: Tag = 'div', className, children }) {
  return (
    <Tag className={cn('mx-auto w-full max-w-7xl container-px', className)}>
      {children}
    </Tag>
  )
}
