import { Navigation } from "@/src/components/tcc/layout/navigation"
import { Card, CardContent } from "@/src/components/ui/card"
import { Skeleton } from "@/src/components/ui/skeleton"
import { Button } from "@/src/components/ui/button"
import { ArrowLeft } from "lucide-react"

export default function Loading() {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />

      <div className="pt-24 pb-16 px-4">
        <div className="container mx-auto max-w-6xl">
          {/* Back Button */}
          <div className="mb-8">
            <Button variant="ghost" disabled>
              <ArrowLeft className="mr-2 h-4 w-4" />
              Voltar aos Projetos
            </Button>
          </div>

          {/* Header */}
          <div className="mb-12">
            <div className="flex flex-col lg:flex-row gap-8">
              <div className="lg:w-2/3">
                <div className="flex items-center gap-4 mb-4">
                  <Skeleton className="h-6 w-16" />
                  <Skeleton className="h-4 w-20" />
                </div>

                <Skeleton className="h-12 w-full mb-4" />
                <Skeleton className="h-6 w-3/4 mb-6" />

                <div className="flex gap-3">
                  <Skeleton className="h-10 w-24" />
                  <Skeleton className="h-10 w-32" />
                  <Skeleton className="h-10 w-28" />
                </div>
              </div>

              <div className="lg:w-1/3">
                <Card>
                  <CardContent className="p-6">
                    <Skeleton className="h-6 w-32 mb-4" />
                    <div className="space-y-4">
                      {Array.from({ length: 3 }).map((_, i) => (
                        <div key={i} className="flex items-center gap-3">
                          <Skeleton className="w-10 h-10 rounded-full" />
                          <div className="flex-1">
                            <Skeleton className="h-4 w-24 mb-1" />
                            <Skeleton className="h-3 w-20" />
                          </div>
                          <Skeleton className="h-8 w-8" />
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>

          {/* Main Image */}
          <Skeleton className="aspect-video w-full rounded-lg mb-12" />

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            {/* Main Content */}
            <div className="lg:col-span-2 space-y-12">
              <section>
                <Skeleton className="h-8 w-48 mb-6" />
                <div className="space-y-4">
                  <Skeleton className="h-4 w-full" />
                  <Skeleton className="h-4 w-full" />
                  <Skeleton className="h-4 w-3/4" />
                </div>
              </section>

              <section>
                <Skeleton className="h-8 w-56 mb-6" />
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {Array.from({ length: 6 }).map((_, i) => (
                    <Skeleton key={i} className="h-12 w-full rounded-lg" />
                  ))}
                </div>
              </section>
            </div>

            {/* Sidebar */}
            <div className="space-y-8">
              <Card>
                <CardContent className="p-6">
                  <Skeleton className="h-6 w-40 mb-4" />
                  <div className="flex flex-wrap gap-2">
                    {Array.from({ length: 6 }).map((_, i) => (
                      <Skeleton key={i} className="h-6 w-16" />
                    ))}
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="p-6">
                  <Skeleton className="h-6 w-36 mb-4" />
                  <div className="space-y-3">
                    {Array.from({ length: 3 }).map((_, i) => (
                      <div key={i} className="flex justify-between">
                        <Skeleton className="h-4 w-20" />
                        <Skeleton className="h-4 w-16" />
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
