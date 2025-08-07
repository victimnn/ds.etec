import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { Calendar, Clock, Users, FileText, AlertCircle, CheckCircle } from 'lucide-react'

export default function VestibulinhoPage() {
  const cronograma = [
    { evento: "Abertura das Inscrições", data: "15 de Maio", status: "concluido" },
    { evento: "Encerramento das Inscrições", data: "15 de Junho", status: "concluido" },
    { evento: "Divulgação dos Locais de Prova", data: "25 de Junho", status: "concluido" },
    { evento: "Aplicação da Prova", data: "15 de Julho", status: "proximo" },
    { evento: "Divulgação do Gabarito", data: "16 de Julho", status: "pendente" },
    { evento: "Resultado Final", data: "30 de Julho", status: "pendente" },
    { evento: "Matrícula dos Aprovados", data: "5 a 15 de Agosto", status: "pendente" },
  ]

  const faqs = [
    {
      pergunta: "Quais são os pré-requisitos para se inscrever?",
      resposta: "Para se inscrever no curso Técnico em Desenvolvimento de Sistemas integrado ao Ensino Médio, é necessário ter concluído o Ensino Fundamental (9º ano) ou estar cursando o 9º ano em 2024."
    },
    {
      pergunta: "Como é a prova do vestibulinho?",
      resposta: "A prova é composta por 50 questões de múltipla escolha, abrangendo conhecimentos de Língua Portuguesa, Matemática, História, Geografia, Ciências Físicas e Biológicas, com base no currículo do Ensino Fundamental."
    },
    {
      pergunta: "Quantas vagas são oferecidas?",
      resposta: "São oferecidas 40 vagas para o curso Técnico em Desenvolvimento de Sistemas integrado ao Ensino Médio, com início das aulas em fevereiro de 2025."
    },
    {
      pergunta: "O curso é gratuito?",
      resposta: "Sim, o curso é totalmente gratuito. A Etec é uma instituição pública estadual vinculada ao Centro Paula Souza, não cobrando mensalidades ou taxas de matrícula."
    },
    {
      pergunta: "Qual é a duração do curso?",
      resposta: "O curso tem duração de 3 anos, sendo oferecido na modalidade integrada ao Ensino Médio, em período integral (manhã e tarde)."
    },
    {
      pergunta: "Posso fazer o curso trabalhando?",
      resposta: "O curso é oferecido em período integral, das 7h às 17h, o que pode dificultar a conciliação com trabalho. Recomendamos avaliar sua disponibilidade antes da inscrição."
    }
  ]

  return (
    <div className="min-h-screen py-8">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
            Vestibulinho 2024
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Informações sobre o processo seletivo para o curso Técnico em Desenvolvimento de Sistemas
          </p>
        </div>

        {/* Informações Gerais */}
        <section className="mb-12">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <Card className="text-center">
              <CardHeader>
                <Users className="w-12 h-12 text-blue-600 mx-auto mb-2" />
                <CardTitle>40 Vagas</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">Disponíveis para 2025</p>
              </CardContent>
            </Card>
            
            <Card className="text-center">
              <CardHeader>
                <Calendar className="w-12 h-12 text-blue-600 mx-auto mb-2" />
                <CardTitle>3 Anos</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">Duração do curso</p>
              </CardContent>
            </Card>
            
            <Card className="text-center">
              <CardHeader>
                <Clock className="w-12 h-12 text-blue-600 mx-auto mb-2" />
                <CardTitle>Integral</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">7h às 17h</p>
              </CardContent>
            </Card>
            
            <Card className="text-center">
              <CardHeader>
                <FileText className="w-12 h-12 text-blue-600 mx-auto mb-2" />
                <CardTitle>Gratuito</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">Sem mensalidades</p>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Cronograma */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Cronograma</h2>
          <div className="max-w-4xl mx-auto">
            {cronograma.map((item, index) => (
              <div key={index} className="flex items-center mb-6">
                <div className="flex-shrink-0 mr-4">
                  {item.status === 'concluido' ? (
                    <CheckCircle className="w-8 h-8 text-green-500" />
                  ) : item.status === 'proximo' ? (
                    <AlertCircle className="w-8 h-8 text-orange-500" />
                  ) : (
                    <Clock className="w-8 h-8 text-gray-400" />
                  )}
                </div>
                <div className="flex-grow">
                  <div className="flex items-center justify-between">
                    <h3 className="text-lg font-semibold text-gray-900">{item.evento}</h3>
                    <div className="flex items-center space-x-2">
                      <span className="text-gray-600">{item.data}</span>
                      <Badge 
                        variant={
                          item.status === 'concluido' ? 'default' : 
                          item.status === 'proximo' ? 'destructive' : 'secondary'
                        }
                      >
                        {item.status === 'concluido' ? 'Concluído' : 
                         item.status === 'proximo' ? 'Próximo' : 'Pendente'}
                      </Badge>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Como se Inscrever */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Como se Inscrever</h2>
          <div className="max-w-4xl mx-auto">
            <div className="grid md:grid-cols-3 gap-6">
              <Card>
                <CardHeader>
                  <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-blue-600 font-bold text-xl">1</span>
                  </div>
                  <CardTitle className="text-center">Acesse o Site</CardTitle>
                </CardHeader>
                <CardContent className="text-center">
                  <p className="text-gray-600 mb-4">
                    Acesse o site oficial do vestibulinho do Centro Paula Souza
                  </p>
                  <Button className="w-full">
                    Ir para o Site
                  </Button>
                </CardContent>
              </Card>
              
              <Card>
                <CardHeader>
                  <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-blue-600 font-bold text-xl">2</span>
                  </div>
                  <CardTitle className="text-center">Preencha os Dados</CardTitle>
                </CardHeader>
                <CardContent className="text-center">
                  <p className="text-gray-600 mb-4">
                    Complete o formulário com suas informações pessoais e escolha o curso
                  </p>
                  <Badge variant="outline">Documentos Necessários</Badge>
                </CardContent>
              </Card>
              
              <Card>
                <CardHeader>
                  <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-blue-600 font-bold text-xl">3</span>
                  </div>
                  <CardTitle className="text-center">Confirme a Inscrição</CardTitle>
                </CardHeader>
                <CardContent className="text-center">
                  <p className="text-gray-600 mb-4">
                    Imprima o comprovante e aguarde as informações sobre a prova
                  </p>
                  <Badge variant="secondary">Gratuito</Badge>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Documentos Necessários */}
        <section className="mb-12">
          <div className="max-w-4xl mx-auto">
            <Card>
              <CardHeader>
                <CardTitle className="text-center">Documentos Necessários</CardTitle>
                <CardDescription className="text-center">
                  Para efetuar a matrícula após aprovação
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid md:grid-cols-2 gap-4">
                  <ul className="space-y-2">
                    <li className="flex items-center">
                      <CheckCircle className="w-5 h-5 text-green-500 mr-2" />
                      <span>RG (original e cópia)</span>
                    </li>
                    <li className="flex items-center">
                      <CheckCircle className="w-5 h-5 text-green-500 mr-2" />
                      <span>CPF (original e cópia)</span>
                    </li>
                    <li className="flex items-center">
                      <CheckCircle className="w-5 h-5 text-green-500 mr-2" />
                      <span>Certidão de Nascimento (cópia)</span>
                    </li>
                    <li className="flex items-center">
                      <CheckCircle className="w-5 h-5 text-green-500 mr-2" />
                      <span>Histórico Escolar do Ensino Fundamental</span>
                    </li>
                  </ul>
                  <ul className="space-y-2">
                    <li className="flex items-center">
                      <CheckCircle className="w-5 h-5 text-green-500 mr-2" />
                      <span>Comprovante de Residência</span>
                    </li>
                    <li className="flex items-center">
                      <CheckCircle className="w-5 h-5 text-green-500 mr-2" />
                      <span>2 Fotos 3x4 recentes</span>
                    </li>
                    <li className="flex items-center">
                      <CheckCircle className="w-5 h-5 text-green-500 mr-2" />
                      <span>Cartão de Vacinação (cópia)</span>
                    </li>
                    <li className="flex items-center">
                      <CheckCircle className="w-5 h-5 text-green-500 mr-2" />
                      <span>Declaração de Quitação Eleitoral (se maior de 18 anos)</span>
                    </li>
                  </ul>
                </div>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* FAQ */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Perguntas Frequentes</h2>
          <div className="max-w-4xl mx-auto">
            <Accordion type="single" collapsible className="w-full">
              {faqs.map((faq, index) => (
                <AccordionItem key={index} value={`item-${index}`}>
                  <AccordionTrigger className="text-left">
                    {faq.pergunta}
                  </AccordionTrigger>
                  <AccordionContent>
                    {faq.resposta}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </section>

        {/* CTA */}
        <section className="bg-blue-900 text-white rounded-lg p-8 text-center">
          <h2 className="text-3xl font-bold mb-4">Pronto para se Inscrever?</h2>
          <p className="text-xl text-blue-100 mb-6 max-w-2xl mx-auto">
            Não perca a oportunidade de fazer parte da próxima turma de desenvolvedores da Etec João Belarmino
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-orange-500 hover:bg-orange-600">
              Fazer Inscrição
            </Button>
            <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-blue-900">
              Baixar Edital
            </Button>
          </div>
        </section>
      </div>
    </div>
  )
}
