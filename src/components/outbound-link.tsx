type OutboundLinkProps = {
  href: string
  children: React.ReactNode
}

export function OutboundLink({ href, children }: OutboundLinkProps) {
  return (
    <a
      className='group relative font-medium text-foreground'
      href={href}
      rel='noopener noreferrer'
      target='_blank'
    >
      {children}
      <span className='absolute -bottom-1 left-0 h-0.5 w-0 bg-foreground transition-[width] group-hover:w-full' />
    </a>
  )
}
