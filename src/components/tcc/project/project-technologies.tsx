import { Card, CardContent } from "@/src/components/ui/card"
import { Badge } from "@/src/components/ui/badge"
import { Code } from "lucide-react"
import type { TCCProject } from "@/lib/types"

interface ProjectTechnologiesProps {
  project: TCCProject
  variant?: 'sidebar' | 'inline' | 'grid'
  maxItems?: number
}

export function ProjectTechnologies({ 
  project, 
  variant = 'sidebar', 
  maxItems = project.technologies.length 
}: ProjectTechnologiesProps) {
  const technologies = project.technologies.slice(0, maxItems)
  const remainingCount = project.technologies.length - maxItems

  const renderSidebar = () => (
    <Card>
      <CardContent className="p-6">
        <h3 className="font-semibold mb-4 flex items-center">
          <Code className="mr-2 h-4 w-4" />
          Tecnologias Utilizadas
        </h3>
        <div className="flex flex-wrap gap-2">
          {technologies.map((tech) => (
            <Badge key={tech} variant="outline" className="text-xs">
              {tech}
            </Badge>
          ))}
          {remainingCount > 0 && (
            <Badge variant="outline" className="text-xs">
              +{remainingCount}
            </Badge>
          )}
        </div>
      </CardContent>
    </Card>
  )

  const renderInline = () => (
    <div className="flex flex-wrap gap-2">
      {technologies.map((tech) => (
        <Badge key={tech} variant="outline" className="text-xs">
          {tech}
        </Badge>
      ))}
      {remainingCount > 0 && (
        <Badge variant="outline" className="text-xs">
          +{remainingCount}
        </Badge>
      )}
    </div>
  )

  const renderGrid = () => (
    <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-2">
      {technologies.map((tech) => (
        <Badge key={tech} variant="outline" className="text-xs justify-center py-2">
          {tech}
        </Badge>
      ))}
      {remainingCount > 0 && (
        <Badge variant="outline" className="text-xs justify-center py-2">
          +{remainingCount}
        </Badge>
      )}
    </div>
  )

  switch (variant) {
    case 'inline':
      return renderInline()
    case 'grid':
      return renderGrid()
    default:
      return renderSidebar()
  }
}
