import Link from 'next/link'
import type { LucideIcon } from 'lucide-react'

type SocialLinkItem = {
  nome: string
  href: string
  icon: LucideIcon
  className: string
}

type SocialLinksProps = {
  items: SocialLinkItem[]
}

export function SocialLinks({ items }: SocialLinksProps) {
  return (
    <div className="flex flex-wrap gap-3">
      {items.map(item => (
        <Link
          key={item.nome}
          href={item.href}
          target="_blank"
          className={`${item.className} p-3 rounded-lg transition-all duration-200 hover:scale-110 hover:shadow-lg group`}
          title={item.nome}
        >
          <item.icon className="w-5 h-5 text-white" />
        </Link>
      ))}
    </div>
  )
}
