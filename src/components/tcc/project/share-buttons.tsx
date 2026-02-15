"use client"

import { useState } from "react"
import { Button } from "@/src/components/ui/button"
import { Copy, Check, Share2, MessageCircle, Mail, Phone } from "lucide-react"

interface ShareButtonsProps {
  projectTitle: string
  projectDescription: string
}

export function ShareButtons({ projectTitle, projectDescription }: ShareButtonsProps) {
  const [linkCopied, setLinkCopied] = useState(false)
  const [showShareOptions, setShowShareOptions] = useState(false)

  const currentUrl = typeof window !== 'undefined' ? window.location.href : ''

  const copyLink = async () => {
    try {
      await navigator.clipboard.writeText(currentUrl)
      setLinkCopied(true)
      setTimeout(() => setLinkCopied(false), 2000)
    } catch (err) {
      console.error('Erro ao copiar link:', err)
    }
  }

  const shareToWhatsApp = () => {
    const message = `Confira este projeto incrível: ${projectTitle}\n\n${projectDescription}\n\n${currentUrl}`
    const whatsappUrl = `https://wa.me/?text=${encodeURIComponent(message)}`
    window.open(whatsappUrl, '_blank')
  }

  const shareToEmail = () => {
    const subject = `Projeto ${projectTitle} - Hub de TCCs`
    const body = `Olá!\n\nConfira este projeto incrível:\n\n${projectTitle}\n\n${projectDescription}\n\nLink: ${currentUrl}`
    const mailtoUrl = `mailto:?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`
    window.open(mailtoUrl)
  }

  const shareToSMS = () => {
    const message = `Confira este projeto: ${projectTitle} - ${currentUrl}`
    const smsUrl = `sms:?body=${encodeURIComponent(message)}`
    window.open(smsUrl)
  }

  return (
    <div className="space-y-3">
      {/* Botão Copiar Link */}
      <Button 
        size="sm" 
        variant="outline" 
        className="w-full"
        onClick={copyLink}
      >
        {linkCopied ? (
          <>
            <Check className="mr-2 h-4 w-4 text-green-500" />
            Link Copiado!
          </>
        ) : (
          <>
            <Copy className="mr-2 h-4 w-4" />
            Copiar Link
          </>
        )}
      </Button>

      {/* Botão Compartilhar */}
      <Button 
        size="sm" 
        variant="outline" 
        className="w-full"
        onClick={() => setShowShareOptions(!showShareOptions)}
      >
        <Share2 className="mr-2 h-4 w-4" />
        Compartilhar
      </Button>

      {/* Opções de Compartilhamento */}
      {showShareOptions && (
        <div className="space-y-2 pt-2 border-t">
          <Button 
            size="sm" 
            variant="ghost" 
            className="w-full justify-start"
            onClick={shareToWhatsApp}
          >
            <MessageCircle className="mr-2 h-4 w-4 text-green-500" />
            WhatsApp
          </Button>
          <Button 
            size="sm" 
            variant="ghost" 
            className="w-full justify-start"
            onClick={shareToEmail}
          >
            <Mail className="mr-2 h-4 w-4 text-blue-500" />
            Email
          </Button>
          <Button 
            size="sm" 
            variant="ghost" 
            className="w-full justify-start"
            onClick={shareToSMS}
          >
            <Phone className="mr-2 h-4 w-4 text-gray-500" />
            SMS
          </Button>
        </div>
      )}
    </div>
  )
}
