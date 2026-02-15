"use client"

interface VideoPlayerProps {
  videoUrl: string
  title: string
}

export function VideoPlayer({ videoUrl, title }: VideoPlayerProps) {
  // Extrair o ID do vídeo do YouTube de diferentes formatos de URL
  const getYouTubeId = (url: string): string | null => {
    const patterns = [
      /(?:https?:\/\/)?(?:www\.)?youtube\.com\/watch\?v=([^&]+)/,
      /(?:https?:\/\/)?(?:www\.)?youtu\.be\/([^?]+)/,
      /(?:https?:\/\/)?(?:www\.)?youtube\.com\/embed\/([^?]+)/,
    ]

    for (const pattern of patterns) {
      const match = url.match(pattern)
      if (match && match[1]) {
        return match[1]
      }
    }

    return null
  }

  const videoId = getYouTubeId(videoUrl)

  if (!videoId) {
    return (
      <div className="aspect-video bg-muted rounded-lg flex items-center justify-center">
        <p className="text-muted-foreground">URL de vídeo inválida</p>
      </div>
    )
  }

  return (
    <div className="aspect-video rounded-lg overflow-hidden bg-black">
      <iframe
        width="100%"
        height="100%"
        src={`https://www.youtube.com/embed/${videoId}`}
        title={title}
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        allowFullScreen
        className="w-full h-full"
      />
    </div>
  )
}
