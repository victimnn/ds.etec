import { Card, CardContent } from '@/src/components/ui/card'
import { Skeleton } from '@/src/components/ui/skeleton'

export function ProjectCardSkeleton() {
  return (
    <Card className="overflow-hidden">
      <CardContent className="p-0">
        <div className="aspect-video bg-white">
          <Skeleton className="w-full h-full" />
        </div>
        <div className="p-6">
          <div className="flex items-center justify-between mb-2">
            <Skeleton className="h-5 w-16" />
            <Skeleton className="h-4 w-12" />
          </div>
          <Skeleton className="h-6 w-3/4 mb-2" />
          <Skeleton className="h-4 w-full mb-2" />
          <Skeleton className="h-4 w-2/3 mb-4" />
          <div className="flex items-center gap-2 mb-4">
            <Skeleton className="h-4 w-4" />
            <Skeleton className="h-4 w-20" />
          </div>
          <div className="flex gap-2 mb-4">
            <Skeleton className="h-5 w-12" />
            <Skeleton className="h-5 w-16" />
            <Skeleton className="h-5 w-14" />
          </div>
          <Skeleton className="h-10 w-full" />
        </div>
      </CardContent>
    </Card>
  )
}

export function ProjectsGridSkeleton() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
      {Array.from({ length: 6 }).map((_, index) => (
        <ProjectCardSkeleton key={index} />
      ))}
    </div>
  )
}

export function ProjectDetailsSkeleton() {
  return (
    <div className="pt-24 pb-16 px-4">
      <div className="container mx-auto max-w-6xl">
        <div className="mb-8">
          <Skeleton className="h-10 w-40" />
        </div>

        <div className="mb-12">
          <div className="flex flex-col lg:flex-row gap-8">
            <div className="lg:w-2/3">
              <div className="flex items-center gap-4 mb-4">
                <Skeleton className="h-5 w-16" />
                <Skeleton className="h-4 w-12" />
              </div>
              <Skeleton className="h-12 w-3/4 mb-4" />
              <Skeleton className="h-6 w-full mb-2" />
              <Skeleton className="h-6 w-2/3 mb-6" />
              <div className="flex gap-3">
                <Skeleton className="h-10 w-24" />
                <Skeleton className="h-10 w-28" />
              </div>
            </div>
            <div className="lg:w-1/3">
              <Card>
                <CardContent className="p-6">
                  <Skeleton className="h-6 w-32 mb-4" />
                  <div className="space-y-4">
                    {Array.from({ length: 3 }).map((_, index) => (
                      <div key={index} className="flex items-center gap-3">
                        <Skeleton className="w-10 h-10 rounded-full" />
                        <div className="flex-1">
                          <Skeleton className="h-4 w-24 mb-1" />
                          <Skeleton className="h-3 w-32" />
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>

        <div className="mb-12">
          <Skeleton className="aspect-video w-full rounded-lg" />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          <div className="lg:col-span-2 space-y-12">
            <div>
              <Skeleton className="h-8 w-48 mb-6" />
              <div className="space-y-4">
                <Skeleton className="h-4 w-full" />
                <Skeleton className="h-4 w-full" />
                <Skeleton className="h-4 w-3/4" />
              </div>
            </div>
          </div>
          <div className="space-y-8">
            <Card>
              <CardContent className="p-6">
                <Skeleton className="h-6 w-40 mb-4" />
                <div className="flex flex-wrap gap-2">
                  <Skeleton className="h-6 w-16" />
                  <Skeleton className="h-6 w-20" />
                  <Skeleton className="h-6 w-14" />
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  )
}
