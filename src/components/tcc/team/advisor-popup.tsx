"use client"

import { useState } from "react"
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/src/components/ui/dialog"
import { Button } from "@/src/components/ui/button"
import { Badge } from "@/src/components/ui/badge"
import { Linkedin, Mail, GraduationCap, User, Award, Building2 } from "lucide-react"
import type { Advisor } from "@/lib/types"

interface AdvisorPopupProps {
  advisor: Advisor
  children: React.ReactNode
}

export function AdvisorPopup({ advisor, children }: AdvisorPopupProps) {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <Dialog open={isOpen} onOpenChange={setIsOpen}>
      <DialogTrigger asChild>{children}</DialogTrigger>
      <DialogContent className="w-[95vw] sm:max-w-6xl p-0 overflow-y-auto max-h-[90vh] gap-0 border-none shadow-2xl bg-card">
        <DialogHeader className="sr-only">
          <DialogTitle>Perfil de {advisor.name}</DialogTitle>
        </DialogHeader>

        {/* Header Banner */}
        <div className="h-36 bg-gradient-to-r from-primary/20 via-primary/10 to-background relative">
            <div className="absolute inset-0 bg-grid-white/10 [mask-image:linear-gradient(0deg,white,rgba(255,255,255,0.6))]" />
        </div>

        <div className="px-6 md:px-10 pb-10 -mt-16 relative">
            <div className="flex flex-col md:flex-row gap-8 items-start">
                {/* Avatar */}
                <div className="relative group shrink-0 mx-auto md:mx-0">
                    <div className="w-36 h-36 rounded-2xl overflow-hidden border-4 border-background shadow-2xl bg-muted">
                        <img
                            src={advisor.photo || "/placeholder.svg"}
                            alt={advisor.name}
                            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                        />
                    </div>
                    <div className="absolute -bottom-3 -right-3 bg-primary text-primary-foreground rounded-xl p-2 shadow-lg border-4 border-background">
                        <GraduationCap className="h-5 w-5" />
                    </div>
                </div>

                {/* Basic Info */}
                <div className="flex-1 pt-4 md:pt-20 space-y-4 text-center md:text-left w-full">
                    <div className="flex flex-col md:flex-row md:items-start justify-between gap-6">
                        <div className="space-y-2 flex-1">
                            <h2 className="text-3xl md:text-4xl font-bold tracking-tight">{advisor.name}</h2>
                            <div className="flex flex-wrap items-center justify-center md:justify-start gap-x-3 gap-y-1 text-muted-foreground">
                                <div className="flex items-center gap-2 text-primary font-medium">
                                    <Award className="h-4 w-4 shrink-0" />
                                    <span>{advisor.title}</span>
                                </div>
                                {advisor.department && (
                                    <>
                                        <span className="hidden md:inline text-border">•</span>
                                        <div className="flex items-center gap-1.5 text-sm">
                                            <Building2 className="h-3.5 w-3.5 shrink-0" />
                                            {advisor.department}
                                        </div>
                                    </>
                                )}
                            </div>
                        </div>
                        
                        {/* Social Links */}
                        <div className="flex gap-2 justify-center md:justify-end shrink-0">
                            {advisor.linkedin && (
                                <Button size="icon" variant="outline" className="h-9 w-9 rounded-full hover:text-[#0077b5] hover:border-[#0077b5] hover:bg-[#0077b5]/10 transition-all" asChild>
                                    <a href={advisor.linkedin} target="_blank" rel="noopener noreferrer">
                                        <Linkedin className="h-4 w-4" />
                                    </a>
                                </Button>
                            )}
                            {advisor.email && (
                                <Button size="icon" variant="outline" className="h-9 w-9 rounded-full hover:text-red-500 hover:border-red-500 hover:bg-red-500/10 transition-all" asChild>
                                    <a href={`mailto:${advisor.email}`}>
                                        <Mail className="h-4 w-4" />
                                    </a>
                                </Button>
                            )}
                        </div>
                    </div>
                </div>
            </div>

            <div className="mt-8 grid grid-cols-1 lg:grid-cols-12 gap-8">
                {/* Main Content */}
                <div className="lg:col-span-8 space-y-8">
                    {/* About */}
                    <section className="space-y-3">
                        <h3 className="text-lg font-semibold flex items-center gap-2.5 text-foreground/90">
                            <div className="p-1.5 rounded-lg bg-primary/10 text-primary">
                                <User className="h-4 w-4" />
                            </div>
                            Sobre
                        </h3>
                        <p className="text-muted-foreground leading-relaxed text-base text-pretty">
                            {advisor.about}
                        </p>
                    </section>

                    {/* Achievements */}
                    {advisor.achievements && advisor.achievements.length > 0 && (
                        <section className="space-y-3">
                            <h3 className="text-lg font-semibold flex items-center gap-2.5 text-foreground/90">
                                <div className="p-1.5 rounded-lg bg-primary/10 text-primary">
                                    <Award className="h-4 w-4" />
                                </div>
                                Conquistas e Experiência
                            </h3>
                            <div className="grid gap-3 sm:grid-cols-2">
                                {advisor.achievements.map((achievement, index) => (
                                    <div key={index} className="flex items-start gap-3 p-3 rounded-xl bg-muted/40 border border-border/50 hover:border-primary/20 hover:bg-muted/60 transition-colors">
                                        <div className="mt-0.5 bg-primary/10 p-1.5 rounded-full shrink-0">
                                            <Award className="h-3 w-3 text-primary" />
                                        </div>
                                        <span className="text-sm text-muted-foreground font-medium">{achievement}</span>
                                    </div>
                                ))}
                            </div>
                        </section>
                    )}
                </div>

                {/* Sidebar Info */}
                <div className="lg:col-span-4 space-y-6">
                    {/* Expertise */}
                    <div className="p-5 rounded-2xl bg-muted/30 border shadow-sm space-y-4">
                        <h3 className="font-semibold flex items-center gap-2.5 text-base">
                            <GraduationCap className="h-4 w-4 text-primary" />
                            Área de Especialização
                        </h3>
                        <div className="flex flex-wrap gap-2">
                            {advisor.expertise.split(", ").map((skill, index) => (
                                <Badge key={index} variant="secondary" className="px-2.5 py-0.5 text-sm bg-background hover:bg-background/80 border-transparent shadow-sm">
                                    {skill}
                                </Badge>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </div>
      </DialogContent>
    </Dialog>
  )
}
