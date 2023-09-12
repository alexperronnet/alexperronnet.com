import { GitBranch, Globe, Package } from 'lucide-react'
import { Metadata } from 'next'

import { PageHeading } from '@/components/page-heading'
import { buttonVariants } from '@/components/ui/button'
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table'
import { Tooltip, TooltipContent, TooltipTrigger } from '@/components/ui/tooltip'
import { PROJECTS } from '@/data/projects'

export const metadata: Metadata = {
  title: 'Projects',
}

const LINK_ICONS = {
  source: {
    icon: GitBranch,
    tooltip: 'Source',
  },
  preview: {
    icon: Globe,
    tooltip: 'Preview',
  },
  npm: {
    icon: Package,
    tooltip: 'NPM',
  },
}

export default function Projects() {
  return (
    <main className='flex grow flex-col gap-16 pb-32'>
      <PageHeading
        title='Create. Share. Repeat.'
        description='Lorem ipsum dolor sit amet consectetur adipisicing elit.'
      />
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead>Year</TableHead>
            <TableHead>Project</TableHead>
            <TableHead>Links</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody className='group'>
          {PROJECTS.map((project, index) => (
            <TableRow
              key={index}
              className='transition-opacity group-hover:opacity-30 group-hover:hover:opacity-100'
            >
              <TableCell>{project.year}</TableCell>
              <TableCell className='flex flex-col gap-2 whitespace-nowrap'>
                <div>
                  {project.madeAt && (
                    <span className='italic'>{project.madeAt}&nbsp;&mdash;&nbsp;</span>
                  )}
                  <span className='font-medium'>{project.title}</span>
                </div>
                <div className='text-xs text-muted-foreground'>{project.tags.join(', ')}</div>
              </TableCell>
              <TableCell className='whitespace-nowrap'>
                {Object.entries(project.links).map(([key, value]) => {
                  const iconKey = key as keyof typeof LINK_ICONS
                  const Icon = LINK_ICONS[iconKey].icon

                  return (
                    <Tooltip key={iconKey} delayDuration={0}>
                      <TooltipTrigger asChild>
                        <a
                          href={value}
                          target='_blank'
                          rel='noopener noreferrer'
                          className={buttonVariants({ variant: 'ghost', size: 'icon' })}
                        >
                          <Icon className='h-4 w-4' />
                        </a>
                      </TooltipTrigger>
                      <TooltipContent>{LINK_ICONS[iconKey].tooltip}</TooltipContent>
                    </Tooltip>
                  )
                })}
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </main>
  )
}
