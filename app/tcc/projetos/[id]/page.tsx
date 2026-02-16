import { Navigation } from '@/src/components/tcc/layout/navigation'
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from '@/src/components/ui/card'
import { Badge } from '@/src/components/ui/badge'
import { Button } from '@/src/components/ui/button'
import { Separator } from '@/src/components/ui/separator'
import { ProjectTeam } from '@/src/components/tcc/project/project-team'
import { ProjectTechnologies } from '@/src/components/tcc/project/project-technologies'
import { ProjectInfo } from '@/src/components/tcc/project/project-info'
import { ImageGallery } from '@/src/components/tcc/project/image-gallery'
import { ShareButtons } from '@/src/components/tcc/project/share-buttons'
import { VideoPlayer } from '@/src/components/tcc/project/video-player'
import Link from 'next/link'
import {
  ArrowLeft,
  Github,
  Download,
  Play,
  ImageIcon,
  Calendar,
  CheckCircle2,
  Share2,
  Info,
  Layers,
  Users,
} from 'lucide-react'
import { notFound } from 'next/navigation'
import { getProjectById } from '@/src/lib/data/data'
import type { Metadata } from 'next'

export async function generateMetadata({
  params,
}: PageProps): Promise<Metadata> {
  const { id } = await params
  const project = await getProjectById(Number.parseInt(id, 10))

  if (!project) {
    return {
      title: 'Projeto não encontrado',
      description: 'O projeto solicitado não foi encontrado.',
    }
  }

  return {
    title: project.title,
    description: project.description,
    openGraph: {
      title: project.title,
      description: project.description,
      images: [
        {
          url: project.image,
          width: 1200,
          height: 630,
          alt: project.title,
        },
      ],
    },
  }
}

interface PageProps {
  params: Promise<{
    id: string
  }>
}

