import { cn } from '@/libs/utils'

type OutboundLinkProps = React.ComponentPropsWithoutRef<'a'>

export function OutboundLink({ href, children, className, ...rest }: OutboundLinkProps) {
  return (
    <a
      className={cn('group relative font-medium text-foreground', className)}
      href={href}
      rel='noopener noreferrer'
      target='_blank'
      {...rest}
    >
      {children}
      <span className='absolute -bottom-1 left-0 h-0.5 w-0 bg-foreground transition-[width] group-hover:w-full' />
    </a>
  )
}
