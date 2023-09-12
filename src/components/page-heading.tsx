import { cva, type VariantProps } from 'class-variance-authority'

const titleVariants = cva(
  'w-fit scroll-m-20 bg-gradient-to-r bg-clip-text text-4xl font-bold tracking-tight text-transparent',
  {
    variants: {
      variant: {
        amberEmerald: 'from-amber-600 to-emerald-600 dark:from-amber-500 dark:to-emerald-500',
        blueRed: 'from-blue-600 to-red-600 dark:from-blue-500 dark:to-red-500',
        pinkPurple: 'from-pink-600 to-purple-600 dark:from-pink-500 dark:to-purple-500',
      },
    },
    defaultVariants: {
      variant: 'amberEmerald',
    },
  },
)

type PageHeadingProps = VariantProps<typeof titleVariants> & {
  title: string
  description?: string
}

export function PageHeading({ variant, title, description }: PageHeadingProps) {
  return (
    <section className='flex flex-col gap-6'>
      <h1 className={titleVariants({ variant })}>{title}</h1>
      {description && <p className='text-lg leading-7 text-muted-foreground'>{description}</p>}
    </section>
  )
}