export default async function TCCDetailsPage({ params }: PageProps) {
  const { id } = await params
  const project = await getProjectById(Number.parseInt(id, 10))

  if (!project) {
    notFound()
  }

  return (
    <div className="min-h-screen bg-background font-sans">
      <Navigation />

      <main className="pb-16">
        {/* Hero Section with Gradient Background */}
        <div className="relative bg-gradient-to-b from-muted/50 to-background pt-32 pb-12 lg:pt-40 lg:pb-20 border-b">
          <div className="container mx-auto px-4 max-w-7xl">
            {/* Breadcrumb */}
            <div className="mb-8">
              <Button
                variant="ghost"
                size="sm"
                asChild
                className="-ml-2 text-muted-foreground hover:text-foreground transition-colors"
              >
                <Link href="/projetos">
                  <ArrowLeft className="mr-2 h-4 w-4" />
                  Voltar para Projetos
                </Link>
              </Button>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              {/* Hero Content */}
              <div className="space-y-8 animate-in fade-in slide-in-from-bottom-4 duration-500">
                <div className="flex flex-wrap items-center gap-3">
                  {project.category.map((cat, index) => (
                    <Badge
                      key={index}
                      variant="secondary"
                      className="px-3 py-1 text-sm font-medium bg-background/50 backdrop-blur-sm border shadow-sm"
                    >
                      {cat}
                    </Badge>
                  ))}
                  <Separator
                    orientation="vertical"
                    className="h-6 hidden sm:block bg-border/60"
                  />
                  <div className="flex items-center gap-2 text-muted-foreground bg-background/50 backdrop-blur-sm px-3 py-1 rounded-full text-sm border shadow-sm">
                    <Calendar className="h-4 w-4" />
                    <span className="font-medium">{project.year}</span>
                  </div>
                </div>

                <div className="space-y-6">
                  <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight text-balance bg-clip-text text-transparent bg-gradient-to-r from-foreground to-foreground/70">
                    {project.title}
                  </h1>
                  <p className="text-xl text-muted-foreground leading-relaxed text-pretty max-w-xl">
                    {project.description}
                  </p>
                </div>

                <div className="flex flex-wrap gap-3 pt-2">
                  {project.links?.demo && (
                    <Button
                      asChild
                      size="lg"
                      className="rounded-full px-8 shadow-lg shadow-primary/20 hover:shadow-primary/30 transition-all hover:-translate-y-0.5"
                    >
                      <a
                        href={project.links.demo}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <Play className="mr-2 h-5 w-5" />
                        Ver Demo
                      </a>
                    </Button>
                  )}

                  {project.links?.github && (
                    <Button
                      variant="outline"
                      size="lg"
                      asChild
                      className="rounded-full px-6 bg-background/50 backdrop-blur-sm hover:bg-background transition-all hover:-translate-y-0.5"
                    >
                      <a
                        href={project.links.github}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <Github className="mr-2 h-5 w-5" />
                        Código
                      </a>
                    </Button>
                  )}

                  {project.links?.github2 && (
                    <Button
                      variant="outline"
                      size="lg"
                      asChild
                      className="rounded-full px-6 bg-background/50 backdrop-blur-sm hover:bg-background transition-all hover:-translate-y-0.5"
                    >
                      <a
                        href={project.links.github2}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <Github className="mr-2 h-5 w-5" />
                        Mobile
                      </a>
                    </Button>
                  )}

                  {project.links?.documentation && (
                    <Button
                      variant="outline"
                      size="lg"
                      asChild
                      className="rounded-full px-6 bg-background/50 backdrop-blur-sm hover:bg-background transition-all hover:-translate-y-0.5"
                    >
                      <a
                        href={project.links.documentation}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <Download className="mr-2 h-5 w-5" />
                        Docs
                      </a>
                    </Button>
                  )}
                </div>
              </div>

              {/* Hero Image */}
              <div className="relative aspect-video rounded-2xl overflow-hidden shadow-2xl border bg-muted/50 group animate-in fade-in slide-in-from-bottom-8 duration-700 delay-150 ring-1 ring-border/50">
                <img
                  src={project.image || '/placeholder.svg'}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              </div>
            </div>
          </div>
        </div>

        {/* Mobile-only: Team and Tech Emphasis */}
        <div className="lg:hidden container mx-auto px-4 mt-8 mb-8 animate-in fade-in slide-in-from-bottom-6 duration-700 delay-200">
          <section className="space-y-4">
            <div className="flex items-center gap-2 mb-2">
              <Users className="h-5 w-5 text-primary" />
              <h2 className="text-xl font-bold">Time e Tecnologias</h2>
            </div>
            <ProjectTeam project={project} variant="compact" />
            <ProjectTechnologies project={project} variant="sidebar" />
          </section>
        </div>

        {/* Main Content Grid */}
        <div className="container mx-auto px-4 max-w-7xl mt-12">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
            {/* Left Column (Content) */}
            <div className="lg:col-span-8 space-y-16">
              {/* About Section */}
              <section className="space-y-6 scroll-mt-24" id="sobre">
                <div className="flex items-center gap-3 pb-2 border-b">
                  <div className="p-2 bg-primary/10 rounded-lg">
                    <Info className="h-6 w-6 text-primary" />
                  </div>
                  <h2 className="text-2xl font-bold tracking-tight">
                    Sobre o Projeto
                  </h2>
                </div>
                <div className="prose prose-lg dark:prose-invert max-w-none text-muted-foreground leading-relaxed">
                  {project.fullDescription ? (
                    project.fullDescription
                      .split('\n\n')
                      .map((paragraph, index) => (
                        <p key={index} className="mb-4">
                          {paragraph}
                        </p>
                      ))
                  ) : (
                    <p>{project.description}</p>
                  )}
                </div>
              </section>

              {/* Features Section */}
              {project.features && project.features.length > 0 && (
                <section
                  className="space-y-6 scroll-mt-24"
                  id="funcionalidades"
                >
                  <div className="flex items-center gap-3 pb-2 border-b">
                    <div className="p-2 bg-primary/10 rounded-lg">
                      <Layers className="h-6 w-6 text-primary" />
                    </div>
                    <h2 className="text-2xl font-bold tracking-tight">
                      Principais Funcionalidades
                    </h2>
                  </div>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {project.features.map((feature, index) => (
                      <Card
                        key={index}
                        className="bg-card hover:bg-accent/50 transition-colors border-muted shadow-sm group"
                      >
                        <CardContent className="p-4 flex items-start gap-3">
                          <div className="mt-1 bg-primary/10 p-1.5 rounded-full group-hover:bg-primary/20 transition-colors">
                            <CheckCircle2 className="h-4 w-4 text-primary shrink-0" />
                          </div>
                          <span className="font-medium text-foreground/90">
                            {feature}
                          </span>
                        </CardContent>
                      </Card>
                    ))}
                  </div>
                </section>
              )}

              {/* Video Section */}
              {project.videoUrl && (
                <section className="space-y-6 scroll-mt-24" id="video">
                  <div className="flex items-center gap-3 pb-2 border-b">
                    <div className="p-2 bg-primary/10 rounded-lg">
                      <Play className="h-6 w-6 text-primary" />
                    </div>
                    <h2 className="text-2xl font-bold tracking-tight">
                      Demonstração
                    </h2>
                  </div>
                  <div className="rounded-xl overflow-hidden shadow-lg border bg-black/5 ring-1 ring-border/50">
                    <VideoPlayer
                      videoUrl={project.videoUrl}
                      title={project.title}
                    />
                  </div>
                </section>
              )}

              {/* Gallery Section */}
              {project.gallery && project.gallery.length > 0 && (
                <section className="space-y-6 scroll-mt-24" id="galeria">
                  <div className="flex items-center gap-3 pb-2 border-b">
                    <div className="p-2 bg-primary/10 rounded-lg">
                      <ImageIcon className="h-6 w-6 text-primary" />
                    </div>
                    <h2 className="text-2xl font-bold tracking-tight">
                      Galeria
                    </h2>
                  </div>
                  <ImageGallery
                    images={project.gallery}
                    projectTitle={project.title}
                  />
                </section>
              )}
            </div>

            {/* Right Column (Sidebar) */}
            <div className="lg:col-span-4 space-y-8">
              <div className="sticky top-24 space-y-8">
                <div className="hidden lg:block">
                  <ProjectTeam project={project} variant="sidebar" />
                </div>
                <div className="hidden lg:block">
                  <ProjectTechnologies project={project} variant="sidebar" />
                </div>
                <ProjectInfo project={project} variant="sidebar" />

                <Card className="bg-gradient-to-br from-card to-muted/30 border-muted shadow-sm">
                  <CardHeader className="pb-3">
                    <CardTitle className="text-lg font-semibold flex items-center gap-2">
                      <Share2 className="h-5 w-5 text-primary" />
                      Compartilhar
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <ShareButtons
                      projectTitle={project.title}
                      projectDescription={project.description}
                    />
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  )
}
