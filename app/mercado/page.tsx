import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Building, TrendingUp, Users, Star, Quote } from 'lucide-react'
import Image from "next/image"

export default function MercadoPage() {
  const areas = [
    {
      titulo: "Desenvolvimento Web",
      descricao: "Criação de sites, sistemas web e e-commerce",
      salario: "R$ 2.500 - R$ 8.000",
      demanda: "Alta",
      tecnologias: ["HTML/CSS", "JavaScript", "React", "Node.js"]
    },
    {
      titulo: "Desenvolvimento Mobile",
      descricao: "Apps para Android e iOS",
      salario: "R$ 3.000 - R$ 9.000",
      demanda: "Muito Alta",
      tecnologias: ["React Native", "Flutter", "Java", "Swift"]
    },
    {
      titulo: "Análise de Sistemas",
      descricao: "Análise de requisitos e especificação de sistemas",
      salario: "R$ 3.500 - R$ 10.000",
      demanda: "Alta",
      tecnologias: ["UML", "SQL", "Metodologias Ágeis"]
    },
    {
      titulo: "Banco de Dados",
      descricao: "Administração e desenvolvimento de BD",
      salario: "R$ 4.000 - R$ 12.000",
      demanda: "Alta",
      tecnologias: ["MySQL", "PostgreSQL", "MongoDB", "Oracle"]
    },
    {
      titulo: "DevOps",
      descricao: "Automação e infraestrutura",
      salario: "R$ 5.000 - R$ 15.000",
      demanda: "Muito Alta",
      tecnologias: ["Docker", "AWS", "Jenkins", "Kubernetes"]
    },
    {
      titulo: "Suporte Técnico",
      descricao: "Manutenção e suporte de sistemas",
      salario: "R$ 2.000 - R$ 5.000",
      demanda: "Média",
      tecnologias: ["Windows", "Linux", "Redes", "Hardware"]
    }
  ]

  const empresas = [
    { nome: "TechSolutions Amparo", tipo: "Software House", vagas: "5-10 vagas/ano" },
    { nome: "Indústrias Reunidas", tipo: "Indústria", vagas: "2-5 vagas/ano" },
    { nome: "Prefeitura de Amparo", tipo: "Setor Público", vagas: "1-3 vagas/ano" },
    { nome: "Banco Regional", tipo: "Financeiro", vagas: "3-8 vagas/ano" },
    { nome: "Hospital São Luiz", tipo: "Saúde", vagas: "2-4 vagas/ano" },
    { nome: "Cooperativa Agrícola", tipo: "Agronegócio", vagas: "1-2 vagas/ano" }
  ]

  const depoimentos = [
    {
      nome: "João Silva",
      cargo: "Desenvolvedor Full Stack",
      empresa: "TechSolutions",
      ano: "Formado em 2022",
      depoimento: "O curso me deu uma base sólida para ingressar no mercado. Hoje trabalho com as tecnologias que aprendi na Etec e já fui promovido duas vezes.",
      foto: "/placeholder.svg?height=80&width=80"
    },
    {
      nome: "Maria Santos",
      cargo: "Analista de Sistemas",
      empresa: "Banco Regional",
      ano: "Formada em 2021",
      depoimento: "A formação integrada foi fundamental. Consegui meu primeiro emprego ainda durante o curso e hoje sou responsável por projetos importantes no banco.",
      foto: "/placeholder.svg?height=80&width=80"
    },
    {
      nome: "Pedro Oliveira",
      cargo: "Desenvolvedor Mobile",
      empresa: "Startup Local",
      ano: "Formado em 2023",
      depoimento: "Os projetos práticos do curso me prepararam para o mercado real. Hoje desenvolvo apps que são usados por milhares de pessoas.",
      foto: "/placeholder.svg?height=80&width=80"
    }
  ]

  return (
    <div className="min-h-screen py-8">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
            Mercado de Trabalho
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Conheça as oportunidades de carreira para técnicos em Desenvolvimento de Sistemas
          </p>
        </div>

        {/* Estatísticas */}
        <section className="mb-16">
          <div className="grid md:grid-cols-4 gap-6">
            <Card className="text-center">
              <CardHeader>
                <TrendingUp className="w-12 h-12 text-green-600 mx-auto mb-2" />
                <CardTitle>95%</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">Taxa de Empregabilidade</p>
              </CardContent>
            </Card>
            
            <Card className="text-center">
              <CardHeader>
                <Building className="w-12 h-12 text-blue-600 mx-auto mb-2" />
                <CardTitle>50+</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">Empresas Parceiras</p>
              </CardContent>
            </Card>
            
            <Card className="text-center">
              <CardHeader>
                <Users className="w-12 h-12 text-purple-600 mx-auto mb-2" />
                <CardTitle>6 meses</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">Tempo Médio para 1º Emprego</p>
              </CardContent>
            </Card>
            
            <Card className="text-center">
              <CardHeader>
                <Star className="w-12 h-12 text-orange-600 mx-auto mb-2" />
                <CardTitle>R$ 3.200</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">Salário Médio Inicial</p>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Áreas de Atuação */}
        <section className="mb-16">
          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Áreas de Atuação</h2>
            <p className="text-gray-600">Principais campos de trabalho para técnicos em Desenvolvimento de Sistemas</p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {areas.map((area, index) => (
              <Card key={index} className="h-full">
                <CardHeader>
                  <div className="flex items-center justify-between">
                    <CardTitle className="text-lg">{area.titulo}</CardTitle>
                    <Badge variant={area.demanda === 'Muito Alta' ? 'default' : area.demanda === 'Alta' ? 'secondary' : 'outline'}>
                      {area.demanda}
                    </Badge>
                  </div>
                  <CardDescription>{area.descricao}</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div>
                      <p className="font-medium text-green-600 text-lg">{area.salario}</p>
                      <p className="text-sm text-gray-500">Faixa salarial mensal</p>
                    </div>
                    
                    <div>
                      <p className="font-medium mb-2">Principais tecnologias:</p>
                      <div className="flex flex-wrap gap-1">
                        {area.tecnologias.map((tech, techIndex) => (
                          <Badge key={techIndex} variant="outline" className="text-xs">
                            {tech}
                          </Badge>
                        ))}
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* Empresas Parceiras */}
        <section className="mb-16">
          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Empresas Parceiras</h2>
            <p className="text-gray-600">Organizações que oferecem oportunidades de estágio e emprego</p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {empresas.map((empresa, index) => (
              <Card key={index}>
                <CardHeader>
                  <CardTitle className="text-lg">{empresa.nome}</CardTitle>
                  <CardDescription>{empresa.tipo}</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-gray-600">{empresa.vagas}</span>
                    <Badge variant="secondary">Parceira</Badge>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* Depoimentos */}
        <section className="mb-16">
          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Histórias de Sucesso</h2>
            <p className="text-gray-600">Depoimentos de ex-alunos que se destacaram no mercado</p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {depoimentos.map((depoimento, index) => (
              <Card key={index} className="h-full">
                <CardHeader>
                  <div className="flex items-center space-x-4">
                    <Image
                      src={depoimento.foto || "/placeholder.svg"}
                      alt={depoimento.nome}
                      width={60}
                      height={60}
                      className="rounded-full"
                    />
                    <div>
                      <CardTitle className="text-lg">{depoimento.nome}</CardTitle>
                      <CardDescription>
                        {depoimento.cargo} - {depoimento.empresa}
                      </CardDescription>
                      <Badge variant="outline" className="mt-1">
                        {depoimento.ano}
                      </Badge>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="flex items-start space-x-2">
                    <Quote className="w-5 h-5 text-blue-600 flex-shrink-0 mt-1" />
                    <p className="text-gray-700 text-sm italic">
                      {depoimento.depoimento}
                    </p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* Dicas de Carreira */}
        <section className="mb-16 bg-blue-50 rounded-lg p-8">
          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Dicas para o Sucesso</h2>
            <p className="text-gray-600">Como se destacar no mercado de tecnologia</p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8">
            <div className="space-y-4">
              <h3 className="text-xl font-semibold text-gray-900">Durante o Curso</h3>
              <ul className="space-y-2">
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-blue-600 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                  <span className="text-gray-700">Participe ativamente dos projetos práticos</span>
                </li>
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-blue-600 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                  <span className="text-gray-700">Crie um portfólio online com seus trabalhos</span>
                </li>
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-blue-600 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                  <span className="text-gray-700">Busque estágios desde o segundo ano</span>
                </li>
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-blue-600 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                  <span className="text-gray-700">Mantenha-se atualizado com novas tecnologias</span>
                </li>
              </ul>
            </div>
            
            <div className="space-y-4">
              <h3 className="text-xl font-semibold text-gray-900">Após a Formação</h3>
              <ul className="space-y-2">
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-blue-600 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                  <span className="text-gray-700">Continue estudando e se especializando</span>
                </li>
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-blue-600 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                  <span className="text-gray-700">Participe de comunidades de desenvolvedores</span>
                </li>
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-blue-600 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                  <span className="text-gray-700">Considere fazer um curso superior na área</span>
                </li>
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-blue-600 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                  <span className="text-gray-700">Desenvolva habilidades de comunicação</span>
                </li>
              </ul>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="bg-gradient-to-r from-blue-600 to-blue-800 text-white rounded-lg p-8 text-center">
          <h2 className="text-3xl font-bold mb-4">Pronto para Começar sua Carreira?</h2>
          <p className="text-xl text-blue-100 mb-6 max-w-2xl mx-auto">
            O mercado de tecnologia está esperando por você. Faça parte da próxima turma e construa um futuro promissor.
          </p>
          <Button size="lg" className="bg-orange-500 hover:bg-orange-600">
            Inscreva-se no Vestibulinho
          </Button>
        </section>
      </div>
    </div>
  )
}
