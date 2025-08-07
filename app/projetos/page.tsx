import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { ExternalLink, Github, Play } from 'lucide-react'
import Image from "next/image"

export default function ProjetosPage() {
  const projetos = [
    {
      titulo: "Sistema de Gestão Escolar",
      descricao: "Aplicação web completa para gestão de notas, frequência e comunicação entre escola, alunos e pais.",
      tecnologias: ["React", "Node.js", "PostgreSQL", "Express"],
      imagem: "/school-management-system-interface.png",
      alunos: ["João Silva", "Maria Santos", "Pedro Oliveira"],
      ano: "2024",
      categoria: "Web"
    },
    {
      titulo: "App de Delivery Local",
      descricao: "Aplicativo móvel para delivery de restaurantes locais de Amparo com sistema de pagamento integrado.",
      tecnologias: ["React Native", "Firebase", "Stripe API"],
      imagem: "/food-delivery-app.png",
      alunos: ["Ana Costa", "Carlos Lima"],
      ano: "2024",
      categoria: "Mobile"
    },
    {
      titulo: "E-commerce de Artesanato",
      descricao: "Plataforma online para artesãos locais venderem seus produtos com sistema de pagamento e entrega.",
      tecnologias: ["Next.js", "Prisma", "MySQL", "Tailwind CSS"],
      imagem: "/handicraft-ecommerce.png",
      alunos: ["Luiza Ferreira", "Roberto Souza", "Camila Rodrigues"],
      ano: "2023",
      categoria: "Web"
    },
    {
      titulo: "Jogo Educativo de Programação",
      descricao: "Game 2D para ensinar conceitos básicos de programação para crianças do ensino fundamental.",
      tecnologias: ["Unity", "C#", "SQLite"],
      imagem: "/educational-programming-game.png",
      alunos: ["Gabriel Alves", "Isabela Martins"],
      ano: "2023",
      categoria: "Game"
    },
    {
      titulo: "Sistema de Controle de Estoque",
      descricao: "Aplicação desktop para pequenas empresas controlarem estoque, vendas e relatórios financeiros.",
      tecnologias: ["Java", "JavaFX", "MySQL"],
      imagem: "/inventory-management-app.png",
      alunos: ["Fernando Castro", "Juliana Pereira", "Marcos Vieira"],
      ano: "2023",
      categoria: "Desktop"
    },
    {
      titulo: "App de Transporte Escolar",
      descricao: "Aplicativo para monitoramento de transporte escolar com GPS e notificações para pais.",
      tecnologias: ["Flutter", "Firebase", "Google Maps API"],
      imagem: "/school-transport-tracking-app.png",
      alunos: ["Beatriz Gomes", "Diego Santos"],
      ano: "2024",
      categoria: "Mobile"
    }
  ]

  const categorias = ["Todos", "Web", "Mobile", "Desktop", "Game"]

  return (
    <div className="min-h-screen py-8">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
            Projetos dos Alunos
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Conheça os projetos desenvolvidos pelos nossos estudantes durante o curso
          </p>
        </div>

        {/* Filtros */}
        <div className="flex flex-wrap justify-center gap-2 mb-8">
          {categorias.map((categoria) => (
            <Button
              key={categoria}
              variant={categoria === "Todos" ? "default" : "outline"}
              className="mb-2"
            >
              {categoria}
            </Button>
          ))}
        </div>

        {/* Grid de Projetos */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projetos.map((projeto, index) => (
            <Card key={index} className="overflow-hidden hover:shadow-lg transition-shadow">
              <div className="relative">
                <Image
                  src={projeto.imagem || "/placeholder.svg"}
                  alt={projeto.titulo}
                  width={400}
                  height={300}
                  className="w-full h-48 object-cover"
                />
                <div className="absolute top-4 right-4">
                  <Badge className="bg-blue-600">{projeto.categoria}</Badge>
                </div>
              </div>
              
              <CardHeader>
                <div className="flex items-center justify-between">
                  <CardTitle className="text-lg">{projeto.titulo}</CardTitle>
                  <Badge variant="outline">{projeto.ano}</Badge>
                </div>
                <CardDescription className="text-sm">
                  {projeto.descricao}
                </CardDescription>
              </CardHeader>
              
              <CardContent>
                <div className="space-y-4">
                  {/* Tecnologias */}
                  <div>
                    <h4 className="font-medium text-sm mb-2">Tecnologias:</h4>
                    <div className="flex flex-wrap gap-1">
                      {projeto.tecnologias.map((tech, techIndex) => (
                        <Badge key={techIndex} variant="secondary" className="text-xs">
                          {tech}
                        </Badge>
                      ))}
                    </div>
                  </div>
                  
                  {/* Alunos */}
                  <div>
                    <h4 className="font-medium text-sm mb-2">Desenvolvido por:</h4>
                    <p className="text-sm text-gray-600">
                      {projeto.alunos.join(", ")}
                    </p>
                  </div>
                  
                  {/* Botões */}
                  <div className="flex gap-2 pt-2">
                    <Button size="sm" variant="outline" className="flex-1">
                      <Play className="w-4 h-4 mr-1" />
                      Demo
                    </Button>
                    <Button size="sm" variant="outline" className="flex-1">
                      <Github className="w-4 h-4 mr-1" />
                      Código
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Seção de Destaque */}
        <section className="mt-16 bg-gradient-to-r from-blue-600 to-blue-800 text-white rounded-lg p-8">
          <div className="text-center">
            <h2 className="text-3xl font-bold mb-4">Seu Projeto Pode Estar Aqui!</h2>
            <p className="text-xl text-blue-100 mb-6 max-w-2xl mx-auto">
              Durante o curso, você desenvolverá projetos reais que poderão ser apresentados 
              em feiras de ciências, concursos e até mesmo implementados por empresas parceiras.
            </p>
            <Button size="lg" className="bg-orange-500 hover:bg-orange-600">
              Inscreva-se no Curso
            </Button>
          </div>
        </section>

        {/* Estatísticas */}
        <section className="mt-16">
          <div className="grid md:grid-cols-4 gap-6 text-center">
            <div className="bg-gray-50 p-6 rounded-lg">
              <div className="text-3xl font-bold text-blue-600 mb-2">50+</div>
              <div className="text-gray-600">Projetos Desenvolvidos</div>
            </div>
            <div className="bg-gray-50 p-6 rounded-lg">
              <div className="text-3xl font-bold text-blue-600 mb-2">15</div>
              <div className="text-gray-600">Tecnologias Utilizadas</div>
            </div>
            <div className="bg-gray-50 p-6 rounded-lg">
              <div className="text-3xl font-bold text-blue-600 mb-2">8</div>
              <div className="text-gray-600">Projetos Implementados</div>
            </div>
            <div className="bg-gray-50 p-6 rounded-lg">
              <div className="text-3xl font-bold text-blue-600 mb-2">100%</div>
              <div className="text-gray-600">Alunos com Portfólio</div>
            </div>
          </div>
        </section>
      </div>
    </div>
  )
}
