import Link from 'next/link'
import { Github, Linkedin, PanelTop } from 'lucide-react'
import { developerProfile } from '@/src/constants/developer'
import { MAIN_SITE_URL, withBaseUrl } from '@/src/lib/site-urls'

type DeveloperLinksProps = {
  className?: string
  includePortfolio?: boolean
}

export function DeveloperLinks({
  className = 'flex items-center gap-4 flex-wrap',
  includePortfolio = false,
}: DeveloperLinksProps) {
  return (
    <div className={className}>
      {includePortfolio ? (
        <Link
          href={withBaseUrl(MAIN_SITE_URL, developerProfile.portfolioPath)}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-2 text-sm text-muted-foreground hover:text-primary transition-colors"
        >
          <PanelTop strokeWidth={0.75} />
          Portfolio
        </Link>
      ) : null}
      <Link
        href={developerProfile.github}
        target="_blank"
        rel="noopener noreferrer"
        className="flex items-center gap-2 text-sm text-muted-foreground hover:text-primary transition-colors"
      >
        <Github className="h-4 w-4" />
        GitHub
      </Link>
      <Link
        href={developerProfile.linkedin}
        target="_blank"
        rel="noopener noreferrer"
        className="flex items-center gap-2 text-sm text-muted-foreground hover:text-primary transition-colors"
      >
        <Linkedin className="h-4 w-4" />
        LinkedIn
      </Link>
    </div>
  )
}
