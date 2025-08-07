import Link from 'next/link'
import Image from 'next/image'
import { Instagram, Mail, Phone, MapPin } from 'lucide-react'

export function Footer() {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="container mx-auto px-4 py-12">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Logo e Descrição */}
          <div className="space-y-4">
            <div className="flex items-center space-x-3">
              <Image
                src="/etec-logo-white.png"
                alt="Etec João Belarmino"
                width={40}
                height={40}
                className="rounded"
              />
              <div>
                <div className="font-bold">Desenvolvimento de Sistemas</div>
                <div className="text-sm text-gray-400">Etec João Belarmino</div>
              </div>
            </div>
            <p className="text-gray-400 text-sm">
              Formando os profissionais de tecnologia do futuro com ensino de qualidade e infraestrutura moderna.
            </p>
          </div>

          {/* Links Rápidos */}
          <div>
            <h3 className="font-semibold mb-4">Links Rápidos</h3>
            <ul className="space-y-2 text-sm">
              <li><Link href="/sobre" className="text-gray-400 hover:text-white transition-colors">Sobre o Curso</Link></li>
              <li><Link href="/projetos" className="text-gray-400 hover:text-white transition-colors">Projetos</Link></li>
              <li><Link href="/vestibulinho" className="text-gray-400 hover:text-white transition-colors">Vestibulinho</Link></li>
              <li><Link href="/mercado" className="text-gray-400 hover:text-white transition-colors">Mercado de Trabalho</Link></li>
            </ul>
          </div>

          {/* Contato */}
          <div>
            <h3 className="font-semibold mb-4">Contato</h3>
            <ul className="space-y-2 text-sm">
              <li className="flex items-center space-x-2">
                <Phone className="w-4 h-4" />
                <span className="text-gray-400">(19) 3807-9600</span>
              </li>
              <li className="flex items-center space-x-2">
                <Mail className="w-4 h-4" />
                <span className="text-gray-400">secretaria@etecjoaobelarmino.com.br</span>
              </li>
              <li className="flex items-start space-x-2">
                <MapPin className="w-4 h-4 mt-0.5" />
                <span className="text-gray-400">
                  Rua Luiz Gonzaga Travassos, 1-59<br />
                  Amparo - SP, 13900-000
                </span>
              </li>
            </ul>
          </div>

          {/* Redes Sociais */}
          <div>
            <h3 className="font-semibold mb-4">Redes Sociais</h3>
            <div className="flex space-x-4">
              <Link 
                href="https://instagram.com/ds.etec" 
                target="_blank"
                className="bg-gradient-to-r from-purple-500 to-pink-500 p-2 rounded-lg hover:from-purple-600 hover:to-pink-600 transition-colors"
              >
                <Instagram className="w-5 h-5" />
              </Link>
            </div>
            <p className="text-gray-400 text-sm mt-4">
              Siga @ds.etec no Instagram para acompanhar o dia a dia do curso
            </p>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8 text-center text-sm text-gray-400">
          <p>&copy; 2024 Etec João Belarmino de Amparo - Centro Paula Souza. Todos os direitos reservados.</p>
        </div>
      </div>
    </footer>
  )
}
