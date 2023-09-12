type PageHeadingProps = {
  title: string
  description?: string
}

export function PageHeading({ title, description }: PageHeadingProps) {
  return (
    <section className='flex flex-col gap-4'>
      <h1 className='w-fit scroll-m-20 bg-gradient-to-r from-blue-600 to-pink-600 bg-clip-text text-4xl font-bold tracking-tight text-transparent dark:from-blue-500 dark:to-pink-500'>
        {title}
      </h1>
      {description && <p className='text-lg text-muted-foreground'>{description}</p>}
    </section>
  )
}
