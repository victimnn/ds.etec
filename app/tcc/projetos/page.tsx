import { Navigation } from "@/src/components/tcc/layout/navigation"
import { ProjetosClient } from "./projetos-client"
import { getTccProjects } from "@/src/lib/data/data"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Projetos",
  description: "Conheça os projetos de TCC's do Curso de DS da ETEC João Belarmino.",
}

export default async function ProjetosPage() {
  const projects = await getTccProjects()

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <ProjetosClient projects={projects} />
    </div>
  )
}
