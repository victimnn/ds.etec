"use client"

import { useState, useMemo } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Card, CardContent } from "@/src/components/ui/card"
import { Button } from "@/src/components/ui/button"
import { Input } from "@/src/components/ui/input"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/src/components/ui/select"
import { Search, Filter, Grid, LayoutGrid, Calendar, Clock, RotateCcw } from "lucide-react"
import { ProjectCard } from "@/src/components/tcc/project/project-card"
import { Carousel } from "@/src/components/tcc/ui/carousel"
import type { TCCProject } from "@/src/lib/types"
import { cn } from "@/src/lib/utils"

interface ProjetosClientProps {
  projects: TCCProject[]
}

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.05
    }
  }
}

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: { duration: 0.5, ease: "easeOut" }
  }
}

export function ProjetosClient({ projects }: ProjetosClientProps) {
  const [searchTerm, setSearchTerm] = useState("")
  const [categoryFilter, setCategoryFilter] = useState("all")
  const [yearFilter, setYearFilter] = useState("all")
  const [periodFilter, setPeriodFilter] = useState("all")
  const [viewMode, setViewMode] = useState<"carousel" | "grid">("grid")

  // Extrair valores únicos para os filtros dinâmicos
  const uniqueYears = useMemo(() => {
    const years = [...new Set(projects.map(p => p.year))].filter(Boolean)
    return years.sort((a, b) => b.localeCompare(a))
  }, [projects])

  const uniquePeriods = useMemo(() => {
    const periods = [...new Set(projects.map(p => p.period))].filter(Boolean)
    return periods.sort()
  }, [projects])

  const filteredProjects = useMemo(() => {
    let filtered = projects

    if (searchTerm.trim()) {
      const search = searchTerm.toLowerCase()
      filtered = filtered.filter(project =>
        project.title.toLowerCase().includes(search) ||
        project.description.toLowerCase().includes(search) ||
        project.technologies.some(tech => tech.toLowerCase().includes(search)) ||
        project.members.some(member => member.name.toLowerCase().includes(search))
      )
    }

    if (categoryFilter !== "all") {
      filtered = filtered.filter(project => 
        project.category.some(cat => cat.toLowerCase() === categoryFilter.toLowerCase())
      )
    }

    if (yearFilter !== "all") {
      filtered = filtered.filter(project => project.year === yearFilter)
    }

    if (periodFilter !== "all") {
      filtered = filtered.filter(project => project.period === periodFilter)
    }

    return filtered
  }, [searchTerm, categoryFilter, yearFilter, periodFilter, projects])

  const resetFilters = () => {
    setSearchTerm("")
    setCategoryFilter("all")
    setYearFilter("all")
    setPeriodFilter("all")
  }

  const isFiltered = searchTerm !== "" || categoryFilter !== "all" || yearFilter !== "all" || periodFilter !== "all"

  return (
    <div className="mt-10 pt-24 pb-16 px-4">
      <div className="container mx-auto">
        {/* Header */}
        <motion.div 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h1 className="text-4xl md:text-6xl font-black mb-4 tracking-tighter">
            Explorar <span className="text-primary">Projetos</span>
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto text-pretty">
            Filtre por ano, categoria ou período para encontrar os trabalhos acadêmicos de seu interesse.
          </p>
        </motion.div>

        {/* Multi-Filter Bar */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="bg-card/50 backdrop-blur-md rounded-[2.5rem] border p-4 mb-8 shadow-glow border-primary/5"
        >
          <div className="flex flex-col space-y-4">
            <div className="flex flex-col lg:flex-row gap-4">
              {/* Search */}
              <div className="flex-1 relative group">
                <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-muted-foreground group-focus-within:text-primary transition-colors h-4 w-4" />
                <Input 
                  placeholder="Pesquisar por título, tecnologia ou integrante..." 
                  className="pl-12 h-12 rounded-2xl bg-background/50 border-none ring-1 ring-border focus-visible:ring-2 focus-visible:ring-primary/50 transition-all"
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                />
              </div>

              {/* Selects Grid */}
              <div className="grid grid-cols-2 md:flex items-center gap-3">
                <Select value={categoryFilter} onValueChange={setCategoryFilter}>
                  <SelectTrigger className="w-full md:w-[150px] h-12 rounded-2xl bg-background/50 border-none ring-1 ring-border">
                    <Filter className="h-4 w-4 mr-2 text-primary" />
                    <SelectValue placeholder="Categoria" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="all">Categorias</SelectItem>
                    <SelectItem value="web">Web</SelectItem>
                    <SelectItem value="mobile">Mobile</SelectItem>
                    <SelectItem value="desktop">Desktop</SelectItem>
                  </SelectContent>
                </Select>

                <Select value={yearFilter} onValueChange={setYearFilter}>
                  <SelectTrigger className="w-full md:w-[130px] h-12 rounded-2xl bg-background/50 border-none ring-1 ring-border">
                    <Calendar className="h-4 w-4 mr-2 text-primary" />
                    <SelectValue placeholder="Ano" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="all">Todos Anos</SelectItem>
                    {uniqueYears.map(year => (
                      <SelectItem key={year} value={year}>{year}</SelectItem>
                    ))}
                  </SelectContent>
                </Select>

                <Select value={periodFilter} onValueChange={setPeriodFilter}>
                  <SelectTrigger className="w-full md:w-[140px] h-12 rounded-2xl bg-background/50 border-none ring-1 ring-border">
                    <Clock className="h-4 w-4 mr-2 text-primary" />
                    <SelectValue placeholder="Período" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="all">Todos Turnos</SelectItem>
                    {uniquePeriods.map(period => (
                      <SelectItem key={period} value={period}>{period}</SelectItem>
                    ))}
                  </SelectContent>
                </Select>

                {/* Reset & View Toggle */}
                <div className="col-span-2 md:col-span-1 flex items-center gap-2 justify-end">
                  {isFiltered && (
                    <Button 
                      variant="ghost" 
                      size="icon" 
                      onClick={resetFilters}
                      className="rounded-full hover:bg-destructive/10 hover:text-destructive transition-colors"
                      title="Limpar Filtros"
                    >
                      <RotateCcw className="h-4 w-4" />
                    </Button>
                  )}
                  
                  <div className="flex bg-background/50 p-1 rounded-2xl border ring-1 ring-border shrink-0">
                    <Button
                      variant="ghost"
                      size="icon"
                      onClick={() => setViewMode("carousel")}
                      className={cn(
                        "rounded-xl transition-all duration-300 h-8 w-8",
                        viewMode === "carousel" ? "bg-primary text-primary-foreground shadow-lg" : "text-muted-foreground hover:text-primary"
                      )}
                    >
                      <LayoutGrid className="h-4 w-4" />
                    </Button>
                    <Button
                      variant="ghost"
                      size="icon"
                      onClick={() => setViewMode("grid")}
                      className={cn(
                        "rounded-xl transition-all duration-300 h-8 w-8",
                        viewMode === "grid" ? "bg-primary text-primary-foreground shadow-lg" : "text-muted-foreground hover:text-primary"
                      )}
                    >
                      <Grid className="h-4 w-4" />
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Results Info */}
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="mb-8 flex items-center gap-4 px-4"
        >
          <p className="text-sm font-bold uppercase tracking-widest text-muted-foreground/60 whitespace-nowrap">
            {filteredProjects.length} Projetos encontrados
          </p>
          <div className="h-px flex-1 bg-gradient-to-r from-border/50 via-border/20 to-transparent" />
        </motion.div>

        {/* Projects Display */}
        <AnimatePresence mode="wait">
          {filteredProjects.length > 0 ? (
            <motion.div
              key={viewMode + (searchTerm || categoryFilter || yearFilter || periodFilter)}
              initial="hidden"
              animate="visible"
              exit={{ opacity: 0, scale: 0.98 }}
              variants={containerVariants}
            >
              {viewMode === "carousel" ? (
                <Carousel
                  itemsPerView={{ mobile: 1, tablet: 2, desktop: 4 }}
                  showArrows={true}
                  showDots={true}
                  gap={24}
                  className="pb-12"
                >
                  {filteredProjects.map((project) => (
                    <motion.div key={project.id} variants={itemVariants}>
                      <ProjectCard project={project} variant="detailed" inCarousel={true} />
                    </motion.div>
                  ))}
                </Carousel>
              ) : (
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                  {filteredProjects.map((project) => (
                    <motion.div key={project.id} variants={itemVariants} layout>
                      <ProjectCard project={project} variant="detailed" />
                    </motion.div>
                  ))}
                </div>
              )}
            </motion.div>
          ) : (
            <motion.div 
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              className="text-center py-24 bg-muted/20 rounded-[3rem] border border-dashed border-border/50"
            >
              <Search className="h-16 w-16 mx-auto mb-6 text-muted-foreground/30" />
              <h3 className="text-2xl font-bold mb-2">Nenhum resultado</h3>
              <p className="text-muted-foreground mb-8">Não encontramos projetos que correspondam a todos os filtros selecionados.</p>
              <Button 
                variant="outline" 
                className="rounded-full px-8 border-2"
                onClick={resetFilters}
              >
                Limpar Todos os Filtros
              </Button>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  )
}
