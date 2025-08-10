import { Skeleton } from "@/components/ui/skeleton"

export default function NewsLoading() {
  return (
    <div className="min-h-screen bg-background">
      {/* Navigation Skeleton */}
      <div className="h-20 bg-background border-b border-border">
        <div className="container mx-auto px-4 sm:px-6 h-full flex items-center justify-between">
          <Skeleton className="h-8 w-32" />
          <div className="hidden md:flex space-x-8">
            {Array.from({ length: 5 }).map((_, i) => (
              <Skeleton key={i} className="h-6 w-20" />
            ))}
          </div>
          <Skeleton className="h-10 w-24" />
        </div>
      </div>

      {/* Hero Section Skeleton */}
      <div className="pt-32 pb-20 bg-gradient-to-br from-gray-900 via-black to-gray-800">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="text-center max-w-4xl mx-auto">
            <Skeleton className="h-16 w-96 mx-auto mb-6 bg-gray-700" />
            <Skeleton className="h-6 w-full max-w-2xl mx-auto mb-4 bg-gray-700" />
            <Skeleton className="h-6 w-3/4 mx-auto bg-gray-700" />
          </div>
        </div>
      </div>

      {/* Search and Filter Skeleton */}
      <div className="py-8 bg-muted/50">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="flex flex-col lg:flex-row gap-4 items-center justify-between">
            <div className="flex flex-col sm:flex-row gap-4 flex-1 w-full">
              <Skeleton className="h-10 flex-1 max-w-md" />
              <Skeleton className="h-10 w-48" />
            </div>
            <Skeleton className="h-4 w-32" />
          </div>
        </div>
      </div>

      {/* Featured Article Skeleton */}
      <div className="py-12">
        <div className="container mx-auto px-4 sm:px-6">
          <Skeleton className="h-6 w-32 mb-4" />
          <div className="bg-card border border-border rounded-lg overflow-hidden">
            <div className="flex flex-col lg:flex-row">
              <Skeleton className="lg:w-1/2 h-64 lg:h-80" />
              <div className="lg:w-1/2 p-8">
                <div className="flex gap-2 mb-4">
                  <Skeleton className="h-5 w-16" />
                  <Skeleton className="h-5 w-20" />
                </div>
                <Skeleton className="h-8 w-full mb-4" />
                <Skeleton className="h-6 w-full mb-2" />
                <Skeleton className="h-6 w-3/4 mb-6" />
                <div className="flex gap-6 mb-6">
                  <Skeleton className="h-4 w-24" />
                  <Skeleton className="h-4 w-20" />
                  <Skeleton className="h-4 w-16" />
                </div>
                <Skeleton className="h-10 w-32" />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Regular Articles Skeleton */}
      <div className="py-12">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {Array.from({ length: 6 }).map((_, i) => (
              <div key={i} className="bg-card border border-border rounded-lg overflow-hidden">
                <Skeleton className="w-full h-48" />
                <div className="p-6">
                  <div className="flex gap-1 mb-3">
                    <Skeleton className="h-4 w-16" />
                    <Skeleton className="h-4 w-20" />
                  </div>
                  <Skeleton className="h-6 w-full mb-2" />
                  <Skeleton className="h-6 w-3/4 mb-3" />
                  <Skeleton className="h-4 w-full mb-2" />
                  <Skeleton className="h-4 w-2/3 mb-4" />
                  <div className="flex justify-between items-center mb-4">
                    <Skeleton className="h-4 w-24" />
                    <Skeleton className="h-4 w-16" />
                  </div>
                  <div className="flex justify-between items-center">
                    <Skeleton className="h-4 w-20" />
                    <Skeleton className="h-8 w-16" />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
