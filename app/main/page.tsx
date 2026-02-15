import { MainHomeClient } from "@/src/components/main/main-home-client"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "DS Etec | Técnico em Desenvolvimento de Sistemas",
  description: "Explore o futuro da tecnologia na ETEC João Belarmino. Formação técnica de alta performance em Desenvolvimento de Sistemas.",
}

export default function HomePage() {
  return (
    <MainHomeClient />
  )
}
