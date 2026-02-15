import { Card, CardContent } from "@/src/components/ui/card"
import { Badge } from "@/src/components/ui/badge"
import { Button } from "@/src/components/ui/button"
import Link from "next/link"
import { Users, Calendar, ExternalLink } from "lucide-react"
import type { TCCProject } from "@/lib/types"

interface ProjectCardProps {
  project: TCCProject
  variant?: 'default' | 'compact' | 'detailed'
  inCarousel?: boolean
}

export function ProjectCard({ project, variant = 'default', inCarousel = false }: ProjectCardProps) {
  const hoverClass = inCarousel ? 'hover-lift-carousel' : 'hover-lift'
  
  const renderCompact = () => (
    <Card className={`group ${hoverClass} shadow-glow glass overflow-hidden`}>
      <CardContent className="p-0">
        <div className="aspect-video bg-white overflow-hidden relative flex items-center justify-center">
          <img
            src={project.image || "/placeholder.svg"}
            alt={`Screenshot do projeto ${project.title}`}
            className="max-w-full max-h-full object-contain group-hover:scale-105 transition-transform duration-300"
            style={{ transform: `scale(${project.imageZoom ? project.imageZoom / 100 : 1})` }}
          />
          <div className="absolute top-3 right-3">
            <div className="flex gap-1">
              {project.category.map((cat, index) => (
                <Badge key={index} variant="secondary" className="text-xs glass">
                  {cat}
                </Badge>
              ))}
            </div>
          </div>
        </div>
        <div className="p-5">
          <div className="flex items-center justify-between mb-3">
            <div className="flex items-center gap-2 text-xs text-muted-foreground">
              <Calendar className="h-3 w-3" />
              <span>{project.year}</span>
            </div>
          </div>
          <h3 className="text-lg font-semibold mb-3 group-hover:text-primary transition-colors line-clamp-2">
            {project.title}
          </h3>
          <p className="text-muted-foreground text-sm mb-4 line-clamp-2">{project.description}</p>
          <div className="flex items-center gap-2 mb-4 text-sm text-muted-foreground">
            <Users className="h-4 w-4" />
            <span>{project.members.length} integrante{project.members.length !== 1 ? 's' : ''}</span>
          </div>
          <Button asChild size="sm" className="w-full shadow-glow">
            <Link href={`/projetos/${project.id}`}>
              Ver Detalhes <ExternalLink className="ml-2 h-4 w-4" />
            </Link>
          </Button>
        </div>
      </CardContent>
    </Card>
  )

  const renderDefault = () => (
    <Card className={`group ${hoverClass} shadow-glow glass overflow-hidden`}>
      <CardContent className="p-0">
        <div className="aspect-video bg-white overflow-hidden relative flex items-center justify-center">
          <img
            src={project.image || "/placeholder.svg"}
            alt={`Screenshot do projeto ${project.title}`}
            className="max-w-full max-h-full object-contain group-hover:scale-105 transition-transform duration-300"
            style={{ transform: `scale(${project.imageZoom ? project.imageZoom / 100 : 1})` }}
          />
          <div className="absolute top-4 right-4">
            <div className="flex gap-1">
              {project.category.map((cat, index) => (
                <Badge key={index} variant="secondary" className="text-xs glass">
                  {cat}
                </Badge>
              ))}
            </div>
          </div>
          <div className="absolute bottom-4 left-4">
            <div className="flex items-center gap-2 text-xs text-white bg-black/50 px-2 py-1 rounded-md">
              <Calendar className="h-3 w-3" />
              <span>{project.year}</span>
            </div>
          </div>
        </div>
        <div className="p-6">
          <h3 className="text-xl font-semibold mb-3 group-hover:text-primary transition-colors">
            {project.title}
          </h3>
          <p className="text-muted-foreground text-sm mb-4 line-clamp-3">{project.description}</p>
          <div className="flex items-center gap-2 mb-4 text-sm text-muted-foreground">
            <Users className="h-4 w-4" />
            <span>{project.members.length} integrante{project.members.length !== 1 ? 's' : ''}</span>
          </div>
          <div className="flex flex-wrap gap-2 mb-5">
            {project.technologies.slice(0, 3).map((tech) => (
              <Badge key={tech} variant="outline" className="text-xs glass">
                {tech}
              </Badge>
            ))}
            {project.technologies.length > 3 && (
              <Badge variant="outline" className="text-xs glass">
                +{project.technologies.length - 3}
              </Badge>
            )}
          </div>
          <Button asChild className="w-full shadow-glow">
            <Link href={`/projetos/${project.id}`}>
              Ver Detalhes <ExternalLink className="ml-2 h-4 w-4" />
            </Link>
          </Button>
        </div>
      </CardContent>
    </Card>
  )

  const renderDetailed = () => (
    <Card className={`group ${hoverClass} shadow-glow glass overflow-hidden h-full flex flex-col`}>
      <CardContent className="p-0 flex flex-col h-full">
        <div className="aspect-video bg-white overflow-hidden relative flex items-center justify-center">
          <img
            src={project.image || "/placeholder.svg"}
            alt={`Screenshot do projeto ${project.title}`}
            className="max-w-full max-h-full object-contain group-hover:scale-105 transition-transform duration-300"
            style={{ transform: `scale(${project.imageZoom ? project.imageZoom / 100 : 1})` }}
          />
          <div className="absolute top-4 left-4 flex gap-2">
            {project.category.map((cat, index) => (
              <Badge key={index} variant="secondary" className="text-xs glass">
                {cat}
              </Badge>
            ))}
          </div>
          <div className="absolute bottom-4 right-4">
            <div className="flex items-center gap-2 text-xs text-white bg-black/50 px-2 py-1 rounded-md">
              <Calendar className="h-3 w-3" />
              <span>{project.year}</span>
            </div>
          </div>
        </div>
        <div className="p-6 flex flex-col h-full">
          <div className="flex-1">
            <h3 className="text-xl font-semibold mb-3 group-hover:text-primary transition-colors">
              {project.title}
            </h3>
            <p className="text-muted-foreground text-sm mb-4 line-clamp-3">{project.description}</p>
            <div className="flex items-center gap-2 mb-4 text-sm text-muted-foreground">
              <Users className="h-4 w-4" />
              <span>{project.members.length} integrante{project.members.length !== 1 ? 's' : ''}</span>
              <span>•</span>
              <span>{project.advisor?.name?.split(' ').slice(0, 3).join(' ') || 'Orientador não informado'}</span>
            </div>
            <div className="flex flex-wrap gap-2 mb-5">
              {project.technologies.slice(0, 4).map((tech) => (
                <Badge key={tech} variant="outline" className="text-xs glass">
                  {tech}
                </Badge>
              ))}
              {project.technologies.length > 4 && (
                <Badge variant="outline" className="text-xs glass">
                  +{project.technologies.length - 4}
                </Badge>
              )}
            </div>
          </div>
          <Button asChild className="w-full shadow-glow mt-auto">
            <Link href={`/projetos/${project.id}`}>
              Ver Detalhes <ExternalLink className="ml-2 h-4 w-4" />
            </Link>
          </Button>
        </div>
      </CardContent>
    </Card>
  )

  switch (variant) {
    case 'compact':
      return renderCompact()
    case 'detailed':
      return renderDetailed()
    default:
      return renderDefault()
  }
}
