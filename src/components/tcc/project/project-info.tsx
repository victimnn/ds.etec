import { Card, CardContent } from "@/src/components/ui/card"
import { Badge } from "@/src/components/ui/badge"
import { Calendar, Users, Code, BookOpen, CheckCircle } from "lucide-react"
import type { TCCProject } from "@/lib/types"

interface ProjectInfoProps {
  project: TCCProject
  variant?: 'sidebar' | 'full' | 'compact'
}

export function ProjectInfo({ project, variant = 'sidebar' }: ProjectInfoProps) {
  const renderSidebar = () => (
    <Card>
      <CardContent className="p-6">
        <h3 className="font-semibold mb-4">Informações do Projeto</h3>
        <div className="space-y-3">
          <div className="flex justify-between">
            <span className="text-muted-foreground">Categoria:</span>
            <span>{project.category.join(', ')}</span>
          </div>
          <div className="flex justify-between">
            <span className="text-muted-foreground">Ano:</span>
            <span>{project.year}</span>
          </div>
          <div className="flex justify-between">
            <span className="text-muted-foreground">Equipe:</span>
            <span>{project.members.length} pessoa{project.members.length !== 1 ? 's' : ''}</span>
          </div>
        </div>
      </CardContent>
    </Card>
  )

  const renderFull = () => (
    <Card>
      <CardContent className="p-8">
        <h2 className="text-2xl font-bold mb-6 flex items-center">
          <BookOpen className="mr-2 h-6 w-6" />
          Informações do Projeto
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <Code className="h-5 w-5 text-primary" />
              <div>
                <p className="text-sm text-muted-foreground">Categoria</p>
                <p className="font-semibold">{project.category.join(', ')}</p>
              </div>
            </div>
            
            <div className="flex items-center gap-3">
              <Calendar className="h-5 w-5 text-primary" />
              <div>
                <p className="text-sm text-muted-foreground">Ano</p>
                <p className="font-semibold">{project.year}</p>
              </div>
            </div>
          </div>
          
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <Users className="h-5 w-5 text-primary" />
              <div>
                <p className="text-sm text-muted-foreground">Equipe</p>
                <p className="font-semibold">{project.members.length} pessoa{project.members.length !== 1 ? 's' : ''}</p>
              </div>
            </div>
            
          </div>
        </div>
        
      </CardContent>
    </Card>
  )

  const renderCompact = () => (
    <div className="flex flex-wrap gap-4 text-sm">
      <div className="flex items-center gap-2">
        <Code className="h-4 w-4 text-muted-foreground" />
        <span className="text-muted-foreground">Categoria:</span>
        <span>{project.category.join(', ')}</span>
      </div>
      
      <div className="flex items-center gap-2">
        <Calendar className="h-4 w-4 text-muted-foreground" />
        <span className="text-muted-foreground">Ano:</span>
        <span>{project.year}</span>
      </div>
      
      <div className="flex items-center gap-2">
        <Users className="h-4 w-4 text-muted-foreground" />
        <span className="text-muted-foreground">Equipe:</span>
        <span>{project.members.length} pessoa{project.members.length !== 1 ? 's' : ''}</span>
      </div>
      
    </div>
  )

  switch (variant) {
    case 'full':
      return renderFull()
    case 'compact':
      return renderCompact()
    default:
      return renderSidebar()
  }
}
