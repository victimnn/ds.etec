import { PersonalClient } from "@/src/components/main/personal/personal-client"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Victor Ramos | Developer",
  description: "Portfólio profissional de Victor Ramos, desenvolvedor focado em soluções web modernas.",
}

export default function PersonalPage() {
  return <PersonalClient />
}
