import { getTccProjects } from '@/src/lib/data/data'
import { getAdvisors, getCoordinator } from '@/src/lib/data/advisors'
import type { Metadata } from 'next'
import { HomeClient } from '@/src/components/tcc/home/home-client'

export const metadata: Metadata = {
  title: "Início | Hub de TCC's",
  description:
    'Explore os projetos inovadores desenvolvidos pelos estudantes da ETEC João Belarmino no curso Técnico em Desenvolvimento de Sistemas.',
}

export default async function HomePage() {
  const [projects, advisors, coordinator] = await Promise.all([
    getTccProjects(),
    getAdvisors(),
    getCoordinator(),
  ])

  const totalProjects = projects.length
  const totalStudents = Array.from(
    new Set(projects.flatMap(p => p.members.map(m => m.id)))
  ).length
  const totalTechnologies = Array.from(
    new Set(projects.flatMap(p => p.technologies))
  ).length

  return (
    <HomeClient
      projects={projects}
      advisors={advisors}
      coordinator={coordinator}
      totalProjects={totalProjects}
      totalStudents={totalStudents}
      totalTechnologies={totalTechnologies}
    />
  )
}
