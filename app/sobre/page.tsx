import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { BookOpen, Users, Award, Building } from 'lucide-react'
import Image from "next/image"

export default function SobrePage() {
  const materias = [
    { nome: "Lógica de Programação", semestre: "1º Semestre", descricao: "Fundamentos da programação e algoritmos" },
    { nome: "Desenvolvimento Web I", semestre: "2º Semestre", descricao: "HTML, CSS e JavaScript básico" },
    { nome: "Banco de Dados I", semestre: "2º Semestre", descricao: "Modelagem e SQL básico" },
    { nome: "Programação Orientada a Objetos", semestre: "3º Semestre", descricao: "Java e conceitos de POO" },
    { nome: "Desenvolvimento Web II", semestre: "4º Semestre", descricao: "Frameworks e desenvolvimento avançado" },
    { nome: "Banco de Dados II", semestre: "4º Semestre", descricao: "Administração e otimização" },
    { nome: "Desenvolvimento Mobile", semestre: "5º Semestre", descricao: "Apps para Android e iOS" },
    { nome: "Engenharia de Software", semestre: "5º Semestre", descricao: "Metodologias e gestão de projetos" },
    { nome: "Projeto Integrador", semestre: "6º Semestre", descricao: "Desenvolvimento de projeto final" },
  ]

  const professores = [
    { nome: "Prof. Carlos Silva", especialidade: "Desenvolvimento Web e Mobile", experiencia: "15 anos" },
    { nome: "Profa. Ana Santos", especialidade: "Banco de Dados e Sistemas", experiencia: "12 anos" },
    { nome: "Prof. Roberto Lima", especialidade: "Programação e Algoritmos", experiencia: "18 anos" },
    { nome: "Profa. Maria Oliveira", especialidade: "Engenharia de Software", experiencia: "10 anos" },
  ]

  return (
    <div className="min-h-screen py-8">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
            Sobre o Curso
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Conheça em detalhes o curso Técnico em Desenvolvimento de Sistemas da Etec João Belarmino
          </p>
        </div>

        {/* Apresentação */}
        <section className="mb-16">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Nossa Missão</h2>
              <div className="space-y-4 text-gray-700">
                <p>
                  O curso Técnico em Desenvolvimento de Sistemas da Etec João Belarmino tem como missão 
                  formar profissionais capacitados para atuar no mercado de tecnologia da informação, 
                  desenvolvendo competências técnicas e comportamentais necessárias para o sucesso profissional.
                </p>
                <p>
                  Nossa formação integrada ao Ensino Médio proporciona uma base sólida tanto nos conhecimentos 
                  propedêuticos quanto nas competências técnicas específicas, preparando o aluno para os 
                  desafios do mercado de trabalho ou para a continuidade dos estudos em nível superior.
                </p>
              </div>
              
              <div className="grid grid-cols-2 gap-4 mt-8">
                <div className="text-center p-4 bg-blue-50 rounded-lg">
                  <div className="text-2xl font-bold text-blue-600">3</div>
                  <div className="text-sm text-gray-600">Anos de Curso</div>
                </div>
                <div className="text-center p-4 bg-blue-50 rounded-lg">
                  <div className="text-2xl font-bold text-blue-600">40</div>
                  <div className="text-sm text-gray-600">Vagas por Turma</div>
                </div>
              </div>
            </div>
            
            <div>
              <Image
                src="/computer-classroom-students.png"
                alt="Sala de aula de informática"
                width={500}
                height={400}
                className="rounded-lg shadow-lg"
              />
            </div>
          </div>
        </section>

        {/* Matriz Curricular */}
        <section className="mb-16">
          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Matriz Curricular</h2>
            <p className="text-gray-600">Disciplinas técnicas distribuídas ao longo dos 3 anos</p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
            {materias.map((materia, index) => (
              <Card key={index}>
                <CardHeader>
                  <div className="flex items-center justify-between">
                    <Badge variant="outline">{materia.semestre}</Badge>
                    <BookOpen className="w-5 h-5 text-blue-600" />
                  </div>
                  <CardTitle className="text-lg">{materia.nome}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription>{materia.descricao}</CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* Corpo Docente */}
        <section className="mb-16">
          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Corpo Docente</h2>
            <p className="text-gray-600">Professores especialistas com experiência no mercado</p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {professores.map((professor, index) => (
              <Card key={index} className="text-center">
                <CardHeader>
                  <div className="w-20 h-20 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Users className="w-10 h-10 text-blue-600" />
                  </div>
                  <CardTitle className="text-lg">{professor.nome}</CardTitle>
                  <CardDescription>{professor.especialidade}</CardDescription>
                </CardHeader>
                <CardContent>
                  <Badge variant="secondary">{professor.experiencia} de experiência</Badge>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* Infraestrutura */}
        <section className="mb-16">
          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Infraestrutura</h2>
            <p className="text-gray-600">Laboratórios modernos e equipamentos atualizados</p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8">
            <Card>
              <CardHeader>
                <Building className="w-8 h-8 text-blue-600 mb-2" />
                <CardTitle>Laboratório de Programação</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-gray-600">
                  <li>• 40 computadores com configuração atualizada</li>
                  <li>• Software de desenvolvimento instalado</li>
                  <li>• Conexão de internet de alta velocidade</li>
                  <li>• Projetor e sistema de som</li>
                </ul>
              </CardContent>
            </Card>
            
            <Card>
              <CardHeader>
                <Award className="w-8 h-8 text-blue-600 mb-2" />
                <CardTitle>Laboratório de Redes</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-gray-600">
                  <li>• Equipamentos Cisco para prática</li>
                  <li>• Simuladores de rede</li>
                  <li>• Bancadas para montagem</li>
                  <li>• Ferramentas de diagnóstico</li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Perfil do Egresso */}
        <section className="bg-blue-50 rounded-lg p-8">
          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Perfil do Egresso</h2>
            <p className="text-gray-600">O que você será capaz de fazer após a conclusão do curso</p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="bg-white p-6 rounded-lg">
              <h3 className="font-semibold text-lg mb-3">Desenvolvimento de Software</h3>
              <p className="text-gray-600 text-sm">
                Criar aplicações desktop, web e mobile utilizando diferentes linguagens e frameworks
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-lg">
              <h3 className="font-semibold text-lg mb-3">Banco de Dados</h3>
              <p className="text-gray-600 text-sm">
                Projetar, implementar e administrar sistemas de banco de dados
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-lg">
              <h3 className="font-semibold text-lg mb-3">Análise de Sistemas</h3>
              <p className="text-gray-600 text-sm">
                Analisar requisitos e especificar soluções tecnológicas
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-lg">
              <h3 className="font-semibold text-lg mb-3">Testes de Software</h3>
              <p className="text-gray-600 text-sm">
                Planejar e executar testes para garantir a qualidade do software
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-lg">
              <h3 className="font-semibold text-lg mb-3">Gestão de Projetos</h3>
              <p className="text-gray-600 text-sm">
                Aplicar metodologias ágeis na gestão de projetos de software
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-lg">
              <h3 className="font-semibold text-lg mb-3">Suporte Técnico</h3>
              <p className="text-gray-600 text-sm">
                Prestar suporte e manutenção em sistemas computacionais
              </p>
            </div>
          </div>
        </section>
      </div>
    </div>
  )
}
