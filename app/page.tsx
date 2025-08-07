import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Calendar, Code, Users, Award, ExternalLink, Instagram } from 'lucide-react'
import Image from "next/image"
import Link from "next/link"

export default function HomePage() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-blue-900 via-blue-800 to-blue-700 text-white">
        <div className="absolute inset-0 bg-black/20" />
        <div className="relative container mx-auto px-4 py-20 lg:py-32">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <Badge className="bg-blue-600 hover:bg-blue-700 text-white">
                Curso Técnico Integrado ao Ensino Médio
              </Badge>
              <h1 className="text-4xl lg:text-6xl font-bold leading-tight">
                Desenvolvimento de Sistemas
              </h1>
              <p className="text-xl text-blue-100 leading-relaxed">
                Forme-se como técnico em desenvolvimento de sistemas na Etec João Belarmino de Amparo. 
                Uma formação completa que integra ensino médio e capacitação profissional.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button size="lg" className="bg-orange-500 hover:bg-orange-600 text-white">
                  Inscreva-se no Vestibulinho
                </Button>
                <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-blue-900">
                  Conheça o Curso
                </Button>
              </div>
            </div>
            <div className="relative">
              <Image
                src="/students-coding.png"
                alt="Alunos programando no laboratório"
                width={600}
                height={500}
                className="rounded-lg shadow-2xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Sobre o Curso */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              Sobre o Curso
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              O curso técnico em Desenvolvimento de Sistemas capacita você a analisar, projetar, 
              documentar, testar e manter sistemas computacionais de informação.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <Card className="text-center">
              <CardHeader>
                <Code className="w-12 h-12 text-blue-600 mx-auto mb-4" />
                <CardTitle>Programação</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  Aprenda linguagens modernas como Python, JavaScript, Java e C#
                </p>
              </CardContent>
            </Card>
            
            <Card className="text-center">
              <CardHeader>
                <Users className="w-12 h-12 text-blue-600 mx-auto mb-4" />
                <CardTitle>Projetos em Equipe</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  Desenvolva projetos reais em equipe, simulando o ambiente profissional
                </p>
              </CardContent>
            </Card>
            
            <Card className="text-center">
              <CardHeader>
                <Award className="w-12 h-12 text-blue-600 mx-auto mb-4" />
                <CardTitle>Certificação</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  Diploma técnico reconhecido pelo MEC e pelo mercado de trabalho
                </p>
              </CardContent>
            </Card>
            
            <Card className="text-center">
              <CardHeader>
                <Calendar className="w-12 h-12 text-blue-600 mx-auto mb-4" />
                <CardTitle>3 Anos</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  Formação integrada ao ensino médio em período integral
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Diferenciais */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              Nossos Diferenciais
            </h2>
          </div>
          
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <div className="flex items-start space-x-4">
                <div className="w-8 h-8 bg-blue-600 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                  <span className="text-white font-bold">1</span>
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">Laboratórios Modernos</h3>
                  <p className="text-gray-600">
                    Equipamentos atualizados e ambiente profissional para o aprendizado prático
                  </p>
                </div>
              </div>
              
              <div className="flex items-start space-x-4">
                <div className="w-8 h-8 bg-blue-600 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                  <span className="text-white font-bold">2</span>
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">Professores Especialistas</h3>
                  <p className="text-gray-600">
                    Corpo docente qualificado com experiência no mercado de trabalho
                  </p>
                </div>
              </div>
              
              <div className="flex items-start space-x-4">
                <div className="w-8 h-8 bg-blue-600 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                  <span className="text-white font-bold">3</span>
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">Parcerias com Empresas</h3>
                  <p className="text-gray-600">
                    Oportunidades de estágio e emprego através de parcerias locais
                  </p>
                </div>
              </div>
              
              <div className="flex items-start space-x-4">
                <div className="w-8 h-8 bg-blue-600 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                  <span className="text-white font-bold">4</span>
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">Formação Completa</h3>
                  <p className="text-gray-600">
                    Ensino médio + formação técnica em um só curso
                  </p>
                </div>
              </div>
            </div>
            
            <div>
              <Image
                src="/modern-computer-lab.png"
                alt="Laboratório de informática moderno"
                width={500}
                height={400}
                className="rounded-lg shadow-lg"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Projetos em Destaque */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              Projetos dos Alunos
            </h2>
            <p className="text-xl text-gray-600">
              Conheça alguns dos projetos desenvolvidos pelos nossos estudantes
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            <Card className="overflow-hidden">
              <Image
                src="/mobile-app-interface.png"
                alt="Aplicativo móvel"
                width={400}
                height={200}
                className="w-full h-48 object-cover"
              />
              <CardHeader>
                <CardTitle>App de Gestão Escolar</CardTitle>
                <CardDescription>
                  Aplicativo desenvolvido em React Native para gestão de notas e frequência
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex items-center justify-between">
                  <Badge variant="secondary">React Native</Badge>
                  <Button variant="ghost" size="sm">
                    <ExternalLink className="w-4 h-4" />
                  </Button>
                </div>
              </CardContent>
            </Card>
            
            <Card className="overflow-hidden">
              <Image
                src="/modern-ecommerce-website.png"
                alt="Site de e-commerce"
                width={400}
                height={200}
                className="w-full h-48 object-cover"
              />
              <CardHeader>
                <CardTitle>E-commerce Local</CardTitle>
                <CardDescription>
                  Plataforma web para pequenos comerciantes da região de Amparo
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex items-center justify-between">
                  <Badge variant="secondary">Next.js</Badge>
                  <Button variant="ghost" size="sm">
                    <ExternalLink className="w-4 h-4" />
                  </Button>
                </div>
              </CardContent>
            </Card>
            
            <Card className="overflow-hidden">
              <Image
                src="/stylized-game-interface.png"
                alt="Jogo educativo"
                width={400}
                height={200}
                className="w-full h-48 object-cover"
              />
              <CardHeader>
                <CardTitle>Jogo Educativo</CardTitle>
                <CardDescription>
                  Game desenvolvido em Unity para ensino de programação
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex items-center justify-between">
                  <Badge variant="secondary">Unity</Badge>
                  <Button variant="ghost" size="sm">
                    <ExternalLink className="w-4 h-4" />
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
          
          <div className="text-center mt-8">
            <Button asChild>
              <Link href="/projetos">Ver Todos os Projetos</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Instagram Feed */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              Siga-nos no Instagram
            </h2>
            <p className="text-xl text-gray-600 mb-6">
              Acompanhe o dia a dia do curso @ds.etec
            </p>
            <Button asChild className="bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600">
              <Link href="https://instagram.com/ds.etec" target="_blank">
                <Instagram className="w-5 h-5 mr-2" />
                Seguir @ds.etec
              </Link>
            </Button>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
            {[1, 2, 3, 4].map((i) => (
              <div key={i} className="aspect-square relative rounded-lg overflow-hidden">
                <Image
                  src={`/instagram-post.png?height=300&width=300&query=instagram post ${i} students coding`}
                  alt={`Post do Instagram ${i}`}
                  width={300}
                  height={300}
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Final */}
      <section className="py-16 bg-blue-900 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl lg:text-4xl font-bold mb-4">
            Pronto para Começar sua Jornada?
          </h2>
          <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
            Inscreva-se no vestibulinho e faça parte da próxima turma de desenvolvedores da Etec João Belarmino
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-orange-500 hover:bg-orange-600">
              Fazer Inscrição
            </Button>
            <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-blue-900">
              Falar com a Coordenação
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}
