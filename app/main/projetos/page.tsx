import { ProjetosMainClient } from "@/src/components/main/projetos/projetos-main-client"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Galeria de Projetos | DS Etec",
  description: "Explore o portfólio de aplicações e soluções tecnológicas desenvolvidas pelos estudantes do curso de Desenvolvimento de Sistemas.",
}

export default function ProjetosPage() {
  return <ProjetosMainClient />
}
