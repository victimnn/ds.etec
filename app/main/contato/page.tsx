import { ContatoClient } from "@/src/components/main/contato/contato-client"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Contato | DS Etec",
  description: "Entre em contato com a coordenação do curso de Desenvolvimento de Sistemas da ETEC João Belarmino.",
}

export default function ContatoPage() {
  return <ContatoClient />
}
