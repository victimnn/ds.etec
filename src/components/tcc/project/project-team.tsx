import { Card, CardContent } from "@/src/components/ui/card"
import { Badge } from "@/src/components/ui/badge"
import { Button } from "@/src/components/ui/button"
import { Separator } from "@/src/components/ui/separator"
import { Users, GraduationCap, ExternalLink } from "lucide-react"
import { TeamMemberPopup } from "@/src/components/tcc/team/team-member-popup"
import { AdvisorPopup } from "@/src/components/tcc/team/advisor-popup"
import type { TCCProject } from "@/lib/types"

interface ProjectTeamProps {
  project: TCCProject
  variant?: 'sidebar' | 'full' | 'compact'
}

export function ProjectTeam({ project, variant = 'sidebar' }: ProjectTeamProps) {
  const renderSidebar = () => (
    <div className="space-y-6">
      {/* Professor Orientador */}
      <Card>
        <CardContent className="p-6">
          <h3 className="font-semibold mb-4 flex items-center">
            <GraduationCap className="mr-2 h-4 w-4" />
            Professor Orientador
          </h3>
          <AdvisorPopup advisor={project.advisor}>
            <div className="flex items-center gap-3 p-2 rounded-lg hover:bg-muted/50 transition-colors cursor-pointer">
              <img
                src={project.advisor.photo || "/placeholder.svg"}
                alt={project.advisor?.name || "Orientador"}
                className="w-10 h-10 rounded-full object-cover"
              />
              <div className="flex-1">
                <p className="font-medium text-sm">{project.advisor?.name || "Orientador não informado"}</p>
                <p className="text-xs text-muted-foreground">{project.advisor.title}</p>
              </div>
              <Button size="sm" variant="ghost">
                <ExternalLink className="h-4 w-4" />
              </Button>
            </div>
          </AdvisorPopup>
        </CardContent>
      </Card>

      {/* Equipe do Projeto */}
      <Card>
        <CardContent className="p-6">
          <h3 className="font-semibold mb-4 flex items-center">
            <Users className="mr-2 h-4 w-4" />
            Equipe do Projeto
          </h3>
          <div className="space-y-4">
            {project.members.map((member, index) => (
              <TeamMemberPopup key={index} member={member}>
                <div className="flex items-center gap-3 p-2 rounded-lg hover:bg-muted/50 transition-colors cursor-pointer">
                  <img
                    src={member.photo || "/placeholder.svg"}
                    alt={member.name}
                    className="w-10 h-10 rounded-full object-cover"
                  />
                  <div className="flex-1">
                    <p className="font-medium text-sm">{member.name}</p>
                    <p className="text-xs text-muted-foreground">{member.role}</p>
                  </div>
                  <Button size="sm" variant="ghost">
                    <ExternalLink className="h-4 w-4" />
                  </Button>
                </div>
              </TeamMemberPopup>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  )

  const renderFull = () => (
    <div className="space-y-8">
      {/* Professor Orientador */}
      <section>
        <h2 className="text-2xl font-bold mb-6 flex items-center">
          <GraduationCap className="mr-2 h-6 w-6" />
          Professor Orientador
        </h2>
        <Card>
          <CardContent className="p-6">
            <AdvisorPopup advisor={project.advisor}>
              <div className="flex items-center gap-6 p-4 rounded-lg hover:bg-muted/50 transition-colors cursor-pointer">
                <img
                  src={project.advisor.photo || "/placeholder.svg"}
                  alt={project.advisor?.name || "Orientador"}
                  className="w-16 h-16 rounded-full object-cover"
                />
                <div className="flex-1">
                  <h3 className="text-lg font-semibold">{project.advisor?.name || "Orientador não informado"}</h3>
                  <p className="text-muted-foreground mb-2">{project.advisor.title}</p>
                  <div className="flex flex-wrap gap-2">
                    {project.advisor.expertise.split(", ").slice(0, 3).map((skill, index) => (
                      <Badge key={index} variant="secondary" className="text-xs">
                        {skill}
                      </Badge>
                    ))}
                  </div>
                </div>
                <Button variant="outline">
                  Ver Perfil Completo <ExternalLink className="ml-2 h-4 w-4" />
                </Button>
              </div>
            </AdvisorPopup>
          </CardContent>
        </Card>
      </section>

      {/* Equipe do Projeto */}
      <section>
        <h2 className="text-2xl font-bold mb-6 flex items-center">
          <Users className="mr-2 h-6 w-6" />
          Equipe do Projeto
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {project.members.map((member, index) => (
            <Card key={index}>
              <CardContent className="p-6">
                <TeamMemberPopup member={member}>
                  <div className="text-center cursor-pointer">
                    <img
                      src={member.photo || "/placeholder.svg"}
                      alt={member.name}
                      className="w-20 h-20 rounded-full object-cover mx-auto mb-4"
                    />
                    <h3 className="font-semibold mb-1">{member.name}</h3>
                    <p className="text-sm text-muted-foreground mb-3">{member.role}</p>
                    <div className="flex flex-wrap gap-1 justify-center mb-4">
                      {member.skills?.slice(0, 2).map((skill, skillIndex) => (
                        <Badge key={skillIndex} variant="outline" className="text-xs">
                          {skill}
                        </Badge>
                      ))}
                    </div>
                    <Button size="sm" variant="outline" className="w-full">
                      Ver Perfil <ExternalLink className="ml-2 h-4 w-4" />
                    </Button>
                  </div>
                </TeamMemberPopup>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>
    </div>
  )

  const renderCompact = () => (
    <Card>
      <CardContent className="p-6">
        <h3 className="font-semibold mb-4 flex items-center">
          <Users className="mr-2 h-4 w-4" />
          Equipe ({project.members.length} pessoas)
        </h3>
        
        {/* Professor Orientador */}
        <div className="mb-4">
          <p className="text-sm text-muted-foreground mb-2">Professor Orientador:</p>
          <AdvisorPopup advisor={project.advisor}>
            <div className="flex items-center gap-2 p-2 rounded-lg hover:bg-muted/50 transition-colors cursor-pointer">
              <img
                src={project.advisor.photo || "/placeholder.svg"}
                alt={project.advisor?.name || "Orientador"}
                className="w-8 h-8 rounded-full object-cover"
              />
              <span className="text-sm font-medium">{project.advisor?.name || "Orientador não informado"}</span>
            </div>
          </AdvisorPopup>
        </div>

        <Separator className="my-4" />

        {/* Membros da Equipe */}
        <div>
          <p className="text-sm text-muted-foreground mb-3">Estudantes:</p>
          <div className="space-y-3">
            {project.members.map((member, index) => (
              <TeamMemberPopup key={index} member={member}>
                <div className="flex items-center gap-3 p-2 rounded-lg hover:bg-muted/50 transition-colors cursor-pointer">
                  <img
                    src={member.photo || "/placeholder.svg"}
                    alt={member.name}
                    className="w-10 h-10 rounded-full object-cover"
                  />
                  <div className="flex-1 min-w-0">
                    <p className="text-sm font-medium truncate">{member.name}</p>
                    <p className="text-xs text-muted-foreground truncate">{member.role}</p>
                  </div>
                </div>
              </TeamMemberPopup>
            ))}
          </div>
        </div>
      </CardContent>
    </Card>
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
